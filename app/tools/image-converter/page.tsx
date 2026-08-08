import type { Metadata } from "next";
import { ImageConverterTool } from "@/components/tools/ImageConverterTool";

export const metadata: Metadata = {
  title: "Free Image Converter & Image Compressor — Convert JPG, PNG, WebP Online",
  description:
    "100% Free online Image Converter, Image Resizer & WebP Compressor by KWAS Technologies. Convert PNG to WebP, JPG to PNG, compress image file sizes, and resize image dimensions instantly in your browser with zero server uploads.",
  keywords: [
    "image converter",
    "image compressor",
    "image converter online",
    "convert image to webp",
    "png to webp",
    "jpg to png converter",
    "compress image file size",
    "free image resizer",
    "online photo compressor",
    "webp converter free",
    "KWAS Tech Image Converter",
  ],
  alternates: {
    canonical: "https://kwas.tech/tools/image-converter",
  },
  openGraph: {
    title: "Free Image Converter & Image Compressor — Convert JPG, PNG, WebP Online",
    description:
      "Convert and compress PNG, JPG, and WebP images instantly in your browser. 100% private client-side processing.",
    url: "https://kwas.tech/tools/image-converter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Converter & Image Compressor — KWAS Technologies",
    description: "Convert, compress, and resize PNG, JPG, WebP images instantly in your browser.",
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
          { "@type": "ListItem", "position": 3, "name": "Image Converter & Compressor", "item": "https://kwas.tech/tools/image-converter" },
        ],
      },
      {
        "@type": "WebApplication",
        "name": "Free Image Converter & WebP Compressor — KWAS Technologies",
        "operatingSystem": "All",
        "applicationCategory": "MultimediaApplication",
        "browserRequirements": "Requires JavaScript",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Free client-side online Image Converter & WebP Compressor. Convert PNG, JPG, WebP and resize image dimensions instantly in your browser with zero server uploads.",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I convert PNG or JPG to WebP online for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Upload your PNG or JPG file into the KWAS Image Converter, select WebP as your target output format, adjust quality, and download the compressed image instantly.",
            },
          },
          {
            "@type": "Question",
            "name": "Are my uploaded photos or images saved on a server?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The KWAS Image Converter runs 100% locally inside your web browser using HTML5 Canvas API. Your images never touch any external server.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I resize image width and height dimensions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can enter custom pixel width and height dimensions with an automatic aspect-ratio lock to resize your images prior to conversion.",
            },
          },
        ],
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
