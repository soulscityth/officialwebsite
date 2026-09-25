// Mid-word line breaks: lays out all five pages at 8 widths, records every
// point where the browser started a new line, then checks each one against
// pythainlp's word boundaries (classify-breaks.py). A break at a space or at a
// word boundary is fine; anything else is a word split in the middle.
//
//   node scripts/audit/breaks.js        (needs `pip install pythainlp`)
//
// Known results: "Mid- / Year" (an English hyphen) and "เชิงปฏิบัติ | การมีส่วนร่วม",
// which breaks at a real space that pythainlp joins into one word. Both are fine.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { chromium, PAGES, WIDTHS, OUT, openPage } = require("./browser");

(async () => {
  const browser = await chromium.launch();
  const out = [];
  for (const route of PAGES) {
    const page = await openPage(browser, route);
    for (const width of WIDTHS) {
      await page.setViewportSize({ width, height: 900 });
      await page.waitForTimeout(120);
      const rows = await page.evaluate(() => {
        // Group text nodes by their nearest non-inline ancestor: one paragraph,
        // heading or label each, however many KeepWords spans it holds.
        const isInline = (el) => getComputedStyle(el).display === "inline";
        const blockOf = (el) => {
          while (el && isInline(el)) el = el.parentElement;
          return el;
        };
        const groups = new Map();
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          if (!node.data.trim()) continue;
          const parent = node.parentElement;
          if (!parent || parent.closest("script,style,noscript,svg")) continue;
          const block = blockOf(parent);
          if (!block || !block.getClientRects().length) continue;
          if (!groups.has(block)) groups.set(block, []);
          groups.get(block).push(node);
        }
        const res = [];
        for (const [block, nodes] of groups) {
          const style = getComputedStyle(block);
          const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.4;
          let text = "";
          const breaks = [];
          let prevTop = null;
          for (const n of nodes) {
            for (let i = 0; i < n.data.length; i++) {
              const ch = n.data[i];
              const range = document.createRange();
              range.setStart(n, i);
              range.setEnd(n, i + 1);
              const rect = range.getClientRects()[0];
              if (rect && rect.width > 0 && !/\s/.test(ch)) {
                if (prevTop !== null && rect.top - prevTop > lineHeight * 0.5) breaks.push(text.length);
                prevTop = rect.top;
              }
              text += ch;
            }
          }
          if (breaks.length) res.push({ text, breaks });
        }
        return res;
      });
      for (const row of rows) out.push({ page: route, width, ...row });
    }
    await page.close();
  }
  await browser.close();

  fs.mkdirSync(OUT, { recursive: true });
  const file = path.join(OUT, "breaks.json");
  fs.writeFileSync(file, JSON.stringify(out));
  console.log(`${out.length} wrapped blocks recorded -> ${file}\n`);
  execFileSync("python3", [path.join(__dirname, "classify-breaks.py"), file], { stdio: "inherit" });
})();
