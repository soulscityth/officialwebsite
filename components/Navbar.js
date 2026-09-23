"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <nav className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt={siteConfig.name}
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <Image
            src="/logo-wordmark.png"
            alt={siteConfig.name}
            width={800}
            height={316}
            className="h-8 w-auto"
          />
        </Link>

        {/* The full menu switches on at 900px, not md (768px): below ~891px the five
            Thai labels and the button wrap to two lines and run into the wordmark.
            At exactly 900px the gaps either side of the menu are only 3px. */}
        <div className="hidden items-center gap-1 min-[900px]:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* The shared .btn is sized for in-page calls to action; at its full 44px it
            set the bar's height and left 20px of white around the logo and links. */}
        <div className="hidden min-[900px]:block">
          <Link href="/contact" className="btn-primary py-2.5"
            data-ga-event="cta_consult_click"
          >
            ปรึกษาโครงการ
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 min-[900px]:hidden"
          aria-label="เปิดเมนู"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height] duration-300 ease-in-out min-[900px]:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary mt-2 w-full"
            data-ga-event="cta_consult_click"
          >
            ปรึกษาโครงการ
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
