"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import { contactHref } from "@/lib/contact";

const ROOM = 40;
const SIZES = [40, 80, 120, 160, 200];
const baht = (n) => n.toLocaleString("en-US");
// Contact-form activity for each package step; Summit spans several kinds, so none.
const ACTIVITY = { "01": "เวิร์กช็อป", "02": "ค่าย", "03": "ค่าย" };

// /services/packages "ประมาณราคาเบื้องต้น". Prices are per room of 40 learners
// (`packages`); 5 rooms or more is quoted per project, as the packages note says.
// `packages` is passed in from the server page, so the prices have one source.
export default function PriceEstimator({ packages }) {
  const [step, setStep] = useState("02");
  const [n, setN] = useState(120);
  const pkg = packages.find((p) => p.step === step);
  const rooms = Math.ceil(n / ROOM);
  const custom = rooms >= 5;

  // "ส่งตัวเลขนี้ให้ทีม" carries the choice and the estimate into the contact form.
  const estimate = custom
    ? `${rooms} ห้อง ขอใบเสนอราคาเฉพาะงาน`
    : `งบเริ่มต้นที่ประมาณจากหน้าเว็บ ${baht(pkg.price.amount * rooms)} บาท (${baht(pkg.price.amount)} บาท × ${rooms} ห้อง)`;
  const contact = contactHref({
    subject: `สนใจ ${pkg.title} · ${n} คน`,
    activity: ACTIVITY[pkg.step],
    participants: n,
    message: `สนใจ ${pkg.title} สำหรับผู้เรียนประมาณ ${n} คน · ${estimate}`,
  });

  const chip = (on) =>
    `min-h-[44px] rounded-full px-4 text-sm font-medium ring-1 ring-inset transition-colors ${
      on ? "bg-brand-600 text-white ring-brand-600" : "bg-white text-brand-800 ring-brand-200 hover:bg-brand-50"
    }`;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-brand-100 sm:p-8">
      <fieldset>
        <legend className="text-sm font-semibold text-slate-900">1 · เลือกแพ็กเกจ</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {packages.map((p) => (
            <button key={p.step} type="button" aria-pressed={p.step === step} onClick={() => setStep(p.step)} className={chip(p.step === step)}>
              {p.title}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-slate-900">2 · จำนวนผู้เรียน</legend>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center rounded-full ring-1 ring-inset ring-brand-200">
            <button
              type="button"
              aria-label="ลดจำนวน"
              onClick={() => setN((v) => Math.max(20, v - 20))}
              className="flex h-11 w-11 items-center justify-center rounded-full text-brand-700 hover:bg-brand-50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <output aria-live="polite" className="min-w-[72px] text-center font-display text-base font-semibold text-slate-900">
              {n} คน
            </output>
            <button
              type="button"
              aria-label="เพิ่มจำนวน"
              onClick={() => setN((v) => Math.min(400, v + 20))}
              className="flex h-11 w-11 items-center justify-center rounded-full text-brand-700 hover:bg-brand-50"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((v) => (
              <button key={v} type="button" aria-pressed={v === n} onClick={() => setN(v)} className={`${chip(v === n)} px-3.5`}>
                {v} คน
              </button>
            ))}
          </div>
        </div>
      </fieldset>

      <div
        aria-live="polite"
        className="relative mt-7 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-950 p-6 text-white"
      >
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="relative">
          <p className="text-sm text-brand-200">
            {pkg.title} · {n} คน ÷ {ROOM} = {rooms} ห้อง
          </p>
          {custom ? (
            <>
              <p className="mt-3 font-display text-3xl font-bold">เสนอราคาเฉพาะงาน</p>
              <p className="mt-2 text-sm text-brand-100">
                <KeepWords>ตั้งแต่ 5 ห้องขึ้นไป ทีมจะออกแบบและเสนอราคาให้ตรงกับงานของคุณ</KeepWords>
              </p>
            </>
          ) : (
            <>
              <p className="mt-3 text-sm text-brand-100">งบเริ่มต้นประมาณ</p>
              <p className="font-display text-4xl font-bold">
                {baht(pkg.price.amount * rooms)} <span className="text-lg font-medium">บาท</span>
              </p>
              <p className="mt-1 text-sm text-brand-200">
                {baht(pkg.price.amount)} บาท × {rooms} ห้อง
              </p>
            </>
          )}
        </div>
      </div>

      <Link href={contact} className="btn-primary mt-6 w-full" data-ga-event="cta_consult_click">
        <KeepWords>ส่งตัวเลขนี้ให้ทีม แล้วคุยต่อ</KeepWords>
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
