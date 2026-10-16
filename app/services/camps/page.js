import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import ServicesSubnav from "@/components/ServicesSubnav";
import {
  CheckItem,
  SectionHead,
  ServiceCta,
  ServiceHero,
  StepBadge,
  WorkCards,
  WorksHeader,
} from "@/components/ServiceBits";
import { campDays, campIncludes, campTracks, packages, packagesNote, worksByTitle } from "@/lib/data";
import { pageMeta } from "@/lib/metadata";

export const metadata = {
  title: "ค่ายและเวิร์กช็อป",
  description:
    "Signature Camp 2–3 วัน เลือก 1 track: Leadership, Design Thinking หรือ STEAM ทุก track จบด้วยผลงานจริง และ Spark Workshop เวิร์กช็อป 1 หัวข้อในโรงเรียน",
  ...pageMeta("/services/camps"),
};

const baht = (n) => n.toLocaleString("en-US");
const spark = packages.find((p) => p.step === "01");
const camp = packages.find((p) => p.step === "02");

const heroPhotos = [
  { src: "/work/08-3.jpg", alt: "ทีมนักเรียนถือต้นแบบชิ้นงานในวันสุดท้ายของค่าย" },
  { src: "/work/05-1.jpg", alt: "นักเรียนลงพื้นที่สัมภาษณ์คนในชุมชน" },
  { src: "/work/07-3.jpg", alt: "นักเรียนช่วยกันวางแผนบนกระดาษแผ่นใหญ่" },
];

const works = worksByTitle([
  "SK Design Thinking Camp 2026",
  "ค่ายผู้นำรุ่นใหม่หัวใจพัฒนา รุ่นที่ 18 - Leadership Camp",
  "AC STEM Workshop: Turbo Motion Challenge",
]);

