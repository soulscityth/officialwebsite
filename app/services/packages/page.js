import Link from "next/link";
import { ArrowRight, ClipboardCheck, Sparkles, Tent } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import ServicesSubnav from "@/components/ServicesSubnav";
import PriceEstimator from "@/components/PriceEstimator";
import { CheckItem, SectionHead, ServiceCta, ServiceHero, StepBadge, stepTone } from "@/components/ServiceBits";
import { expertiseGroups, packageChooser, packageCompare, packages, packagesNote } from "@/lib/data";
import { pageMeta } from "@/lib/metadata";

export const metadata = {
  title: "แพ็กเกจและราคา",
  description:
    "บันได 4 ขั้นของ SoulScity: Spark Workshop, Signature Camp, Stride Journey และ Summit Partner เทียบสิ่งที่ได้และราคาเริ่มต้นในที่เดียว พร้อมประมาณงบตามจำนวนผู้เรียน",
  ...pageMeta("/services/packages"),
};

const baht = (n) => n.toLocaleString("en-US");

// Stair heights in the hero, smallest step first.
const STAIR_HEIGHT = ["h-[40%]", "h-[60%]", "h-[80%]", "h-full"];

const formats = [
  {
    icon: Tent,
    name: "Camp",
    duration: "2–3 วัน",
    text: "ไป–กลับ หรือค้างคืน ผู้เรียนลงมือจนได้ผลงานจริงในวันสุดท้าย",
    link: { href: "/services/camps", label: "Signature Camp" },
  },
  {
    icon: ClipboardCheck,
    name: "Workshop",
    duration: "3 ชม. – 1 วัน",
    text: "ลงมือทำ 1 หัวข้อ เห็นผลเร็ว ใช้ได้ทั้งกับนักเรียนและครู",
    link: { href: "/services/camps#spark", label: "Spark Workshop" },
  },
  {
    icon: Sparkles,
    name: "Facilitation",
    duration: "ตามโจทย์",
    text: "จัดกระบวนการประชุม ระดมความคิด และเวทีถอดบทเรียน ให้สิ่งที่เรียนถูกนำไปใช้ต่อ",
    link: { href: "/services/organizations", label: "สำหรับองค์กรและมหาวิทยาลัย" },
  },
];

const groupDot = { amber: "bg-amber-600", rose: "bg-rose-600", violet: "bg-violet-600", sky: "bg-sky-600" };

