"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site";

// A parent item is active on its own page and on every page in its dropdown.
function isActive(item, pathname) {
  return pathname === item.href || (item.children || []).some((child) => child.href === pathname);
}

// Desktop dropdown. Opens on hover and keyboard focus; the chevron is a real button
// so touch screens and keyboards can open it without leaving for /services.
function NavDropdown({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  // A mouse opens the menu on hover, so the click that follows on the chevron must
  // not toggle it shut again. Touch and keyboard never set this, so they toggle.
  const hoverOpened = useRef(false);
  const active = isActive(item, pathname);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        hoverOpened.current = !open;
        setOpen(true);
      }}
      onMouseLeave={() => {
        hoverOpened.current = false;
        setOpen(false);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <div
        className={`flex items-center rounded-full text-sm font-medium transition-colors ${
          active ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50 hover:text-brand-700"
        }`}
      >
        <Link href={item.href} className="py-2 pl-3.5 pr-1">
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => {
            const keepOpen = hoverOpened.current;
            hoverOpened.current = false;
            setOpen((v) => (keepOpen ? true : !v));
          }}
          className="rounded-full py-2 pl-0.5 pr-2.5"
          aria-expanded={open}
          aria-label={`เมนูย่อย ${item.label}`}
        >
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* pt-2 is a hover bridge: the pointer crosses it without leaving the item. */}
      <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 ${open ? "block" : "hidden"}`}>
        <ul className="w-80 rounded-2xl bg-white p-2 shadow-card ring-1 ring-slate-100">
          {item.children.map((child) => {
            const current = pathname === child.href;
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  aria-current={current ? "page" : undefined}
                  className={`block rounded-xl px-4 py-2.5 transition-colors ${
                    current ? "bg-brand-50" : "hover:bg-slate-50"
                  }`}
                >
                  <span className={`block text-sm font-medium ${current ? "text-brand-700" : "text-slate-800"}`}>
                    {child.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">{child.desc}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

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
            if (item.children) return <NavDropdown key={item.href} item={item} pathname={pathname} />;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
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
          open ? "max-h-[calc(100vh-4rem)] overflow-y-auto" : "max-h-0 border-t-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <div key={item.href} className="flex flex-col gap-1">
                <Link
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 flex flex-col gap-0.5 border-l border-brand-100 pl-2">
                    {item.children
                      .filter((child) => child.href !== item.href)
                      .map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-lg px-4 py-2.5 text-sm ${
                              pathname === child.href
                                ? "bg-brand-50 font-medium text-brand-700"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
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
