import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ShieldCheck, CheckCircle2, Code2, Lock, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Security — Zero-Telemetry & Offline Vault Encryption",
  description:
    "Explore privacy-first software, zero-telemetry architectures, and encrypted credential vaults engineered by KWAS Technologies.",
  alternates: {
    canonical: "https://kwas.tech/topics/privacy-security",
  },
  openGraph: {
    title: "Privacy & Security — KWAS Technologies",
    description:
      "Zero-telemetry architectures, local-first encrypted vaults, biometric unlock, and security tools by KWAS Technologies.",
    url: "https://kwas.tech/topics/privacy-security",
  },
};

const FEATURES = [
  {
    title: "Zero-Telemetry Architecture",
    description:
      "Our applications contain no analytics SDKs, no ad trackers, and no background metric reporting. Your data stays on your device.",
  },
  {
    title: "Offline-First Encrypted Vaults",
    description:
      "AES-256 encrypted credential and password storage designed to operate entirely offline without forced cloud sync.",
  },
  {
    title: "Biometric Protection & Hardware Keys",
    description:
      "Seamless integration with Android Fingerprint / Face Unlock and hardware security keys for zero-friction access.",
  },
  {
    title: "Audit-Ready Open Source Code",
    description:
      "Public source code under open licenses allowing independent security audits and transparent cryptography.",
  },
];

export default function PrivacySecurityTopicPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-xs text-amber mb-4">
              <ShieldCheck size={14} />
              <span>Core Topic · KWAS Technologies</span>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              Privacy &amp; Security Tools
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              At KWAS Technologies (Key Web App Solutions Technologies), privacy is an architectural promise. We design local-first encrypted tools that preserve digital sovereignty.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["AES-256", "Zero-Telemetry", "Biometric Unlock", "Local Storage", "Open Cryptography", "Privacy First"].map(
              (tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-amber"
                >
                  <Code2 size={12} />
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-xl border border-line bg-panel/60 p-6 hover:border-amber/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel2 text-amber">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-fg">{feat.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{feat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-amber/30 bg-gradient-to-r from-panel via-panel2 to-panel p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-amber mb-2">
                <Sparkles size={14} />
                <span>Featured Security Product</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg">
                Kwas Vault — Encrypted Password Manager
              </h3>
              <p className="mt-1 text-sm text-muted max-w-xl">
                Store passwords and credentials safely offline. Need custom security integration for your team? Contact us at <span className="font-mono text-amber">info@kwas.tech</span>.
              </p>
            </div>
            <Link
              href="/products"
              className="shrink-0 flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Lock size={16} />
              Explore Kwas Vault
            </Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
