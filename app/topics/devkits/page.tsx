import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Cpu, CheckCircle2, Code2, Wrench, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "DevKits & Toolchains — CLI Scaffolding & Build Automation",
  description:
    "Explore developer toolchains, CLI scaffolding kits, automated build tools, and signing utilities from KWAS Technologies.",
  alternates: {
    canonical: "https://kwas.tech/topics/devkits",
  },
  openGraph: {
    title: "DevKits & Toolchains — KWAS Technologies",
    description:
      "CLI scaffolding kits, automated build pipelines, code signing utilities, and rapid developer tools by KWAS Technologies.",
    url: "https://kwas.tech/topics/devkits",
  },
};

const FEATURES = [
  {
    title: "CLI Project Scaffolding",
    description:
      "Rapidly bootstrap new software projects with standardized directory structures, linting configurations, and build scripts.",
  },
  {
    title: "Automated Build & Signing Tools",
    description:
      "Command-line utilities for signing APKs, packaging releases, and generating release notes without touching heavy IDEs.",
  },
  {
    title: "Decoupled Engineering Tooling",
    description:
      "Modular CLI utilities designed to integrate into existing CI/CD pipelines, GitHub Actions, or local scripts.",
  },
  {
    title: "Developer Productivity Kits",
    description:
      "Pre-configured developer tools tailored for indie developers, small teams, and open-source maintainers.",
  },
];

export default function DevKitsTopicPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-xs text-amber mb-4">
              <Cpu size={14} />
              <span>Core Topic · KWAS Technologies</span>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              DevKits &amp; Toolchains
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              KWAS Technologies builds command-line toolchains, build scaffolding utilities, and release tools designed to automate developer workflows.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["DevKit", "CLI Scaffolding", "Build Pipelines", "APK Signing", "Release Automation", "Indie Tools"].map(
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
                <span>Featured Developer Tool</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg">
                Kwas DevKit — CLI Scaffolding for Creators
              </h3>
              <p className="mt-1 text-sm text-muted max-w-xl">
                Scaffold and ship projects effortlessly. Need custom developer toolchains or white-label build tools? Contact KWAS Tech at <span className="font-mono text-amber">info@kwas.tech</span>.
              </p>
            </div>
            <Link
              href="/products"
              className="shrink-0 flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Wrench size={16} />
              Explore Kwas DevKit
            </Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
