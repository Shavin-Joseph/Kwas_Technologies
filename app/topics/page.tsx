import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Topics } from "@/components/Topics";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Topics & Solutions Hub",
  description:
    "Discover core engineering domains and custom web app solutions provided by KWAS Technologies (Key Web App Solutions Technologies).",
  keywords: [
    "KWAS Topics",
    "Key Web App Solutions Topics",
    "KWAS Solutions Hub",
    "Web Application Domains",
    "Android Mobility Solutions",
    "Privacy & Security Tools",
    "Self-Hosted Infrastructure",
    "CLI Toolchains",
  ],
  alternates: {
    canonical: "https://kwas.tech/topics",
  },
  openGraph: {
    title: "Topics & Solutions Hub — KWAS Technologies",
    description:
      "Explore Key Web App Solutions, Android mobility, privacy tools, self-hosted cloud, and CLI toolchains.",
    url: "https://kwas.tech/topics",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Topics & Solutions", "item": "https://kwas.tech/topics" },
        ],
      },
      {
        "@type": "ItemList",
        "name": "KWAS Technologies Engineering Topics",
        "url": "https://kwas.tech/topics",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Key Web App Solutions", "url": "https://kwas.tech/topics/web-apps" },
          { "@type": "ListItem", "position": 2, "name": "Android & Mobile Apps", "url": "https://kwas.tech/topics/mobile-apps" },
          { "@type": "ListItem", "position": 3, "name": "Privacy & Security Tools", "url": "https://kwas.tech/topics/privacy-security" },
          { "@type": "ListItem", "position": 4, "name": "Self-Hosted Infrastructure", "url": "https://kwas.tech/topics/self-hosted" },
          { "@type": "ListItem", "position": 5, "name": "Developer Shell & CLI", "url": "https://kwas.tech/topics/terminal-cli" },
          { "@type": "ListItem", "position": 6, "name": "DevKits & Toolchains", "url": "https://kwas.tech/topics/devkits" },
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
