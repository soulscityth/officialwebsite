"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import KeepWords from "@/components/KeepWords";
import { siteConfig } from "@/lib/site";

const items = siteConfig.nav.find((item) => item.children).children;

// Tabs across the top of every page in the บริการของเรา dropdown (/services, its four
// sub-pages and /skills-map), from the navbar's dropdown list.
// On a phone, one row that scrolls sideways rather than wrapping to three; from 640px
// it wraps, so no tab is hidden off the edge of a tablet.
export default function ServicesSubnav() {
  const pathname = usePathname();
  return (
    <nav aria-label="บริการ" className="border-b border-brand-100 bg-white">
      <div className="container-page">
        <ul className="-mx-1 flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const current = pathname === item.href;
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`inline-flex min-h-[40px] items-center whitespace-nowrap rounded-full px-4 text-sm transition-colors ${
                    current ? "bg-brand-800 font-medium text-white" : "text-brand-800 hover:bg-brand-50"
                  }`}
                >
                  <KeepWords>{item.label}</KeepWords>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
