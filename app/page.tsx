import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Products } from "@/components/Products";
import { Topics } from "@/components/Topics";
import { Philosophy } from "@/components/Philosophy";
import { Changelog } from "@/components/Changelog";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "KWAS Technologies — Key Web App Solutions & Developer Tools",
  description:
    "Explore KWAS Technologies (Key Web App Solutions Technologies) custom web app solutions, Android launchers, terminal tools, password vaults, developer kits, and self-hosted software.",
  alternates: {
    canonical: "/",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KWAS Technologies",
    alternateName: ["Key Web App Solutions Technologies", "KWAS Tech", "Key Web App Solutions"],
    url: "https://kwas.tech",
    logo: "https://kwas.tech/icon.png",
    description:
      "KWAS Technologies (Key Web App Solutions Technologies) develops privacy-first web applications, custom web app solutions, Android tools, and self-hosted software.",
    sameAs: ["https://github.com/kwas-tech"],
    knowsAbout: [
      "Key Web App Solutions",
      "Web Application Development",
      "Custom Web Apps",
      "Next.js & Progressive Web Applications",
      "Android Launchers & Tools",
      "Privacy-First Software",
      "Self-Hosted Infrastructure",
      "Developer Tools & CLI",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KWAS Technologies (Key Web App Solutions Technologies)",
    alternateName: "KWAS Technologies",
    url: "https://kwas.tech",
    description:
      "Official website and software hub for KWAS Technologies (Key Web App Solutions Technologies).",
    publisher: {
      "@type": "Organization",
      name: "KWAS Technologies",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "KWAS Technologies",
    alternateName: "Key Web App Solutions Technologies",
    url: "https://kwas.tech",
    logo: "https://kwas.tech/icon.png",
    slogan: "Key Web App Solutions — Practical Software That Stays Out Of Your Way",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kwas Launcher",
    operatingSystem: "Android",
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "KWAS Technologies",
    },
    description: "A fast, gesture-driven Android launcher with no ads and no telemetry.",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kwas Vault",
    operatingSystem: "Android, Windows, macOS, Linux",
    applicationCategory: "SecurityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "KWAS Technologies",
    },
    description: "Encrypted, local-first credential storage with biometric unlock.",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kwas Terminal",
    operatingSystem: "Android",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "KWAS Technologies",
    },
    description: "A native terminal emulator with tmux-style panes and SSH profiles.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does KWAS Technologies stand for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KWAS Technologies stands for Key Web App Solutions Technologies, a software development organization specializing in privacy-first web applications, custom web app solutions, Android tools, and self-hosted software.",
        },
      },
      {
        "@type": "Question",
        name: "What software solutions does KWAS Technologies offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KWAS Technologies builds products such as Kwas Launcher (Android home screen launcher), Kwas Vault (offline encrypted password manager), Kwas Terminal (Android terminal emulator with SSH), Kwas Sync (self-hosted P2P sync), Kwas Widgets, and Kwas DevKit.",
        },
      },
      {
        "@type": "Question",
        name: "Are KWAS Technologies apps free and privacy-focused?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all KWAS Technologies apps are free to use, privacy-first, zero-telemetry, and source-available under open licenses.",
        },
      },
    ],
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
        <Topics />
        <Philosophy />
        <Changelog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
