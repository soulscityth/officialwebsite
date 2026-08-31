import Link from "next/link";
import { ArrowUpRight, Target, Eye } from "lucide-react";
import { stats, values, team } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "เกี่ยวกับเรา",
  description: `เรื่องราวและพันธกิจของ ${siteConfig.name} ผู้ออกแบบและจัดกระบวนการเรียนรู้ที่มีความหมาย`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page relative section text-center lg:py-28">
          <span className="eyebrow bg-white/10 text-white ring-white/20">เกี่ยวกับเรา</span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[28px] font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            ทีมนักออกแบบการเรียนรู้
            <br />
            ที่เชื่อว่าการเรียนรู้เปลี่ยนแปลงชีวิตได้
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100">
            {siteConfig.legalNameTh} ({siteConfig.legalName})
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">เรื่องราวของเรา</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              แรงผลักดันสำคัญของประสบการณ์การเรียนรู้ที่มีคุณค่า
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              จากการเปลี่ยนแปลงอย่างรวดเร็วในโลกยุคศตวรรษที่ 21 มนุษย์จำเป็นจะต้องมีทักษะที่รอบด้านเพื่อที่จะสามารถปรับตัวให้ทันกระแสที่เปลี่ยนไป
              และเชื่อว่าการเรียนรู้เป็นพลังที่สามารถเปลี่ยนแปลงชีวิตได้ เราจึงมุ่งมั่นที่จะเป็นแรงผลักดันสำคัญในการสร้างประสบการณ์การเรียนรู้ที่มีคุณค่า
              โดยมุ่งเน้นการพัฒนาทักษะ ความคิด และจิตวิญญาณของผู้เรียนให้เติบโต
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              ด้วยความเชื่อเหล่านี้ เราจึงออกแบบโปรแกรมการเรียนรู้ที่ตอบโจทย์ความต้องการในยุคปัจจุบันอย่างไม่เหมือนใคร
              ทั้งในด้านความรู้วิชาการ ทักษะทางสังคม และการพัฒนาตัวเองจากภายใน โดยผสมผสานความรู้จากหลากหลายศาสตร์กับวิธีการเรียนการสอนที่ทันสมัย
              เช่น การใช้กระบวนการ (Facilitation) เกมการเรียนรู้แบบ Interactive กิจกรรมสร้างนวัตกรรม และอีกมากมาย
              เพื่อให้ผู้เรียนได้มีประสบการณ์ที่สนุก น่าตื่นเต้น และมีคุณค่า
            </p>
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

      {/* Positioning */}
      <section className="section bg-slate-50">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">Human Development Solution</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              เราเป็นพันธมิตรด้านการพัฒนาคน ที่ออกแบบกระบวนการเรียนรู้ให้ตอบโจทย์เป้าหมายของแต่ละโรงเรียนและองค์กรโดยเฉพาะ
            </p>
          </div>
          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
              &ldquo;{siteConfig.taglineEn}&rdquo;
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {siteConfig.tagline} — นี่คือความเชื่อที่ขับเคลื่อนทุกกระบวนการเรียนรู้ที่เราออกแบบ
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">สิ่งที่เรายึดมั่น</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              หลักการที่ขับเคลื่อนการทำงานของเราทุกวัน
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-5 rounded-2xl border border-slate-100 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <value.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">ทีมของเรา</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              ทีมนักออกแบบการเรียนรู้เบื้องหลัง SoulScity
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 font-display text-xl font-bold text-white">
                  {member.nickname.slice(0, 1)}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900">
                  {member.name} <span className="font-sans text-sm font-normal text-slate-500">({member.nickname})</span>
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-600">{member.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{member.education}</p>
                {member.expertise && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.expertise.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            และทีม Staff Pool ที่ร่วมสนับสนุนการจัดกระบวนการในทุกโครงการ
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                อยากร่วมงานกับเราไหม?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-brand-100">
                เราพร้อมรับฟังทุกไอเดียและความต้องการของคุณ เริ่มต้นบทสนทนากับทีมงานของเราได้เลยวันนี้
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50">
                  ติดต่อทีมงาน
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
