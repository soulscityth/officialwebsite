import { Fragment } from "react";

// Thai line breaking works from a dictionary. Transliterated loanwords are not
// in it, so browsers split เวิร์กช็อป as "เวิร์ / กช็อป", and compounds and set
// phrases are stored as their parts, so ภายใต้ can land as "ภาย / ใต้". Each entry
// here is wrapped so it can only move to the next line whole. The list is what
// was caught breaking in text that renders through this component — print the
// laid-out lines across widths and add to it when another one turns up.
const WORDS = [
  "เวิร์กช็อป",
  "Facilitator มืออาชีพ",
  "ลองผิดลองถูก",
  "1 ประเด็นหลัก",
  "มืออาชีพ",
  "เป้าหมาย",
  "โดยเฉพาะ",
  "การดูแล",
  "ภายใต้",
  "ลงมือทำ",
  "หลายวัน",
  "ตัวเอง",
  "ค้นพบ",
  "ตรงกับ",
];
// Longest first, so an entry that contains another still matches whole.
const PATTERN = new RegExp(`(${[...WORDS].sort((a, b) => b.length - a.length).join("|")})`);

export default function KeepWords({ children }) {
  return String(children)
    .split(PATTERN)
    .map((part, i) =>
      WORDS.includes(part) ? (
        <span key={i} className="whitespace-nowrap">
          {part}
        </span>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      )
    );
}
