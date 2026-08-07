import type { Metadata } from "next";
import { QrGeneratorTool } from "@/components/tools/QrGeneratorTool";

export const metadata: Metadata = {
  title: "Universal QR Code Generator — KWAS Technologies",
  description:
    "Free online QR Code Generator. Create custom QR codes for website URLs, Wi-Fi networks, text, and contacts with custom colors and instant PNG download.",
  keywords: [
    "QR Code Generator",
    "WiFi QR Code Generator",
    "Custom QR Code Maker",
    "Free Vector QR Generator",
    "KWAS Tech QR Generator",
  ],
  alternates: {
    canonical: "https://kwas.tech/tools/qr-generator",
  },
  openGraph: {
    title: "Universal QR Code Generator — KWAS Technologies",
    description: "Create custom QR codes for Wi-Fi, website URLs, text, and contacts.",
    url: "https://kwas.tech/tools/qr-generator",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "QR Code Generator", "item": "https://kwas.tech/tools/qr-generator" },
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
      <QrGeneratorTool />
    </>
  );
}
