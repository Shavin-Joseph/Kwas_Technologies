import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Scale,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Mail,
  Github,
  Cpu,
  Smartphone,
  Terminal,
  RadioTower,
  Layers,
  Puzzle,
  Lock,
  FileText,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "App Licenses — KWAS Technologies",
  description:
    "Official license information for all KWAS Technologies published apps including KWAS SysLens, Kwas Launcher, Kwas Vault, Kwas Terminal, Kwas Sync, Kwas Widgets, and Kwas DevKit.",
  keywords: [
    "KWAS Technologies License",
    "KWAS SysLens License",
    "Kwas App Open Source License",
    "KWAS Tech Free Software License",
    "Key Web App Solutions License",
    "KWAS Android App License",
    "MIT License KWAS",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/license",
  },
  openGraph: {
    title: "App Licenses — KWAS Technologies",
    description:
      "Official license terms for KWAS Technologies published apps. Free, open-source, and commercial licensing explained.",
    url: "https://www.kwas.tech/license",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Licenses — KWAS Technologies",
    description:
      "Official license terms for KWAS Technologies apps — free to use, open source, privacy-first.",
  },
};

const apps = [
  {
    slug: "kwas-syslens",
    name: "KWAS SysLens",
    version: "v1.0.0",
    icon: Cpu,
    status: "Stable",
    licenseType: "Free + Commercial",
    licenseTag: "Proprietary / Freeware",
    licenseColor: "text-amber border-amber/30 bg-amber/10",
    sourceUrl: "https://github.com/Shavin-Joseph/Sys_Info",
    description:
      "Professional Android system diagnostics tool. Free to download and use. Commercial redistribution or white-labelling requires a written license agreement with KWAS Technologies.",
    permissions: [
      "Use the app for personal & professional diagnostics",
      "Download and install on unlimited personal devices",
      "Share the official APK download link freely",
    ],
    restrictions: [
      "Decompile, reverse-engineer, or modify the binary",
      "Redistribute or resell the APK without permission",
      "White-label or rebrand for commercial use",
    ],
    commercialNote:
      "For commercial redistribution, enterprise licensing, or white-label inquiries, contact support@kwas.tech.",
  },
  {
    slug: "kwas-launcher",
    name: "Kwas Launcher",
    version: "v0.1.0-dev",
    icon: Smartphone,
    status: "In Development",
    licenseType: "Free + Open Source",
    licenseTag: "MIT License",
    licenseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    sourceUrl: "#",
    description:
      "Open-source Android home screen launcher. Released under the MIT License. You are free to use, modify, and distribute with attribution.",
    permissions: [
      "Use, copy, modify, and distribute the source code",
      "Use in commercial and personal projects",
      "Fork and publish derivative works with attribution",
    ],
    restrictions: [
      "Remove or alter copyright notices",
      "Claim original authorship without crediting KWAS Technologies",
    ],
    commercialNote: null,
  },
  {
    slug: "kwas-vault",
    name: "Kwas Vault",
    version: "v0.1.0-dev",
    icon: Lock,
    status: "In Development",
    licenseType: "Free + Open Source",
    licenseTag: "MIT License",
    licenseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    sourceUrl: "#",
    description:
      "AES-256 offline credential manager. Open source under MIT License. You may self-host, modify, and extend the codebase freely.",
    permissions: [
      "Use, copy, modify, and distribute the source code",
      "Self-host and run privately without restriction",
      "Build enterprise vault solutions with attribution",
    ],
    restrictions: [
      "Remove or alter copyright notices",
      "Claim original authorship without attribution",
    ],
    commercialNote: null,
  },
  {
    slug: "kwas-terminal",
    name: "Kwas Terminal",
    version: "v0.1.0-dev",
    icon: Terminal,
    status: "In Development",
    licenseType: "Free + Open Source",
    licenseTag: "MIT License",
    licenseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    sourceUrl: "#",
    description:
      "Native terminal emulator for Android and Web CLI. Released under the MIT License. Full source code available on GitHub.",
    permissions: [
      "Use, modify, and embed the terminal engine freely",
      "Distribute in commercial and open-source projects",
      "Fork and publish derivative terminal tools",
    ],
    restrictions: [
      "Remove or alter copyright notices",
      "Misrepresent the origin of the software",
    ],
    commercialNote: null,
  },
  {
    slug: "kwas-sync",
    name: "Kwas Sync",
    version: "v0.1.0-dev",
    icon: RadioTower,
    status: "In Development",
    licenseType: "Free + Open Source",
    licenseTag: "MIT License",
    licenseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    sourceUrl: "#",
    description:
      "Self-hosted point-to-point file sync tool. MIT Licensed. Deploy on your own infrastructure without any licensing fees.",
    permissions: [
      "Self-host on personal or commercial infrastructure",
      "Modify and extend the sync protocol",
      "Integrate into existing workflows",
    ],
    restrictions: [
      "Remove or alter copyright notices",
      "Claim ownership without attribution",
    ],
    commercialNote: null,
  },
  {
    slug: "kwas-widgets",
    name: "Kwas Widgets",
    version: "v0.1.0-dev",
    icon: Layers,
    status: "In Development",
    licenseType: "Free + Open Source",
    licenseTag: "MIT License",
    licenseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    sourceUrl: "#",
    description:
      "Modular Material You Android widget kit. Open source, MIT Licensed. Use and adapt the widgets in your own Android projects.",
    permissions: [
      "Use widget components in personal and commercial apps",
      "Modify and redistribute the source code",
      "Publish apps built on top of this widget kit",
    ],
    restrictions: [
      "Remove or alter copyright notices",
      "Publish without attribution to KWAS Technologies",
    ],
    commercialNote: null,
  },
  {
    slug: "kwas-devkit",
    name: "Kwas DevKit",
    version: "v0.1.0-dev",
    icon: Puzzle,
    status: "In Development",
    licenseType: "Free + Open Source",
    licenseTag: "MIT License",
    licenseColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    sourceUrl: "#",
    description:
      "Developer CLI toolchain for scaffolding, building, and signing apps. MIT Licensed. Integrate into any build pipeline freely.",
    permissions: [
      "Use in personal, open-source, and commercial build pipelines",
      "Modify and fork the CLI toolchain",
      "Bundle in developer products with attribution",
    ],
    restrictions: [
      "Remove or alter copyright notices",
      "Distribute as proprietary without attribution",
    ],
    commercialNote: null,
  },
];

