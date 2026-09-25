// Shared setup for the audit scripts in this folder. They drive a real Chromium
// against a running site (`npm run build && npm run start`, or `npm run dev`)
// and measure what the browser actually laid out.
//
//   AUDIT_URL   base URL to test (default http://127.0.0.1:3000)
//
// Playwright is not a project dependency. Claude Code on the web has it
// globally; on the Mac or the Windows PC install it once with
//   npm i --no-save playwright && npx playwright install chromium

const os = require("os");
const path = require("path");

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

// `beforeLoad(page)` runs before navigation, e.g. to attach console listeners.
async function openPage(browser, route, width = 1440, deviceScaleFactor = 1, beforeLoad) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor });
  if (beforeLoad) beforeLoad(page);
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  // The partner marquee never settles; pause it so layout and screenshots are stable.
  await page.evaluate(() =>
    document.querySelectorAll("*").forEach((el) => (el.style.animationPlayState = "paused"))
  );
  return page;
}

module.exports = { chromium: loadPlaywright().chromium, BASE, PAGES, WIDTHS, OUT, openPage };
