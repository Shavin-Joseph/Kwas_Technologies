import type { Metadata } from "next";
import { ToolsOverviewClient } from "@/components/tools/ToolsOverviewClient";

export const metadata: Metadata = {
  title: "Free Online Tools — Image Converter, QR Generator & More",
  description:
    "Use KWAS’s privacy-first online tools to convert images, generate QR codes, count words, measure connection speed, and convert units in your browser.",
  keywords: [
    "free online tools",
    "image converter",
    "QR code generator",
    "word counter",
    "internet speed test",
    "unit converter",
    "privacy-first tools",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/tools",
  },
  openGraph: {
    title: "Free Online Tools — Image Converter, QR Generator & More",
    description: "Fast, privacy-first web utilities built for everyday tasks, including file conversion, measuring speed, and text analysis.",
    url: "https://www.kwas.tech/tools",
    type: "website",
  },
};

export default function ToolsOverviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Online Tools", "item": "https://www.kwas.tech/tools" },
        ],
      },
      {
        "@type": "CollectionPage",
        "name": "Free Online Utility Tools — KWAS Technologies",
        "url": "https://www.kwas.tech/tools",
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
      <ToolsOverviewClient />
    </>
  );
}
