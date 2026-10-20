import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import ServicesSubnav from "@/components/ServicesSubnav";
import { SectionHead, ServiceCta, ServiceHero, StepBadge } from "@/components/ServiceBits";
import { evidenceRounds, packages, packagesNote, skillsMap, strideMonths, summitRows } from "@/lib/data";
import { pageMeta } from "@/lib/metadata";
import { contactHref } from "@/lib/contact";

export const metadata = {
  title: "พันธมิตรระยะยาว",
  description:
    "Stride Journey เส้นทางพัฒนา 3 เดือน และ Summit Partner พันธมิตรทั้งปีการศึกษา วัดผลด้วย Skills Map และรายงานให้ผู้บริหารทุกช่วง",
  ...pageMeta("/services/partnership"),
};

const baht = (n) => n.toLocaleString("en-US");
const PLAN_CONTACT = contactHref({ subject: "นัดคุยวางแผนปีการศึกษา: Stride Journey / Summit Partner" });
const stride = packages.find((p) => p.step === "03");
const summit = packages.find((p) => p.step === "04");

// The hero's sample report is the Skills Map demo data (before vs after camp), the
// same invented numbers /skills-map shows, labelled as such.
function sampleReport() {
  const { demo, skills } = skillsMap;
  const after = demo.rounds[0].values;
  const rows = skills
    .map((s, i) => ({ name: s.name, gain: after[i] - demo.before[i], after: after[i] }))
    .sort((a, b) => b.gain - a.gain);
  const avg = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const weakest = skills[after.indexOf(Math.min(...after))].name;
  return {
    title: demo.title,
    rows,
    max: Math.max(...rows.map((r) => r.gain)),
    before: avg(demo.before).toFixed(1),
    after: avg(after).toFixed(1),
    top: rows[0].name,
    weakest,
  };
}

