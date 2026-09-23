"""Regenerate lib/thai-keepwords.json — the Thai words the browser would split.

Browsers break Thai lines using ICU's dictionary, which stores many ordinary
words as parts: ผู้เรียน breaks as "ผู้ / เรียน", ไว้วางใจ as "ไว้ / วางใจ",
เวิร์กช็อป as "เวิร์ / กช็อป". components/KeepWords.js wraps every word in this
list so it can only move to the next line whole.

How the list is built:
  1. every run of Thai text in app/, components/ and lib/ is segmented with
     pythainlp, whose dictionary keeps those words whole;
  2. each resulting word is segmented again with Node's Intl.Segmenter, which
     uses the same ICU data as the browser;
  3. the words ICU cuts into more than one piece are the ones written out.

Run it after adding or rewording Thai copy:

    pip install pythainlp        # once
    python3 scripts/thai-keepwords.py

Copy that is not in the list still renders; it just breaks wherever the
browser's dictionary allows, as it did before.
"""
import json
import pathlib
import re
import subprocess
import sys

from pythainlp.tokenize import word_tokenize

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "lib" / "thai-keepwords.json"
SOURCES = [p for d in ("app", "components", "lib") for p in (ROOT / d).rglob("*.js")]
THAI_RUN = re.compile(r"[฀-๿]+")

words = set()
for path in SOURCES:
    for run in THAI_RUN.findall(path.read_text(encoding="utf-8")):
        for tok in word_tokenize(run, engine="newmm", keep_whitespace=False):
            if len(tok) >= 2 and THAI_RUN.fullmatch(tok):
                words.add(tok)

# Keep only what ICU would actually cut; everything else needs no help.
node = subprocess.run(
    ["node", "-e", """
const seg = new Intl.Segmenter("th", { granularity: "word" });
const words = JSON.parse(require("fs").readFileSync(0, "utf8"));
process.stdout.write(JSON.stringify(words.filter(w => [...seg.segment(w)].length > 1)));
"""],
    input=json.dumps(sorted(words)), capture_output=True, text=True, check=True,
)
split = sorted(json.loads(node.stdout))

OUT.write_text(json.dumps(split, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"{len(words)} Thai words in the copy; {len(split)} would be split by the browser -> {OUT.relative_to(ROOT)}",
      file=sys.stderr)
