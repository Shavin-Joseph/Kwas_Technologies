import type { Metadata } from "next";
import { UnitConverterTool } from "@/components/tools/UnitConverterTool";

export const metadata: Metadata = {
  title: "Universal Unit & Digital Storage Converter — KWAS Technologies",
  description:
    "Free online Unit & Digital Storage Converter. Convert MB to GB, length, mass, and temperature instantly.",
  keywords: [
    "MB to GB Converter",
    "Digital Storage Converter",
    "Unit Converter Online",
    "Length Converter",
    "KWAS Tech Unit Converter",
  ],
  alternates: {
    canonical: "https://kwas.tech/tools/unit-converter",
  },
  openGraph: {
    title: "Universal Unit & Digital Storage Converter — KWAS Technologies",
    description: "Convert digital storage sizes (MB, GB, TB), distance, mass, and temperature live.",
    url: "https://kwas.tech/tools/unit-converter",
    type: "website",
  },
};

export default function UnitConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "Unit Converter", "item": "https://kwas.tech/tools/unit-converter" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "name": "Universal Unit & Digital Storage Converter — KWAS Technologies",
        "operatingSystem": "All",
        "applicationCategory": "UtilitiesApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Free online Unit & Digital Storage Converter. Convert MB to GB, length, mass, and temperature instantly.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UnitConverterTool />
    </>
  );
}
