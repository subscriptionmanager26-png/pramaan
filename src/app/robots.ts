import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/settings", "/activity", "/portfolio/holdings", "/feed", "/account", "/ai"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}