import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, ShieldCheck, Mail, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — KWAS Technologies",
  description:
    "Official Terms of Service for KWAS Technologies (Key Web App Solutions Technologies). Terms and conditions governing the use of our web applications, free online tools, and software downloads.",
  keywords: [
    "KWAS Technologies Terms of Service",
    "Key Web App Solutions Terms",
    "KWAS Tech Usage Terms",
    "KWAS Online Tools Terms",
  ],
  alternates: {
    canonical: "https://kwas.tech/terms",
  },
  openGraph: {
    title: "Terms of Service — KWAS Technologies",
    description:
      "Official Terms of Service governing KWAS Technologies (Key Web App Solutions Technologies) web applications and tools.",
    url: "https://kwas.tech/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — KWAS Technologies",
    description: "Official Terms of Service of KWAS Technologies.",
  },
};

export default function TermsOfServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://kwas.tech/terms" },
        ],
      },
      {
        "@type": "WebPage",
        "name": "Terms of Service — KWAS Technologies",
        "url": "https://kwas.tech/terms",
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
      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        {/* Header */}
        <div className="border-b border-line pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
            <FileText size={14} />
            <span>Official Terms &amp; Conditions</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm font-mono text-muted">
            KWAS Technologies (Key Web App Solutions Technologies) · Effective Date: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted">
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <h2 className="font-display text-base font-semibold text-fg mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website, web applications, free online tools, and software hosted at <a href="https://kwas.tech" className="text-amber hover:underline">https://kwas.tech</a> (collectively, <strong>KWAS Technologies</strong>), you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <h2 className="font-display text-base font-semibold text-fg mb-3">2. Intellectual Property &amp; Open Source</h2>
            <p>
              Unless otherwise indicated, all original branding, logos, website layout, and proprietary source code are the intellectual property of KWAS Technologies (Key Web App Solutions Technologies). Open-source components and software releases distributed under open licenses remain governed by their respective Apache 2.0 or MIT licensing terms.
            </p>
          </section>

          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <h2 className="font-display text-base font-semibold text-fg mb-3">3. Use of Free Online Utility Tools</h2>
            <p>
              Our free online tools (including Image Converter, QR Code Generator, Word Counter, Speed Test, and Unit Converter) are provided &quot;as-is&quot; for public convenience. We do not inspect, retain, or store your processed data. Users are solely responsible for ensuring they have legal rights to process uploaded content.
            </p>
          </section>

          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <AlertCircle size={18} className="text-amber" />
              <h2>4. Disclaimer of Warranties</h2>
            </div>
            <p>
              KWAS Technologies provides all web solutions, tools, and software on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, expressed or implied, regarding uptime, performance, or fitness for a particular purpose.
            </p>
          </section>

          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Mail size={18} className="text-amber" />
              <h2>5. Contact Us</h2>
            </div>
            <p>
              If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:info@kwas.tech" className="font-mono text-amber hover:underline font-semibold">info@kwas.tech</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
