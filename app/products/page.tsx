import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Products & Apps Downloads",
  description:
    "Official Software Hub of KWAS Technologies (Key Web App Solutions Technologies). Explore Android launchers, terminal tools, password vaults, self-hosted file sync, and developer toolchains.",
  keywords: [
    "KWAS Products",
    "KWAS Software Downloads",
    "Key Web App Solutions Apps",
    "Android Apps KWAS",
    "Kwas Launcher",
    "Kwas Vault",
    "Kwas Terminal",
    "Kwas Sync",
    "Kwas Widgets",
    "Kwas DevKit",
  ],
  alternates: {
    canonical: "https://kwas.tech/products",
  },
  openGraph: {
    title: "Products & Apps Downloads — KWAS Technologies",
    description:
      "Explore privacy-first Android apps, custom web solutions, and developer tools shipped by KWAS Technologies (Key Web App Solutions Technologies).",
    url: "https://kwas.tech/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Apps Downloads — KWAS Technologies",
    description: "Explore privacy-first Android apps and developer toolchains from KWAS Technologies.",
  },
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Products & Apps", "item": "https://kwas.tech/products" },
        ],
      },
      {
        "@type": "CollectionPage",
        "name": "KWAS Technologies Software Downloads",
        "url": "https://kwas.tech/products",
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Technologies (Key Web App Solutions Technologies)",
          "url": "https://kwas.tech",
        },
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
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
