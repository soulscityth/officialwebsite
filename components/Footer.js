import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Music2, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { domains } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-page grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-mark.png" alt={siteConfig.name} width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-lg font-bold text-white">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
              { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
              { icon: Music2, href: siteConfig.social.tiktok, label: "TikTok" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-brand-100 transition-colors hover:bg-brand-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">เมนู</h3>
          <ul className="mt-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-brand-200 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">ประเด็นการเรียนรู้</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            {domains.map((d) => (
              <li key={d.title}>
                <Link href="/services" className="transition-colors hover:text-white">
                  {d.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="transition-colors hover:text-white">
                Signature Camp
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">ติดต่อเรา</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{siteConfig.email}</span>
            </li>
            {siteConfig.contacts.map((c) => (
              <li key={c.phone} className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{c.phone} ({c.name})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.legalNameTh} สงวนลิขสิทธิ์ทุกประการ</p>
          <p>{siteConfig.taglineEn}</p>
        </div>
      </div>
    </footer>
  );
}
