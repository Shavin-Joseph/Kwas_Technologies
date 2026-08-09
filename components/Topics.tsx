"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  ShieldCheck,
  Server,
  Terminal,
  Cpu,
  Sparkles,
  ArrowUpRight,
  Code2,
  Mail,
} from "lucide-react";
import { SectionHeader } from "@/components/Products";

export interface TopicPill {
  id: string;
  name: string;
  category: "Web" | "Mobile" | "Security" | "Cloud" | "DevTools";
  description: string;
  icon: typeof Globe;
  tags: string[];
  route: string;
}

export const TOPICS: TopicPill[] = [
  {
    id: "web-apps",
    name: "Key Web App Solutions",
    category: "Web",
    description:
      "High-performance Progressive Web Applications, Next.js web solutions, real-time dashboards, and modern full-stack web platforms.",
    icon: Globe,
    tags: ["Next.js", "React", "TypeScript", "PWA", "Tailwind CSS", "Web Apps"],
    route: "/topics/web-apps",
  },
  {
    id: "android-mobility",
    name: "Android & Mobile Apps",
    category: "Mobile",
    description:
      "Native-level Android launchers, gesture engines, custom home screen widgets, and mobile productivity environments.",
    icon: Smartphone,
    tags: ["Android OS", "Kotlin", "Launchers", "Widgets", "UX Design"],
    route: "/topics/mobile-apps",
  },
  {
    id: "privacy-security",
    name: "Privacy & Security Tools",
    category: "Security",
    description:
      "Zero-telemetry architectures, encrypted password managers, biometric security, and privacy-preserving data vaulting.",
    icon: ShieldCheck,
    tags: ["Encryption", "Zero-Telemetry", "Biometrics", "Offline Vault"],
    route: "/topics/privacy-security",
  },
  {
    id: "self-hosted",
    name: "Self-Hosted Infrastructure",
    category: "Cloud",
    description:
      "Peer-to-peer data sync engines, self-hosted relay servers, local cloud storage solutions, and private networking.",
    icon: Server,
    tags: ["P2P Sync", "Self-Hosted", "Relay Nodes", "Private Cloud"],
    route: "/topics/self-hosted",
  },
  {
    id: "terminal-cli",
    name: "Developer Shell & CLI",
    category: "DevTools",
    description:
      "Native mobile terminal emulators, SSH profile managers, tmux integration, and package management for developers.",
    icon: Terminal,
    tags: ["CLI", "SSH", "Terminal Emulator", "Tmux", "Shell Scripting"],
    route: "/topics/terminal-cli",
  },
  {
    id: "build-toolchains",
    name: "DevKits & Toolchains",
    category: "DevTools",
    description:
      "CLI scaffolding kits, automated build pipelines, code signing utilities, and rapid developer bootstrapping.",
    icon: Cpu,
    tags: ["DevKit", "CLI Scaffolding", "Build Pipeline", "Automation"],
    route: "/topics/devkits",
  },
];

const CATEGORIES = ["All", "Web", "Mobile", "Security", "Cloud", "DevTools"] as const;

export function Topics() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredTopics =
    activeCategory === "All"
      ? TOPICS
      : TOPICS.filter((t) => t.category === activeCategory);

  return (
    <section id="topics" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Core Competencies & Topics"
        title="KWAS Technologies — Key Web App Solutions & Software Domains"
        copy="Explore dedicated topic pages for each engineering domain developed by KWAS Technologies (Key Web App Solutions Technologies)."
      />

      {/* Filter Tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-line pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
              activeCategory === cat
                ? "bg-amber text-ink font-semibold shadow-sm"
                : "bg-panel2 text-muted hover:bg-panel hover:text-fg"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Topics */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTopics.map((topic, i) => {
          const Icon = topic.icon;
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
            >
              <Link
                href={topic.route}
                className="group flex flex-col justify-between rounded-xl border border-line bg-panel/60 p-6 h-full transition-all hover:-translate-y-1 hover:border-amberDim/70 hover:shadow-glowAmber"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel2 text-amber">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full border border-line bg-panel2 px-2.5 py-0.5 font-mono text-[11px] text-faint">
                      {topic.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-fg group-hover:text-amber transition-colors flex items-center justify-between">
                    {topic.name}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/60 pt-4">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-panel2 px-2 py-0.5 font-mono text-[11px] text-faint"
                    >
                      <Code2 size={10} className="text-amber" />
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Brand Summary Pill Banner */}
      <div className="mt-14 rounded-2xl border border-amber/30 bg-gradient-to-r from-panel via-panel2 to-panel p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber mb-2">
            <Sparkles size={14} />
            <span>KWAS Technologies (Key Web App Solutions Technologies)</span>
          </div>
          <h4 className="font-display text-xl font-semibold text-fg">
            Need a custom Web App or Software Solution?
          </h4>
          <p className="mt-1 text-sm text-muted max-w-2xl">
            From web application architecture to native mobile tools, KWAS Technologies builds high-reliability software designed for performance, privacy, and speed. Contact us at <span className="font-mono text-amber">support@kwas.tech</span>.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 shadow-md"
        >
          <Mail size={16} />
          Contact KWAS Tech
        </Link>
      </div>
    </section>
  );
}
