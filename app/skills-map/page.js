import Link from "next/link";
import { ArrowUpRight, FileText, Map as MapIcon, TrendingUp, UserRound } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import SkillsMapDemo from "@/components/SkillsMapDemo";
import { packages, skillsMap } from "@/lib/data";
import { pageMeta } from "@/lib/metadata";

export const metadata = {
  title: "Skills Map",
  description:
    "SoulScity Skills Map แกนวัดผล 7 ทักษะ × rubric 4 ระดับ วัดก่อนและหลังทุกเวิร์กช็อปและค่าย เริ่มใช้ตั้งแต่ปีการศึกษา 2570",
  ...pageMeta("/skills-map"),
};

const DELIVERABLE_ICONS = [MapIcon, TrendingUp, UserRound, FileText];

function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
        <KeepWords>{title}</KeepWords>
      </h2>
      {lead && (
        <p className="mx-auto mt-4 max-w-2xl text-balance leading-relaxed text-slate-600 sm:text-[17px]">
          <KeepWords>{lead}</KeepWords>
        </p>
      )}
    </div>
  );
}

export default function SkillsMapPage() {
  const { start, skills, levels, principles, audiences, cycle, perPackage, research, deliverables } = skillsMap;

  return (
    <>
      {/* Hero, with the sample dashboard */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page relative grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <span className="eyebrow bg-white/10 text-white ring-white/20">SoulScity Skills Map · แกนวัดผลร่วม</span>
              <span className="eyebrow bg-amber-300 text-brand-950 ring-amber-300">
                <KeepWords>{`ใหม่ · เริ่ม${start}`}</KeepWords>
              </span>
            </div>
            <h1 className="mt-6 font-display text-[32px] font-bold !leading-snug tracking-wide text-white sm:text-5xl">
              <KeepWords>ทุกกิจกรรม วัดผลได้ ด้วยแผนที่ทักษะเดียวกัน</KeepWords>
            </h1>
            <p className="mt-4 font-display text-lg italic text-brand-200">“Map before. Learn. Map again.”</p>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-brand-100 lg:mx-0">
              <KeepWords>
                {`SoulScity Skills Map คือแกนวัดผลที่เราจะใช้ในทุกเวิร์กช็อปและค่าย ตั้งแต่${start} เพื่อให้เห็นว่าผู้เรียนเริ่มต้นตรงไหน และเติบโตไปแค่ไหน`}
              </KeepWords>
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/contact" className="btn-primary w-full sm:w-auto" data-ga-event="cta_consult_click">
                <KeepWords>ปรึกษาโครงการของคุณ</KeepWords>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="#cycle" className="btn-ghost-light w-full sm:w-auto">
                <KeepWords>Skills Map ทำงานอย่างไร</KeepWords>
              </a>
            </div>
            <p className="mt-6 text-sm text-brand-200">
              <KeepWords>✦ ลองกดดูตัวอย่างแดชบอร์ดที่โรงเรียนจะได้รับ</KeepWords>
            </p>
          </div>
          <SkillsMapDemo skillsMap={skillsMap} />
        </div>
      </section>

      {/* What it is */}
      <section className="section">
        <div className="container-page">
          <SectionHead
            eyebrow="What is Skills Map"
            title="ภาษากลางเรื่องทักษะ"
            lead={`ตั้งแต่${start} ทุกเวิร์กช็อปและค่ายของเราจะวัดผลด้วยกรอบเดียวกัน ไม่ว่าจะจัดครึ่งวันหรือทั้งปีการศึกษา ผลที่ได้จึงเอามาเทียบกันได้ และบอกได้ชัด ๆ ว่าผู้เรียนโตขึ้นตรงไหน`}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="card">
                <span className="font-display text-sm font-semibold text-brand-600">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-900">
                  <KeepWords>{p.title}</KeepWords>
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600">
                  <KeepWords>{p.text}</KeepWords>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.who} className="rounded-2xl bg-brand-50 p-6">
                <h3 className="font-display text-lg font-semibold text-brand-700">
                  <KeepWords>{a.who}</KeepWords>
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-700">
                  <KeepWords>{a.text}</KeepWords>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cycle */}
      <section id="cycle" className="section scroll-mt-16 bg-slate-50">
        <div className="container-page">
          <SectionHead eyebrow="How it works · วงจร Skills Map" title="วัดก่อน เรียนรู้ วัดซ้ำ" lead="เห็นการเปลี่ยนแปลง ไม่ใช่แค่คะแนนครั้งเดียว" />
          <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cycle.map((c, i) => (
              <li key={c.en} className="card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="font-display text-lg font-semibold text-brand-700">{c.en}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  <KeepWords>{c.title}</KeepWords>
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  <KeepWords>{c.text}</KeepWords>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7 skills, 4 levels */}
      <section className="section">
        <div className="container-page">
          <SectionHead
            eyebrow="What we map · 7 ทักษะ"
            title="7 ทักษะ วัดด้วย rubric 4 ระดับ"
            lead="ออกแบบให้สอดคล้องกับสมรรถนะสำคัญของผู้เรียนตามหลักสูตรแกนกลางฯ 2551 ผอ. จึงนำผลไปใส่รายงานผลงานโรงเรียนได้"
          />
          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <li key={s.name} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
                <span className="font-display text-sm font-semibold text-brand-600">0{i + 1}</span>
                <h3 className="mt-1 font-display text-lg font-semibold text-slate-900">
                  <KeepWords>{s.name}</KeepWords>
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  <KeepWords>{s.desc}</KeepWords>
                </p>
              </li>
            ))}
            <li className="rounded-2xl bg-brand-900 p-5 text-white">
              <h3 className="font-display text-lg font-semibold">
                <KeepWords>Rubric 4 ระดับ</KeepWords>
              </h3>
              <ol className="mt-3 space-y-2">
                {levels.map((l, i) => (
                  <li key={l} className="flex items-center gap-2.5 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                      {i + 1}
                    </span>
                    <KeepWords>{l}</KeepWords>
                  </li>
                ))}
              </ol>
            </li>
          </ol>
        </div>
      </section>

      {/* Per package */}
      <section className="section bg-brand-50">
        <div className="container-page">
          <SectionHead eyebrow="In every package" title="Skills Map ในทุกแพ็กเกจ" lead="ยิ่งขั้นสูง หลักฐานยิ่งแน่น" />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg, i) => (
              <div key={pkg.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-100">
                <p className="text-[13px] font-medium text-brand-600">
                  <KeepWords>{`ขั้น ${pkg.step} · ${pkg.duration}`}</KeepWords>
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-slate-900">{pkg.title}</h3>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-slate-700">
                  <KeepWords>{perPackage[i].method}</KeepWords>
                </p>
                <p className="mt-4 border-t border-brand-100 pt-3 text-sm text-slate-600">
                  <span className="font-medium text-slate-900">
                    <KeepWords>รายงานได้:</KeepWords>
                  </span>{" "}
                  <KeepWords>{perPackage[i].reports}</KeepWords>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section">
        <div className="container-page">
          <SectionHead
            eyebrow="Research · งานวิจัยรองรับ"
            title="ทำไมต้องวัดทักษะ"
            lead="ทักษะพัฒนาได้ และการวัดระหว่างทางทำให้เรียนรู้ได้ดีขึ้น"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {research.map((r) => (
              <figure key={r.source} className="card flex flex-col">
                <p className="font-display text-3xl font-bold text-brand-600">{r.stat}</p>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-slate-700">
                  <KeepWords>{r.text}</KeepWords>
                </p>
                <figcaption className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <KeepWords>{r.source}</KeepWords>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHead eyebrow="What you get" title="สิ่งที่โรงเรียนจะได้รับ" lead="ส่งต่อให้ ผอ. หรือฝ่ายบุคคลได้ทันที" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((d, i) => {
              const Icon = DELIVERABLE_ICONS[i];
              return (
                <div key={d.title} className="card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                    <KeepWords>{d.title}</KeepWords>
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    <KeepWords>{d.text}</KeepWords>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                <KeepWords>อยากเห็นแผนที่ทักษะของผู้เรียนคุณไหม?</KeepWords>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-balance text-brand-100">
                <KeepWords>คุยกับทีม SoulScity ฟรี แล้วเริ่มโครงการแรกด้วย Skills Map</KeepWords>
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50" data-ga-event="cta_consult_click">
                  <KeepWords>ปรึกษาโครงการฟรี</KeepWords>
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
