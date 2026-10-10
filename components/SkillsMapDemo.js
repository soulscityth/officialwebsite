"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import KeepWords from "@/components/KeepWords";
// Radar geometry: 7 axes from the top, clockwise; values are rubric levels 1–4.
const AXES = 7;
const CX = 220;
const CY = 200;
const R = 130;
const point = (i, v) => {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / AXES;
  const r = (R * v) / 4;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
};
const polygon = (values) => values.map((v, i) => point(i, v).map((n) => n.toFixed(1)).join(",")).join(" ");
const ring = (v) => polygon(Array(AXES).fill(v));

// Label anchors sit just outside the outer ring.
const LABELS = [
  { x: 220, y: 52, anchor: "middle" },
  { x: 336, y: 108, anchor: "start" },
  { x: 358, y: 234, anchor: "start" },
  { x: 290, y: 342, anchor: "middle" },
  { x: 150, y: 342, anchor: "middle" },
  { x: 82, y: 234, anchor: "end" },
  { x: 104, y: 108, anchor: "end" },
];

const fmt = (v) => v.toFixed(1);
const delta = (a, b) => `${b - a >= 0 ? "+" : ""}${fmt(b - a)}`;
const levelIndex = (v) => (v < 1.5 ? 0 : v < 2.5 ? 1 : v < 3.5 ? 2 : 3);
const average = (values) => values.reduce((s, v) => s + v, 0) / values.length;

