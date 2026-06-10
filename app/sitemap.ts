import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Public marketing routes only — /login, /dashboard and /api are
// deliberately excluded.
const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/wat-wij-doen", changeFrequency: "monthly", priority: 0.9 },
  { path: "/partnermodellen", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partnermodellen/full-epc", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partnermodellen/supply-technical", changeFrequency: "monthly", priority: 0.7 },
  { path: "/partnermodellen/supply-only", changeFrequency: "monthly", priority: 0.7 },
  { path: "/projecten", changeFrequency: "monthly", priority: 0.7 },
  { path: "/over-ons", changeFrequency: "monthly", priority: 0.6 },
  { path: "/plan-een-afspraak", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacyverklaring", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteConfig.siteUrl : `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
