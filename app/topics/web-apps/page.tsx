import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Globe, Code2, CheckCircle2, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Key Web App Solutions — Custom Web Application Development",
  description:
    "Explore Key Web App Solutions by KWAS Technologies: custom Progressive Web Apps, Next.js platforms, responsive dashboards, and scalable enterprise web software.",
  keywords: [
    "Key Web App Solutions",
    "custom web app development",
    "Next.js web applications",
    "PWA development",
    "enterprise web solutions",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/topics/web-apps",
  },
  openGraph: {
    title: "Key Web App Solutions — KWAS Technologies",
    description:
      "Custom web application development, Next.js architecture, and progressive web solutions from KWAS Technologies.",
    url: "https://www.kwas.tech/topics/web-apps",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Web App Solutions — KWAS Technologies",
    description: "Custom web application development and PWA solutions from KWAS Technologies.",
  },
};

const FEATURES = [
  {
    title: "Custom Web Application Architecture",
    description:
      "Full-stack Next.js and React web applications engineered for speed, clean code maintenance, and scalability.",
  },
  {
    title: "Progressive Web Apps (PWAs)",
    description:
      "Offline-capable, installable web applications that deliver native mobile feel across iOS, Android, and Desktop.",
  },
  {
    title: "Real-Time Dashboards & Analytics",
    description:
      "Responsive data dashboards with low-latency updates, interactive charts, and zero third-party tracking.",
  },
  {
    title: "Enterprise Portals & Microservices",
    description:
      "Secure API integrations, modern authentication, and decoupled microservice architectures.",
  },
];

export default function WebAppsTopicPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Topics & Solutions", "item": "https://www.kwas.tech/topics" },
          { "@type": "ListItem", "position": 3, "name": "Key Web App Solutions", "item": "https://www.kwas.tech/topics/web-apps" },
        ],
      },
      {
        "@type": "Service",
        "name": "Key Web App Solutions Development",
        "provider": {
          "@type": "Organization",
          "name": "KWAS Technologies",
          "url": "https://www.kwas.tech",
        },
        "areaServed": "Global",
        "description": "Custom web application development, Next.js architecture, and Progressive Web Apps by KWAS Technologies.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          {/* Header Badge & Title */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-xs text-amber mb-4">
              <Globe size={14} />
              <span>Core Topic · KWAS Technologies</span>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              Key Web App Solutions
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              KWAS Technologies (Key Web App Solutions Technologies) specializes in designing, building, and scaling high-performance web applications, custom web portals, and progressive web platforms.
            </p>
          </div>

          {/* Core Stack Badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "PWAs", "REST & GraphQL", "Edge Runtime"].map(
              (tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-amber"
                >
                  <Code2 size={12} />
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Grid of Capabilities */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-xl border border-line bg-panel/60 p-6 hover:border-amber/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel2 text-amber">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-fg">{feat.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Solution Inquiry Banner */}
          <div className="mt-16 rounded-2xl border border-amber/30 bg-gradient-to-r from-panel via-panel2 to-panel p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-amber mb-2">
                <Sparkles size={14} />
                <span>Custom Solution Inquiry</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg">
                Need a Custom Web Application for your business?
              </h3>
              <p className="mt-1 text-sm text-muted max-w-xl">
                Let KWAS Technologies build your next web platform with clean architecture, zero bloat, and top-tier performance. Contact us at <span className="font-mono text-amber">support@kwas.tech</span>.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact KWAS Tech
            </Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
