import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { UnitConverterTool } from "@/components/tools/UnitConverterTool";

export const metadata: Metadata = {
  title: "Free Unit Converter — Storage, Length, Mass & Temperature",
  description:
    "Convert digital storage values, length, mass, and temperature instantly with a fast browser-based unit converter built for everyday tasks.",
  keywords: [
    "unit converter",
    "digital storage converter",
    "MB to GB converter",
    "length converter",
    "mass converter",
    "temperature converter",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/tools/unit-converter",
  },
  openGraph: {
    title: "Free Unit Converter — Storage, Length, Mass & Temperature",
    description: "Convert storage units, length, mass, and temperature values instantly in your browser.",
    url: "https://www.kwas.tech/tools/unit-converter",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://www.kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "Unit Converter", "item": "https://www.kwas.tech/tools/unit-converter" },
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
      <Navbar />
      <main className="pt-8">
        <UnitConverterTool />
      </main>
      <Footer />
      <Footer />
    </>
  );
}
