// Renders public/og-image.jpg, the 1200x630 picture shown when a link is shared
// (LINE, Facebook). Drawn in HTML on top of a running build so it uses the site's
// own fonts (Mitr, Prompt) and wordmark:
//
//   npm run build && npm run start      (in another terminal)
//   node scripts/og-image.js
//
// The text is copied from siteConfig (tagline, taglineEn, url) and serviceJourney
// titles — update it here if those change, then bump OG_IMAGE in lib/metadata.js
// so LINE and Facebook fetch the new picture instead of their cached one.

const path = require("path");
const { chromium } = require("./audit/browser");
const out = path.join(__dirname, "..", "public", "og-image.jpg");
const design = `
<div id="og" style="position:fixed;inset:0;width:1200px;height:630px;overflow:hidden;
  background:linear-gradient(135deg,#083739 0%,#0a4245 45%,#031e1f 100%);
  font-family:var(--font-prompt),sans-serif;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
  <div style="position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);background-size:20px 20px;opacity:.5"></div>
  <div style="position:absolute;right:-120px;bottom:-140px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(113,183,184,.22),transparent 70%)"></div>
  <div style="position:absolute;left:-160px;top:-180px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(63,150,152,.18),transparent 70%)"></div>
  <img src="/logo-wordmark-white.png" style="position:relative;height:118px;width:auto" />
  <div style="position:relative;margin-top:34px;font-family:var(--font-mitr),sans-serif;font-weight:600;font-size:54px;line-height:1.35;letter-spacing:.01em">
    การเรียนรู้ที่มีความหมาย<br/>สู่ความเป็นไปได้ที่ไม่สิ้นสุด
  </div>
  <div style="position:relative;margin-top:18px;font-size:25px;font-style:italic;font-weight:300;color:#a4d3d3">
    “Meaningful learning, Limitless possibilities.”
  </div>
  <div style="position:relative;margin-top:40px;display:flex;gap:14px;align-items:center;font-size:21px;font-weight:500">
    ${["Workshop","Signature Camp","Facilitation"].map(t=>`<span style="padding:9px 22px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22)">${t}</span>`).join("")}
  </div>
  <div style="position:absolute;bottom:30px;font-size:20px;letter-spacing:.08em;color:#71b7b8">soulscity.co.th</div>
</div>`;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await p.goto("http://127.0.0.1:3000/contact", { waitUntil: "networkidle" });
  await p.evaluate((html) => { document.body.innerHTML = html; document.body.style.margin = 0; }, design);
  await p.evaluate(() => Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => i.onload = r))));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(500);
  // JPEG: the PNG was 428KB, and WhatsApp drops preview images over ~300KB.
  await p.locator("#og").screenshot({ path: out, type: "jpeg", quality: 90 });
  console.log(out);
  await b.close();
})();
