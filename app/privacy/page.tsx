import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Mail, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — KWAS Technologies",
  description:
    "Official Privacy Policy for KWAS Technologies (Key Web App Solutions Technologies). Learn how we protect user data, adhere to zero-telemetry principles, and comply with GDPR & Google AdSense standards.",
  keywords: [
    "KWAS Technologies Privacy Policy",
    "Key Web App Solutions Privacy",
    "KWAS Tech Data Policy",
    "Zero Telemetry Privacy",
    "AdSense Privacy Policy KWAS",
  ],
  alternates: {
    canonical: "https://kwas.tech/privacy",
  },
  openGraph: {
    title: "Privacy Policy — KWAS Technologies",
    description:
      "Official Privacy Policy of KWAS Technologies (Key Web App Solutions Technologies). Privacy-first, zero-telemetry, and GDPR compliant.",
    url: "https://kwas.tech/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — KWAS Technologies",
    description: "Official Privacy Policy of KWAS Technologies. Zero-telemetry & privacy-first.",
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://kwas.tech/privacy" },
        ],
      },
      {
        "@type": "WebPage",
        "name": "Privacy Policy — KWAS Technologies",
        "url": "https://kwas.tech/privacy",
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Technologies (Key Web App Solutions Technologies)",
          "url": "https://kwas.tech",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-emerald-500 mb-4">
            <ShieldCheck size={14} />
            <span>GDPR &amp; AdSense Compliant</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm font-mono text-muted">
            KWAS Technologies (Key Web App Solutions Technologies) · Effective Date: August 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted">
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Lock size={18} className="text-amber" />
              <h2>1. Our Privacy Commitment</h2>
            </div>
            <p>
              At <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong>, accessible from <a href="https://kwas.tech" className="text-amber hover:underline">https://kwas.tech</a>, one of our main priorities is the privacy of our visitors and application users. This Privacy Policy document outlines the types of information collected and recorded by KWAS Technologies and how we use it.
            </p>
            <p className="mt-3">
              We operate under strict privacy-first principles. Most of our free online utility tools run entirely client-side inside your browser without uploading your files, images, text, or data to any external server.
            </p>
          </section>

          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Eye size={18} className="text-amber" />
              <h2>2. Information We Collect</h2>
            </div>
            <p>
              <strong>Direct Contact Information:</strong> If you contact us directly via our contact form or at <span className="font-mono text-amber">support@kwas.tech</span>, we may receive information such as your name, email address, message contents, and any attachments you provide.
            </p>
            <p className="mt-3">
              <strong>Interactive Online Tools Data:</strong> Our client-side online tools (such as the Image Converter, QR Code Generator, Word Counter, Speed Test, and Unit Converter) process your data locally in your browser session. Your uploaded images and text entries remain on your device and are never stored on our servers.
            </p>
          </section>

          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <FileText size={18} className="text-amber" />
              <h2>3. Cookies &amp; Advertising Partners (Google AdSense)</h2>
            </div>
            <p>
              Like any other website, KWAS Technologies uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
            </p>
            <p className="mt-3">
              <strong>Google DoubleClick DART Cookie:</strong> Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-amber hover:underline">https://policies.google.com/technologies/ads</a>.
            </p>
          </section>

          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <h2>4. GDPR &amp; CCPA Data Protection Rights</h2>
            </div>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Mail size={18} className="text-amber" />
              <h2>5. Contact Information</h2>
            </div>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us by email at <a href="mailto:support@kwas.tech" className="font-mono text-amber hover:underline font-semibold">support@kwas.tech</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