// The dashboard a school receives, with invented sample numbers (labelled on the card).
// Takes `skillsMap` as a prop so the client bundle doesn't pull in all of lib/data.js.
export default function SkillsMapDemo({ skillsMap }) {
  const { skills, levels, demo } = skillsMap;
  const level = (v) => levels[levelIndex(v)];
  const [roundId, setRoundId] = useState(demo.rounds[0].id);
  const [sel, setSel] = useState(0);

  const round = demo.rounds.find((r) => r.id === roundId);
  const before = demo.before;
  const now = round.values;

  let best = 0;
  let low = 0;
  now.forEach((v, i) => {
    if (v - before[i] > now[best] - before[best]) best = i;
    if (v < now[low]) low = i;
  });

  const [selX, selY] = point(sel, 4);
  const [bX, bY] = point(sel, before[sel]);
  const [nX, nY] = point(sel, now[sel]);

  return (
    <div className="rounded-3xl bg-white p-5 text-slate-900 shadow-[0_24px_48px_-20px_rgba(3,30,31,0.55)] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">SoulScity Skills Map · Dashboard</p>
          <p className="mt-1 font-display text-lg font-semibold">
            <KeepWords>{demo.title}</KeepWords>
          </p>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-200">
          <KeepWords>ตัวอย่างข้อมูลสมมติ</KeepWords>
        </span>
      </div>

      <div role="group" aria-label="เลือกรอบการวัด" className="mt-4 inline-flex flex-wrap gap-1 rounded-full bg-brand-50 p-1">
        {demo.rounds.map((r) => (
          <button
            key={r.id}
            type="button"
            aria-pressed={r.id === roundId}
            onClick={() => setRoundId(r.id)}
            className={`min-h-[40px] rounded-full px-4 text-sm font-medium transition-colors ${
              r.id === roundId ? "bg-brand-600 text-white" : "text-brand-700 hover:bg-white"
            }`}
          >
            <KeepWords>{r.label}</KeepWords>
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_200px]">
        <div>
          <svg viewBox="0 20 440 350" role="img" aria-label="กราฟใยแมงมุม 7 ทักษะ เทียบก่อนและหลัง" className="w-full">
            {[1, 2, 3].map((v) => (
              <polygon key={v} points={ring(v)} fill="none" stroke="#d1e9e9" />
            ))}
            <polygon points={ring(4)} fill="#f8fafc" stroke="#a4d3d3" />
            {skills.map((s, i) => {
              const [x, y] = point(i, 4);
              return <line key={s.name} x1={CX} y1={CY} x2={x} y2={y} stroke="#d1e9e9" />;
            })}
            <line x1={CX} y1={CY} x2={selX} y2={selY} stroke="#0f6265" strokeWidth="2" />
            <polygon points={polygon(before)} fill="rgba(113,183,184,.18)" stroke="#3f9698" strokeWidth="1.5" strokeDasharray="5 4" />
            <polygon points={polygon(now)} fill="rgba(15,98,101,.22)" stroke="#0f6265" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx={bX} cy={bY} r="5" fill="#ffffff" stroke="#3f9698" strokeWidth="2" />
            <circle cx={nX} cy={nY} r="6.5" fill="#0f6265" stroke="#ffffff" strokeWidth="2" />
            {[1, 2, 3, 4].map((v) => (
              <text key={v} x="224" y={CY - (R * v) / 4 - 1} fontSize="10" fill="#94a3b8">
                {v}
              </text>
            ))}
            {skills.map((s, i) => (
              <text
                key={s.name}
                x={LABELS[i].x}
                y={LABELS[i].y}
                textAnchor={LABELS[i].anchor}
                fontSize="13"
                fill={i === sel ? "#0f6265" : "#334155"}
                fontWeight={i === sel ? 700 : 400}
              >
                {s.name}
              </text>
            ))}
          </svg>
          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-0 w-4 border-t-2 border-dashed border-brand-400" aria-hidden="true" />
              ก่อนค่าย
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-0.5 w-4 bg-brand-600" aria-hidden="true" />
              <KeepWords>{round.now}</KeepWords>
            </span>
            <span>
              <KeepWords>ระดับ 1–4 ตาม rubric</KeepWords>
            </span>
          </div>
        </div>

        <div>
          <p id="skills-label" className="text-xs text-slate-500">
            <KeepWords>กดเลือกทักษะเพื่อดูรายละเอียด</KeepWords>
          </p>
          <div role="group" aria-labelledby="skills-label" className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-1">
            {skills.map((s, i) => (
              <button
                key={s.name}
                type="button"
                aria-pressed={i === sel}
                onClick={() => setSel(i)}
                className={`flex min-h-[40px] items-center justify-between gap-2 rounded-xl px-3 text-left text-sm transition-colors ${
                  i === sel ? "bg-brand-600 font-semibold text-white" : "bg-slate-50 text-slate-900 hover:bg-brand-50"
                }`}
              >
                <KeepWords>{s.name}</KeepWords>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    i === sel ? "bg-white/20 text-white" : "bg-brand-50 text-brand-700"
                  }`}
                >
                  {delta(before[i], now[i])}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-brand-50 p-4">
        <div className="min-w-0 flex-1 basis-56">
          <p className="font-display font-semibold">
            <KeepWords>{skills[sel].name}</KeepWords>
          </p>
          <p className="mt-0.5 text-sm text-slate-600">
            <KeepWords>{skills[sel].desc}</KeepWords>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            <KeepWords>{`หลักฐาน: ${round.evidence}`}</KeepWords>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-center">
            <p className="font-display text-xl font-bold text-brand-500">{fmt(before[sel])}</p>
            <p className="text-[11px] text-slate-500">
              <KeepWords>{level(before[sel])}</KeepWords>
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-brand-600" aria-hidden="true" />
          <div className="text-center">
            <p className="font-display text-xl font-bold text-brand-700">{fmt(now[sel])}</p>
            <p className="text-[11px] text-slate-500">
              <KeepWords>{level(now[sel])}</KeepWords>
            </p>
          </div>
          <span className="rounded-full bg-brand-600 px-2.5 py-1 text-xs font-semibold text-white">
            {delta(before[sel], now[sel])}
          </span>
        </div>
      </div>

      <dl className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 px-3 py-2">
          <dt className="text-xs text-slate-500">
            <KeepWords>ค่าเฉลี่ย 7 ทักษะ</KeepWords>
          </dt>
          <dd className="font-semibold">
            {fmt(average(before))} → {fmt(average(now))}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 px-3 py-2">
          <dt className="text-xs text-slate-500">
            <KeepWords>เติบโตมากที่สุด</KeepWords>
          </dt>
          <dd className="font-semibold">
            <KeepWords>{`${skills[best].name} ${delta(before[best], now[best])}`}</KeepWords>
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 px-3 py-2">
          <dt className="text-xs text-slate-500">
            <KeepWords>ควรเติมต่อ</KeepWords>
          </dt>
          <dd className="font-semibold">
            <KeepWords>{skills[low].name}</KeepWords>
          </dd>
        </div>
      </dl>
    </div>
  );
}
