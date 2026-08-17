import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ArrowRight, Globe, Smartphone, ShieldCheck, Terminal, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "KWAS Technologies — Privacy-First Web Apps & Developer Tools",
  description:
    "KWAS Technologies builds privacy-first web apps, developer tools, and self-hosted software for people who value control, speed, and simplicity.",
  alternates: {
    canonical: "https://www.kwas.tech",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KWAS Technologies",
    alternateName: ["Key Web App Solutions Technologies", "KWAS Tech"],
    url: "https://www.kwas.tech",
    logo: "https://www.kwas.tech/icon.png",
    email: "support@kwas.tech",
    description:
      "KWAS Technologies builds privacy-first web applications, developer tools, and self-hosted software for modern teams and independent creators.",
    sameAs: ["https://github.com/kwas-tech"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KWAS Technologies",
    alternateName: "Key Web App Solutions Technologies",
    url: "https://www.kwas.tech",
    description:
      "Official website for KWAS Technologies, featuring privacy-first web apps, developer tools, and self-hosted software.",
    publisher: {
      "@type": "Organization",
      name: "KWAS Technologies",
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

        {/* Home Overview Grid Section */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-amber">
              KWAS Technologies Ecosystem
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Key Web App Solutions &amp; Software Hub
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Explore dedicated sections for our products, tech topics, open-source philosophy, and direct contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Products Card */}
            <div className="flex flex-col justify-between rounded-xl border border-line bg-panel/60 p-6 hover:border-amber/50 transition-all group">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel2 text-amber mb-4">
                  <Smartphone size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-fg">Apps &amp; Products</h3>
                <p className="mt-2 text-sm text-muted">
                  Android launchers, terminal emulators, offline password vaults, and sync engines.
                </p>
              </div>
              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-amber font-medium group-hover:translate-x-1 transition-transform"
              >
                View all products <ArrowRight size={14} />
              </Link>
            </div>

            {/* Topics Card */}
            <div className="flex flex-col justify-between rounded-xl border border-line bg-panel/60 p-6 hover:border-amber/50 transition-all group">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel2 text-signal mb-4">
                  <Globe size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-fg">Topics &amp; Solutions</h3>
                <p className="mt-2 text-sm text-muted">
                  Custom web applications, privacy architectures, self-hosted cloud, and CLI toolchains.
                </p>
              </div>
              <Link
                href="/topics"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-signal font-medium group-hover:translate-x-1 transition-transform"
              >
                Explore topics <ArrowRight size={14} />
              </Link>
            </div>

            {/* About Card */}
            <div className="flex flex-col justify-between rounded-xl border border-line bg-panel/60 p-6 hover:border-amber/50 transition-all group">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel2 text-amber mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-fg">Open Source</h3>
                <p className="mt-2 text-sm text-muted">
                  Built the way we&apos;d want to use it — zero telemetry, plain pricing, and public source code.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-amber font-medium group-hover:translate-x-1 transition-transform"
              >
                Read philosophy <ArrowRight size={14} />
              </Link>
            </div>

            {/* Contact Card */}
            <div className="flex flex-col justify-between rounded-xl border border-line bg-panel/60 p-6 hover:border-amber/50 transition-all group">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel2 text-fg mb-4">
                  <Mail size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-fg">Contact &amp; Mail</h3>
                <p className="mt-2 text-sm text-muted">
                  Send a message or reach us directly at <span className="font-mono text-xs text-amber">support@kwas.tech</span>.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-fg font-medium group-hover:translate-x-1 transition-transform"
              >
                Contact us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
