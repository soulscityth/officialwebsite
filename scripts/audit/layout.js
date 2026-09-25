// Layout check across all pages and phone-to-desktop widths:
//   1. horizontal overflow (the page scrolls sideways, or an element pokes past the edge)
//   2. h1/h2 whose last line is under 25% of the heading's width (a stranded word)
//   3. [object Object] in the text, and console / page errors (checked once at 1440px)
//
//   node scripts/audit/layout.js
//
// Known result: the About h1 at ~768px ("…เปลี่ยนแปลง / ชีวิตได้"), fixed by its <br />.

const { chromium, PAGES, WIDTHS, openPage } = require("./browser");

(async () => {
  const browser = await chromium.launch();
  const overflow = [];
  const widows = [];
  for (const route of PAGES) {
    const errors = [];
    const p = await openPage(browser, route, 1440, 1, (page) => {
      page.on("console", (m) => m.type() === "error" && errors.push(m.text().slice(0, 160)));
      page.on("pageerror", (e) => errors.push("PAGEERROR " + e.message.slice(0, 160)));
    });
    const objectObject = await p.evaluate(() => document.body.innerText.includes("[object Object]"));
    console.log(`${route.padEnd(9)} [object Object]: ${objectObject}   console errors: ${errors.length}`);
    errors.slice(0, 3).forEach((e) => console.log("            " + e));

    for (const width of WIDTHS) {
      await p.setViewportSize({ width, height: 900 });
      await p.waitForTimeout(100);
      const r = await p.evaluate(() => {
        const pageScroll = document.documentElement.scrollWidth > innerWidth + 1;
        const poking = [...document.querySelectorAll("p,h1,h2,h3,li,span,a,button,label")]
          .filter((e) => e.offsetParent && e.getBoundingClientRect().right > innerWidth + 1)
          .map((e) => e.textContent.trim().slice(0, 40));
        const heads = [...document.querySelectorAll("h1,h2")]
          .filter((h) => h.offsetParent)
          .map((h) => {
            const range = document.createRange();
            range.selectNodeContents(h);
            const rects = [...range.getClientRects()].filter((q) => q.width > 0);
            const lh = parseFloat(getComputedStyle(h).lineHeight);
            const lines = [];
            rects.forEach((q) => {
              const c = (q.top + q.bottom) / 2;
              const line = lines.find((l) => Math.abs(l.c - c) < lh / 2);
              if (line) {
                line.l = Math.min(line.l, q.left);
                line.r = Math.max(line.r, q.right);
              } else lines.push({ c, l: q.left, r: q.right });
            });
            const last = lines.sort((a, b) => a.c - b.c).at(-1);
            const pct = Math.round(((last.r - last.l) / h.getBoundingClientRect().width) * 100);
            return { text: h.textContent.trim().slice(0, 40), lines: lines.length, pct };
          })
          .filter((x) => x.lines > 1 && x.pct < 25);
        return { pageScroll, poking: [...new Set(poking)].slice(0, 4), heads };
      });
      if (r.pageScroll || r.poking.length) overflow.push(`${route} @${width}: ${r.poking.join(" | ") || "page scrolls sideways"}`);
      r.heads.forEach((h) => widows.push(`${route} @${width}: "${h.text}" ${h.lines} lines, last ${h.pct}%`));
    }
    await p.close();
  }
  await browser.close();
  console.log("\nhorizontal overflow:", overflow.length ? "\n  " + overflow.join("\n  ") : "none");
  console.log("headings with last line under 25%:", widows.length ? "\n  " + widows.join("\n  ") : "none");
})();
