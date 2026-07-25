"use client";

import { motion } from "framer-motion";
import { Ban, GitBranch, Heart, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/Products";

const VALUES = [
  {
    icon: Heart,
    label: "Free by default",
    text: "Every app ships free, forever. Commercial licensing exists for teams that need support or white-label terms — it never gates the core product.",
  },
  {
    icon: GitBranch,
    label: "Source available",
    text: "Code lives on GitHub under an open license. Read it, fork it, or send a pull request — nothing here is a black box.",
  },
  {
    icon: Wrench,
    label: "Built to last",
    text: "Small, native-first apps that start fast and don't bloat over time — not another wrapper around a web view.",
  },
  {
    icon: Ban,
    label: "No dark patterns",
    text: "No forced accounts, no ad SDKs, no nagging to upgrade. If a feature needs your data, we ask first and explain why.",
  },
];

export function Philosophy() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Why Kwas Technologies"
        title="Built the way we'd want to use it."
        copy="Kwas Technologies started as a handful of tools we built for ourselves because the existing options were slow, ad-supported, or both. The same rules still apply to everything we ship."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {VALUES.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.1, ease: "easeOut" }}
            className="flex gap-4 rounded-xl border border-line bg-panel/50 p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-panel2 text-signal">
              <v.icon size={18} strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-fg">{v.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
