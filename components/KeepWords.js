import { Fragment } from "react";
import generated from "@/lib/thai-keepwords.json";

// Browsers break Thai lines using ICU's dictionary, which stores many ordinary
// words as parts: ผู้เรียน lands as "ผู้ / เรียน", ไว้วางใจ as "ไว้ / วางใจ",
// เวิร์กช็อป as "เวิร์ / กช็อป". Every word listed here is wrapped so it can only
// move to the next line whole; everything else breaks as the browser decides.
//
// Most of the list is lib/thai-keepwords.json, which scripts/thai-keepwords.py
// generates from the site's copy — rerun it after adding or rewording Thai text.
// MANUAL holds what the script cannot produce: phrases that should stay on one
// line, words its dictionary splits the same way the browser does, and words the
// browser keeps whole alone but splits inside a sentence (ลงพื้นที่).
const MANUAL = [
  "Facilitator มืออาชีพ",
  "1 ประเด็นหลัก",
  "การดูแล",
  "หลายวัน",
  "ตรงกับ",
  "ลงพื้นที่",
  // Phrases text-balance otherwise split: "ความเป็นไป / ได้", "เชิง / ปฏิบัติ".
  "ความเป็นไปได้",
  "การมีส่วนร่วม",
  "เชิงปฏิบัติ",
  "เวทีถอดบทเรียน",
  "ให้กับ",
];

const WORDS = new Set([...MANUAL, ...generated]);
// Longest first, so an entry that contains another still matches whole.
const PATTERN = new RegExp(`(${[...WORDS].sort((a, b) => b.length - a.length).join("|")})`);

// The pieces go inside one plain <span>. Returned bare, they became separate items
// wherever the parent is a flex container — buttons, eyebrows, chips, list rows —
// and the parent's gap was drawn between the halves of a single label.
export default function KeepWords({ children }) {
  return (
    <span>
      {String(children)
        .split(PATTERN)
        .map((part, i) =>
          WORDS.has(part) ? (
            <span key={i} className="whitespace-nowrap">
              {part}
            </span>
          ) : (
            <Fragment key={i}>{part}</Fragment>
          )
        )}
    </span>
  );
}
