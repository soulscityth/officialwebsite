import { siteConfig } from "@/lib/site";
import { serviceJourney, expertiseGroups } from "@/lib/data";

// /llms.txt (llmstxt.org): a plain-text summary for AI assistants. Built from the
// same data the pages render, so it never needs separate editing — and it states
// nothing the site doesn't already say.
export const dynamic = "force-static";

export function GET() {
  const url = (path) => `${siteConfig.url}${path === "/" ? "" : path}`;
  const lines = [
    `# ${siteConfig.name} (${siteConfig.legalNameTh})`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.positioning} — ${siteConfig.taglineEn} ${siteConfig.serviceArea}`,
    "",
    "## Pages",
    ...siteConfig.nav.map((item) => `- [${item.label}](${url(item.href)})`),
    "",
    "## Services",
    ...serviceJourney.map(
      (s) => `- ${s.title} (${s.duration}): ${s.description} เหมาะกับ: ${s.fitFor.join(", ")}`
    ),
    "",
    "## Expertise",
    ...expertiseGroups.map((g) => `- ${g.name}: ${g.tags.join(", ")}`),
    "",
    "## Contact",
    `- Email: ${siteConfig.email}`,
    ...siteConfig.contacts.map((c) => `- Phone: ${c.phone} (${c.name})`),
    `- LINE: ${siteConfig.line.url}`,
    `- Facebook: ${siteConfig.social.facebook}`,
    `- Instagram: ${siteConfig.social.instagram}`,
    `- TikTok: ${siteConfig.social.tiktok}`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
