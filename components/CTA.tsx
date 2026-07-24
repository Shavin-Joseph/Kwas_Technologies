"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { CircuitTraces } from "@/components/CircuitTraces";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-line bg-panel/60 px-8 py-16 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <CircuitTraces variant="hero" />
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Ship something today.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          Grab an app, read the source, or open an issue. Everything here is
          built in the open.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="group flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Browse the apps
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/kwas-tech"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-faint"
          >
            <Github size={16} />
            Star on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
