import { siteConfig } from "@/lib/site";

// No lastModified: it used to be the build time, so every page claimed a change on
// every deploy and Google learns to ignore it. Add a real per-page date or none.
export default function sitemap() {
  const routes = ["", "/about", "/services", "/skills-map", "/work", "/contact"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