export default function PartnershipPage() {
  const report = sampleReport();

  return (
    <>
      <ServicesSubnav />

      {/* Text column a little wider: at 1024px an even split left "ให้ ผอ. เห็นพัฒนาการ" 7px short. */}
      <ServiceHero className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="text-center lg:text-left">
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            <StepBadge step="03">Stride Journey</StepBadge>
            <StepBadge step="04">Summit Partner</StepBadge>
          </div>
          <h1 className="mt-6 font-display text-[32px] font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            {/* Three phrases: left to balance it split "ของนักเรียน / ทั้งปี" at every width. */}
            <span className="inline-block">
              <KeepWords>ให้ ผอ. เห็นพัฒนาการ</KeepWords>
            </span>{" "}
            <span className="inline-block">
              <KeepWords>ของนักเรียนทั้งปี</KeepWords>
            </span>{" "}
            <span className="inline-block">
              <KeepWords>ไม่ใช่แค่วันค่าย</KeepWords>
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-brand-100 sm:text-lg lg:mx-0">
            <KeepWords>
              เส้นทางพัฒนาต่อเนื่อง 3 เดือน หรือพันธมิตรทั้งปีการศึกษา วัดผลด้วย Skills Map และรายงานให้ผู้บริหารทุกช่วง
            </KeepWords>
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href={PLAN_CONTACT} className="btn bg-white text-brand-800 hover:bg-brand-50" data-ga-event="cta_consult_click">
              <KeepWords>นัดคุยวางแผนปีการศึกษา</KeepWords>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="#stride" className="btn-ghost-light">
              <KeepWords>ดูแผนและราคา</KeepWords>
            </a>
          </div>
        </div>

        {/* Sample executive summary */}
        <figure className="rounded-3xl bg-white p-6 text-slate-900 shadow-[0_24px_48px_-20px_rgba(3,30,31,0.55)] sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">SoulScity Skills Map</p>
              <p className="mt-1 font-display text-lg font-semibold">
                <KeepWords>สรุปผลสำหรับผู้บริหาร</KeepWords>
              </p>
              <p className="text-sm text-slate-600">{report.title}</p>
            </div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
              <KeepWords>ตัวอย่าง · ข้อมูลสมมติ</KeepWords>
            </span>
          </div>
          <ul className="mt-5 space-y-2.5" aria-label="คะแนนที่เพิ่มขึ้นรายทักษะ หลังค่ายเทียบก่อนค่าย">
            {report.rows.map((r) => (
              <li key={r.name} className="grid grid-cols-[88px_1fr_40px] items-center gap-3 text-sm">
                <span className="text-slate-700">{r.name}</span>
                <span className="h-2.5 rounded-full bg-brand-50">
                  <span className="block h-full rounded-full bg-brand-600" style={{ width: `${(r.gain / report.max) * 100}%` }} />
                </span>
                <b className="text-right font-display font-semibold text-brand-700">+{r.gain.toFixed(1)}</b>
              </li>
            ))}
          </ul>
          <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-brand-100 pt-5 text-center">
            {[
              ["ค่าเฉลี่ย 7 ทักษะ", `${report.before} → ${report.after}`],
              ["โตมากสุด", report.top],
              ["ควรเติมต่อ", report.weakest],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] text-slate-500 sm:text-xs">
                  <KeepWords>{k}</KeepWords>
                </dt>
                <dd className="mt-1 font-display text-sm font-semibold text-slate-900 sm:text-base">{v}</dd>
              </div>
            ))}
          </dl>
          <figcaption className="mt-4 text-center text-xs text-slate-500">
            <KeepWords>หน้าตารายงานที่ ผอ. จะได้รับ · Skills Map เริ่มภาคเรียนที่ 2 ปีการศึกษา 2569</KeepWords>
          </figcaption>
        </figure>
      </ServiceHero>

      {/* Why continuous */}
      <section className="section">
        <div className="container-page">
          <SectionHead
            eyebrow="ทำไมต้องต่อเนื่อง"
            title="ค่ายครั้งเดียวสร้างแรงบันดาลใจ เส้นทางต่อเนื่องสร้างทักษะที่ติดตัว"
          />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="font-display text-lg font-semibold text-slate-500">
                <KeepWords>กิจกรรมครั้งเดียว</KeepWords>
              </h3>
              <ul className="mt-4 space-y-2.5 text-[15px] text-slate-600">
                {["นักเรียนสนุก แต่ไม่รู้ว่านำไปใช้ต่อไหม", "ครูเริ่มคุยโจทย์ใหม่ทุกครั้ง", "มีแค่ภาพกิจกรรมไว้รายงาน"].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Minus className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                    <KeepWords>{t}</KeepWords>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-800 p-6 text-white">
              <h3 className="font-display text-lg font-semibold">Stride / Summit</h3>
              <ul className="mt-4 space-y-2.5 text-[15px] text-brand-50">
                {[
                  "วัดซ้ำหลังจบ 1 เดือน",
                  "ทีมเดิมรู้บริบทโรงเรียน",
                  "รายงานตามสมรรถนะหลักสูตรแกนกลางฯ ใส่รายงานผลงานโรงเรียนได้",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand-300" strokeWidth={2.5} aria-hidden="true" />
                    <KeepWords>{t}</KeepWords>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stride */}
      <section id="stride" className="section scroll-mt-16 bg-brand-50">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <StepBadge step="03">{stride.duration}</StepBadge>
              <h2 className="mt-4 font-display text-3xl font-bold !leading-snug text-slate-900 sm:text-4xl">{stride.title}</h2>
              <p className="mt-3 text-pretty leading-relaxed text-slate-600 sm:text-[17px]">
                <KeepWords>{stride.description}</KeepWords>
              </p>
            </div>
            <div>
              <p className="text-[13px] text-slate-600">{stride.price.label}</p>
              <p className="font-display text-4xl font-bold text-brand-600">
                {baht(stride.price.amount)} <span className="text-lg font-medium text-slate-600">บาท</span>
              </p>
              <span className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-100">
                <KeepWords>ประหยัดกว่าซื้อแยก ~9%</KeepWords>
              </span>
            </div>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {strideMonths.map((m, i) => (
              <li
                key={m.month}
                className={`rounded-2xl p-6 ${
                  i === 2 ? "bg-brand-800 text-white" : "bg-white shadow-card ring-1 ring-slate-100"
                }`}
              >
                <span className={`font-display text-3xl font-bold ${i === 2 ? "text-brand-300" : "text-brand-200"}`}>0{i + 1}</span>
                <p className={`mt-2 text-xs font-semibold uppercase tracking-wider ${i === 2 ? "text-brand-200" : "text-brand-600"}`}>
                  {m.month}
                </p>
                <h3 className={`mt-1 font-display text-lg font-semibold ${i === 2 ? "text-white" : "text-slate-900"}`}>
                  <KeepWords>{m.title}</KeepWords>
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === 2 ? "text-brand-100" : "text-slate-600"}`}>
                  <KeepWords>{m.text}</KeepWords>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Summit */}
      <section id="summit" className="section scroll-mt-16">
        <div className="container-page">
          <div className="max-w-2xl">
            <StepBadge step="04">{summit.duration}</StepBadge>
            <h2 className="mt-4 font-display text-3xl font-bold !leading-snug text-slate-900 sm:text-4xl">{summit.title}</h2>
            <p className="mt-3 text-pretty leading-relaxed text-slate-600 sm:text-[17px]">
              <KeepWords>{`${summit.description} เลือกระดับที่เหมาะกับโรงเรียน`}</KeepWords>
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl shadow-card ring-1 ring-brand-100">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead>
                <tr className="border-b border-brand-100">
                  <th scope="col" className="p-4 font-normal text-slate-600 sm:p-5">
                    <KeepWords>สิ่งที่โรงเรียนได้รับ</KeepWords>
                  </th>
                  <th scope="col" className="w-[88px] px-2 py-4 text-center font-normal sm:w-44 sm:p-5">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-600">Standard</span>
                    <span className="mt-1 block font-display text-lg font-bold text-slate-900 sm:text-2xl">{baht(summit.price.amount)}</span>
                    <span className="text-xs text-slate-500">บาท</span>
                  </th>
                  <th scope="col" className="w-[88px] bg-brand-800 px-2 py-4 text-center font-normal text-white sm:w-44 sm:p-5">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-200">Plus</span>
                    <span className="mt-1 block font-display text-lg font-bold sm:text-2xl">{baht(summit.price.plus)}</span>
                    <span className="text-xs text-brand-200">บาท</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {summitRows.map((row) => (
                  <tr key={row.item} className="border-b border-brand-50 last:border-0">
                    <th scope="row" className="p-4 font-normal text-slate-800 sm:pl-5">
                      <KeepWords>{row.item}</KeepWords>
                    </th>
                    <td className="p-4 text-center">
                      {row.standard ? (
                        <Check className="mx-auto h-5 w-5 text-brand-600" strokeWidth={2.5} aria-label="มี" />
                      ) : (
                        <Minus className="mx-auto h-5 w-5 text-slate-300" aria-label="ไม่มี" />
                      )}
                    </td>
                    <td className="bg-brand-50/60 p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-brand-600" strokeWidth={2.5} aria-label="มี" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-pretty text-[13px] text-slate-600">
            <KeepWords>{packagesNote}</KeepWords>
          </p>
        </div>
      </section>

      {/* Evidence */}
      <section className="section bg-brand-50">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead align="left" eyebrow="หลักฐานที่ ผอ. ได้" title="วัด 3 รอบ เห็นว่าทักษะติดตัวจริง" />
            <Link href="/skills-map" className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
              <KeepWords>Skills Map ทำงานอย่างไร</KeepWords>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {evidenceRounds.map((r) => (
              <li key={r.title} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white">
                  {r.mark}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900">
                  <KeepWords>{r.title}</KeepWords>
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  <KeepWords>{r.text}</KeepWords>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ServiceCta
        eyebrow="ปีการศึกษาหน้า"
        title="วางแผนพัฒนานักเรียนทั้งปีไปด้วยกัน"
        lead="เล่าเป้าหมายของโรงเรียนให้เราฟัง ทีมงานตอบกลับภายใน 1 วันทำการ"
        primary="นัดคุยวางแผนปีการศึกษา"
        contact={PLAN_CONTACT}
      />
    </>
  );
}
