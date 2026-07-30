"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
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
          Build &amp; Ship With KWAS Technologies.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          Explore our privacy-first apps or get in touch for custom Web App Solutions at info@kwas.tech.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/products"
            className="group flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Explore All Products
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-faint hover:text-amber"
          >
            <Mail size={16} />
            Contact KWAS Tech
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
