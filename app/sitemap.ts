import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kwas.tech";
  const routes = [
    "",
    "/products",
    "/tools",
    "/tools/image-converter",
    "/tools/qr-generator",
    "/tools/word-counter",
    "/tools/speed-test",
    "/tools/unit-converter",
    "/blog",
    "/blog/ultimate-pwa-guide-2026",
    "/blog/mastering-web-app-security",
    "/blog/building-pwas-in-2026",
    "/blog/why-self-hosted-data-beats-cloud",
    "/blog/essential-web-app-security",
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
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.startsWith("/tools") ? "daily" : "weekly",
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/tools")
        ? 0.95
        : route.startsWith("/blog")
        ? 0.9
        : route.startsWith("/topics/")
        ? 0.85
        : 0.8,
  }));
}
