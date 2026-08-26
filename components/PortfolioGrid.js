"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Users2 } from "lucide-react";
import { portfolio } from "@/lib/data";

const filters = [
  { key: "all", label: "ทั้งหมด" },
  { key: "camp", label: "Camp" },
  { key: "workshop", label: "Workshop" },
  { key: "misc", label: "Miscellaneous" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState("all");

  const items = active === "all" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => {
          const count = f.key === "all" ? portfolio.length : portfolio.filter((p) => p.category === f.key).length;
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {f.label} <span className={isActive ? "text-brand-100" : "text-slate-400"}>({count})</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="relative h-44 w-full shrink-0 overflow-hidden bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                {item.category === "camp" ? "Camp" : item.category === "workshop" ? "Workshop" : "Miscellaneous"}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs text-slate-500">{item.partner}</p>

              <div className="mt-4 space-y-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                  {item.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                  {item.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users2 className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                  {item.participants}
                </div>
              </div>

              <div className="mt-4 flex flex-1 flex-wrap items-end gap-1.5">
                {item.topics.map((topic) => (
                  <span key={topic} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-10 text-center text-sm text-slate-500">ไม่พบผลงานในหมวดนี้</p>
      )}
    </div>
  );
}
