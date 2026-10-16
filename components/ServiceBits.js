import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import { siteConfig } from "@/lib/site";

// Pieces shared by the /services/* sub-pages (packages, camps, partnership,
// organizations). Server components.

// The four package steps get darker as they climb, the same ramp as the design.
// Full class strings so Tailwind can find them.
export const stepTone = {
  "01": { box: "bg-brand-100 text-brand-800", num: "bg-white text-brand-800" },
  "02": { box: "bg-brand-600 text-white", num: "bg-white text-brand-600" },
  "03": { box: "bg-brand-800 text-white", num: "bg-white text-brand-800" },
  "04": { box: "bg-brand-950 text-white", num: "bg-brand-200 text-brand-950" },
};

export function StepBadge({ step, children }) {
  const tone = stepTone[step] || { box: "bg-brand-50 text-brand-700", num: "" };
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full py-1 pl-1 pr-3 text-xs font-medium tracking-wide ${tone.box} ${
        step ? "" : "pl-3"
      }`}
    >
      {step && (
        <b className={`flex h-6 w-6 items-center justify-center rounded-full font-display text-xs ${tone.num}`}>{step}</b>
      )}
      {children}
    </span>
  );
}

// Centred eyebrow + h2 + lead, or left-aligned with `align="left"`.
export function SectionHead({ eyebrow, title, lead, align = "center", dark = false }) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className={`eyebrow ${dark ? "bg-white/10 text-white ring-white/20" : ""}`}>
          <KeepWords>{eyebrow}</KeepWords>
        </span>
      )}
      <h2 className={`mt-4 font-display text-3xl font-bold !leading-snug sm:text-4xl ${dark ? "text-white" : "text-slate-900"}`}>
        <KeepWords>{title}</KeepWords>
      </h2>
      {lead && (
        <p
          className={`mt-4 leading-relaxed sm:text-[17px] ${center ? "mx-auto max-w-2xl text-balance" : "text-pretty"} ${
            dark ? "text-brand-100" : "text-slate-600"
          }`}
        >
          <KeepWords>{lead}</KeepWords>
        </p>
      )}
    </div>
  );
}

export function CheckItem({ children, dark = false }) {
  return (
    <li className={`flex gap-2.5 text-[15px] leading-relaxed ${dark ? "text-white" : "text-slate-800"}`}>
      <Check className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-brand-300" : "text-brand-600"}`} strokeWidth={2.5} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

// Hero used by every sub-page: the site's gradient + dot grid recipe.
export function ServiceHero({ children, className = "" }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
      <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
      <div className={`container-page relative py-14 sm:py-20 lg:py-24 ${className}`}>{children}</div>
    </section>
  );
}

// "ผลงานจริง": portfolio entries with their first photo. Links go to /work filtered
// to the entry's category; there are no per-project pages yet.
export function WorkCards({ works }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {works.map((work) => (
        <Link
          key={work.title}
          href={`/work?type=${work.category}`}
          className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100 transition-transform duration-200 hover:-translate-y-1"
        >
          <div className="relative aspect-[3/2] bg-brand-50">
            <Image
              src={work.images[0]}
              alt={work.title}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="font-display text-base font-semibold !leading-snug text-slate-900 group-hover:text-brand-700">
              <KeepWords>{work.title}</KeepWords>
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              <KeepWords>{`${work.partner} · ${work.duration} · ${work.participants}`}</KeepWords>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function WorksHeader({ title }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <SectionHead eyebrow="ผลงานจริง" title={title} align="left" />
      <Link href="/work" className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
        <KeepWords>ดูผลงานทั้งหมด</KeepWords>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

// Closing call to action: the same dark panel as the other pages' CTAs. `second` is
// an optional secondary link; LINE is the default.
export function ServiceCta({ eyebrow, title, lead, primary, second }) {
  const secondary = second || { href: siteConfig.line.url, label: siteConfig.line.label, external: true };
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 px-6 py-14 text-center sm:px-16 sm:py-16">
          <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
          <div className="relative">
            {eyebrow && (
              <span className="eyebrow bg-white/10 text-white ring-white/20">
                <KeepWords>{eyebrow}</KeepWords>
              </span>
            )}
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold !leading-snug text-white sm:text-4xl">
              <KeepWords>{title}</KeepWords>
            </h2>
            {lead && (
              <p className="mx-auto mt-4 max-w-2xl text-balance text-brand-100">
                <KeepWords>{lead}</KeepWords>
              </p>
            )}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn w-full bg-white text-brand-800 hover:bg-brand-50 sm:w-auto"
                data-ga-event="cta_consult_click"
              >
                <KeepWords>{primary}</KeepWords>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {secondary.external ? (
                <a href={secondary.href} target="_blank" rel="noopener noreferrer" className="btn-ghost-light w-full sm:w-auto">
                  <KeepWords>{secondary.label}</KeepWords>
                </a>
              ) : (
                <Link href={secondary.href} className="btn-ghost-light w-full sm:w-auto">
                  <KeepWords>{secondary.label}</KeepWords>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
