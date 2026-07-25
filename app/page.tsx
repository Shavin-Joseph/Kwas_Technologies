import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Products } from "@/components/Products";
import { Philosophy } from "@/components/Philosophy";
import { Changelog } from "@/components/Changelog";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy-First Android Apps & Developer Tools",
  description:
    "Explore KWAS Android launchers, terminal tools, password vaults, developer kits, and self-hosted sync utilities built for real-world workflows.",
  alternates: {
    canonical: "/",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KWAS",
    url: "https://kwas.tech",
    logo: "https://kwas.tech/icon.png",
    description:
      "KWAS develops privacy-first Android apps, developer tools, and self-hosted software for modern teams and independent creators.",
    sameAs: ["https://github.com/kwas-tech"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KWAS",
    url: "https://kwas.tech",
    description:
      "A software distribution site for privacy-first Android apps and developer workflows.",
    publisher: {
      "@type": "Organization",
      name: "KWAS",
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Philosophy />
        <Changelog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
