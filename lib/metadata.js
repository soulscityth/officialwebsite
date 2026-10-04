import { siteConfig } from "@/lib/site";

// Rendered by scripts/og-image.js. Bump `v` whenever the picture changes: LINE and
// Facebook cache images by URL, so the same URL keeps showing the old one.
const OG_IMAGE = "/og-image.jpg?v=2";

// Canonical and Open Graph for one page. Next replaces a parent's `openGraph`
// wholesale rather than merging it, so the shared fields can't live in the layout:
// every page spreads this instead. Never set canonical or og:url in the layout —
// every page would inherit "/" and read as a duplicate of home.
//
// `images` must be listed here: Next does not merge a parent's openGraph into a
// page that sets its own, so an image set anywhere else would be dropped.
export function pageMeta(path) {
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: "th_TH",
      url: path,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, type: "image/jpeg" }],
    },
  };
}
