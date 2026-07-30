"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Github,
  Star,
  ShieldCheck,
  CheckCircle2,
  Search,
  Sparkles,
  X,
  Smartphone,
  Terminal,
  Layers,
  RadioTower,
  Puzzle,
  Info,
  Clock,
  Code2,
} from "lucide-react";
import { apps as initialApps, type AppItem, type Status, type Category } from "@/lib/data";
import { fetchProductsFromFirestore } from "@/lib/firebase";

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Android Apps",
  "Key Web Apps",
  "Privacy & Security",
  "Developer Tools",
];

const STATUS_STYLE: Record<Status, string> = {
  "In Development": "bg-amber/10 text-amber border-amber/30",
  Beta: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  Stable: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
};

const ICON_MAP: Record<string, any> = {
  "kwas-launcher": Smartphone,
  "kwas-vault": ShieldCheck,
  "kwas-terminal": Terminal,
  "kwas-sync": RadioTower,
  "kwas-widgets": Layers,
  "kwas-devkit": Puzzle,
};

export function Products() {
  const [productList, setProductList] = useState<AppItem[]>(initialApps);
  const [selectedCategory, setSelectedCategory] = useState<"All" | Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalApp, setActiveModalApp] = useState<AppItem | null>(null);
  const [isLoadingLive, setIsLoadingLive] = useState(true);

  // Fetch live products data from Cloud Firestore on mount
  useEffect(() => {
    async function loadLiveData() {
      setIsLoadingLive(true);
      const firestoreProducts = await fetchProductsFromFirestore();
      if (firestoreProducts && firestoreProducts.length > 0) {
        // Merge Firestore dynamic counts & status with icon mappings
        const merged: AppItem[] = firestoreProducts.map((fp) => ({
          ...fp,
          license: (fp.license as any) || "Free + Open Source",
          icon: ICON_MAP[fp.slug] || Smartphone,
        }));
        setProductList(merged);
      }
      setIsLoadingLive(false);
    }
    loadLiveData();
  }, []);

  // Filter apps by category & search query
  const filteredApps = productList.filter((app) => {
    const matchesCategory = selectedCategory === "All" || app.category === selectedCategory;
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredApp = productList.find((a) => a.slug === "kwas-launcher") || productList[0];

  return (
    <section id="products" className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      {/* Store Title & Trust Banner */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber">
            <Sparkles size={14} />
            Live Firebase Connected App Store
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
            Apps &amp; Software Downloads
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            All software statistics, download metrics, and release statuses are fetched live from <strong className="text-fg">Firebase Cloud Firestore</strong>. Apps currently in active pre-release development are marked accordingly.
          </p>
        </div>

        {/* Security & Verification Badge */}
        <div className="flex items-center gap-3 rounded-xl border border-line bg-panel2 p-3.5 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/30 bg-amber/10 text-amber">
            <Clock size={20} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-display text-xs font-semibold text-fg">
              <span>Under Active Development</span>
            </div>
            <div className="text-[11px] font-mono text-muted">Real Counts &amp; Dynamic Firestore Data</div>
          </div>
        </div>
      </div>

      {/* Featured App Spotlight Billboard */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-amber/30 bg-gradient-to-br from-amber/10 via-panel to-panel2 p-6 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-amber px-2.5 py-1 font-mono text-xs font-bold text-ink">
                Featured Pre-Release
              </span>
              <span className="rounded-md border border-amber/40 bg-panel px-2.5 py-1 font-mono text-xs font-semibold text-amber">
                {featuredApp.status}
              </span>
              <span className="font-mono text-xs text-muted">
                • {featuredApp.downloads} Downloads
              </span>
            </div>

            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-fg">
              {featuredApp.name}
            </h2>
            <p className="mt-1 font-mono text-xs font-semibold text-amber">{featuredApp.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{featuredApp.description}</p>

            {/* Featured App Specs Grid */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-fg">
              <div className="flex items-center gap-1 text-amber">
                <Star size={16} fill="currentColor" />
                <span className="font-bold">{featuredApp.rating}</span>
              </div>
              <div className="text-muted">•</div>
              <div className="text-muted">Size: {featuredApp.size}</div>
              <div className="text-muted">•</div>
              <div className="text-muted">Version: {featuredApp.version}</div>
              <div className="text-muted">•</div>
              <div className="text-muted">OS: {featuredApp.platforms.join(", ")}</div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveModalApp(featuredApp)}
                className="flex items-center gap-2 rounded-xl bg-amber px-5 py-3 text-sm font-semibold text-ink shadow-lg transition-transform hover:-translate-y-0.5"
              >
                {featuredApp.isReleased ? (
                  <>
                    <Download size={16} /> Get Release Package
                  </>
                ) : (
                  <>
                    <Clock size={16} /> Under Development (Pre-Release)
                  </>
                )}
              </button>
              <button
                onClick={() => setActiveModalApp(featuredApp)}
                className="flex items-center gap-1.5 rounded-xl border border-line bg-panel px-4 py-3 text-sm font-medium text-fg transition-colors hover:border-amber/50 hover:bg-panel2"
              >
                <Info size={16} />
                Store Page Details
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center rounded-3xl border border-amber/30 bg-gradient-to-b from-amber/20 to-panel p-6 shadow-2xl">
              <featuredApp.icon size={84} className="text-amber" strokeWidth={1.5} />
              <div className="absolute -bottom-3 rounded-full border border-amber/40 bg-panel px-3 py-1 font-mono text-[11px] font-bold text-amber shadow-md">
                {featuredApp.status}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Category Navigation & Live Search Bar */}
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-2 font-mono text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-amber text-ink shadow-md"
                  : "bg-panel2 text-muted hover:bg-panel hover:text-fg border border-line"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
          <input
            type="text"
            placeholder="Search software entries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-line bg-panel2 pl-9 pr-4 py-2 text-xs text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* App Store Grid Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredApps.map((app, i) => {
          const Icon = app.icon;
          return (
            <motion.div
              key={app.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
              className="group flex flex-col justify-between rounded-2xl border border-line bg-panel/70 p-6 transition-all hover:-translate-y-1 hover:border-amber/50 hover:shadow-2xl hover:bg-panel"
            >
              <div>
                {/* Header: Icon, Category & Status */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/20 bg-panel2 text-amber shadow-sm group-hover:scale-105 group-hover:border-amber/50 transition-all">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${
                        STATUS_STYLE[app.status]
                      }`}
                    >
                      {app.status}
                    </span>
                    <span className="font-mono text-[10px] text-faint">{app.category}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-4 font-display text-lg font-bold text-fg group-hover:text-amber transition-colors">
                  {app.name}
                </h3>
                <p className="mt-0.5 text-xs font-mono text-amber/90 font-medium">{app.tagline}</p>

                {/* Real Metrics & Downloads Row */}
                <div className="mt-3 flex items-center gap-3 font-mono text-xs text-muted">
                  <div className="flex items-center gap-1 text-amber">
                    <Star size={13} fill="currentColor" />
                    <span className="font-bold">{app.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{app.downloads > 0 ? `${app.downloads} downloads` : "0 downloads (Pre-release)"}</span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-2">
                  {app.description}
                </p>

                {/* Platform & Version Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded-md border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber">
                    {app.version}
                  </span>
                  {app.platforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-md border border-line bg-panel2 px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar (App Store style) */}
              <div className="mt-6 flex items-center gap-2 border-t border-line/70 pt-4">
                <button
                  onClick={() => setActiveModalApp(app)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3.5 py-2.5 font-mono text-xs font-bold transition-transform hover:-translate-y-0.5 shadow-md ${
                    app.isReleased
                      ? "bg-amber text-ink"
                      : "bg-panel2 border border-line text-fg hover:border-amber/50"
                  }`}
                >
                  {app.isReleased ? (
                    <>
                      <Download size={14} /> Get Package
                    </>
                  ) : (
                    <>
                      <Clock size={14} className="text-amber" /> Under Development
                    </>
                  )}
                </button>
                <button
                  onClick={() => setActiveModalApp(app)}
                  className="flex items-center justify-center rounded-xl border border-line bg-panel2 px-3 py-2.5 text-xs font-mono font-medium text-fg transition-colors hover:border-amber/50 hover:bg-panel"
                  title="View Store Details"
                >
                  Details
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Store Detail Modal */}
      <AnimatePresence>
        {activeModalApp && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              className="relative w-full max-w-2xl rounded-2xl border border-amber/40 bg-panel p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalApp(null)}
                className="absolute right-4 top-4 rounded-full border border-line bg-panel2 p-2 text-muted hover:text-fg"
              >
                <X size={18} />
              </button>

              {/* Modal App Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-amber/30 bg-panel2 text-amber shadow-md">
                  <activeModalApp.icon size={36} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-bold text-fg">{activeModalApp.name}</h3>
                    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${STATUS_STYLE[activeModalApp.status]}`}>
                      {activeModalApp.status}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-amber font-semibold mt-0.5">{activeModalApp.tagline}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
                    <span className="flex items-center gap-1 text-amber">
                      <Star size={13} fill="currentColor" />
                      {activeModalApp.rating} Rating
                    </span>
                    <span>•</span>
                    <span>{activeModalApp.downloads} Downloads</span>
                    <span>•</span>
                    <span>Size: {activeModalApp.size}</span>
                  </div>
                </div>
              </div>

              {/* Development Status Notice */}
              {!activeModalApp.isReleased && (
                <div className="mt-5 rounded-xl border border-amber/40 bg-amber/10 p-4 flex items-start gap-3">
                  <Clock size={20} className="text-amber shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-xs font-semibold text-fg">In Active Pre-Release Development</h4>
                    <p className="mt-0.5 text-xs text-muted leading-relaxed">
                      This application is currently being engineered by KWAS Technologies. Official release binaries will be published here upon completion.
                    </p>
                  </div>
                </div>
              )}

              {/* App Description */}
              <div className="mt-5 border-t border-line pt-4">
                <h4 className="font-display text-sm font-semibold text-fg">About this App</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{activeModalApp.description}</p>
              </div>

              {/* Key Features List */}
              <div className="mt-5 border-t border-line pt-4">
                <h4 className="font-display text-sm font-semibold text-fg mb-3">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalApp.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-fg">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Notes */}
              <div className="mt-5 border-t border-line pt-4">
                <h4 className="font-display text-sm font-semibold text-fg">Development Status ({activeModalApp.version})</h4>
                <p className="mt-1 text-xs text-muted">{activeModalApp.releaseNotes}</p>
              </div>

              {/* Action Footer */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={activeModalApp.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 w-full items-center justify-center gap-2 rounded-xl bg-amber px-5 py-3 text-sm font-bold text-ink shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <Code2 size={16} />
                  View GitHub Source Code
                </a>
                <a
                  href="mailto:info@kwas.tech?subject=Beta%20Access%20Request%20for%20"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-line bg-panel2 px-4 py-3 text-xs font-mono font-medium text-fg hover:border-amber/50"
                >
                  Request Pre-Release Access
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
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
