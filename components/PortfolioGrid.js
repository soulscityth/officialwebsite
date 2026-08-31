"use client";

import { useState } from "react";
import { portfolio } from "@/lib/data";
import PortfolioCard from "./PortfolioCard";

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
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-10 text-center text-sm text-slate-500">ไม่พบผลงานในหมวดนี้</p>
      )}
    </div>
  );
}
