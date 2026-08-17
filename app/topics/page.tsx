import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Topics } from "@/components/Topics";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Topics & Solutions Hub — KWAS Technologies",
  description:
    "Explore core engineering domains, privacy-first software, web applications, Android tools, and self-hosted solutions from KWAS Technologies.",
  keywords: [
    "KWAS topics",
    "web application solutions",
    "Android mobility solutions",
    "privacy tools",
    "self-hosted infrastructure",
    "developer toolchains",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/topics",
  },
  openGraph: {
    title: "Topics & Solutions Hub — KWAS Technologies",
    description:
      "Explore Key Web App Solutions, Android mobility, privacy tools, self-hosted cloud, and CLI toolchains.",
    url: "https://www.kwas.tech/topics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topics & Solutions Hub — KWAS Technologies",
    description: "Explore core web application domains and mobile software solutions from KWAS Technologies.",
  },
};

export default function TopicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Topics & Solutions", "item": "https://www.kwas.tech/topics" },
        ],
      },
      {
        "@type": "ItemList",
        "name": "KWAS Technologies Engineering Topics",
        "url": "https://www.kwas.tech/topics",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Key Web App Solutions", "url": "https://www.kwas.tech/topics/web-apps" },
          { "@type": "ListItem", "position": 2, "name": "Android & Mobile Apps", "url": "https://www.kwas.tech/topics/mobile-apps" },
          { "@type": "ListItem", "position": 3, "name": "Privacy & Security Tools", "url": "https://www.kwas.tech/topics/privacy-security" },
          { "@type": "ListItem", "position": 4, "name": "Self-Hosted Infrastructure", "url": "https://www.kwas.tech/topics/self-hosted" },
          { "@type": "ListItem", "position": 5, "name": "Developer Shell & CLI", "url": "https://www.kwas.tech/topics/terminal-cli" },
          { "@type": "ListItem", "position": 6, "name": "DevKits & Toolchains", "url": "https://www.kwas.tech/topics/devkits" },
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
        <Topics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
