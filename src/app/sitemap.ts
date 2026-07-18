import type { MetadataRoute } from "next";
import { businessConfig } from "@/lib/config";

// Static sitemap. Every page the crawler should know about is
// listed once here. Next.js serves this at /sitemap.xml with the
// correct XML content-type automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: businessConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${businessConfig.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
