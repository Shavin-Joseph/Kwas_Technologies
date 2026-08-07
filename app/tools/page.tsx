import type { Metadata } from "next";
import { ToolsOverviewClient } from "@/components/tools/ToolsOverviewClient";

export const metadata: Metadata = {
  title: "Free Online Utility Tools — KWAS Technologies",
  description:
    "Explore 100% free, privacy-first online tools by KWAS Technologies: Image Converter, QR Code Generator, Word Counter, Speed Test, and Unit Converter.",
  keywords: [
    "Free Online Tools",
    "KWAS Online Tools",
    "Image Converter",
    "QR Code Generator",
    "Word Counter",
    "Speed Test",
    "Unit Converter",
    "Privacy Tools",
  ],
  alternates: {
    canonical: "https://kwas.tech/tools",
  },
  openGraph: {
    title: "Free Online Utility Tools — KWAS Technologies",
    description: "Fast, privacy-first web utilities for everyday internet users. Zero server uploads.",
    url: "https://kwas.tech/tools",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Online Tools", "item": "https://kwas.tech/tools" },
        ],
      },
      {
        "@type": "CollectionPage",
        "name": "Free Online Utility Tools — KWAS Technologies",
        "url": "https://kwas.tech/tools",
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
      <ToolsOverviewClient />
    </>
  );
}
