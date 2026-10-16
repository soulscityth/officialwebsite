"use client";

import { useState } from "react";
import KeepWords from "@/components/KeepWords";

// /services/organizations: องค์กร | มหาวิทยาลัย tabs. The server page renders the
// works for both audiences and passes them in as `worksByAudience`, keyed by id,
// so only the services list and headings switch here.
export default function OrgAudiences({ audiences, worksByAudience }) {
  const [id, setId] = useState(audiences[0].id);
  const current = audiences.find((a) => a.id === id);

  return (
    <>
      <section id="services" className="section scroll-mt-16 bg-brand-50">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow bg-white">
                <KeepWords>เลือกบริบทของคุณ</KeepWords>
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold !leading-snug text-slate-900 sm:text-4xl">
                <KeepWords>{current.heading}</KeepWords>
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-slate-600">
                <KeepWords>{current.buyer}</KeepWords>
              </p>
            </div>
            <div role="tablist" aria-label="ประเภทลูกค้า" className="inline-flex rounded-full bg-white p-1 ring-1 ring-brand-100">
              {audiences.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  id={`tab-${a.id}`}
                  aria-selected={a.id === id}
                  aria-controls="org-panel"
                  onClick={() => setId(a.id)}
                  className={`min-h-[44px] rounded-full px-6 text-sm font-medium transition-colors ${
                    a.id === id ? "bg-brand-600 text-white" : "text-brand-800 hover:bg-brand-50"
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <div id="org-panel" role="tabpanel" aria-labelledby={`tab-${id}`} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {current.services.map((s) => (
              <article key={s.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
                <h3 className="font-display text-lg font-semibold !leading-snug text-slate-900">
                  <KeepWords>{s.title}</KeepWords>
                </h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                  <KeepWords>{s.text}</KeepWords>
                </p>
                <p className="mt-4 border-t border-brand-100 pt-3 text-[13px] text-slate-600">
                  <KeepWords>เคยทำกับ</KeepWords> <b className="font-semibold text-brand-700">{s.ref}</b>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="section scroll-mt-16">
        <div className="container-page">{worksByAudience[id]}</div>
      </section>
    </>
  );
}