export default function PackagesPage() {
  return (
    <>
      <ServicesSubnav />

      <ServiceHero className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="eyebrow bg-white/10 text-white ring-white/20">แพ็กเกจและราคา</span>
          <h1 className="mt-6 font-display text-[32px] font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            <KeepWords>เริ่มจากก้าวเล็ก ๆ จนเป็นพันธมิตรทั้งปีการศึกษา</KeepWords>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-brand-100 sm:text-lg lg:mx-0">
            <KeepWords>
              บันได 4 ขั้นที่ต่อยอดกันได้ทุกขั้น ทุกงานออกแบบเฉพาะผู้เรียนของคุณ และวัดการเติบโตด้วย Skills Map กรอบเดียวกัน
            </KeepWords>
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#compare" className="btn bg-white text-brand-800 hover:bg-brand-50">
              <KeepWords>เทียบแพ็กเกจและราคา</KeepWords>
            </a>
            <a href="#estimate" className="btn-ghost-light">
              <KeepWords>ประมาณราคาเบื้องต้น</KeepWords>
            </a>
          </div>
          <p className="mt-6 text-pretty text-sm text-brand-200">
            <KeepWords>ไว้วางใจโดย สวนกุหลาบวิทยาลัย · อัสสัมชัญ · เซนต์คาเบรียล · LSEd ธรรมศาสตร์ และอีก 30+ แห่ง</KeepWords>
          </p>
        </div>

        <div>
          <nav aria-label="บันได 4 ขั้น" className="grid h-64 grid-cols-4 items-end gap-2 sm:h-80 sm:gap-2.5">
            {packages.map((pkg, i) => (
              <Link
                key={pkg.step}
                href={packageCompare[i].href}
                className={`flex flex-col justify-between rounded-t-2xl rounded-b-md p-3 transition-transform duration-200 hover:-translate-y-1 sm:p-4 ${
                  STAIR_HEIGHT[i]
                } ${pkg.step === "01" ? "bg-brand-100 text-brand-800" : stepTone[pkg.step].box} ${
                  pkg.step === "04" ? "ring-1 ring-inset ring-white/15" : ""
                }`}
              >
                <span className="font-display text-2xl font-bold opacity-90 sm:text-3xl">{pkg.step}</span>
                <span>
                  <span className="block font-display text-sm font-semibold !leading-tight sm:text-base">{pkg.title}</span>
                  {/* Durations don't fit a quarter of a phone; the compare cards below carry them. */}
                  <span className="mt-1 hidden text-xs opacity-85 sm:block">
                    <KeepWords>{pkg.duration}</KeepWords>
                  </span>
                </span>
              </Link>
            ))}
          </nav>
          <Link
            href="/services/organizations"
            className="mt-3 flex min-h-[52px] items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/15"
          >
            <span>
              <b className="font-semibold">องค์กรและมหาวิทยาลัย</b>{" "}
              <span className="text-brand-200">
                <KeepWords>· ออกแบบตามโจทย์ ราคาตามงาน</KeepWords>
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </ServiceHero>

      {/* Formats */}
      <section className="section">
        <div className="container-page">
          <SectionHead
            eyebrow="รูปแบบกิจกรรม"
            title="3 รูปแบบ ปรับให้เข้ากับทุกบริบท"
            lead="ทุกขั้นในบันไดประกอบขึ้นจาก 3 รูปแบบนี้ เลือกตามเวลาที่มีและสิ่งที่อยากให้ผู้เรียนได้"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {formats.map((f) => (
              <div key={f.name} className="card flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <f.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-slate-900">{f.name}</h3>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                    <KeepWords>{f.duration}</KeepWords>
                  </span>
                </div>
                <p className="mt-3 flex-grow text-pretty text-sm leading-relaxed text-slate-600">
                  <KeepWords>{f.text}</KeepWords>
                </p>
                <Link
                  href={f.link.href}
                  className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 self-start text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  <KeepWords>{f.link.label}</KeepWords>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare all four */}
      <section id="compare" className="section scroll-mt-16 bg-brand-50">
        <div className="container-page">
          <SectionHead
            eyebrow="Our Packages · บันได 4 ขั้น"
            title="เทียบทุกขั้นในที่เดียว"
            lead="ยิ่งขั้นสูง ยิ่งต่อเนื่อง และหลักฐานการเติบโตยิ่งแน่น แต่ละขั้นต่อยอดจากขั้นก่อนหน้าได้ทันที"
          />
          <div className="mt-12 grid grid-cols-1 items-end gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg, i) => {
              const row = packageCompare[i];
              const tone = stepTone[pkg.step];
              return (
                <article key={pkg.step} className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-100">
                  <div
                    className={`flex flex-col justify-end gap-3 p-6 ${tone.box} ${
                      ["xl:min-h-[120px]", "xl:min-h-[160px]", "xl:min-h-[200px]", "xl:min-h-[240px]"][i]
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 text-xs font-medium">
                        <b className={`flex h-6 w-6 items-center justify-center rounded-full font-display ${tone.num}`}>{pkg.step}</b>
                        <KeepWords>{pkg.duration}</KeepWords>
                      </span>
                      {pkg.featured && (
                        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium">
                          <KeepWords>บริการหลัก</KeepWords>
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-bold !leading-snug">{pkg.title}</h3>
                  </div>
                  <dl className="flex flex-grow flex-col gap-4 p-6 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-brand-600">เหมาะกับ</dt>
                      <dd className="mt-1 leading-relaxed text-slate-800">
                        <KeepWords>{row.fit}</KeepWords>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-brand-600">ได้อะไร</dt>
                      <dd className="mt-1.5">
                        <ul className="space-y-1.5">
                          {row.gets.map((g) => (
                            <CheckItem key={g}>
                              <KeepWords>{g}</KeepWords>
                            </CheckItem>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div className="flex-grow">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-brand-600">Skills Map</dt>
                      <dd className="mt-1 text-slate-800">
                        <KeepWords>{row.skillsMap}</KeepWords>
                      </dd>
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-3 border-t border-brand-100 pt-4">
                      <p className="text-[13px] text-slate-600">
                        {pkg.price.plus ? `${pkg.price.label} · Plus ${baht(pkg.price.plus)}` : pkg.price.label}
                        <span className="mt-0.5 block">
                          <strong className="font-display text-2xl font-bold text-brand-600">{baht(pkg.price.amount)}</strong> บาท
                        </span>
                      </p>
                      <Link
                        href={row.href}
                        className={`${pkg.featured ? "btn-primary" : "btn-secondary"} px-4 py-2.5`}
                      >
                        <KeepWords>ดูรายละเอียด</KeepWords>
                      </Link>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
          <p className="mt-6 text-balance text-center text-[13px] text-slate-600">
            <KeepWords>{packagesNote}</KeepWords>{" "}
            <Link href="/skills-map" className="font-medium text-brand-600 underline-offset-4 hover:underline">
              <KeepWords>Skills Map เริ่มภาคเรียนที่ 2 ปีการศึกษา 2569</KeepWords>
            </Link>
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section id="estimate" className="section scroll-mt-16">
        <div className="container-page grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              align="left"
              eyebrow="ประมาณราคาเบื้องต้น"
              title="ผู้เรียนของคุณมีกี่คน?"
              lead="ราคาคิดต่อห้อง 40 คน ลองเลือกแพ็กเกจและจำนวนผู้เรียน เพื่อดูงบเริ่มต้นก่อนคุยกับทีม"
            />
            <ul className="mt-6 space-y-2.5">
              {[
                "ตัวเลขนี้คือราคาเริ่มต้นของกระบวนการเรียนรู้",
                "ยังไม่รวมที่พัก อาหาร สถานที่ และรถ",
                "5 ห้องขึ้นไป ทีมจะเสนอราคาเฉพาะงานให้",
              ].map((t) => (
                <CheckItem key={t}>
                  <KeepWords>{t}</KeepWords>
                </CheckItem>
              ))}
            </ul>
          </div>
          <PriceEstimator packages={packages} />
        </div>
      </section>

      {/* Which step */}
      <section className="section bg-brand-50">
        <div className="container-page">
          <SectionHead eyebrow="เลือกขั้นไหนดี" title="โจทย์ของคุณตรงกับข้อไหน" />
          <ul className="mx-auto mt-10 max-w-4xl space-y-3">
            {packageChooser.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="flex flex-col gap-3 rounded-2xl bg-white px-5 py-4 shadow-card ring-1 ring-slate-100 transition-transform duration-200 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                >
                  <span className="text-pretty font-display text-base text-slate-900 sm:text-lg">
                    <KeepWords>{`“${c.need}”`}</KeepWords>
                  </span>
                  <StepBadge step={c.step}>
                    <KeepWords>{c.label}</KeepWords>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </StepBadge>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead align="left" eyebrow="ทักษะที่เราออกแบบได้" title="ประเด็นการเรียนรู้ที่เราเชี่ยวชาญ" />
            <Link href="/skills-map" className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
              <KeepWords>วัดผลด้วย Skills Map</KeepWords>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseGroups.map((group) => (
              <div key={group.name}>
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-slate-900">
                  <span className={`h-2.5 w-2.5 rounded-full ${groupDot[group.color]}`} aria-hidden="true" />
                  <KeepWords>{group.name}</KeepWords>
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <li key={tag} className="whitespace-nowrap rounded-full bg-brand-50 px-3 py-1 text-[13px] text-brand-800">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCta
        eyebrow="ปรึกษาฟรี"
        title="ยังเลือกไม่ได้? เล่าโจทย์ให้เราฟัง แล้วเราช่วยออกแบบ"
        lead="ทีมงานตอบกลับภายใน 1 วันทำการ"
        primary="ปรึกษาโครงการฟรี"
      />
    </>
  );
}
