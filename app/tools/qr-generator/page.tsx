import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { QrGeneratorTool } from "@/components/tools/QrGeneratorTool";

export const metadata: Metadata = {
  title: "Free QR Code Generator — Create QR Codes Online",
  description:
    "Generate QR codes for website URLs, Wi-Fi details, text, and contact data in seconds with a fast, privacy-first browser-based tool.",
  keywords: [
    "QR code generator",
    "free QR code generator",
    "Wi-Fi QR code generator",
    "website QR code maker",
    "contact QR code generator",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/tools/qr-generator",
  },
  openGraph: {
    title: "Free QR Code Generator — Create QR Codes Online",
    description: "Generate QR codes for URLs, text, Wi‑Fi, and contact details quickly and privately in your browser.",
    url: "https://www.kwas.tech/tools/qr-generator",
    type: "website",
  },
};

export default function QRCodeGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://www.kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "QR Code Generator", "item": "https://www.kwas.tech/tools/qr-generator" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "name": "Universal QR Code Generator — KWAS Technologies",
        "operatingSystem": "All",
        "applicationCategory": "UtilitiesApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Free online QR Code Generator. Create custom QR codes for website URLs, Wi-Fi networks, text, and contacts with custom colors.",
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
        <QrGeneratorTool />
      </main>
      <Footer />
      <Footer />
    </>
  );
}
