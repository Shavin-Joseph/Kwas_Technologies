import type { Metadata } from "next";
import { ImageConverterTool } from "@/components/tools/ImageConverterTool";

export const metadata: Metadata = {
  title: "Free Image Converter & Compressor - JPG, PNG, WebP Online",
  description:
    "Free online image converter and compressor. Convert JPG, PNG, and WebP images, resize dimensions, adjust quality, and reduce image file size directly in your browser.",
  keywords: [
    "image converter",
    "free image converter",
    "online image converter",
    "image compressor",
    "image resizer",
    "jpg to png",
    "png to jpg",
    "png to webp",
    "jpg to webp",
    "webp to jpg",
    "webp to png",
    "compress image",
    "resize image",
    "webp converter",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/tools/image-converter",
  },
  openGraph: {
    title: "Free Image Converter & Compressor - JPG, PNG, WebP Online",
    description:
      "Convert, compress, and resize JPG, PNG, and WebP images online for free.",
    url: "https://www.kwas.tech/tools/image-converter",
    siteName: "KWAS Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Converter & Compressor - KWAS Technologies",
    description:
      "Convert, compress, and resize JPG, PNG, and WebP images online for free.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImageConverterPage() {
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id":
        "https://www.kwas.tech/tools/image-converter#webapplication",
      name: "KWAS Image Converter",
      url: "https://www.kwas.tech/tools/image-converter",
      description:
        "Free online image converter and compressor for JPG, PNG, and WebP images.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Windows, macOS, Linux, Android, iOS",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.kwas.tech/tools/image-converter#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.kwas.tech/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Free Tools",
          item: "https://www.kwas.tech/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Image Converter",
          item: "https://www.kwas.tech/tools/image-converter",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://www.kwas.tech/tools/image-converter#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I convert PNG or JPG to WebP?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upload your PNG or JPG image to the KWAS Image Converter, select WebP as the output format, adjust the quality if needed, and download the converted image.",
          },
        },
        {
          "@type": "Question",
          name: "Is the KWAS Image Converter free?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. KWAS Image Converter is a free online tool for converting, compressing, and resizing supported image formats.",
          },
        },
        {
          "@type": "Question",
          name: "Are my images uploaded to a server?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The image converter is designed to process images locally in your web browser. Images are not uploaded to an external server for conversion.",
          },
        },
        {
          "@type": "Question",
          name: "Can I resize an image?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. You can resize images by setting the required width and height before downloading the converted image.",
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
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />

    <ImageConverterTool />

    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="prose prose-slate max-w-none">
        <h1>Free Image Converter & Compressor</h1>

        <p>
          Convert JPG, PNG, and WebP images online for free with
          KWAS Image Converter. You can convert image formats,
          compress image file sizes, resize image dimensions, and
          adjust image quality directly in your browser.
        </p>

        <h2>Convert JPG, PNG, and WebP Images Online</h2>

        <p>
          KWAS Image Converter supports popular image formats
          including JPG, PNG, and WebP. Convert your images between
          formats without installing additional software.
        </p>

        <h3>JPG to PNG Converter</h3>

        <p>
          Convert JPG images to PNG format when you need a
          lossless image format or transparency support.
        </p>

        <h3>PNG to JPG Converter</h3>

        <p>
          Convert PNG images to JPG when you need a smaller
          compatible image format for websites, documents, and
          other applications.
        </p>

        <h3>PNG to WebP Converter</h3>

        <p>
          Convert PNG images to WebP to reduce file size while
          maintaining excellent image quality. WebP can be useful
          for websites and modern web applications.
        </p>

        <h3>JPG to WebP Converter</h3>

        <p>
          Convert JPG images to WebP directly in your browser and
          choose the quality level that works best for your needs.
        </p>

        <h2>Free Image Compressor</h2>

        <p>
          Reduce image file sizes by adjusting image quality before
          downloading the converted file. Smaller image files can
          be useful for websites, email attachments, documents,
          and social media.
        </p>

        <h2>Image Resizer</h2>

        <p>
          Resize images by entering the required width and height.
          The converter can maintain the image aspect ratio while
          you adjust the dimensions.
        </p>

        <h2>Private Browser-Based Image Processing</h2>

        <p>
          Image processing is performed directly in your browser.
          This helps keep your images private because the conversion
          process does not require uploading the image to a remote
          conversion server.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>How do I convert PNG or JPG to WebP?</h3>

        <p>
          Upload your PNG or JPG image, select WebP as the output
          format, adjust the quality if necessary, and download
          your converted image.
        </p>

        <h3>Is the KWAS Image Converter free?</h3>

        <p>
          Yes. KWAS Image Converter is free to use for supported
          image conversion, compression, and resizing.
        </p>

        <h3>Are my images uploaded to a server?</h3>

        <p>
          The converter processes images locally in your browser
          rather than uploading them to an external conversion
          server.
        </p>

        <h3>Can I resize an image?</h3>

        <p>
          Yes. You can set the required image width and height
          before downloading the converted image.
        </p>
      </div>
    </section>
  </>
);
}
