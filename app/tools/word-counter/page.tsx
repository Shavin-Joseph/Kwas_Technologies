import type { Metadata } from "next";
import { WordCounterTool } from "@/components/tools/WordCounterTool";

export const metadata: Metadata = {
  title: "Free Word Counter — Count Words, Characters & Reading Time",
  description:
    "Count words, characters, sentences, and reading time with a fast, browser-based text analyzer built for writing and editing workflows.",
  keywords: [
    "word counter",
    "character counter",
    "reading time calculator",
    "sentence counter",
    "text analyzer",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/tools/word-counter",
  },
  openGraph: {
    title: "Free Word Counter — Count Words, Characters & Reading Time",
    description: "Analyze text instantly to count words, characters, and reading time without leaving your browser.",
    url: "https://www.kwas.tech/tools/word-counter",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://www.kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "Word Counter", "item": "https://www.kwas.tech/tools/word-counter" },
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
