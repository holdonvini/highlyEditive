import type { MetadataRoute } from "next";
import { siteConfig } from "@/core/config/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/terms",
    "/privacy-policy",
    "/guidelines",
    "/refund-policy",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticPages];
}
