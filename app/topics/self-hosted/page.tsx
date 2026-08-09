import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Server, CheckCircle2, Code2, RadioTower, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Self-Hosted Infrastructure — Peer-to-Peer File Sync & Private Cloud",
  description:
    "Explore self-hosted sync engines, point-to-point file sync, and private cloud relay nodes developed by KWAS Technologies.",
  alternates: {
    canonical: "https://kwas.tech/topics/self-hosted",
  },
  openGraph: {
    title: "Self-Hosted Infrastructure — KWAS Technologies",
    description:
      "Point-to-point file sync, self-hosted relay servers, and private cloud solutions from KWAS Technologies.",
    url: "https://kwas.tech/topics/self-hosted",
  },
};

const FEATURES = [
  {
    title: "Point-to-Point Direct Sync",
    description:
      "Direct encrypted synchronization between your own devices and servers without routing through commercial cloud providers.",
  },
  {
    title: "Self-Hosted Relay Nodes",
    description:
      "Deploy your own lightweight relay servers on your infrastructure to maintain complete control over data transfers.",
  },
  {
    title: "Zero Third-Party Dependencies",
    description:
      "No vendor lock-in, no SaaS subscriptions, and no external storage requirements. You own the storage.",
  },
  {
    title: "Bandwidth Efficient & Resilient",
    description:
      "Differential block-level delta sync engineered for low bandwidth overhead and automated conflict resolution.",
  },
];

export default function SelfHostedTopicPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-xs text-amber mb-4">
              <Server size={14} />
              <span>Core Topic · KWAS Technologies</span>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              Self-Hosted Infrastructure
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              KWAS Technologies builds peer-to-peer data sync engines and self-hosted cloud software for teams and power users who demand private data ownership.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["P2P Sync", "Self-Hosted", "Relay Nodes", "Block Delta", "Docker Ready", "Private Cloud"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-amber"
              >
                <Code2 size={12} />
                {tech}
              </span>
            ))}
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
                <span>Featured Self-Hosted Product</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg">
                Kwas Sync — P2P File Synchronization
              </h3>
              <p className="mt-1 text-sm text-muted max-w-xl">
                Synchronize files directly between your devices. Need a private deployment setup? Contact KWAS Technologies at <span className="font-mono text-amber">support@kwas.tech</span>.
              </p>
            </div>
            <Link
              href="/products"
              className="shrink-0 flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <RadioTower size={16} />
              Explore Kwas Sync
            </Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
