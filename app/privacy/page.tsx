import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Mail, Lock, Eye, FileText, CheckCircle2, CreditCard, Shield, ExternalLink, UserCheck, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — KWAS Technologies",
  description:
    "Official Privacy Policy for KWAS Technologies (Key Web App Solutions Technologies). Learn how we collect, use, and protect user data, process payments via PayHere, and comply with GDPR, CCPA, and Google Publisher Standards.",
  keywords: [
    "KWAS Technologies Privacy Policy",
    "Key Web App Solutions Privacy",
    "KWAS Tech Data Policy",
    "Zero Telemetry Privacy",
    "AdSense Privacy Policy KWAS",
    "PayHere Privacy Compliance",
    "Google Publisher Privacy Policy",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/privacy",
  },
  openGraph: {
    title: "Privacy Policy — KWAS Technologies",
    description:
      "Official Privacy Policy of KWAS Technologies. Privacy-first, zero-telemetry, and GDPR/PayHere compliant.",
    url: "https://www.kwas.tech/privacy",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.kwas.tech/privacy" },
        ],
      },
      {
        "@type": "WebPage",
        "name": "Privacy Policy — KWAS Technologies",
        "url": "https://www.kwas.tech/privacy",
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Technologies",
          "url": "https://www.kwas.tech",
          "email": "support@kwas.tech",
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
            <span>GDPR, PayHere &amp; Google Publisher Compliant</span>
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
          
          {/* Section 1 */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Lock size={18} className="text-amber" />
              <h2>1. Our Privacy Commitment</h2>
            </div>
            <p>
              At <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong>, accessible from{" "}
              <a href="https://www.kwas.tech" className="text-amber hover:underline font-mono">https://www.kwas.tech</a>, one of our main priorities is protecting the privacy and security of our visitors, app users, and software clients. This Privacy Policy document outlines how we collect, use, process, and safeguard your personal information.
            </p>
            <p className="mt-3">
              We operate under strict privacy-first principles. Most of our free online utility tools run entirely client-side inside your browser session without uploading your files, images, text, or diagnostic data to any external server.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Eye size={18} className="text-amber" />
              <h2>2. Information We Collect</h2>
            </div>
            <p>When you visit or interact with KWAS Technologies, we may collect the following information:</p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Personal Identification Information:</strong> Your name, email address, phone number, and company name provided voluntarily by you during registration, contact inquiries, or order checkout.
              </li>
              <li>
                <strong>Payment &amp; Billing Information:</strong> Information necessary to process orders for commercial software, application licenses, or web development services (such as billing address and invoice records). 
              </li>
              <li>
                <strong>Client-Side Utilities Data:</strong> Our interactive online tools (Image Converter, QR Code Generator, Word Counter, Speed Test, Unit Converter) process files and input data locally in your browser. Uploaded files remain on your device and are never stored on our servers.
              </li>
              <li>
                <strong>Technical Browsing Information:</strong> Log files, IP addresses, browser types, operating systems, and device identifiers collected automatically using standard web security logs and analytics.
              </li>
            </ul>
          </section>

          {/* Section 3 - Payment Handling */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <CreditCard size={18} className="text-amber" />
              <h2>3. Payment &amp; Financial Security (PayHere Integration)</h2>
            </div>
            <p>
              We use trusted third-party payment gateways—including <strong>PayHere</strong> and partner acquiring bank networks—to securely process payment transactions.
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Secure Payment Gateways:</strong> When you purchase software licenses or web development solutions, your sensitive financial information (such as credit/debit card numbers or bank details) is encrypted and processed directly by PayHere in compliance with PCI-DSS standards.
              </li>
              <li>
                <strong>Zero Card Data Storage:</strong> KWAS Technologies does not store, retain, or have access to your full credit card details or payment credentials on our servers.
              </li>
            </ul>
          </section>

          {/* Section 4 - Information Sharing */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Shield size={18} className="text-amber" />
              <h2>4. Information Sharing &amp; Third-Party Disclosure</h2>
            </div>
            <p>
              We respect your privacy. We do not sell, trade, rent, or transfer your personal identification information to third parties. We may share data only under the following limited conditions:
            </p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>
                <strong>Trusted Service Providers:</strong> With payment processors (PayHere), hosting infrastructure, and communications partners bound by strict contractual confidentiality and data security obligations.
              </li>
              <li>
                <strong>Legal Compliance &amp; Fraud Prevention:</strong> When required by law, valid legal orders, or to protect the safety, rights, and property of KWAS Technologies and our users against fraudulent or unauthorized transactions.
              </li>
            </ul>
          </section>

          {/* Section 5 - Google Publisher & AdSense */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <FileText size={18} className="text-amber" />
              <h2>5. Cookies &amp; Google Publisher Disclosures</h2>
            </div>
            <p>
              KWAS Technologies uses cookies and web beacons to enhance navigation, remember user preferences, and analyze website traffic.
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Google DoubleClick DART Cookies:</strong> Google is a third-party vendor on our site. Google uses cookies (including DART cookies) to serve ads based upon user visits to our site and other internet locations. You may opt out of personalized advertising by visiting the Google Ad Policy page:{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber hover:underline font-mono inline-flex items-center gap-1"
                >
                  Google Ad Policies <ExternalLink size={12} />
                </a>.
              </li>
              <li>
                <strong>How Google Uses Data:</strong> For detailed info on data collection by Google services, please view{" "}
                <a
                  href="https://www.google.com/policies/privacy/partners/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber hover:underline font-mono inline-flex items-center gap-1"
                >
                  How Google Uses Data <ExternalLink size={12} />
                </a>.
              </li>
            </ul>
          </section>

          {/* Section 6 - Google AdSense & Personalized Advertising */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Globe size={18} className="text-signal" />
              <h2>6. Google AdSense &amp; Personalized Advertising</h2>
            </div>
            <p>
              KWAS Technologies uses Google AdSense to display contextual advertisements on our website. Google AdSense may collect and use information about your browsing activity, device information, and interests to serve personalized ads.
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Data Collected by Google:</strong> Pages you visit, links you click, search history, demographic information, and device information.
              </li>
              <li>
                <strong>Your Ad Choices:</strong> You can manage personalized advertising preferences at{" "}
                <a
                  href="https://myaccount.google.com/data-and-privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber hover:underline font-mono inline-flex items-center gap-1"
                >
                  Google Data &amp; Privacy Settings <ExternalLink size={12} />
                </a>.
              </li>
              <li>
                <strong>Opt-Out Options:</strong> Use{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber hover:underline font-mono inline-flex items-center gap-1"
                >
                  Google Ad Settings <ExternalLink size={12} />
                </a>
                {" "}or ad blockers to limit personalized ads.
              </li>
            </ul>
            <p className="mt-3">
              For complete details, see our{" "}
              <Link href="/advertising" className="text-amber hover:underline font-semibold">
                Advertising Policy
              </Link>.
            </p>
          </section>

          {/* Section 7 - Children's Privacy */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <UserCheck size={18} className="text-amber" />
              <h2>7. Children&apos;s Privacy (COPPA Compliance)</h2>
            </div>
            <p>
              Protecting children&apos;s privacy online is paramount. KWAS Technologies does not knowingly collect any personally identifiable information from children under the age of 13. If you believe your child has provided personal information on our platform, please contact us immediately so we can promptly remove such records.
            </p>
          </section>

          {/* Section 8 - GDPR & CCPA */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <h2>8. GDPR &amp; CCPA Data Rights</h2>
            </div>
            <p>Users are entitled to full data protection rights under GDPR and CCPA regulations:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li><strong>Right to Access &amp; Portability:</strong> Request copies of your personal data held by us.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete details.</li>
              <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal data.</li>
              <li><strong>Right to Restrict or Object:</strong> Limit processing of your personal information.</li>
            </ul>
          </section>

          {/* Section 9 - Contact */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Mail size={18} className="text-amber" />
              <h2>9. Contact Our Privacy Officer</h2>
            </div>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or data protection at KWAS Technologies, contact us at:
            </p>
            <a
              href="mailto:support@kwas.tech?subject=Privacy%20Inquiry"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2.5 font-mono text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              support@kwas.tech
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
