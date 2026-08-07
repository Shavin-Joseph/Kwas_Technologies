import type { Metadata } from "next";
import { ImageConverterTool } from "@/components/tools/ImageConverterTool";

export const metadata: Metadata = {
  title: "Free Image Converter & WebP Compressor — KWAS Technologies",
  description:
    "Free client-side online Image Converter & WebP Compressor. Convert PNG, JPG, and WebP instantly in your browser with zero server uploads.",
  keywords: [
    "Image Converter Online",
    "WebP Compressor",
    "PNG to WebP",
    "JPG to WebP",
    "Compress Image File Size",
    "KWAS Tech Image Converter",
  ],
  alternates: {
    canonical: "https://kwas.tech/tools/image-converter",
  },
  openGraph: {
    title: "Free Image Converter & WebP Compressor — KWAS Technologies",
    description:
      "Convert and compress PNG, JPG, and WebP images instantly in your browser. 100% private.",
    url: "https://kwas.tech/tools/image-converter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Converter & WebP Compressor — KWAS Technologies",
    description: "Convert and compress PNG, JPG, WebP images instantly in browser.",
  },
};

export default function ImageConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "Image Converter", "item": "https://kwas.tech/tools/image-converter" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "name": "Free Image Converter & WebP Compressor — KWAS Technologies",
        "operatingSystem": "All",
        "applicationCategory": "MultimediaApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Free client-side online Image Converter & WebP Compressor. Convert PNG, JPG, WebP instantly in your browser with zero server uploads.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImageConverterTool />
    </>
  );
}
