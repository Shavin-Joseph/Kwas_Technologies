import type { Metadata } from "next";
import { BlogHubClient } from "@/components/blog/BlogHubClient";

export const metadata: Metadata = {
  title: "KWAS Blog — Web Engineering, Security & Privacy",
  description:
    "Read practical guides on PWAs, web security, privacy-first architecture, self-hosted systems, and modern web engineering from KWAS Technologies.",
  keywords: [
    "KWAS blog",
    "PWA guide",
    "web security blog",
    "privacy-first architecture",
    "self-hosted cloud insights",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/blog",
  },
  openGraph: {
    title: "KWAS Blog — Web Engineering, Security & Privacy",
    description: "Practical guides for modern web engineering, security, and privacy-first software design.",
    url: "https://www.kwas.tech/blog",
    type: "website",
  },
};

export default function BlogHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Tech Blog", "item": "https://www.kwas.tech/blog" },
        ],
      },
      {
        "@type": "Blog",
        "name": "KWAS Technologies Engineering & Privacy Blog",
        "url": "https://www.kwas.tech/blog",
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Technologies (Key Web App Solutions Technologies)",
          "url": "https://www.kwas.tech",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogHubClient />
    </>
  );
}
