import { Fragment } from "react";
import Link from "next/link";
import KeepWords from "@/components/KeepWords";
import TeamCard from "@/components/TeamCard";
import FacilitatorCard from "@/components/FacilitatorCard";
import { ArrowUpRight, Target, Quote } from "lucide-react";
import { values, team } from "@/lib/data";
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
        <div className="container-page relative section text-center py-16 sm:py-20 lg:py-28">
          <span className="eyebrow bg-white/10 text-white ring-white/20"><KeepWords>เกี่ยวกับเรา</KeepWords></span>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[28px] font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            <KeepWords>
              ทีมนักออกแบบการเรียนรู้
            </KeepWords>
            <br />
            <KeepWords>
              ที่เชื่อว่าการเรียนรู้เปลี่ยนแปลงชีวิตได้
            </KeepWords>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-brand-100">
            <KeepWords>{siteConfig.legalNameTh}</KeepWords> ({siteConfig.legalName})
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow"><KeepWords>เรื่องราวของเรา</KeepWords></span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>
                แรงผลักดันสำคัญของประสบการณ์การเรียนรู้ที่มีคุณค่า
              </KeepWords>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              <KeepWords>
                โลกเปลี่ยนเร็วขึ้นทุกวัน ทักษะที่รอบด้านจึงจำเป็นต่อการปรับตัวให้ทัน เราเชื่อว่าการเรียนรู้คือพลังที่เปลี่ยนชีวิตคนได้
                จึงตั้งใจเป็นแรงผลักดันให้เกิดประสบการณ์การเรียนรู้ที่มีคุณค่า ที่ช่วยให้ทักษะ ความคิด และจิตวิญญาณของผู้เรียนเติบโตไปพร้อมกัน
              </KeepWords>
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              <KeepWords>
                ด้วยความเชื่อเหล่านี้ เราจึงออกแบบโปรแกรมการเรียนรู้ที่ตอบโจทย์ความต้องการในยุคปัจจุบันอย่างไม่เหมือนใคร
                ทั้งในด้านความรู้วิชาการ ทักษะทางสังคม และการพัฒนาตัวเองจากภายใน โดยผสมผสานความรู้จากหลากหลายศาสตร์กับวิธีการเรียนการสอนที่ทันสมัย
                เช่น การใช้กระบวนการ (Facilitation) เกมการเรียนรู้แบบ Interactive กิจกรรมสร้างนวัตกรรม และอีกมากมาย
                เพื่อให้ผู้เรียนได้มีประสบการณ์ที่สนุก น่าตื่นเต้น และมีคุณค่า
              </KeepWords>
            </p>
          </div>
          {/* The slogan leads; positioning sits under it as the practical promise. */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 p-8 sm:p-10">
            <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
            <div className="relative">
              <Quote className="h-8 w-8 text-brand-300" aria-hidden="true" />
              <p className="mt-6 font-display text-3xl font-bold !leading-snug tracking-wide text-white sm:text-4xl">
                {siteConfig.taglineEn}
              </p>
              {/* Each half of the tagline wraps as a unit, so a narrow screen breaks at
                  the space between them rather than stranding "สู่" on the first line. */}
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                {siteConfig.tagline.split(" ").map((part, i) => (
                  <Fragment key={part}>
                    {i > 0 && " "}
                    <span className="inline-block">{part}</span>
                  </Fragment>
                ))}
              </p>
              <div className="mt-8 h-px bg-white/15" />
              <div className="mt-8 flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-inset ring-white/15">
                  <Target className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Human Development Solution</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-brand-100">
                    <KeepWords>
                      เราเป็นพันธมิตรด้านการพัฒนาคน ที่ออกแบบกระบวนการเรียนรู้ให้ตอบโจทย์เป้าหมายของแต่ละโรงเรียนและองค์กรโดยเฉพาะ
                    </KeepWords>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values. Story above is also white, so there is no colour change to mark the
          boundary; half the usual top padding keeps the two from drifting apart. */}
      <section className="section pt-6 sm:pt-8 lg:pt-10">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow"><KeepWords>สิ่งที่เรายึดมั่น</KeepWords></span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>
                หลักการที่ขับเคลื่อนการทำงานของเราทุกวัน
              </KeepWords>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-5 rounded-2xl border border-slate-100 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <value.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900"><KeepWords>{value.title}</KeepWords></h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600"><KeepWords>{value.description}</KeepWords></p>
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
            <span className="eyebrow"><KeepWords>ทีมของเรา</KeepWords></span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>
                ทีมนักออกแบบการเรียนรู้เบื้องหลัง SoulScity
              </KeepWords>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:mx-auto lg:max-w-5xl lg:auto-rows-fr lg:grid-cols-2 lg:gap-8">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
            <FacilitatorCard />
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
                  อยากร่วมงานกับเราไหม?
                </KeepWords>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-balance text-brand-100">
                <KeepWords>
                  เราพร้อมรับฟังทุกไอเดียและความต้องการของคุณ เริ่มต้นบทสนทนากับทีมงานของเราได้เลยวันนี้
                </KeepWords>
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50">
                  <KeepWords>
                    ติดต่อทีมงาน
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
