"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Calendar, Clock, RefreshCw, Users2 } from "lucide-react";
import KeepWords from "@/components/KeepWords";

// Photo on the upper part of the front, fading into dark teal where the text sits.
const FRONT_FADE =
  "linear-gradient(180deg, rgba(3,30,31,.55) 0%, rgba(3,30,31,0) 22%, rgba(3,30,31,0) 34%, rgba(10,66,69,.8) 56%, #0a4245 70%, #031e1f 100%)";

// Both faces share one grid cell, so the card grows to whichever face is taller.
// The hidden face is `inert`: its link and buttons drop out of the tab order.
export default function SignatureCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const flipRef = useRef(null);
  const linkRef = useRef(null);

  const flip = (to) => {
    setFlipped(to);
    // Move focus once the turn is under way, so keyboard users land on the visible face.
    setTimeout(() => (to ? linkRef : flipRef).current?.focus({ preventScroll: true }), 350);
  };

  const level = `${item.service} · ${item.levels.join(" · ")}`;
  const facts = [
    { icon: Calendar, text: item.date },
    { icon: Clock, text: item.duration },
    { icon: Users2, text: item.participants },
    { icon: Building2, text: item.partner },
  ];

  return (
    <li className="[perspective:1400px]">
      <div
        className={`relative grid h-full transition-transform duration-700 ease-[cubic-bezier(.2,.75,.25,1)] [transform-style:preserve-3d] motion-reduce:transition-none ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <article
          onClick={() => flip(true)}
          inert={flipped ? "" : undefined}
          aria-hidden={flipped}
          className="group relative isolate flex min-h-[480px] cursor-pointer flex-col overflow-hidden rounded-2xl bg-brand-950 p-6 text-white [backface-visibility:hidden] [grid-area:1/1]"
        >
          <div className="absolute inset-x-0 bottom-[28%] top-0 -z-20 overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              style={item.position ? { objectPosition: item.position } : undefined}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="scale-[1.02] object-cover transition-transform duration-700 group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-[1.02]"
            />
          </div>
          <div className="absolute inset-0 -z-10" style={{ background: FRONT_FADE }} />

          <span className="w-fit rounded-full bg-brand-950/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ring-white/20 backdrop-blur">
            <KeepWords>{level}</KeepWords>
          </span>

          <div className="min-h-[180px] flex-1" />

          <h3 className="font-display text-xl font-semibold !leading-snug tracking-wide text-balance">
            <KeepWords>{item.title}</KeepWords>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-100">
            <KeepWords>{item.partner}</KeepWords>
          </p>
          <button
            ref={flipRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              flip(true);
            }}
            aria-expanded={flipped}
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-900 transition-colors hover:bg-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
          >
            <RefreshCw className="h-4 w-4" />
            <KeepWords>พลิกดูรายละเอียด</KeepWords>
          </button>
        </article>

        {/* Back */}
        <article
          onClick={(e) => {
            if (!e.target.closest("a, button")) flip(false);
          }}
          inert={flipped ? undefined : ""}
          aria-hidden={!flipped}
          className="flex min-h-[480px] flex-col gap-5 rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-100 [backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(180deg)]"
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
            <KeepWords>{level}</KeepWords>
          </span>
          <h3 className="-mt-2 font-display text-lg font-semibold !leading-snug tracking-wide text-slate-900 text-balance">
            <KeepWords>{item.title}</KeepWords>
          </h3>

          <div>
            <p className="text-xs font-medium tracking-wide text-slate-500">
              <KeepWords>หัวข้อการเรียนรู้</KeepWords>
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {item.topics.map((topic) => (
                <li key={topic} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700">
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <ul className="space-y-2 text-sm text-slate-700">
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-2.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <KeepWords>{text}</KeepWords>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
            <Link
              ref={linkRef}
              href="/work"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 font-display text-sm font-medium text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <KeepWords>ดูผลงานทั้งหมด</KeepWords>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => flip(false)}
              className="py-1.5 text-sm text-slate-500 underline underline-offset-4 hover:text-slate-900"
            >
              <KeepWords>พลิกกลับ</KeepWords>
            </button>
          </div>
        </article>
      </div>
    </li>
  );
}
