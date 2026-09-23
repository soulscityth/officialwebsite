import Link from "next/link";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { domains, signatureCamp, formatTypes, expertiseTags } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import KeepWords from "@/components/KeepWords";

export const metadata = {
  title: "บริการของเรา",
  description: `Signature Camp และประเด็นการเรียนรู้ที่ ${siteConfig.name} เชี่ยวชาญ`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page relative section text-center py-16 sm:py-20 lg:py-28">
          <span className="eyebrow bg-white/10 text-white ring-white/20">บริการของเรา</span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            กระบวนการเรียนรู้ที่ออกแบบมาเพื่อผู้เรียนของคุณโดยเฉพาะ
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
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{signatureCamp.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-brand-100">
              <KeepWords>{signatureCamp.pitch}</KeepWords>
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {signatureCamp.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span className="text-sm text-brand-50">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center gap-5">
              <Link
                href="/contact"
                className="btn bg-white text-brand-800 hover:bg-brand-50"
                data-ga-event="cta_consult_click"
              >
                ปรึกษาการจัดค่าย
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {/* Two phrases, so a narrow screen breaks before เป็น rather than after it. */}
              <a
                href="#domains"
                className="text-center text-sm text-brand-200 transition-colors hover:text-white"
              >
                <span className="inline-block">เลือก 1 จาก 3 Content Domains</span>{" "}
                <span className="inline-block">
                  เป็นเนื้อหาหลักของค่าย
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
            <span className="eyebrow">เนื้อหาใน Signature Camp</span>
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
                  <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">{domain.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{domain.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
                  {domain.formats.map((format) => (
                    <div key={format.name} className="rounded-2xl bg-brand-50/60 p-5">
                      <p className="font-display text-sm font-semibold text-brand-700">{format.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{format.detail}</p>
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
            <span className="eyebrow">ทักษะที่เราออกแบบได้</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              ประเด็นการเรียนรู้ที่เราเชี่ยวชาญ
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {expertiseTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Format types */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">รูปแบบกิจกรรม</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              เลือกรูปแบบที่เหมาะกับเป้าหมายของคุณ
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {formatTypes.map((format) => (
              <div key={format.name} className="card text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <format.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{format.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{format.description}</p>
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
                ให้เราช่วยออกแบบโปรแกรมที่ใช่สำหรับคุณ
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-balance text-brand-100">
                ทีมนักออกแบบการเรียนรู้ของเราพร้อมพูดคุยและช่วยออกแบบโปรแกรมที่เหมาะสมที่สุดให้ฟรี
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50"
                  data-ga-event="cta_consult_click"
                >
                  ปรึกษาโครงการฟรี
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
