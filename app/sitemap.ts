import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kwas.tech";
  const routes = [
    "",
    "/products",
    "/topics",
    "/topics/web-apps",
    "/topics/mobile-apps",
    "/topics/privacy-security",
    "/topics/self-hosted",
    "/topics/terminal-cli",
    "/topics/devkits",
    "/about",
    "/changelog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/topics/") ? 0.85 : 0.9,
  }));
}
