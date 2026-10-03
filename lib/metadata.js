import { siteConfig } from "@/lib/site";

// Canonical and Open Graph for one page. Next replaces a parent's `openGraph`
// wholesale rather than merging it, so the shared fields can't live in the layout:
// every page spreads this instead. Never set canonical or og:url in the layout —
// every page would inherit "/" and read as a duplicate of home.
//
// `images` must be listed here: a page that sets its own `openGraph` loses the
// image inherited from app/opengraph-image.png, so its shared link has no picture.
// On "/" the file itself takes precedence over this entry.
export function pageMeta(path) {
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: "th_TH",
      url: path,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, type: "image/png" }],
    },
  };
}
