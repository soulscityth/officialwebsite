// Shared setup for the audit scripts in this folder. They drive a real Chromium
// against a running site (`npm run build && npm run start`, or `npm run dev`)
// and measure what the browser actually laid out.
//
//   AUDIT_URL   base URL to test (default http://127.0.0.1:3000)
//
// A deployed site works too, e.g. the preview alias:
//   AUDIT_URL=https://officialwebsite-git-preview-soul-scity.vercel.app node scripts/audit/shot.js / "SoulScity"
// Behind Claude Code on the web's egress proxy, Chromium's parallel requests fail
// (ERR_TOO_MANY_RETRIES) and pages render unstyled. So when HTTPS_PROXY is set and
// the site is remote, every request is fetched by curl instead, four at a time,
// cached for the run. Requests to other hosts get an empty response.
//
// Playwright is not a project dependency. Claude Code on the web has it
// globally; on the Mac or the Windows PC install it once with
//   npm i --no-save playwright && npx playwright install chromium

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFile } = require("child_process");

function loadPlaywright() {
  for (const id of ["playwright", "/opt/node22/lib/node_modules/playwright"]) {
    try {
      return require(id);
    } catch {}
  }
  console.error("Playwright not found: npm i --no-save playwright && npx playwright install chromium");
  process.exit(1);
}

const BASE = (process.env.AUDIT_URL || "http://127.0.0.1:3000").replace(/\/$/, "");
const PAGES = ["/", "/about", "/services", "/work", "/contact"];
// Phone (320 old iPhone SE, 360 Android, 390/414 iPhone), tablet, laptop, desktop.
const WIDTHS = [320, 360, 390, 414, 768, 1024, 1280, 1440];
const OUT = path.join(os.tmpdir(), "soulscity-audit");

const VIA_CURL = !!process.env.HTTPS_PROXY && !/^http:\/\/(127\.0\.0\.1|localhost)\b/.test(BASE);
const curlCache = new Map();
const curlQueue = [];
let curlActive = 0;
let curlSeq = 0;

function pumpCurl() {
  while (curlActive < 4 && curlQueue.length) {
    curlActive++;
    curlQueue.shift()().finally(() => {
      curlActive--;
      pumpCurl();
    });
  }
}

function curl(url, accept) {
  const key = accept + " " + url;
  if (!curlCache.has(key)) {
    curlCache.set(key, new Promise((resolve) => {
      curlQueue.push(() => new Promise((done) => {
        fs.mkdirSync(OUT, { recursive: true });
        const body = path.join(OUT, `curl-${process.pid}-${curlSeq++}`);
        const head = body + ".h";
        const args = ["-sS", "--retry", "3", "--retry-all-errors", "-o", body, "-D", head, "-w", "%{http_code}", "-H", `Accept: ${accept}`, url];
        execFile("curl", args, { timeout: 60000 }, (err, status) => {
          let res = null;
          try {
            const headers = fs.readFileSync(head, "utf8").split(/\r?\n\r?\n/).filter(Boolean).pop();
            const type = (headers.match(/^content-type:\s*(.+?)\s*$/im) || [])[1];
            res = { status: Number(status), body: fs.readFileSync(body), contentType: type };
          } catch {}
          fs.rmSync(body, { force: true });
          fs.rmSync(head, { force: true });
          // Don't cache a failure: the next page load gets a fresh attempt.
          if (!res) curlCache.delete(key);
          resolve(res);
          done();
        });
      }));
      pumpCurl();
    }));
  }
  return curlCache.get(key);
}

// `beforeLoad(page)` runs before navigation, e.g. to attach console listeners.
async function openPage(browser, route, width = 1440, deviceScaleFactor = 1, beforeLoad) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor });
  if (VIA_CURL) {
    await page.route("**/*", async (r) => {
      const req = r.request();
      // Third-party scripts (analytics, Vercel toolbar) get an empty 200 so they don't log errors.
      if (!req.url().startsWith(BASE)) return r.fulfill({ status: 200, body: "" });
      if (req.method() !== "GET") return r.abort();
      const res = await curl(req.url(), req.headers()["accept"] || "*/*");
      return res ? r.fulfill(res) : r.abort();
    });
  }
  if (beforeLoad) beforeLoad(page);
  await page.goto(BASE + route, { waitUntil: "networkidle", timeout: VIA_CURL ? 120000 : 30000 });
  // The partner marquee never settles; pause it so layout and screenshots are stable.
  await page.evaluate(() =>
    document.querySelectorAll("*").forEach((el) => (el.style.animationPlayState = "paused"))
  );
  return page;
}

module.exports = { chromium: loadPlaywright().chromium, BASE, PAGES, WIDTHS, OUT, openPage };
