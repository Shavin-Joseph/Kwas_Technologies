import type { Metadata } from "next";
import { WordCounterTool } from "@/components/tools/WordCounterTool";

export const metadata: Metadata = {
  title: "Word & Character Counter + Text Analyzer — KWAS Technologies",
  description:
    "Free online Word Counter, Character Counter, and Sentence Analyzer with reading time calculator and social media character limit trackers.",
  keywords: [
    "Word Counter Online",
    "Character Counter",
    "Sentence Counter",
    "Reading Time Calculator",
    "Twitter Character Limit Counter",
    "KWAS Tech Word Counter",
  ],
  alternates: {
    canonical: "https://kwas.tech/tools/word-counter",
  },
  openGraph: {
    title: "Word & Character Counter + Text Analyzer — KWAS Technologies",
    description: "Count words, characters, sentences, reading time, and social media limits live.",
    url: "https://kwas.tech/tools/word-counter",
    type: "website",
  },
};

export default function WordCounterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "Word Counter", "item": "https://kwas.tech/tools/word-counter" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "name": "Live Word & Character Counter + Text Analyzer — KWAS Technologies",
        "operatingSystem": "All",
        "applicationCategory": "UtilitiesApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Free online Word Counter, Character Counter, and Sentence Analyzer with reading time calculator and social media character limit trackers.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WordCounterTool />
    </>
  );
}
