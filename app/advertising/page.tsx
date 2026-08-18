import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, ExternalLink, ShieldCheck, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Advertising Policy — KWAS Technologies",
  description:
    "How KWAS Technologies uses Google AdSense and advertising. Learn about ad choices, our disclosure policies, and how we support ethical advertising.",
  keywords: [
    "advertising policy",
    "Google AdSense",
    "ad choices",
    "ethical advertising",
    "KWAS advertising",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/advertising",
  },
  openGraph: {
    title: "Advertising Policy — KWAS Technologies",
    description:
      "Learn how KWAS Technologies uses Google AdSense and how we maintain ethical advertising standards.",
    url: "https://www.kwas.tech/advertising",
    type: "website",
  },
};

export default function AdvertisingPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Advertising Policy", "item": "https://www.kwas.tech/advertising" },
        ],
      },
      {
        "@type": "WebPage",
        "name": "Advertising Policy — KWAS Technologies",
        "url": "https://www.kwas.tech/advertising",
        "description":
          "Official advertising policy and disclosure for KWAS Technologies, including Google AdSense usage and user privacy rights.",
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Technologies",
          "url": "https://www.kwas.tech",
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
        <div className="border-b border-line pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
            <FileText size={14} />
            <span>Official Advertising Disclosure</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Advertising Policy
          </h1>
          <p className="mt-2 text-sm font-mono text-muted">
            KWAS Technologies · Last Updated: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted">
          {/* Google AdSense */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Globe size={20} className="text-amber" />
              <h2 className="font-display text-xl font-bold text-fg">Google AdSense</h2>
            </div>
            <p>
              KWAS Technologies uses{" "}
              <a
                href="https://www.google.com/adsense"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:underline font-semibold"
              >
                Google AdSense
              </a>{" "}
              to display contextual advertisements on our website. These ads help us maintain, improve, and provide free
              access to our tools, blog content, and services.
            </p>
          </section>

          {/* How Ads Work */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={20} className="text-emerald-500" />
              <h2 className="font-display text-xl font-bold text-fg">How We Display Advertisements</h2>
            </div>
            <p className="mb-3">
              Google AdSense serves ads based on your browsing behavior, search history, and interests. Ads are displayed
              through:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-muted">
              <li>
                <strong>Display Ads</strong> — Banner and rectangle advertisements on our pages
              </li>
              <li>
                <strong>In-Article Ads</strong> — Ads placed within blog post content
              </li>
              <li>
                <strong>Responsive Ads</strong> — Ads that adapt to your device size
              </li>
              <li>
                <strong>Matched Content</strong> — Suggested articles and links
              </li>
            </ul>
          </section>

          {/* Personalized Advertising */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <ExternalLink size={20} className="text-signal" />
              <h2 className="font-display text-xl font-bold text-fg">Personalized Advertising &amp; Data Use</h2>
            </div>
            <p className="mb-3">
              Google AdSense may collect and use information about your browsing activity to serve personalized ads.
              This includes:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-muted">
              <li>Pages you visit on our site</li>
              <li>Links you click</li>
              <li>Search queries and browsing history</li>
              <li>Demographic information (inferred)</li>
              <li>Device and browser information</li>
            </ul>
            <p className="mt-3">
              For more information, read{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:underline font-semibold"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Ad Choices */}
          <section className="rounded-2xl border border-line bg-panel/70 p-6">
            <h3 className="font-display text-lg font-bold text-fg mb-3">Your Ad Choices &amp; Controls</h3>
            <p className="mb-4">
              You have control over the ads you see. Google provides several tools to manage personalized advertising:
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-fg mb-1">Google Data &amp; Privacy Settings</h4>
                <p className="text-xs">
                  Visit{" "}
                  <a
                    href="https://myaccount.google.com/data-and-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber hover:underline font-semibold"
                  >
                    Google Data &amp; Privacy
                  </a>{" "}
                  to review and control your personalization settings across Google services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-fg mb-1">Ad Settings</h4>
                <p className="text-xs">
                  Manage your ad interests at{" "}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber hover:underline font-semibold"
                  >
                    Google Ad Settings
                  </a>
                  .
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-fg mb-1">Ad Blockers &amp; Extensions</h4>
                <p className="text-xs">
                  You can use ad blockers or browser extensions to control ad display. KWAS will never restrict access to
                  our content based on ad blocking.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-fg mb-1">Opt-Out of Personalized Ads</h4>
                <p className="text-xs">
                  Use the{" "}
                  <a
                    href="https://www.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber hover:underline font-semibold"
                  >
                    Digital Advertising Alliance opt-out tool
                  </a>{" "}
                  to limit behavioral advertising across the web.
                </p>
              </div>
            </div>
          </section>

          {/* Disclosure &amp; Transparency */}
          <section>
            <h2 className="font-display text-xl font-bold text-fg mb-3">Disclosure &amp; Transparency</h2>
            <p className="mb-3">We are committed to transparent advertising practices:</p>
            <ul className="space-y-2 pl-5 list-disc text-muted">
              <li>
                <strong>No Misleading Ads</strong> — We do not place ads that mimic buttons, navigation, or download links
              </li>
              <li>
                <strong>Sponsored Content</strong> — Any sponsored content or affiliate links are clearly marked
              </li>
              <li>
                <strong>No Deceptive UI</strong> — Ads are visually distinct from site content
              </li>
              <li>
                <strong>User-Friendly</strong> — Ads do not obstruct core content or functionality
              </li>
              <li>
                <strong>Policy Compliance</strong> — All ads comply with{" "}
                <a
                  href="https://support.google.com/adsense/answer/1348695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber hover:underline font-semibold"
                >
                  Google Publisher Standards
                </a>
              </li>
            </ul>
          </section>

          {/* Ad-Free Access */}
          <section className="rounded-2xl border border-amber/30 bg-amber/5 p-6">
            <h3 className="font-display text-lg font-bold text-fg mb-3">Ad-Free Experience</h3>
            <p>
              All KWAS tools, blog posts, and core content remain fully functional regardless of ad preferences or ad
              blockers. We never restrict access based on advertisement choices. If you prefer not to see personalized
              ads, you can:
            </p>
            <ul className="mt-3 space-y-2 pl-5 list-disc text-muted">
              <li>Use an ad blocker or privacy-focused browser</li>
              <li>Opt out of personalized ads in Google Account settings</li>
              <li>Use private/incognito browsing</li>
              <li>Browse our site normally — functionality is never restricted</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-xl font-bold text-fg mb-3">Questions or Concerns?</h2>
            <p>
              If you have concerns about our advertising practices, please{" "}
              <Link href="/contact" className="text-amber hover:underline font-semibold">
                contact us
              </Link>{" "}
              or email{" "}
              <a href="mailto:support@kwas.tech" className="text-amber hover:underline font-semibold">
                support@kwas.tech
              </a>
              .
            </p>
          </section>

          {/* Legal */}
          <section className="mt-12 pt-8 border-t border-line">
            <p className="text-xs text-faint">
              This advertising policy is part of our commitment to transparency and user privacy. For more information
              about how we use your data, please see our{" "}
              <Link href="/privacy" className="text-amber hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-amber hover:underline">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
