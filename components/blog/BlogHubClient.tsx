"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { BookOpen, Clock, ArrowRight, Search, User, Sparkles, ShieldCheck } from "lucide-react";

const BLOG_POSTS = [
  {
    slug: "ultimate-pwa-guide-2026",
    title: "The Ultimate 2026 Guide to Progressive Web Applications (PWAs)",
    excerpt:
      "A 2,500+ word deep-dive into engineering modern PWAs: Next.js 14 architecture, Service Worker caching strategies, IndexedDB local storage, offline performance, and enterprise scaling.",
    category: "Web Engineering",
    date: "August 2026",
    readTime: "18 min read",
    author: "KWAS Engineering Team",
    route: "/blog/ultimate-pwa-guide-2026",
    featured: true,
  },
  {
    slug: "mastering-web-app-security",
    title: "Mastering Web Application Security & Zero-Knowledge Architecture",
    excerpt:
      "A 2,500+ word technical guide into web application security: AES-256-GCM hardware key encryption, Web Crypto API, Argon2id key derivation, zero-telemetry software design, and peer-to-peer data sync.",
    category: "Security & Cryptography",
    date: "August 2026",
    readTime: "20 min read",
    author: "KWAS Security Lab",
    route: "/blog/mastering-web-app-security",
    featured: true,
  },
  {
    slug: "building-pwas-in-2026",
    title: "Building High-Performance Progressive Web Apps (PWAs) in 2026",
    excerpt:
      "Learn how to build instant-loading, offline-capable Progressive Web Applications with Next.js 14, Service Workers, and native mobile UI performance.",
    category: "Web Engineering",
    date: "August 2026",
    readTime: "6 min read",
    author: "KWAS Engineering Team",
    route: "/blog/building-pwas-in-2026",
    featured: false,
  },
  {
    slug: "why-self-hosted-data-beats-cloud",
    title: "Why Self-Hosted Data Storage Beats Third-Party Cloud Lock-in",
    excerpt:
      "Discover the security and ownership advantages of peer-to-peer data sync and self-hosted private relay servers over public cloud subscriptions.",
    category: "Cloud & Privacy",
    date: "August 2026",
    readTime: "8 min read",
    author: "KWAS Security Lab",
    route: "/blog/why-self-hosted-data-beats-cloud",
    featured: false,
  },
  {
    slug: "essential-web-app-security",
    title: "Essential Web Application Security: Zero-Telemetry & Offline Vaults",
    excerpt:
      "A complete guide to AES-256-GCM hardware key encryption, zero-knowledge credential vaulting, and eliminating analytics trackers from modern software.",
    category: "Security & Encryption",
    date: "August 2026",
    readTime: "7 min read",
    author: "KWAS Tech Security",
    route: "/blog/essential-web-app-security",
    featured: false,
  },
];

export function BlogHubClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber">
                <BookOpen size={14} />
                <span>Engineering &amp; Web Security Blog</span>
              </div>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
                KWAS Tech Blog
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                Comprehensive 2,500+ word engineering guides, PWA architecture tutorials, and web security standards from <strong className="text-fg">KWAS Technologies (Key Web App Solutions Technologies)</strong>.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-line bg-panel2 pl-9 pr-4 py-2 text-xs text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-2xl border border-line bg-panel/70 p-6 transition-all hover:-translate-y-1 hover:border-amber/50 hover:shadow-2xl hover:bg-panel"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-muted mb-3">
                    <span className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-0.5 font-semibold text-amber">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-fg group-hover:text-amber transition-colors">
                    <Link href={post.route}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">{post.excerpt}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line/70 pt-4 font-mono text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <User size={12} className="text-amber" /> {post.author}
                  </span>
                  <Link href={post.route} className="font-semibold text-amber hover:underline flex items-center gap-1">
                    Read Guide <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
