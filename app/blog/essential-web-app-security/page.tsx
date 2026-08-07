import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Essential Web Application Security: Zero-Telemetry & Offline Vaults",
  description:
    "A comprehensive technical guide to AES-256-GCM hardware key encryption, zero-knowledge vaults, and eliminating trackers from modern web applications.",
  keywords: [
    "Web App Security KWAS",
    "Zero Telemetry Vaults",
    "AES-256 Encryption Web",
    "Offline Password Vault",
    "KWAS Technologies Security",
  ],
  alternates: {
    canonical: "https://kwas.tech/blog/essential-web-app-security",
  },
  openGraph: {
    title: "Essential Web Application Security: Zero-Telemetry & Offline Vaults — KWAS Tech Blog",
    description: "AES-256-GCM hardware key encryption and zero-knowledge credential vaulting.",
    url: "https://kwas.tech/blog/essential-web-app-security",
    type: "article",
  },
};

export default function SecurityBlogArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Tech Blog", "item": "https://kwas.tech/blog" },
          { "@type": "ListItem", "position": 3, "name": "Web App Security", "item": "https://kwas.tech/blog/essential-web-app-security" },
        ],
      },
      {
        "@type": "BlogPosting",
        "headline": "Essential Web Application Security: Zero-Telemetry & Offline Vaults",
        "description": "AES-256-GCM hardware key encryption and zero-knowledge credential vaulting.",
        "author": { "@type": "Organization", "name": "KWAS Tech Security" },
        "publisher": { "@type": "Organization", "name": "KWAS Technologies", "url": "https://kwas.tech" },
        "datePublished": "2026-08-01",
        "url": "https://kwas.tech/blog/essential-web-app-security",
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
      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <Link href="/blog" className="inline-flex items-center gap-1.5 font-mono text-xs text-amber hover:underline mb-6">
          <ArrowLeft size={14} /> Back to Blog Hub
        </Link>

        <div className="border-b border-line pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted mb-3">
            <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-0.5 font-semibold text-amber">
              Security &amp; Encryption
            </span>
            <span className="flex items-center gap-1"><Calendar size={13} /> August 2026</span>
            <span className="flex items-center gap-1"><Clock size={13} /> 7 min read</span>
            <span className="flex items-center gap-1"><User size={13} /> KWAS Tech Security</span>
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
            Essential Web Application Security: Zero-Telemetry &amp; Offline Vaults
          </h1>
        </div>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted">
          <p className="text-base text-fg font-medium leading-relaxed">
            Security in modern web applications requires a shift toward client-side cryptographic primitives and zero-knowledge data storage models.
          </p>

          <h2 className="font-display text-xl font-bold text-fg mt-4">1. Hardware Key AES-256-GCM Encryption</h2>
          <p>
            Utilizing Web Crypto APIs allows sensitive payload encryption to take place locally inside WebAssembly modules or Web Worker threads. Encryption keys never cross network boundaries unencrypted.
          </p>

          <h2 className="font-display text-xl font-bold text-fg mt-4">2. Zero Telemetry &amp; Privacy By Design</h2>
          <p>
            Eliminating third-party tracking scripts and unnecessary diagnostic telemetry guarantees that sensitive user behavioral patterns remain confidential.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
