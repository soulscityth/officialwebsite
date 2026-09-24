import { Fragment } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { domains, signatureCamp, formatTypes, expertiseGroups } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import KeepWords from "@/components/KeepWords";

export const metadata = {
  title: "บริการของเรา",
  description: `Signature Camp และประเด็นการเรียนรู้ที่ ${siteConfig.name} เชี่ยวชาญ`,
};

// Full class strings, not built from the colour name, so Tailwind can find them.
const tagColors = {
  amber: { dot: "bg-amber-600", chip: "bg-amber-50 text-amber-800 ring-amber-200" },
  rose: { dot: "bg-rose-600", chip: "bg-rose-50 text-rose-800 ring-rose-200" },
  violet: { dot: "bg-violet-600", chip: "bg-violet-50 text-violet-800 ring-violet-200" },
  sky: { dot: "bg-sky-600", chip: "bg-sky-50 text-sky-800 ring-sky-200" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page relative section text-center py-16 sm:py-20 lg:py-28">
          <span className="eyebrow bg-white/10 text-white ring-white/20"><KeepWords>บริการของเรา</KeepWords></span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            <KeepWords>
              กระบวนการเรียนรู้ที่ออกแบบมาเพื่อผู้เรียนของคุณโดยเฉพาะ
            </KeepWords>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-brand-100">
            <KeepWords>
                ตั้งแต่ค่ายหลายวันไปจนถึงเวิร์กช็อปสั้น เราออกแบบและจัดกระบวนการเรียนรู้ที่ตอบโจทย์เป้าหมายของโรงเรียนและองค์กรของคุณ
            </KeepWords>
          </p>
        </div>
      </section>

      {/* Signature Camp */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-3xl bg-brand-950 px-8 py-14 text-center sm:px-16">
            <span className="eyebrow bg-white/10 text-white ring-white/20">Our Product</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl"><KeepWords>{signatureCamp.title}</KeepWords></h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-brand-100">
              <KeepWords>{signatureCamp.pitch}</KeepWords>
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {signatureCamp.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span className="text-sm text-brand-50"><KeepWords>{point}</KeepWords></span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center gap-5">
              <Link
                href="/contact"
                className="btn bg-white text-brand-800 hover:bg-brand-50"
                data-ga-event="cta_consult_click"
              >
                <KeepWords>
                  ปรึกษาการจัดค่าย
                </KeepWords>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {/* Two phrases, so a narrow screen breaks before เป็น rather than after it. */}
              <a
                href="#domains"
                className="text-center text-sm text-brand-200 transition-colors hover:text-white"
              >
                <span className="inline-block"><KeepWords>เลือก 1 จาก 3 Content Domains</KeepWords></span>{" "}
                <span className="inline-block">
                  <KeepWords>
                    เป็นเนื้อหาหลักของค่าย
                  </KeepWords>
                  <ArrowDown className="ml-1.5 inline h-4 w-4 align-[-3px]" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content domains — each Signature Camp is built on one of these. scroll-mt
          keeps the heading clear of the sticky 64px navbar when the camp card's
          link jumps here. */}
      <section id="domains" className="section scroll-mt-16 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><KeepWords>เนื้อหาใน Signature Camp</KeepWords></span>
            {/* Left to the dictionary this split "ให้ / เลือก", and "Content / Domains"
                on phones. The break is after "3 Content Domains"; when a phone is too
                narrow for either half, each has exactly one fallback point inside it
                (after "3", and at the <wbr>), so neither can break anywhere else. */}
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <span className="inline-block">
                3 <span className="whitespace-nowrap">Content Domains</span>
              </span>{" "}
              <span className="inline-block">
                <span className="whitespace-nowrap">ให้เลือกเป็น</span>
                <wbr />
                <span className="whitespace-nowrap">แกนหลักของค่าย</span>
              </span>
            </h2>
            <p className="mt-4 text-balance text-base leading-relaxed text-slate-600">
              <KeepWords>
                  Signature Camp แต่ละค่ายออกแบบรอบ 1 ประเด็นหลัก เลือกประเด็นที่ตรงกับเป้าหมายของผู้เรียน
                  แล้วเราออกแบบทุกกิจกรรมในค่ายให้พาไปสู่เป้าหมายนั้น
              </KeepWords>
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {domains.map((domain, i) => (
              <div
                key={domain.title}
                className={`grid grid-cols-1 items-center gap-8 rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100 lg:grid-cols-3 lg:p-10`}
              >
                <div className="lg:col-span-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <domain.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-slate-900"><KeepWords>{domain.title}</KeepWords></h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600"><KeepWords>{domain.description}</KeepWords></p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
                  {domain.formats.map((format) => (
                    <div key={format.name} className="rounded-2xl bg-brand-50/60 p-5">
                      <p className="font-display text-sm font-semibold text-brand-700"><KeepWords>{format.name}</KeepWords></p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600"><KeepWords>{format.detail}</KeepWords></p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise tags */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><KeepWords>ทักษะที่เราออกแบบได้</KeepWords></span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>
                ประเด็นการเรียนรู้ที่เราเชี่ยวชาญ
              </KeepWords>
            </h2>
          </div>
          {/* Legend: 2x2 on a phone so no group name sits alone on a second line, and one
              column below 360px, where two English names side by side no longer fit. One row from
              md; between sm and md a single row left "Community & Society" alone. */}
          <div className="mx-auto mt-6 grid w-fit grid-cols-1 gap-x-4 gap-y-1.5 min-[360px]:grid-cols-2 sm:mt-8 md:flex md:flex-wrap md:justify-center md:gap-x-5">
            {expertiseGroups.map((group) => (
              <span key={group.name} className="inline-flex items-center gap-1.5 whitespace-nowrap text-[12.5px] text-slate-600 sm:gap-2 sm:text-sm">
                <span className={`h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5 ${tagColors[group.color].dot}`} aria-hidden="true" />
                <KeepWords>{group.name}</KeepWords>
              </span>
            ))}
          </div>
          {/* One cloud, coloured by group. Chips shrink on a phone so two fit per row;
              at full size most rows held one tag and the section ran ~980px tall. */}
          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-1.5 sm:mt-8 sm:gap-3">
            {expertiseGroups.map((group) => (
              <Fragment key={group.name}>
                <span className="sr-only">{group.name}</span>
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`whitespace-nowrap rounded-full px-[11px] py-[5px] text-[12.5px] font-medium ring-1 ring-inset sm:px-4 sm:py-2 sm:text-sm ${tagColors[group.color].chip}`}
                  >
                    {tag}
                  </span>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Format types */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><KeepWords>รูปแบบกิจกรรม</KeepWords></span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>
                เลือกรูปแบบที่เหมาะกับเป้าหมายของคุณ
              </KeepWords>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {formatTypes.map((format) => (
              <div key={format.name} className="card text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <format.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900"><KeepWords>{format.name}</KeepWords></h3>
                <p className="mt-2 text-balance text-sm leading-relaxed text-slate-600"><KeepWords>{format.description}</KeepWords></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                <KeepWords>
                  ให้เราช่วยออกแบบโปรแกรมที่ใช่สำหรับคุณ
                </KeepWords>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-balance text-brand-100">
                <KeepWords>
                  ทีมนักออกแบบการเรียนรู้ของเราพร้อมพูดคุยและช่วยออกแบบโปรแกรมที่เหมาะกับผู้เรียนของคุณ
                </KeepWords>
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50"
                  data-ga-event="cta_consult_click"
                >
                  <KeepWords>
                    ปรึกษาโครงการฟรี
                  </KeepWords>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
