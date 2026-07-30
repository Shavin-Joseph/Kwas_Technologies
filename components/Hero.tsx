"use client";

import Link from "next/link";
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
            className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-xs text-amber"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            KWAS Technologies — Key Web App Solutions Technologies
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            Key Web App Solutions &amp;
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber to-signal">
              Software That Stays Out Of Your Way.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            <strong className="text-fg font-semibold">KWAS Technologies</strong> (Key Web App Solutions Technologies) builds high-performance web applications, custom web app solutions, privacy-first Android tools, and self-hosted software for modern teams and creators. No ads. No trackers.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-xs text-amber">
              #WebApps
            </span>
            <span className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-xs text-signal">
              #KeyWebAppSolutions
            </span>
            <span className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-xs text-muted">
              #AndroidTools
            </span>
            <span className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-xs text-faint">
              #SelfHosted
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="group flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/topics"
              className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-faint hover:text-amber"
            >
              Browse Topics
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-faint">
            <span>MIT &amp; commercial licenses</span>
            <span>Web · Android · Desktop</span>
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
