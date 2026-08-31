import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

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
        <div className="container-page relative section text-center lg:py-28">
          <span className="eyebrow bg-white/10 text-white ring-white/20">ติดต่อเรา</span>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            พร้อมพูดคุยเกี่ยวกับโครงการของคุณ
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100">
            ไม่ว่าจะเป็นค่าย เวิร์กช็อป หรือกิจกรรมการเรียนรู้รูปแบบอื่น ทีมงานของเราพร้อมรับฟังและให้คำปรึกษาฟรี
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow">ช่องทางติดต่อ</span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl font-display">
              เลือกช่องทางที่สะดวกสำหรับคุณ
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              ทีมงานของเราพร้อมตอบทุกคำถามและให้คำปรึกษาโดยไม่มีค่าใช้จ่าย ติดต่อเราผ่านช่องทางด้านล่าง หรือกรอกแบบฟอร์มเพื่อให้เราติดต่อกลับ
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">อีเมล</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">โทรศัพท์</p>
                  {siteConfig.contacts.map((c) => (
                    <p key={c.phone} className="mt-1 text-sm leading-relaxed text-slate-700">
                      {c.phone} ({c.name})
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">พื้นที่ให้บริการ</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{siteConfig.serviceArea}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Facebook className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">โซเชียลมีเดีย</p>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-700">
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">
                      Facebook: {siteConfig.social.facebookHandle}
                    </a>
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">
                      Instagram: {siteConfig.social.instagramHandle}
                    </a>
                    <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">
                      TikTok: {siteConfig.social.tiktokHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 shadow-card ring-1 ring-slate-100 sm:p-10 lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-slate-900">ส่งข้อความถึงเรา</h2>
            <p className="mt-2 text-sm text-slate-600">
              กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อกลับภายใน 1-2 วันทำการ
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
