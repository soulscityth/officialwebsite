import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

// Email, phone and social rows share one link style: action colour, underline,
// and a 36px tap target on phones.
const linkClass = "group inline-flex items-center py-2 text-sm sm:py-1";
const linkText =
  "font-medium text-brand-600 underline decoration-brand-200 underline-offset-4 transition-colors group-hover:text-brand-700 group-hover:decoration-brand-600";

export const metadata = {
  title: "ติดต่อเรา",
  description: `ช่องทางการติดต่อ ${siteConfig.name} สำหรับสอบถามและปรึกษาโครงการฟรี`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page relative section text-center py-16 sm:py-20 lg:py-28">
          <span className="eyebrow bg-white/10 text-white ring-white/20"><KeepWords>ติดต่อเรา</KeepWords></span>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            <KeepWords>
              พร้อมพูดคุยเกี่ยวกับโครงการของคุณ
            </KeepWords>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-brand-100">
            <KeepWords>
                ไม่ว่าจะเป็นค่าย เวิร์กช็อป หรือกิจกรรมการเรียนรู้รูปแบบอื่น ทีมงานของเราพร้อมรับฟังและให้คำปรึกษาฟรี
            </KeepWords>
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow"><KeepWords>ช่องทางติดต่อ</KeepWords></span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl font-display">
              <KeepWords>
                เลือกช่องทางที่สะดวกสำหรับคุณ
              </KeepWords>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              <KeepWords>
                ทีมงานของเราพร้อมตอบทุกคำถามและให้คำปรึกษาโดยไม่มีค่าใช้จ่าย ติดต่อเราผ่านช่องทางด้านล่าง หรือกรอกแบบฟอร์มเพื่อให้เราติดต่อกลับ
              </KeepWords>
            </p>

            {/* The icon squares show from sm up. On a phone they took 60px from each card,
                and a social row ("Instagram  soulscity.learning ↗") no longer fit at 320-360px. */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:flex">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400"><KeepWords>อีเมล</KeepWords></p>
                  <a href={`mailto:${siteConfig.email}`} className={`${linkClass} mt-1`}>
                    <span className={linkText}>{siteConfig.email}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:flex">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400"><KeepWords>โทรศัพท์</KeepWords></p>
                  <ul className="mt-1 text-sm">
                    {siteConfig.contacts.map((c) => (
                      <li key={c.phone}>
                        <a href={`tel:${c.phone.replace(/\D/g, "")}`} className={`${linkClass} gap-2`}>
                          <span className={linkText}>{c.phone}</span>
                          <span className="text-slate-500">
                            (<KeepWords>{c.name}</KeepWords>)
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:flex">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400"><KeepWords>พื้นที่ให้บริการ</KeepWords></p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700"><KeepWords>{siteConfig.serviceArea}</KeepWords></p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:flex">
                  <Globe className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400"><KeepWords>โซเชียลมีเดีย</KeepWords></p>
                  {/* One account per line; the arrow marks these as opening another site. */}
                  <ul className="mt-1 text-sm">
                    {[
                      ["Facebook", siteConfig.social.facebook, siteConfig.social.facebookHandle],
                      ["Instagram", siteConfig.social.instagram, siteConfig.social.instagramHandle],
                      ["TikTok", siteConfig.social.tiktok, siteConfig.social.tiktokHandle],
                    ].map(([platform, href, handle]) => (
                      <li key={platform}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${linkClass} gap-2`}
                        >
                          <span className="w-[4.5rem] text-slate-500">{platform}</span>
                          <span className={linkText}>{handle}</span>
                          <ArrowUpRight
                            className="h-4 w-4 text-brand-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">(เปิดในแท็บใหม่)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 shadow-card ring-1 ring-slate-100 sm:p-10 lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-slate-900"><KeepWords>ส่งข้อความถึงเรา</KeepWords></h2>
            <p className="mt-2 text-sm text-slate-600">
              <KeepWords>
                กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อกลับภายใน 1 วันทำการ
              </KeepWords>
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
