import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import ServicesSubnav from "@/components/ServicesSubnav";
import OrgAudiences from "@/components/OrgAudiences";
import { CheckItem, SectionHead, ServiceCta, ServiceHero, WorkCards, WorksHeader } from "@/components/ServiceBits";
import { facilitationFormats, orgAudiences, orgPartnerNames, orgProcess, partners, worksByTitle } from "@/lib/data";
import { pageMeta } from "@/lib/metadata";
import { contactHref } from "@/lib/contact";

export const metadata = {
  title: "องค์กรและมหาวิทยาลัย",
  description:
    "Team building, Leadership สำหรับหัวหน้างาน, ปฐมนิเทศ และเวทีถอดบทเรียน ออกแบบตามโจทย์ขององค์กร คณะ และสโมสรนักศึกษา เสนอราคาตามงาน",
  ...pageMeta("/services/organizations"),
};

const ORG_CONTACT = contactHref({
  subject: "ขอใบเสนอราคา: กิจกรรมสำหรับองค์กร / มหาวิทยาลัย",
  pkg: "องค์กร / มหาวิทยาลัย (ออกแบบตามโจทย์)",
});

const orgPartners = orgPartnerNames.map((name) => {
  const partner = partners.find((p) => p.name === name);
  if (!partner) throw new Error(`orgPartnerNames: no partner named ${name}`);
  return partner;
});

export default function OrganizationsPage() {
  const worksByAudience = Object.fromEntries(
    orgAudiences.map((a) => [
      a.id,
      <>
        <WorksHeader title={a.id === "corp" ? "ผลงานกับองค์กร" : "ผลงานกับมหาวิทยาลัย"} />
        <div className="mt-10">
          <WorkCards works={worksByTitle(a.works)} />
        </div>
      </>,
    ])
  );

  return (
    <>
      <ServicesSubnav />

      <ServiceHero className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="eyebrow bg-white/10 text-white ring-white/20">For Corporate &amp; University</span>
          <h1 className="mt-6 font-display text-[32px] font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            <KeepWords>กระบวนการเรียนรู้สำหรับทีมงาน คณะ และนักศึกษา</KeepWords>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-brand-100 sm:text-lg lg:mx-0">
            <KeepWords>
              Team building, Leadership สำหรับหัวหน้างาน, ปฐมนิเทศ และเวทีถอดบทเรียน ออกแบบตามโจทย์ขององค์กรคุณ ไม่ใช่แพ็กเกจสำเร็จรูป
            </KeepWords>
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href={ORG_CONTACT} className="btn bg-white text-brand-800 hover:bg-brand-50" data-ga-event="cta_consult_click">
              <KeepWords>ขอใบเสนอราคา</KeepWords>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="#works" className="btn-ghost-light">
              <KeepWords>ดูผลงานกับองค์กร</KeepWords>
            </a>
          </div>
        </div>
        <div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-brand-800 ring-1 ring-white/10">
            <Image
              src="/work/28-2.jpg"
              alt="ผู้เข้าอบรม CBA Middle Manager Training นำเสนองานกลุ่ม"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
            {["CBA จุฬาฯ", "Mitr Phol", "Giftwise Asia", "VetMed KU", "LSEd TU"].map((name) => (
              <li key={name} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-inset ring-white/20">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </ServiceHero>

      <OrgAudiences audiences={orgAudiences} worksByAudience={worksByAudience} />

      {/* Facilitation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page section relative">
          <SectionHead
            dark
            eyebrow="Facilitation"
            title="ให้ทีมสรุปสิ่งที่เรียนรู้ และรู้ก้าวต่อไป"
            lead="เราออกแบบกระบวนการให้ทุกเสียงได้พูด แล้วจบด้วยข้อสรุปที่ทุกคนเป็นเจ้าของ"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {facilitationFormats.map((f) => (
              <div key={f.title} className="flex flex-col rounded-2xl bg-white/[0.07] p-6 ring-1 ring-inset ring-white/15">
                <h3 className="font-display text-lg font-semibold text-white">
                  <KeepWords>{f.title}</KeepWords>
                </h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-brand-100">
                  <KeepWords>{f.text}</KeepWords>
                </p>
                <p className="mt-4 text-[13px] text-brand-300">
                  <KeepWords>{f.example}</KeepWords>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process + pricing */}
      <section className="section">
        <div className="container-page">
          <SectionHead eyebrow="ขั้นตอนการทำงาน" title="จากบรีฟ ถึงสรุปผล ใน 4 ขั้น" />
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {orgProcess.map((p) => (
              <li key={p.step} className="border-t-2 border-brand-600 pt-4">
                <p className="text-xs font-semibold tracking-wider text-brand-600">
                  {p.step} · {p.tag}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-slate-900">
                  <KeepWords>{p.title}</KeepWords>
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  <KeepWords>{p.text}</KeepWords>
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid grid-cols-1 items-center gap-8 rounded-3xl bg-brand-50 p-7 ring-1 ring-brand-100 sm:p-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="eyebrow bg-white">วิธีคิดราคา</span>
              <h3 className="mt-4 font-display text-2xl font-bold !leading-snug text-slate-900 sm:text-[28px]">
                <KeepWords>เสนอราคาตามโจทย์ ไม่ใช่ราคาต่อห้อง</KeepWords>
              </h3>
              <ul className="mt-5 space-y-2.5">
                {[
                  "คิดตามจำนวนผู้เข้าร่วม ระยะเวลา และจำนวน session",
                  "รวมการออกแบบ ทีมกระบวนกร อุปกรณ์ และสรุปผล",
                ].map((t) => (
                  <CheckItem key={t}>
                    <KeepWords>{t}</KeepWords>
                  </CheckItem>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <p className="text-pretty text-sm text-slate-600 lg:text-right">
                <KeepWords>เล่าโจทย์สั้น ๆ แล้วรับร่างกระบวนการพร้อมใบเสนอราคา</KeepWords>
              </p>
              <Link href={ORG_CONTACT} className="btn-primary" data-ga-event="cta_consult_click">
                <KeepWords>ขอใบเสนอราคา</KeepWords>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container-page">
          <p className="text-center text-sm font-medium text-slate-600">
            <KeepWords>องค์กรและมหาวิทยาลัยที่เคยทำงานกับเรา</KeepWords>
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {orgPartners.map((p) => (
              <li key={p.name} className="flex h-24 items-center justify-center rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                <Image src={p.logo} alt={p.name} width={160} height={64} className="max-h-14 w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceCta
        eyebrow="เริ่มจากบรีฟสั้น ๆ"
        title="เล่าโจทย์ของทีมคุณ แล้วรับร่างกระบวนการพร้อมใบเสนอราคา"
        lead="ทีมงานตอบกลับภายใน 1 วันทำการ"
        primary="ขอใบเสนอราคา"
        contact={ORG_CONTACT}
      />
    </>
  );
}
