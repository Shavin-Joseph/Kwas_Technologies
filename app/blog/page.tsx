import type { Metadata } from "next";
import { BlogHubClient } from "@/components/blog/BlogHubClient";

export const metadata: Metadata = {
  title: "KWAS Tech Blog — Web Engineering & Security",
  description:
    "Engineering guides, Progressive Web App tutorials, self-hosted cloud insights, and web security best practices from KWAS Technologies.",
  keywords: [
    "KWAS Tech Blog",
    "PWA Engineering Tutorials",
    "Web Security Blog",
    "Key Web App Solutions Blog",
    "Self Hosted Storage Blog",
  ],
  alternates: {
    canonical: "https://kwas.tech/blog",
  },
  openGraph: {
    title: "KWAS Tech Blog — Web Engineering & Security",
    description: "Engineering guides, PWA architecture, and web security insights from KWAS Technologies.",
    url: "https://kwas.tech/blog",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Tech Blog", "item": "https://kwas.tech/blog" },
        ],
      },
      {
        "@type": "Blog",
        "name": "KWAS Technologies Engineering & Privacy Blog",
        "url": "https://kwas.tech/blog",
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Technologies (Key Web App Solutions Technologies)",
          "url": "https://kwas.tech",
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
