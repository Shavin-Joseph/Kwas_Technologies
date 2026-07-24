"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { CircuitTraces } from "@/components/CircuitTraces";
import { Terminal } from "@/components/Terminal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <CircuitTraces variant="hero" className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-20"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-signal"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            v2.4.1 — now shipping
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            Software that stays
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber to-signal">
              out of your way.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            KWAS — Key Web App Solutions — builds practical software for teams that want
            reliable products, plain pricing, and no unnecessary friction. No
            ads. No trackers. No accounts you didn&apos;t ask for.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
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
              View source
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-faint">
            <span>MIT &amp; commercial licenses</span>
            <span>Android · Desktop</span>
            <span>Zero telemetry</span>
          </motion.div>
        </div>

        <motion.div variants={item} className="animate-floatSlow">
          <Terminal />
        </motion.div>
      </motion.div>
    </section>
  );
}
