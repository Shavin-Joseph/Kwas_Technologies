import type { Metadata } from "next";
import { SpeedTestTool } from "@/components/tools/SpeedTestTool";

export const metadata: Metadata = {
  title: "Real Internet Speed Test & Ping Analyzer — KWAS Technologies",
  description:
    "100% Real Network Speed Test & Ping Analyzer by KWAS Technologies. Measure your actual Wi-Fi or cellular download speed, upload speed, ping, and latency in real-time.",
  keywords: [
    "Real Internet Speed Test",
    "WiFi Speed Test Real",
    "Ping Latency Test",
    "Bandwidth Speedometer Online",
    "Accurate Speed Test KWAS",
    "Network Jitter Tester",
  ],
  alternates: {
    canonical: "https://kwas.tech/tools/speed-test",
  },
  openGraph: {
    title: "Real Internet Speed Test & Ping Analyzer — KWAS Technologies",
    description: "Measure your actual Wi-Fi or broadband download speed, upload speed, and ping in real-time.",
    url: "https://kwas.tech/tools/speed-test",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Internet Speed Test & Ping Analyzer — KWAS Technologies",
    description: "Accurate real-network speed test measuring download, upload, ping, and jitter.",
  },
};

export default function SpeedTestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Free Tools", "item": "https://kwas.tech/tools" },
          { "@type": "ListItem", "position": 3, "name": "Speed Test", "item": "https://kwas.tech/tools/speed-test" },
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
      <SpeedTestTool />
    </>
  );
}
