import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import { ORGANIZATION_ID } from "@/components/StructuredData";
import { packages, packagesNote } from "@/lib/data";

const baht = (n) => n.toLocaleString("en-US");

// Service schema built from the same `packages` entries the cards render, so Google
// sees the prices that are on the page.
function packageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": packages.map((pkg) => ({
      "@type": "Service",
      name: pkg.title,
      alternateName: pkg.subtitle,
      description: pkg.description,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "Country", name: "Thailand" },
      offers: {
        "@type": "Offer",
        priceCurrency: "THB",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: pkg.price.amount,
          priceCurrency: "THB",
        },
      },
    })),
  };
}

// Four bars under each card: how far up the ladder this package goes.
function Ladder({ step, dark }) {
  const on = dark ? "bg-brand-300" : "bg-brand-600";
  const off = dark ? "bg-brand-200/25" : "bg-brand-100";
  return (
    <div className="grid grid-cols-4 gap-1" aria-hidden="true">
      {[1, 2, 3, 4].map((n) => (
        <span key={n} className={`h-1.5 rounded-full ${n <= Number(step) ? on : off}`} />
      ))}
    </div>
  );
}

function Card({ pkg }) {
  const dark = pkg.featured;
  const muted = dark ? "text-brand-100" : "text-slate-600";
  return (
    <article
      className={`flex flex-col gap-5 rounded-2xl p-7 ${
        dark
          ? "text-white shadow-[0_24px_48px_-20px_rgba(3,30,31,0.55)]"
          : "bg-white shadow-card ring-1 ring-brand-100"
      }`}
      style={
        dark ? { background: "linear-gradient(135deg, #0c4f52 0%, #0a4245 45%, #031e1f 100%)" } : undefined
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span
          className={`inline-flex items-center gap-1.5 font-display text-sm font-semibold ${
            dark ? "text-brand-300" : "text-brand-600"
          }`}
        >
          ขั้น {pkg.step}
          {dark && (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C12.8 8 16 11.2 22 12C16 12.8 12.8 16 12 22C11.2 16 8 12.8 2 12C8 11.2 11.2 8 12 2Z" />
              </svg>
              <span className="font-sans text-[13px] font-medium text-white">
                <KeepWords>บริการหลัก</KeepWords>
              </span>
            </>
          )}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-[13px] font-medium ${
            dark ? "bg-white/[0.12] text-white" : "bg-brand-50 text-brand-600"
          }`}
        >
          <KeepWords>{pkg.duration}</KeepWords>
        </span>
      </div>

      <div>
        <h3 className={`font-display text-[26px] font-bold !leading-snug ${dark ? "text-white" : "text-slate-900"}`}>
          {pkg.title}
        </h3>
        <p className={`mt-1 text-[15px] font-medium ${dark ? "text-brand-200" : "text-brand-600"}`}>
          <KeepWords>{pkg.subtitle}</KeepWords>
        </p>
      </div>

      <p className={`text-pretty text-[15px] leading-relaxed ${muted}`}>
        <KeepWords>{pkg.description}</KeepWords>
      </p>

      {pkg.topics && (
        <ul className="flex flex-wrap gap-1.5">
          {pkg.topics.map((topic) => (
            <li key={topic} className="rounded-full px-2.5 py-0.5 text-xs text-slate-900 ring-1 ring-inset ring-brand-100">
              <KeepWords>{topic}</KeepWords>
            </li>
          ))}
        </ul>
      )}

      {pkg.tracks && (
        <ul className="space-y-2">
          {pkg.tracks.map((track) => (
            <li
              key={track.name}
              className="flex justify-between gap-3 rounded-xl bg-white/[0.07] px-3 py-2 text-[13px]"
            >
              <span className="font-semibold text-white">{track.name}</span>
              <span className="text-right text-brand-200">
                <KeepWords>{track.result}</KeepWords>
              </span>
            </li>
          ))}
        </ul>
      )}

      {pkg.journey && (
        <ol className="space-y-2">
          {pkg.journey.map((item, i) => (
            <li key={item} className="flex items-center gap-2.5 text-[13px] text-slate-900">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-xs font-semibold text-brand-600">
                {i + 1}
              </span>
              <KeepWords>{item}</KeepWords>
            </li>
          ))}
        </ol>
      )}

      <ul className={`flex-grow space-y-2.5 text-sm leading-normal ${dark ? "text-white" : "text-slate-900"}`}>
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2.5">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-brand-300" : "text-brand-600"}`}
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <KeepWords>{item}</KeepWords>
          </li>
        ))}
      </ul>

      <div className={`space-y-2.5 border-t pt-4 ${dark ? "border-brand-200/25" : "border-brand-100"}`}>
        <Ladder step={pkg.step} dark={dark} />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className={`text-[13px] ${dark ? "text-brand-200" : "text-slate-600"}`}>
            <KeepWords>{pkg.price.label}</KeepWords>{" "}
            <strong className={`font-display text-[22px] font-bold ${dark ? "text-white" : "text-brand-600"}`}>
              {baht(pkg.price.amount)}
            </strong>{" "}
            บาท
            {pkg.price.plus && <span className="mt-0.5 block">Plus {baht(pkg.price.plus)} บาท</span>}
          </p>
          {pkg.link && (
            <Link
              href={pkg.link.href}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-white hover:text-brand-100"
            >
              <KeepWords>{pkg.link.label}</KeepWords>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Packages() {
  return (
    <section className="section bg-brand-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(packageSchema()) }} />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow bg-white">Our Packages · บันได 4 ขั้น</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            <KeepWords>จากจุดประกาย สู่พันธมิตรตลอดปีการศึกษา</KeepWords>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance leading-relaxed text-slate-600 sm:text-[17px]">
            <KeepWords>
              เริ่มจากเวิร์กช็อปครั้งเดียว หรือวางแผนพัฒนานักเรียนร่วมกันทั้งปี แต่ละขั้นต่อยอดจากขั้นก่อนหน้าได้ทันที
            </KeepWords>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <Card key={pkg.title} pkg={pkg} />
          ))}
        </div>

        <p className="mt-6 text-balance text-center text-[13px] text-slate-600">
          <KeepWords>{packagesNote}</KeepWords>
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-3xl px-6 py-7 sm:px-8"
          style={{ background: "linear-gradient(135deg, #0c4f52 0%, #083739 100%)" }}
        >
          <p className="font-display text-xl font-semibold !leading-snug text-white sm:text-[22px]">
            <KeepWords>กำลังตัดสินใจว่าขั้นไหนเหมาะกับโรงเรียน?</KeepWords>
          </p>
          <Link
            href="/contact"
            className="btn bg-white text-brand-700 hover:bg-brand-50"
            data-ga-event="cta_consult_click"
          >
            <KeepWords>ปรึกษาโครงการฟรี</KeepWords>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
