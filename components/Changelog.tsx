"use client";

import { motion } from "framer-motion";
import { changelog, type ChangelogEntry } from "@/lib/data";
import { SectionHeader } from "@/components/Products";

const TYPE_COLOR: Record<ChangelogEntry["type"], string> = {
  Release: "bg-amber",
  Feature: "bg-signal",
  Fix: "bg-faint",
};

export function Changelog() {
  return (
    <section id="changelog" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Build log"
        title="What shipped recently."
        copy="A running log of releases across every KWAS project. Wire this up to the GitHub Releases API if you'd rather it update itself — see the README."
      />

      <div className="relative mt-14 max-w-2xl">
        <div className="absolute bottom-0 left-[5px] top-2 w-px bg-line" />
        <div className="flex flex-col gap-10">
          {changelog.map((entry, i) => (
            <motion.div
              key={`${entry.version}-${entry.title}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="relative pl-8"
            >
              <span className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ${TYPE_COLOR[entry.type]}`} />
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-faint">
                <span>{entry.date}</span>
                <span className="text-muted">{entry.version}</span>
                <span className="rounded-full border border-line px-2 py-0.5">{entry.type}</span>
              </div>
              <h3 className="mt-2 font-display text-base font-semibold text-fg">{entry.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{entry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
