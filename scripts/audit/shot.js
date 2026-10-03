// Screenshot the section that contains a piece of text, at one or more widths.
// Phones are captured at 2x, like a real phone screen.
//
//   node scripts/audit/shot.js <route> "<text in the section>" [widths]
//   node scripts/audit/shot.js /about "ทีมของเรา" 390,1440
//
// Hides the sticky navbar and the floating LINE button so they don't cover the
// section, loads every lazy image in it first, and prints where each PNG went.

const fs = require("fs");
const path = require("path");
const { chromium, OUT, openPage } = require("./browser");

const [route, needle, widthArg] = process.argv.slice(2);
if (!route || !needle) {
  console.error('usage: node scripts/audit/shot.js <route> "<text>" [390,1440]');
  process.exit(1);
}
const widths = widthArg ? widthArg.split(",").map(Number) : [390, 1440];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  for (const width of widths) {
    const page = await openPage(browser, route, width, width < 640 ? 2 : 1);
    await page.evaluate(() => {
      const nav = document.querySelector("header");
      if (nav) nav.style.visibility = "hidden";
      document.querySelectorAll('a[href*="line"]').forEach((a) => (a.style.visibility = "hidden"));
    });
    const section = page.locator("section", { has: page.getByText(needle, { exact: false }) }).last();
    for (const img of await section.locator("img").all()) await img.scrollIntoViewIfNeeded().catch(() => {});
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const slug = route.replace(/\W+/g, "-").replace(/^-|-$/g, "") || "home";
    const file = path.join(OUT, `${slug}-${width}.png`);
    await section.screenshot({ path: file });
    console.log(file);
    await page.close();
  }
  await browser.close();
})();
