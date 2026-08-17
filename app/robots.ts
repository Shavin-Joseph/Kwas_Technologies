import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/"],
    },

    sitemap: "https://www.kwas.tech/sitemap.xml",

    host: "https://www.kwas.tech",
  };
}