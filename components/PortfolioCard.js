"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, Clock, Users2 } from "lucide-react";

const CATEGORY_LABEL = { camp: "Camp", workshop: "Workshop", misc: "Miscellaneous" };

export default function PortfolioCard({ item }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const count = item.images.length;
  const goTo = (i) => setIndex((i + count) % count);
  const prev = (e) => {
    e.stopPropagation();
    goTo(index - 1);
  };
  const next = (e) => {
    e.stopPropagation();
    goTo(index + 1);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) goTo(index - 1);
    else if (delta < -40) goTo(index + 1);
    touchStartX.current = null;
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-transform duration-200 hover:-translate-y-1">
      <div
        className="relative h-44 w-full shrink-0 select-none overflow-hidden bg-slate-100"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {item.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${item.title} (${i + 1}/${count})`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
          />
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="รูปก่อนหน้า"
              className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="รูปถัดไป"
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {item.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i);
                  }}
                  aria-label={`ไปที่รูปที่ ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
            {CATEGORY_LABEL[item.category]}
          </span>
          {item.levels.map((level) => (
            <span
              key={level}
              className="w-fit rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700"
            >
              {level}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-display text-base font-semibold leading-snug text-slate-900">{item.title}</h3>
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
  );
}
