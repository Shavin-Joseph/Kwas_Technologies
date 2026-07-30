import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Smartphone, CheckCircle2, Code2, Download, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Android & Mobile Apps — Launchers, Widgets & Mobility Tools",
  description:
    "Explore native Android launcher engines, custom home screen widgets, and mobile productivity tools from KWAS Technologies.",
  alternates: {
    canonical: "https://kwas.tech/topics/mobile-apps",
  },
  openGraph: {
    title: "Android & Mobile Apps — KWAS Technologies",
    description:
      "Native-level Android launchers, gesture engines, custom home screen widgets, and mobile productivity apps by KWAS Technologies.",
    url: "https://kwas.tech/topics/mobile-apps",
  },
};

const FEATURES = [
  {
    title: "Gesture-Driven Launchers",
    description:
      "Lightning-fast home screen launchers featuring third-party icon packs, custom grids, and searchable app drawers without ads or trackers.",
  },
  {
    title: "Lightweight Home Screen Widgets",
    description:
      "Configurable widget suites — clocks, weather, habit trackers, and system monitors — packaged into one zero-telemetry bundle.",
  },
  {
    title: "Device Ownership & Performance",
    description:
      "Native Kotlin architecture optimized for battery longevity, low RAM footprint, and instant app switching.",
  },
  {
    title: "Cross-Platform Mobile Tools",
    description:
      "Seamless mobile environments bridging Android and Desktop workflows for independent developers and teams.",
  },
];

export default function MobileAppsTopicPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-xs text-amber mb-4">
              <Smartphone size={14} />
              <span>Core Topic · KWAS Technologies</span>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              Android &amp; Mobile Applications
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              KWAS Technologies builds lightweight, native-first Android applications, launcher environments, and mobile tools designed for device ownership and zero-distraction productivity.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Android OS", "Kotlin", "Launcher SDK", "App Widgets", "Gesture Engine", "Zero-Tracker"].map((tech) => (
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
                <span>Featured Mobile Products</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg">
                Try Kwas Launcher &amp; Kwas Widgets
              </h3>
              <p className="mt-1 text-sm text-muted max-w-xl">
                Explore our stable Android apps ready for free download, or contact us for custom mobile white-label solutions at <span className="font-mono text-amber">info@kwas.tech</span>.
              </p>
            </div>
            <Link
              href="/products"
              className="shrink-0 flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              Browse Mobile Apps
            </Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
