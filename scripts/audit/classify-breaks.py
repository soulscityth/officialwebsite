"""Second half of breaks.js: flag line breaks that are not at a Thai word boundary.

    python3 scripts/audit/classify-breaks.py <breaks.json>

breaks.js runs this itself; call it directly only to re-read an earlier run.
"""
import collections
import json
import re
import sys

from pythainlp.tokenize import word_tokenize

data = json.load(open(sys.argv[1], encoding="utf-8"))
cache = {}


def boundaries(text):
    if text not in cache:
        cuts, spans, pos = {0}, [], 0
        for tok in word_tokenize(text, engine="newmm", keep_whitespace=True):
            spans.append((pos, pos + len(tok), tok))
            pos += len(tok)
            cuts.add(pos)
        cache[text] = (cuts, spans)
    return cache[text]


bad = collections.defaultdict(lambda: {"widths": set(), "pages": set()})
for row in data:
    text = row["text"]
    cuts, spans = boundaries(text)
    for k in row["breaks"]:
        # k is the first visible character of the new line.
        if k > 0 and text[k - 1].isspace():
            continue  # broke at a space
        if k in cuts:
            continue  # broke at a word boundary
        word = next((tok for s, e, tok in spans if s < k < e), "?")
        context = re.sub(r"\s+", " ", text[max(0, k - 14):k]) + " | " + re.sub(r"\s+", " ", text[k:k + 14])
        entry = bad[(word, context.strip())]
        entry["widths"].add(row["width"])
        entry["pages"].add(row["page"])

print(f"mid-word breaks: {len(bad)} distinct")
for (word, context), where in sorted(bad.items(), key=lambda kv: (sorted(kv[1]["pages"])[0], kv[0][0])):
    pages = ",".join(sorted(where["pages"]))
    widths = ",".join(map(str, sorted(where["widths"])))
    print(f"  {pages:24s} [{word}]  …{context}…  @ {widths}")
