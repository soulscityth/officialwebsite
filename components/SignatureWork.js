import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import KeepWords from "@/components/KeepWords";
import SignatureCard from "@/components/SignatureCard";
import { signatureWork } from "@/lib/data";

// Home "Signature Work": one example of each kind of work, as flip cards. Card facts
// come from `portfolio` through `signatureWork`; see lib/data.js.
export default function SignatureWork() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Signature Work · ผลงานเด่น</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              <KeepWords>งานที่เราภูมิใจ ออกแบบการเรียนรู้ให้แต่ละที่โดยเฉพาะ</KeepWords>
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-slate-600 sm:text-[17px]">
              <KeepWords>
                ตัวอย่างค่าย เวิร์กช็อป และเวทีถอดบทเรียนที่เราออกแบบร่วมกับโรงเรียนและองค์กร กดพลิกการ์ดเพื่อดูรายละเอียดของแต่ละงาน
              </KeepWords>
            </p>
          </div>
          <Link href="/work" className="btn-secondary">
            <KeepWords>ดูผลงานทั้งหมด</KeepWords>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {signatureWork.map((item) => (
            <SignatureCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