const statusColors: Record<string, string> = {
  Stable: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Beta: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "In Development": "text-muted bg-panel border-line",
};

export default function LicensePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kwas.tech" },
          { "@type": "ListItem", position: 2, name: "License", item: "https://www.kwas.tech/license" },
        ],
      },
      {
        "@type": "WebPage",
        name: "App Licenses — KWAS Technologies",
        url: "https://www.kwas.tech/license",
        publisher: {
          "@type": "Organization",
          name: "KWAS Technologies (Key Web App Solutions Technologies)",
          url: "https://www.kwas.tech",
          email: "support@kwas.tech",
        },
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
      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">

        {/* Header */}
        <div className="border-b border-line pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
            <Scale size={13} />
            <span>Official License Information</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            App Licenses
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            All KWAS Technologies apps are free to use. Open-source apps are released under the{" "}
            <span className="font-mono text-emerald-400">MIT License</span>. Released stable apps
            may carry additional commercial terms. Read the per-app license below.
          </p>
          <p className="mt-1.5 font-mono text-xs text-faint">
            KWAS Technologies (Key Web App Solutions Technologies) · Updated August 2026
          </p>
        </div>

        {/* License type legend */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
            <div>
              <p className="font-mono text-xs font-semibold text-emerald-400">MIT License (Open Source)</p>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Free to use, modify, and distribute. Attribution required. Applies to all in-development KWAS apps.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-amber/20 bg-amber/5 p-4">
            <ShieldCheck size={18} className="mt-0.5 shrink-0 text-amber" />
            <div>
              <p className="font-mono text-xs font-semibold text-amber">Proprietary Freeware</p>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Free to download and use. Reverse-engineering or commercial redistribution requires written permission.
              </p>
            </div>
          </div>
        </div>

        {/* App License Cards */}
        <div className="mt-10 flex flex-col gap-6">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <section
                key={app.slug}
                id={app.slug}
                className="rounded-2xl border border-line bg-panel/60 overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex flex-col gap-3 border-b border-line/60 bg-panel2/50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-panel2">
                      <Icon size={20} className="text-amber" />
                    </div>
                    <div>
                      <h2 className="font-display text-base font-bold text-fg">{app.name}</h2>
                      <p className="font-mono text-xs text-faint">{app.version}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold ${statusColors[app.status]}`}
                    >
                      {app.status}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold ${app.licenseColor}`}
                    >
                      <Scale size={11} />
                      {app.licenseTag}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-6 py-5 flex flex-col gap-5">
                  <p className="text-sm leading-relaxed text-muted">{app.description}</p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Permissions */}
                    <div>
                      <div className="mb-2 flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400">
                        <CheckCircle2 size={13} />
                        <span>Permitted</span>
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {app.permissions.map((p, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted">
                            <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-emerald-500/60" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Restrictions */}
                    <div>
                      <div className="mb-2 flex items-center gap-1.5 font-mono text-xs font-semibold text-red-400">
                        <XCircle size={13} />
                        <span>Restricted</span>
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {app.restrictions.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted">
                            <XCircle size={12} className="mt-0.5 shrink-0 text-red-500/60" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Commercial Note */}
                  {app.commercialNote && (
                    <div className="flex items-start gap-2.5 rounded-xl border border-amber/20 bg-amber/5 px-4 py-3">
                      <AlertCircle size={14} className="mt-0.5 shrink-0 text-amber" />
                      <p className="text-xs leading-relaxed text-muted">
                        {app.commercialNote}
                      </p>
                    </div>
                  )}

                  {/* Footer links */}
                  <div className="flex flex-wrap items-center gap-3 border-t border-line/50 pt-4">
                    {app.sourceUrl && app.sourceUrl !== "#" ? (
                      <a
                        href={app.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs font-medium text-muted transition-colors hover:border-amber/40 hover:text-amber"
                      >
                        <Github size={12} />
                        View Source
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-line/50 px-3 py-1.5 font-mono text-xs font-medium text-faint cursor-not-allowed">
                        <Github size={12} />
                        Source Coming Soon
                      </span>
                    )}
                    <a
                      href={`/products#${app.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs font-medium text-muted transition-colors hover:border-amber/40 hover:text-amber"
                    >
                      <FileText size={12} />
                      App Details
                    </a>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* MIT License Full Text */}
        <section className="mt-12 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-4">
            <Scale size={18} className="text-emerald-400" />
            <h2>MIT License — Full Text</h2>
          </div>
          <pre className="whitespace-pre-wrap rounded-xl border border-line bg-panel p-5 font-mono text-xs leading-relaxed text-muted overflow-x-auto">
{`MIT License

Copyright (c) 2026 KWAS Technologies
(Key Web App Solutions Technologies)
https://www.kwas.tech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </pre>
        </section>

        {/* Contact section */}
        <section className="mt-8 rounded-2xl border border-line bg-panel/60 p-6">
          <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
            <Mail size={18} className="text-amber" />
            <h2>Licensing Inquiries</h2>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            For commercial licensing agreements, enterprise redistribution rights, or white-label
            requests for any KWAS Technologies app, contact us directly:
          </p>
          <a
            href="mailto:support@kwas.tech?subject=License%20Inquiry"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2.5 font-mono text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail size={14} />
            support@kwas.tech
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
