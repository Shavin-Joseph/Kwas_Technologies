import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Github,
  Star,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Smartphone,
  HardDrive,
  Activity,
  Wifi,
  BatteryCharging,
  ArrowLeft,
  Share2,
  ExternalLink,
  ChevronRight,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KWAS SysLens (v1.0.0) — Extreme Android System Diagnostics & Kernel Auditing",
  description:
    "Download KWAS SysLens APK (v1.0.0). Professional-grade Android hardware diagnostics, Linux kernel /proc parsing, CPU load averages, memory page faults, and Wi-Fi RSSI signal auditing with zero trackers.",
  keywords: [
    "KWAS SysLens",
    "KWAS SysLens APK download",
    "android system diagnostics app",
    "linux kernel proc parser android",
    "view cpu load averages android",
    "check memory page faults android",
    "wifi rssi signal audit android",
    "android cpu flags tester",
    "offline system diagnostics apk",
    "swiss style android hardware app",
    "jetpack compose system diagnostics",
    "android hardware info app without root",
    "android battery discharge current mA",
    "partition block filesystem table android",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/products/kwas-syslens",
  },
  openGraph: {
    title: "KWAS SysLens (v1.0.0) — Extreme Android System Diagnostics",
    description:
      "Surface low-level Android hardware metrics, CPU load averages, Linux kernel /proc interfaces, and network RSSI signals with 100% offline privacy.",
    url: "https://www.kwas.tech/products/kwas-syslens",
    siteName: "KWAS Technologies",
    images: [
      {
        url: "https://www.kwas.tech/images/kwas-syslens-icon.png",
        width: 1024,
        height: 1024,
        alt: "KWAS SysLens App Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KWAS SysLens (v1.0.0) — Android System Diagnostics",
    description:
      "Download KWAS SysLens APK. Extreme hardware transparency & Linux kernel /proc metrics for Android devices.",
    images: ["https://www.kwas.tech/images/kwas-syslens-icon.png"],
  },
};

export default function KwasSysLensPage() {
  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "KWAS SysLens",
    operatingSystem: "Android 7.0+",
    applicationCategory: "UtilitiesApplication",
    softwareVersion: "v1.0.0",
    fileSize: "8.4 MB",
    downloadUrl: "https://www.kwas.tech/downloads/kwas-syslens-v1.0.0.apk",
    installUrl: "https://github.com/Shavin-Joseph/Sys_Info/releases/tag/v1.0.0",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1420",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "KWAS Technologies (Key Web App Solutions Technologies)",
      url: "https://www.kwas.tech",
    },
    description:
      "KWAS SysLens is a professional-grade, ultra-transparent system diagnostics tool developed by KWAS Technologies for Android. Designed with a classic Swiss-style aesthetic, it surfaces low-level hardware parameters and Linux kernel /proc metrics.",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does KWAS SysLens require root access on Android?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. KWAS SysLens safely parses accessible Linux kernel /proc files and public Android System API parameters without requiring root privileges.",
        },
      },
      {
        "@type": "Question",
        name: "How does KWAS SysLens measure CPU load averages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KWAS SysLens directly parses /proc/loadavg to extract real 1-minute, 5-minute, and 15-minute system load metrics, active process counts, and context switch totals.",
        },
      },
      {
        "@type": "Question",
        name: "Is KWAS SysLens completely offline and private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. KWAS SysLens contains zero telemetry, zero analytics scripts, and zero cloud background sync. All diagnostics remain 100% on your device.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I download the official KWAS SysLens APK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can download the compiled APK binary (v1.0.0) directly from KWAS Technologies at https://www.kwas.tech/products or from the official GitHub release page at https://github.com/Shavin-Joseph/Sys_Info/releases/tag/v1.0.0.",
        },
      },
    ],
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.kwas.tech",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.kwas.tech/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "KWAS SysLens",
        item: "https://www.kwas.tech/products/kwas-syslens",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <article className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-muted mb-8">
          <Link href="/" className="hover:text-amber transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-faint" />
          <Link href="/products" className="hover:text-amber transition-colors">
            Products
          </Link>
          <ChevronRight size={14} className="text-faint" />
          <span className="text-fg font-semibold">KWAS SysLens (v1.0.0)</span>
        </nav>

        {/* Hero Section */}
        <header className="rounded-3xl border border-amber/30 bg-gradient-to-br from-amber/10 via-panel to-panel2 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-amber px-3 py-1 font-mono text-xs font-bold text-ink">
                  Production Release v1.0.0
                </span>
                <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-500">
                  Google Play Ready
                </span>
                <span className="font-mono text-xs text-muted">• 1,420 Verified Downloads</span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg sm:text-5xl">
                KWAS SysLens
              </h1>
              <p className="mt-2 font-mono text-sm font-semibold text-amber">
                Extreme system diagnostics &amp; low-level Linux kernel auditing for Android
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                KWAS SysLens parses deep into Linux kernel interfaces (<code className="text-amber">/proc</code>) to surface raw, high-fidelity hardware parameters, CPU load averages, memory page faults, Wi-Fi RSSI metrics, and partition block tables with 100% offline privacy.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/downloads/kwas-syslens-v1.0.0.apk"
                  download="kwas-syslens-v1.0.0.apk"
                  className="flex items-center gap-2 rounded-xl bg-amber px-6 py-3.5 text-sm font-bold text-ink shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <Download size={18} /> Direct Download APK (8.4 MB)
                </a>
                <a
                  href="https://github.com/Shavin-Joseph/Sys_Info/releases/tag/v1.0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-line bg-panel px-5 py-3.5 text-sm font-mono font-semibold text-fg transition-colors hover:border-amber/50 hover:bg-panel2"
                >
                  <Github size={18} /> GitHub Release Page
                </a>
              </div>
            </div>

            {/* App Icon Container */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="relative flex h-52 w-52 sm:h-60 sm:w-60 items-center justify-center rounded-3xl border border-amber/30 bg-panel p-3 shadow-2xl">
                  <Image
                    src="/images/kwas-syslens-icon.png"
                    alt="KWAS SysLens Android App Logo"
                    width={240}
                    height={240}
                    className="h-full w-full rounded-2xl object-cover shadow-md"
                    priority
                  />
                </div>
                <span className="mt-4 font-mono text-xs text-muted flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  100% Offline &amp; Zero Trackers
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Deep Feature Specifications Grid */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-fg">
            Key Diagnostic Capabilities
          </h2>
          <p className="mt-1 text-sm font-mono text-muted">
            Engineered with Jetpack Compose &amp; Material 3 Swiss-style eye-comfort typography.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-line bg-panel/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/30 bg-panel2 text-amber">
                <Cpu size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-fg">
                Processor &amp; Kernel Load
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Real-time 1/5/15 min load averages from <code className="text-amber">/proc/loadavg</code>, context switch counters, process creation rates, and CPU hardware flag mapping (AES, NEON, SHA1).
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/30 bg-panel2 text-amber">
                <Activity size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-fg">
                Memory (RAM) Diagnostics
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Exhaustive breakdown of Active, Dirty, Swap memory, virtual memory page fault tracking, and kernel slab allocation parameters.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/30 bg-panel2 text-amber">
                <Wifi size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-fg">
                Ultra Network &amp; RSSI Audit
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Wi-Fi RSSI signal strength (dBm), link speed, BSSID mapping, 5G/LTE cell operator parameters, and active socket connections.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/30 bg-panel2 text-amber">
                <BatteryCharging size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-fg">
                Battery mA Current Flow
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Real-time discharge/charge current in milliamperes (mA), voltage stability (mV), battery temperature (°C), and health status.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/30 bg-panel2 text-amber">
                <HardDrive size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-fg">
                Block Mount Partition Table
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Low-level Linux filesystem partition table (<code className="text-amber">/proc/partitions</code>), mount points, inode counts, and read/write I/O performance.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/30 bg-panel2 text-amber">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-fg">
                Zero Cloud Dependencies
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                100% local execution. No internet permission required for basic diagnostics, no third-party trackers, and no ad SDKs.
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (FAQ) Section */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-2xl font-bold text-fg">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-line bg-panel p-5">
              <h3 className="font-display text-sm font-semibold text-fg">
                Does KWAS SysLens require root access on Android?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                No. KWAS SysLens safely parses accessible Linux kernel /proc files and public Android System API parameters without requiring root privileges.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-5">
              <h3 className="font-display text-sm font-semibold text-fg">
                How does KWAS SysLens measure CPU load averages?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                KWAS SysLens directly parses /proc/loadavg to extract real 1-minute, 5-minute, and 15-minute system load metrics, active process counts, and context switch totals.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-5">
              <h3 className="font-display text-sm font-semibold text-fg">
                Is KWAS SysLens completely offline and private?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Yes. KWAS SysLens contains zero telemetry, zero analytics scripts, and zero cloud background sync. All diagnostics remain 100% on your device.
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
