import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import { siteConfig } from "@/lib/site";
import PartnerMarquee from "@/components/PartnerMarquee";
import ServiceJourney from "@/components/ServiceJourney";
import { domains, stats, process } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page relative section grid grid-cols-1 items-center gap-12 lg:grid-cols-5 py-16 sm:py-20 lg:py-32">
          <div className="animate-fadeUp text-center lg:col-span-3 lg:text-left">
            <span className="eyebrow bg-white/10 text-white ring-white/20">
              {siteConfig.positioning}
            </span>
            <h1 className="mt-6 font-display text-[28px] font-bold !leading-snug tracking-wide text-white sm:text-5xl lg:text-5xl">
              {siteConfig.tagline.split(" ").map((line) => (
                <span key={line} className="block">
                  <KeepWords>{line}</KeepWords>
                </span>
              ))}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-balance text-sm italic text-brand-200 lg:mx-0">
              &ldquo;{siteConfig.taglineEn}&rdquo;
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-brand-100 lg:mx-0">
              <KeepWords>{siteConfig.description}</KeepWords>
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/contact" className="btn-primary w-full sm:w-auto"
                data-ga-event="cta_consult_click"
              >
                <KeepWords>
                  ปรึกษาโครงการของคุณ
                </KeepWords>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn-ghost-light w-full sm:w-auto">
                <KeepWords>
                  ดูผลงานของเรา
                </KeepWords>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
              {["ออกแบบเฉพาะทาง", "ทีมนักออกแบบการเรียนรู้", "จัดกิจกรรมทั่วประเทศ"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-brand-100">
                  <CheckCircle2 className="h-4 w-4 text-brand-300" />
                  <KeepWords>{item}</KeepWords>
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
                  <p className="mt-2 text-balance text-xs text-brand-100"><KeepWords>{stat.label}</KeepWords></p>
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
            <span className="eyebrow"><KeepWords>ประเด็นการเรียนรู้ที่เราเชี่ยวชาญ</KeepWords></span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>
                ออกแบบการเรียนรู้ที่มีความหมายในทุกมิติ
              </KeepWords>
            </h2>
            <p className="mt-4 text-balance text-slate-600">
              <KeepWords>
                เราออกแบบกระบวนการเรียนรู้ที่ผสมผสานศาสตร์การเรียนรู้กับวิธีการสอนที่ทันสมัย เพื่อให้ผู้เรียนได้ประสบการณ์ที่สนุก น่าตื่นเต้น และมีคุณค่า
              </KeepWords>
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <div key={domain.title} className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <domain.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900"><KeepWords>{domain.title}</KeepWords></h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600"><KeepWords>{domain.description}</KeepWords></p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-secondary">
              <KeepWords>
                ดูบริการทั้งหมด
              </KeepWords>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ServiceJourney />

      {/* Process */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><KeepWords>ขั้นตอนการทำงาน</KeepWords></span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>
                กระบวนการทำงานที่ชัดเจนในทุกขั้นตอน
              </KeepWords>
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
                <h3 className="mt-1 font-display text-lg font-semibold text-slate-900"><KeepWords>{item.title}</KeepWords></h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600"><KeepWords>{item.description}</KeepWords></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><KeepWords>พันธมิตรของเรา</KeepWords></span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>
                โรงเรียนและองค์กรที่ไว้วางใจเรา
              </KeepWords>
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
                <KeepWords>
                  พร้อมออกแบบการเรียนรู้ที่มีความหมายให้กับผู้เรียนของคุณแล้วหรือยัง?
                </KeepWords>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-balance text-brand-100">
                <KeepWords>
                    ติดต่อเราวันนี้ เพื่อออกแบบกิจกรรมที่ตอบโจทย์โรงเรียนหรือองค์กรของคุณ
                </KeepWords>
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50"
                  data-ga-event="cta_consult_click"
                >
                  <KeepWords>
                    ปรึกษาโครงการฟรี
                  </KeepWords>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="btn-ghost-light">
                  <KeepWords>
                    รู้จักเรามากขึ้น
                  </KeepWords>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
