import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { SpeedTestTool } from "@/components/tools/SpeedTestTool";

export const metadata: Metadata = {
  title: "Internet Speed Test — Check Download, Upload & Ping",
  description:
    "Measure your real-world internet speed, upload rate, ping, and latency in your browser with KWAS’s fast, privacy-first speed test.",
  keywords: [
    "internet speed test",
    "download speed test",
    "upload speed test",
    "ping test",
    "latency test",
    "Wi‑Fi speed test",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/tools/speed-test",
  },
  openGraph: {
    title: "Internet Speed Test — Check Download, Upload & Ping",
    description: "Test your internet speed, upload rate, ping, and latency in real time with a browser-based speed test.",
    url: "https://www.kwas.tech/tools/speed-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internet Speed Test — Check Download, Upload & Ping",
    description: "Measure your real-world internet speed, ping, and latency in your browser.",
  },
};

export default function SpeedTestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://www.kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "Speed Test", "item": "https://www.kwas.tech/tools/speed-test" },
        ],
      },
      {
        "@type": "WebApplication",
        "name": "Real Internet Speed Test & Ping Analyzer — KWAS Technologies",
        "operatingSystem": "All",
        "applicationCategory": "UtilitiesApplication",
        "browserRequirements": "Requires JavaScript",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "100% Real Network Speed Test & Ping Analyzer. Measure actual download Mbps, upload Mbps, ping latency, and jitter using browser HTTP timers.",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the KWAS Real Speed Test measure internet speed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The KWAS Speed Test executes real HTTP fetches using performance.now() high-resolution timers to calculate exact latency (ping), jitter, download throughput (Mbps), and upload throughput (Mbps).",
            },
          },
          {
            "@type": "Question",
            "name": "Is my network data stored?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The speed test runs 100% inside your browser session with zero server tracking or data storage.",
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
      <Navbar />
      <main className="pt-8">
        <SpeedTestTool />
      </main>
      <Footer />
      <Footer />
    </>
  );
}
