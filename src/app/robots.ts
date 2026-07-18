import type { MetadataRoute } from "next";
import { businessConfig } from "@/lib/config";

// Robots.txt — served at /robots.txt.
// We allow everything (small marketing site with nothing sensitive
// exposed) and point crawlers at the sitemap for discovery.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep the API route out of the index — it's not user-visible
        // content, just the enquiry-form endpoint.
        disallow: "/api/",
      },
    ],
    sitemap: `${businessConfig.url}/sitemap.xml`,
    host: businessConfig.url,
  };
}
