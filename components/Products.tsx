"use client";

import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import { apps, type AppItem, type Status } from "@/lib/data";

const STATUS_STYLE: Record<Status, string> = {
  Stable: "text-signal border-signalDim/60",
  Beta: "text-amber border-amberDim/60",
  Preview: "text-muted border-line",
};

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Releases"
        title="Apps & software, shipped free."
        copy="Every app below is free to use. Source is public. A commercial license is available for teams that want support or white-label terms — see each app's page for details."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app, i) => (
          <ProductCard key={app.slug} app={app} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ app, index }: { app: AppItem; index: number }) {
  const Icon = app.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group flex flex-col rounded-xl border border-line bg-panel/60 p-6 transition-all hover:-translate-y-1 hover:border-amberDim/70 hover:shadow-glowAmber"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel2 text-fg">
          <Icon size={18} strokeWidth={1.75} />
        </div>
        <span className={`rounded-full border px-2.5 py-1 font-mono text-[11px] ${STATUS_STYLE[app.status]}`}>
          {app.status}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-fg">{app.name}</h3>
      <p className="mt-1 font-mono text-xs text-faint">{app.version}</p>
      <p className="mt-3 text-sm font-medium text-muted">{app.tagline}</p>
      <p className="mt-2 text-sm leading-relaxed text-faint">{app.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {app.platforms.map((p) => (
          <span key={p} className="rounded-md bg-panel2 px-2 py-1 font-mono text-[11px] text-muted">
            {p}
          </span>
        ))}
        <span className="rounded-md bg-panel2 px-2 py-1 font-mono text-[11px] text-muted">{app.license}</span>
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-line pt-5">
        <a
          href={app.downloadUrl}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-fg px-3 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          <Download size={15} />
          Download
        </a>
        <a
          href={app.sourceUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${app.name} source on GitHub`}
          className="flex items-center justify-center rounded-lg border border-line p-2.5 text-muted transition-colors hover:border-faint hover:text-fg"
        >
          <Github size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-2xl"
    >
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-amber">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted">{copy}</p>
    </motion.div>
  );
}
