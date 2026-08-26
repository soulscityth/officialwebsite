import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/work", "/contact"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
