"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import {
  Image as ImageIcon,
  QrCode,
  FileText,
  Activity,
  ArrowLeftRight,
  Search,
  ShieldCheck,
  ArrowRight,
  Zap,
} from "lucide-react";

const TOOLS_LIST = [
  {
    slug: "image-converter",
    name: "Image Converter & WebP Compressor",
    tagline: "Convert PNG, JPG, WebP & shrink file sizes locally",
    description:
      "Compress and convert images between PNG, JPG, and WebP formats instantly in your browser. 100% private with zero server uploads.",
    icon: ImageIcon,
    category: "Media & Images",
    route: "/tools/image-converter",
    popular: true,
  },
  {
    slug: "qr-generator",
    name: "Universal QR Code Generator",
    tagline: "Custom QR codes for Wi-Fi, URLs, text & contacts",
    description:
      "Generate custom QR codes for Wi-Fi passwords, website links, WhatsApp messages, and vCard contact cards with vector PNG download.",
    icon: QrCode,
    category: "Utilities",
    route: "/tools/qr-generator",
    popular: true,
  },
  {
    slug: "word-counter",
    name: "Word & Character Counter",
    tagline: "Real-time word, sentence, reading time & social limit analyzer",
    description:
      "Live word counter, character counter, sentence counter, reading time estimator, and social media character limits (Twitter, Instagram, LinkedIn).",
    icon: FileText,
    category: "Text & Content",
    route: "/tools/word-counter",
    popular: true,
  },
  {
    slug: "speed-test",
    name: "Internet Speed Test & Ping Analyzer",
    tagline: "Test Wi-Fi, 5G & broadband download/upload speed live",
    description:
      "Measure your network bandwidth, download speed, upload speed, ping latency, and jitter in real-time.",
    icon: Activity,
    category: "Network & Speed",
    route: "/tools/speed-test",
    popular: true,
  },
  {
    slug: "unit-converter",
    name: "Universal Unit & Storage Converter",
    tagline: "Instant digital storage (MB/GB/TB), length & weight conversion",
    description:
      "Convert digital storage sizes (Bytes, KB, MB, GB, TB), distance, mass, and temperature units instantly.",
    icon: ArrowLeftRight,
    category: "Utilities",
    route: "/tools/unit-converter",
    popular: false,
  },
];

export function ToolsOverviewClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Media & Images", "Utilities", "Text & Content", "Network & Speed"];

  const filteredTools = TOOLS_LIST.filter((tool) => {
    const matchesCat = selectedCategory === "All" || tool.category === selectedCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber">
                <Zap size={14} />
                <span>100% Free Client-Side Browser Utilities</span>
              </div>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
                Free Online Utility Tools
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                Fast, privacy-first web utilities for everyday internet users. Convert images, generate QR codes, analyze text, test internet speed, and convert storage units with zero ad-trackers and zero server storage.
              </p>
            </div>

            {/* Privacy Badge */}
            <div className="flex items-center gap-3 rounded-xl border border-line bg-panel2 p-3.5 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="font-display text-xs font-semibold text-fg">100% Browser Local</div>
                <div className="text-[11px] font-mono text-muted">No Server Uploads · Zero Trackers</div>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
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

            <div className="relative w-full sm:w-64">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
              <input
                type="text"
                placeholder="Search web tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-line bg-panel2 pl-9 pr-4 py-2 text-xs text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Tools Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={tool.route}
                  className="group flex flex-col justify-between rounded-2xl border border-line bg-panel/70 p-6 transition-all hover:-translate-y-1 hover:border-amber/50 hover:shadow-2xl hover:bg-panel"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/20 bg-panel2 text-amber shadow-sm group-hover:scale-105 group-hover:border-amber/50 transition-all">
                        <Icon size={28} strokeWidth={1.75} />
                      </div>
                      {tool.popular && (
                        <span className="rounded-full border border-amber/40 bg-amber/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber">
                          Popular Tool
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-fg group-hover:text-amber transition-colors flex items-center justify-between">
                      {tool.name}
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber" />
                    </h3>
                    <p className="mt-1 text-xs font-mono text-amber/90 font-medium">{tool.tagline}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted">{tool.description}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-line/70 pt-4 font-mono text-xs text-amber font-semibold">
                    <span>Launch Tool</span>
                    <span>Free Browser App →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
