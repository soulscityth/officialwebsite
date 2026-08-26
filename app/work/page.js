import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PortfolioGrid from "@/components/PortfolioGrid";
import { stats } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "ผลงานของเรา",
  description: `ผลงานค่าย เวิร์กช็อป และกิจกรรมการเรียนรู้ที่ ${siteConfig.name} ออกแบบและจัดขึ้น`,
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
        <div className="container-page relative section text-center lg:py-28">
          <span className="eyebrow bg-white/10 text-white ring-white/20">ผลงานของเรา</span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold !leading-snug tracking-wide text-white sm:text-5xl">
            ค่ายและเวิร์กช็อปที่เราออกแบบและจัดขึ้นจริง
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100">
            ตั้งแต่ปี 2566 เราร่วมงานกับโรงเรียน มหาวิทยาลัย และองค์กรกว่า 35 แห่งทั่วประเทศ ในการออกแบบและจัดกระบวนการเรียนรู้
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/15 backdrop-blur">
                <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] text-brand-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section">
        <div className="container-page">
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-hero-grid bg-[length:20px_20px] opacity-20" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                อยากให้เราออกแบบโครงการถัดไปให้คุณ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-brand-100">
                เล่าเป้าหมายของโรงเรียนหรือองค์กรของคุณให้เราฟัง แล้วให้ทีมนักออกแบบการเรียนรู้ช่วยวางแผนโครงการที่ใช่
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-brand-50">
                  ปรึกษาโครงการฟรี
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