export default function CampsPage() {
  return (
    <>
      <ServicesSubnav />

      <ServiceHero className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <StepBadge step="02">Signature Camp</StepBadge>
            <span className="eyebrow bg-white/10 text-white ring-white/20">
              <KeepWords>บริการหลัก</KeepWords>
            </span>
          </div>
          <h1 className="mt-6 font-display text-[32px] font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            <KeepWords>ค่ายที่นักเรียนลงมือ จนได้ผลงานจริงในวันสุดท้าย</KeepWords>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-brand-100 sm:text-lg lg:mx-0">
            <KeepWords>
              ไม่ใช่ค่ายนั่งฟังบรรยาย เลือก 1 track แล้วเราออกแบบทุกกิจกรรมให้พาผู้เรียนไปถึงผลงานนั้น ภายใต้การดูแลของทีมกระบวนกรมืออาชีพ
            </KeepWords>
          </p>
          <dl className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 text-left sm:grid-cols-4 lg:mx-0">
            {[
              ["ระยะเวลา", camp.duration],
              ["รูปแบบ", "ไป–กลับ / ค้างคืน"],
              ["สตาฟดูแล", "1:20 หรือ 1:10"],
              ["เริ่มต้น", `${baht(camp.price.amount)} บาท`],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white/10 px-3.5 py-3 ring-1 ring-inset ring-white/15">
                <dt className="text-xs text-brand-200">{k}</dt>
                <dd className="mt-0.5 font-display text-sm font-semibold text-white sm:text-[15px]">
                  <KeepWords>{v}</KeepWords>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50" data-ga-event="cta_consult_click">
              <KeepWords>ปรึกษาการจัดค่าย</KeepWords>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="#spark" className="btn-ghost-light">
              <KeepWords>เริ่มเบา ๆ ด้วย Spark</KeepWords>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          {heroPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl bg-brand-800 ring-1 ring-white/10 ${
                i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={i === 0}
                sizes={i === 0 ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 280px, 50vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </ServiceHero>

      {/* Tracks */}
      <section className="section">
        <div className="container-page">
          <SectionHead
            eyebrow="เลือก 1 track"
            title="3 track · ทุก track จบด้วยผลงานจริง"
            lead="แต่ละค่ายออกแบบรอบประเด็นเดียว เราปรับเนื้อหา ระดับความยาก และโจทย์ให้ตรงกับผู้เรียนของคุณ"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {campTracks.map((track, i) => (
              <article key={track.name} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100">
                <div className="flex flex-grow flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider text-brand-600">TRACK 0{i + 1}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <track.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{track.name}</h3>
                  <p className="mt-2 flex-grow text-pretty text-sm leading-relaxed text-slate-600">
                    <KeepWords>{track.description}</KeepWords>
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {track.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs text-brand-800">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-800 px-6 py-4 text-white">
                  <p className="text-xs text-brand-200">วันสุดท้ายได้</p>
                  <p className="mt-0.5 font-display font-semibold">
                    <KeepWords>{track.result}</KeepWords>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A sample camp */}
      <section className="section bg-brand-50">
        <div className="container-page">
          <SectionHead eyebrow="ตัวอย่างค่าย 2 วัน 1 คืน" title="เริ่มด้วยการวัด จบด้วยผลงานและการวัดซ้ำ" />
          <ol className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* The line joining the four markers, desktop only. */}
            <span className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-brand-200 lg:block" aria-hidden="true" />
            {campDays.map((d) => {
              const map = isNaN(Number(d.mark));
              return (
                <li key={d.title} className="relative flex flex-col items-center text-center">
                  <span
                    className={`relative flex h-14 min-w-[56px] items-center justify-center rounded-full px-3 font-display text-sm font-semibold ${
                      map ? "bg-brand-600 text-white" : "bg-white text-brand-700 ring-2 ring-brand-200"
                    }`}
                  >
                    {d.mark}
                  </span>
                  <p className="mt-4 text-xs font-medium text-brand-600">
                    <KeepWords>{d.when}</KeepWords>
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-slate-900">
                    <KeepWords>{d.title}</KeepWords>
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    <KeepWords>{d.text}</KeepWords>
                  </p>
                </li>
              );
            })}
          </ol>
          <p className="mt-10 text-balance text-center text-[13px] text-slate-600">
            <KeepWords>Map และ Re-map คือการวัดด้วย</KeepWords>{" "}
            <Link href="/skills-map" className="font-medium text-brand-600 underline-offset-4 hover:underline">
              Skills Map
            </Link>{" "}
            <KeepWords>ซึ่งเริ่มใช้ตั้งแต่ปีการศึกษา 2570</KeepWords>
          </p>
        </div>
      </section>

      {/* What's included + price */}
      <section className="section">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead align="left" eyebrow="สิ่งที่รวมในแพ็กเกจ" title="ทุกค่ายได้ครบ ตั้งแต่ก่อนเริ่มจนหลังจบ" />
            <ul className="mt-8 space-y-5">
              {campIncludes.map((item) => (
                <CheckItem key={item.title}>
                  <b className="font-semibold text-slate-900">
                    <KeepWords>{item.title}</KeepWords>
                  </b>
                  <span className="block text-sm text-slate-600">
                    <KeepWords>{item.text}</KeepWords>
                  </span>
                </CheckItem>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-7 text-white sm:p-9">
            <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
            <div className="relative">
              <StepBadge step="02">Signature Camp</StepBadge>
              <p className="mt-6 text-sm text-brand-200">เริ่มต้น</p>
              <p className="font-display text-5xl font-bold">
                {baht(camp.price.amount)} <span className="text-xl font-medium">บาท</span>
              </p>
              <p className="mt-1 text-sm text-brand-200">ต่อ 1 ห้อง (40 คน)</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Standard", "สตาฟ 1:20"],
                  ["Premium", "สตาฟ 1:10"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-white/10 p-4 ring-1 ring-inset ring-white/15">
                    <p className="text-xs text-brand-200">{k}</p>
                    <p className="mt-0.5 font-display font-semibold">{v}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-pretty text-[13px] text-brand-100">
                <KeepWords>{packagesNote}</KeepWords>
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50" data-ga-event="cta_consult_click">
                  <KeepWords>ขอใบเสนอราคา</KeepWords>
                </Link>
                <Link href="/services/packages#estimate" className="btn-ghost-light">
                  <KeepWords>ประมาณราคาตามจำนวนคน</KeepWords>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spark */}
      <section id="spark" className="section scroll-mt-16 bg-brand-50">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <StepBadge step="01">
              <KeepWords>{`Spark Workshop · ${spark.duration}`}</KeepWords>
            </StepBadge>
            <h2 className="mt-5 font-display text-3xl font-bold !leading-snug text-slate-900 sm:text-4xl">
              <KeepWords>ยังไม่พร้อมจัดค่าย? เริ่มเบา ๆ ด้วย Spark</KeepWords>
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-slate-600 sm:text-[17px]">
              <KeepWords>
                เวิร์กช็อป 1 หัวข้อในโรงเรียน ให้ครูเห็นผลเร็ว นักเรียนได้ลองลงมือจริง แล้วค่อยต่อยอดเป็นค่ายหรือเส้นทาง 3 เดือน
              </KeepWords>
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {spark.topics.map((t) => (
                <li key={t} className="rounded-full bg-white px-3 py-1 text-[13px] text-brand-800 ring-1 ring-inset ring-brand-100">
                  <KeepWords>{t}</KeepWords>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="ต่อยอดได้">
              <StepBadge step="01">Spark</StepBadge>
              <ArrowRight className="h-4 w-4 text-brand-400" aria-hidden="true" />
              <StepBadge step="02">Signature</StepBadge>
              <ArrowRight className="h-4 w-4 text-brand-400" aria-hidden="true" />
              <StepBadge step="03">Stride</StepBadge>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-brand-100 lg:col-span-2">
            <ul className="space-y-2.5">
              {[...spark.includes.slice(0, 2), "Skills Map แบบสั้น 3 ทักษะ (เริ่มปีการศึกษา 2570)", spark.includes[2]].map((t) => (
                <CheckItem key={t}>
                  <KeepWords>{t}</KeepWords>
                </CheckItem>
              ))}
            </ul>
            <div className="mt-6 border-t border-brand-100 pt-5">
              <p className="text-[13px] text-slate-600">เริ่มต้น</p>
              <p className="font-display text-4xl font-bold text-brand-600">
                {baht(spark.price.amount)} <span className="text-lg font-medium text-slate-600">บาท</span>
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-6 w-full" data-ga-event="cta_consult_click">
              <KeepWords>จอง Spark Workshop</KeepWords>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="section">
        <div className="container-page">
          <WorksHeader title="ค่ายและเวิร์กช็อปที่เราจัด" />
          <div className="mt-10">
            <WorkCards works={works} />
          </div>
        </div>
      </section>

      <ServiceCta
        eyebrow="วางแผนค่ายเทอมหน้า"
        title="บอกจำนวนนักเรียน ช่วงเวลา และ track ที่สนใจ"
        lead="ทีมงานตอบกลับภายใน 1 วันทำการ"
        primary="ปรึกษาการจัดค่าย"
        second={{ href: "/services/partnership", label: "อยากให้ต่อเนื่อง? ดู Stride" }}
      />
    </>
  );
}
