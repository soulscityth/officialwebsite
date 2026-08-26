import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { domains, signatureCamp, formatTypes, expertiseTags } from "@/lib/data";
import { siteConfig } from "@/lib/site";

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
        <div className="container-page relative section text-center lg:py-28">
          <span className="eyebrow bg-white/10 text-white ring-white/20">บริการของเรา</span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            กระบวนการเรียนรู้ที่ออกแบบมาเพื่อผู้เรียนของคุณโดยเฉพาะ
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100">
            ตั้งแต่ค่ายหลายวันไปจนถึงเวิร์กช็อปสั้น เราออกแบบและจัดกระบวนการเรียนรู้ที่ตอบโจทย์เป้าหมายของโรงเรียนและองค์กรของคุณ
          </p>
        </div>
      </section>

      {/* Signature Camp */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-3xl bg-brand-950 px-8 py-14 text-center sm:px-16">
            <span className="eyebrow bg-white/10 text-white ring-white/20">Our Product</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{signatureCamp.title}</h2>
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {signatureCamp.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span className="text-sm text-brand-50">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content domains */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">ประเด็นการเรียนรู้ที่เราเชี่ยวชาญ</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              3 Content Domains หลักในการออกแบบกระบวนการเรียนรู้
            </h2>
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
                ไม่แน่ใจว่าโรงเรียนหรือองค์กรของคุณต้องการรูปแบบไหน?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-brand-100">
                ทีมนักออกแบบการเรียนรู้ของเราพร้อมพูดคุยและช่วยออกแบบโปรแกรมที่เหมาะสมที่สุดให้ฟรี
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50">
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
