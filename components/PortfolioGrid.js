"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { portfolio } from "@/lib/data";
import PortfolioCard from "./PortfolioCard";

const filters = [
  { key: "all", label: "ทั้งหมด" },
  { key: "camp", label: "Camp" },
  { key: "workshop", label: "Workshop" },
  { key: "misc", label: "Miscellaneous" },
];

const validKeys = filters.map((f) => f.key);

// Cards in the first row are above the fold; everything after that lazy-loads.
const EAGER_CARDS = 3;

// Reads the filter from the URL, so it suspends on a static page. app/work/page.js
// renders <PortfolioGridView active="all" /> as its Suspense fallback: the full grid
// is in the server HTML for crawlers, and a ?type= link switches to its filter on
// hydration (a brief flash of "all" first, accepted).
export default function PortfolioGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // The URL is the source of truth, so a filtered view can be linked and shared.
  const requested = searchParams.get("type");
  const active = validKeys.includes(requested) ? requested : "all";

  const select = (key) => {
    const params = new URLSearchParams(searchParams.toString());
    if (key === "all") {
      params.delete("type");
    } else {
      params.set("type", key);
    }
    const query = params.toString();
    router.replace(query ? `/work?${query}` : "/work", { scroll: false });
  };

  return <PortfolioGridView active={active} onSelect={select} />;
}

// Without `onSelect` (the server-rendered fallback) the filter buttons are inert
// until the real grid takes over.
export function PortfolioGridView({ active, onSelect }) {
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
              onClick={onSelect ? () => onSelect(f.key) : undefined}
              aria-pressed={isActive}
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
        {items.map((item, i) => (
          <PortfolioCard key={item.title} item={item} eager={i < EAGER_CARDS} />
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-10 text-center text-sm text-slate-500">ไม่พบผลงานในหมวดนี้</p>
      )}
    </div>
  );
}
