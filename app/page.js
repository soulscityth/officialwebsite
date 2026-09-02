import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import PartnerMarquee from "@/components/PartnerMarquee";
import { domains, stats, process, signatureCamp } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page relative section grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:py-32">
          <div className="animate-fadeUp text-center lg:col-span-3 lg:text-left">
            <span className="eyebrow bg-white/10 text-white ring-white/20">
              {siteConfig.positioning}
            </span>
            <h1 className="mt-6 font-display text-[28px] font-bold !leading-snug tracking-wide text-white sm:text-5xl lg:text-5xl">
              {siteConfig.tagline.split(" ").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm italic text-brand-200 lg:mx-0">
              &ldquo;{siteConfig.taglineEn}&rdquo;
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-brand-100 lg:mx-0">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                ปรึกษาโครงการของคุณ
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn-ghost-light w-full sm:w-auto">
                ดูผลงานของเรา
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
              {["ออกแบบเฉพาะทาง", "ทีมนักออกแบบการเรียนรู้", "จัดกิจกรรมทั่วประเทศ"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-brand-100">
                  <CheckCircle2 className="h-4 w-4 text-brand-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-2">
            <div className="mx-auto grid max-w-md grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/15 backdrop-blur"
                >
                  <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs text-brand-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content domains preview */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">ประเด็นการเรียนรู้ที่เราเชี่ยวชาญ</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              ออกแบบการเรียนรู้ที่มีความหมายในทุกมิติ
            </h2>
            <p className="mt-4 text-balance text-slate-600">
              เราออกแบบกระบวนการเรียนรู้ที่ผสมผสานศาสตร์การเรียนรู้กับวิธีการสอนที่ทันสมัย เพื่อให้ผู้เรียนได้ประสบการณ์ที่สนุก น่าตื่นเต้น และมีคุณค่า
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <div key={domain.title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <domain.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{domain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{domain.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-secondary">
              ดูบริการทั้งหมด
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Camp highlight */}
      <section className="section">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our Product</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {signatureCamp.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              ค่ายที่ออกแบบมาเฉพาะสำหรับโรงเรียนและองค์กรของคุณ ผสมผสานทั้ง Soft Skills และ Hard Skills ผ่านกระบวนการเรียนรู้ที่สนุกและมีความหมาย
            </p>
            <ul className="mt-6 space-y-3">
              {signatureCamp.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card text-center">
                <p className="font-display text-3xl font-bold text-brand-600">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">ขั้นตอนการทำงาน</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              กระบวนการทำงานที่ชัดเจนในทุกขั้นตอน
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-card">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-semibold tracking-wider text-brand-600">
                  ขั้นตอนที่ {item.step}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">พันธมิตรของเรา</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              โรงเรียนและองค์กรที่ไว้วางใจเรา
            </h2>
          </div>
          <div className="mt-12">
            <PartnerMarquee />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 px-8 py-16 text-center sm:px-10">
            <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                พร้อมออกแบบการเรียนรู้ที่มีความหมายให้กับผู้เรียนของคุณแล้วหรือยัง?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-balance text-brand-100">
                ติดต่อทีมงานของเราวันนี้ เพื่อออกแบบค่ายหรือเวิร์กช็อปที่ตอบโจทย์โรงเรียนหรือองค์กรของคุณโดยเฉพาะ
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50">
                  ปรึกษาโครงการฟรี
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="btn-ghost-light">
                  รู้จักเรามากขึ้น
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
