// How one piece of text wraps, line by line, at each width. Use it after a
// copy change to see exactly where Thai text will break before anyone looks.
//
//   node scripts/audit/lines.js <route> "<text the element contains>" [widths]
//   node scripts/audit/lines.js /services "ตั้งแต่เวิร์กช็อป" 320,390,768,1440
//
// Matches the smallest heading, paragraph, list item or link containing the text.

const { chromium, WIDTHS, openPage } = require("./browser");

const [route, needle, widthArg] = process.argv.slice(2);
if (!route || !needle) {
  console.error('usage: node scripts/audit/lines.js <route> "<text>" [320,390,1440]');
  process.exit(1);
}
const widths = widthArg ? widthArg.split(",").map(Number) : WIDTHS;

(async () => {
  const browser = await chromium.launch();
  const page = await openPage(browser, route);
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(120);
    const lines = await page.evaluate((needle) => {
      const candidates = [...document.querySelectorAll("h1,h2,h3,p,li,a,span,td")].filter(
        (e) => e.offsetParent && e.textContent.includes(needle)
      );
      const el = candidates.sort((a, b) => a.textContent.length - b.textContent.length)[0];
      if (!el) return null;
      const lh = parseFloat(getComputedStyle(el).lineHeight) || 20;
      const rows = [];
      let cur = null;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        for (let i = 0; i < n.data.length; i++) {
          const range = document.createRange();
          range.setStart(n, i);
          range.setEnd(n, i + 1);
          const rect = [...range.getClientRects()].find((q) => q.width > 0);
          if (rect && (!cur || Math.abs(cur.y - rect.top) > lh / 2)) {
            cur = { y: rect.top, s: "" };
            rows.push(cur);
          }
          if (cur) cur.s += n.data[i];
        }
      }
      return rows.map((r) => r.s.trim());
    }, needle);
    console.log(`@${String(width).padEnd(5)} ${lines ? lines.join(" / ") : "(not found at this width)"}`);
  }
  await browser.close();
})();
