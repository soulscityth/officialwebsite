import { siteConfig } from "@/lib/site";

// Referenced as `provider` by the Service schema in ServiceJourney.
export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

// Organization and WebSite schema so search engines and AI assistants have a
// verifiable description of who the company is and how to reach it. Every value
// comes from siteConfig — nothing here is asserted that the site does not already state.
export default function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    alternateName: siteConfig.legalNameTh,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-wordmark.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.contacts.map((c) => c.phone),
    areaServed: { "@type": "Country", name: "Thailand" },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
    contactPoint: siteConfig.contacts.map((c) => ({
      "@type": "ContactPoint",
      contactType: "sales",
      name: c.name,
      telephone: c.phone,
      email: siteConfig.email,
      availableLanguage: ["th", "en"],
    })),
  };

  // Tells Google the site's name for search results.
  const website = {
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.legalNameTh,
    url: siteConfig.url,
    inLanguage: "th",
    publisher: { "@id": ORGANIZATION_ID },
  };

  const data = { "@context": "https://schema.org", "@graph": [organization, website] };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
