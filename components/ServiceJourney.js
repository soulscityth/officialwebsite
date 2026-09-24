import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import { serviceJourney } from "@/lib/data";

// brand-300, drawn as 6px dashes. Horizontal between the markers on desktop,
// vertical down the left edge once the cards stack.
const dashes = (direction) => ({
  backgroundImage: `linear-gradient(${direction}, #71b7b8 50%, transparent 50%)`,
  backgroundSize: direction === "90deg" ? "12px 2px" : "2px 12px",
});

function Marker({ stage }) {
  if (stage.featured) {
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
          <path d="M12 2C12.8 8 16 11.2 22 12C16 12.8 12.8 16 12 22C11.2 16 8 12.8 2 12C8 11.2 11.2 8 12 2Z" />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-300 bg-white font-display text-[15px] font-semibold text-brand-600">
      {stage.step}
    </span>
  );
}

function Card({ stage }) {
  const dark = stage.featured;
  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-2xl p-6 sm:p-8 ${
        dark
          ? "bg-brand-900 bg-[length:20px_20px,auto] text-white shadow-[0_20px_40px_-16px_rgba(3,30,31,0.5)] lg:-my-3"
          : "bg-white shadow-card"
      }`}
      style={
        dark
          ? {
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0), linear-gradient(135deg, #0c4f52 0%, #0a4245 45%, #031e1f 100%)",
            }
          : undefined
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <span
          className={`rounded-full px-3 py-1 text-[13px] font-medium ${
            dark ? "bg-white/[0.12] text-brand-100" : "bg-brand-50 text-brand-600"
          }`}
        >
          <KeepWords>{stage.stage}</KeepWords>
        </span>
        <span className={`text-[13px] ${dark ? "text-brand-200" : "text-slate-600"}`}>
          <KeepWords>{stage.duration}</KeepWords>
        </span>
      </div>
      <h3 className={`font-display text-[26px] font-semibold ${dark ? "text-white" : "text-slate-900"}`}>
        {stage.title}
      </h3>
      <p className={`text-pretty text-[15px] leading-relaxed ${dark ? "text-brand-100" : "text-slate-600"}`}>
        <KeepWords>{stage.description}</KeepWords>
      </p>
      {stage.link && (
        <Link
          href={stage.link.href}
          className="inline-flex min-h-[44px] items-center gap-2 self-start text-[15px] font-medium text-white hover:text-brand-100"
        >
          <KeepWords>{stage.link.label}</KeepWords>
          <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
        </Link>
      )}
      <p
        className={`mt-auto border-t pt-4 text-sm leading-normal ${
          dark ? "border-white/15 text-brand-100" : "border-brand-100 text-slate-600"
        }`}
      >
        <span className={`font-medium ${dark ? "text-white" : "text-slate-900"}`}>
          <KeepWords>เหมาะกับ</KeepWords>
        </span>
        {stage.fitFor.map((item) => (
          <Fragment key={item}>
            {" "}
            <span className="inline-block">
              <KeepWords>{item}</KeepWords>
            </span>
          </Fragment>
        ))}
      </p>
    </div>
  );
}

export default function ServiceJourney() {
  return (
    <section className="section bg-brand-50">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow bg-white">Our Services · บริการของเรา</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            <KeepWords>ตั้งแต่จุดประกาย จนถึงการเปลี่ยนแปลงที่ยั่งยืน</KeepWords>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance leading-relaxed text-slate-600 sm:text-[17px]">
            <KeepWords>
              เลือกเฉพาะบริการที่ต้องการ หรือรวมทั้งสามเป็นโครงการต่อเนื่อง เราออกแบบให้ทุกขั้นเชื่อมถึงกัน
            </KeepWords>
          </p>
        </div>

        {/* Desktop: the markers sit in their own row above the cards, joined by one line. */}
        <div className="relative mt-14 hidden h-10 grid-cols-3 gap-6 lg:grid" aria-hidden="true">
          <div className="absolute left-[16.6%] right-[16.6%] top-[19px] h-0.5" style={dashes("90deg")} />
          {serviceJourney.map((stage) => (
            <div key={stage.title} className="relative flex justify-center">
              <Marker stage={stage} />
            </div>
          ))}
        </div>

        {/* Stacked below lg: each marker moves beside its card, and a line from each
            marker runs down to the next one. */}
        <ol className="mt-10 grid grid-cols-1 gap-5 lg:mt-7 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {serviceJourney.map((stage, i) => (
            <li key={stage.title} className="relative grid grid-cols-[40px_1fr] gap-3 sm:gap-4 lg:block">
              {i < serviceJourney.length - 1 && (
                <div
                  className="absolute left-[19px] top-9 -bottom-14 w-0.5 lg:hidden"
                  style={dashes("180deg")}
                  aria-hidden="true"
                />
              )}
              <div className="relative pt-4 lg:hidden" aria-hidden="true">
                <Marker stage={stage} />
              </div>
              <Card stage={stage} />
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center lg:mt-14">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
          >
            <KeepWords>กำลังตัดสินใจว่าแบบไหนดี? ปรึกษาโครงการฟรี</KeepWords>
          </Link>
        </div>
      </div>
    </section>
  );
}
