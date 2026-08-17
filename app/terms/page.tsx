import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, ShieldCheck, Mail, AlertCircle, ShoppingBag, Truck, RefreshCw, ShieldAlert, Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions — KWAS Technologies",
  description:
    "Official Terms and Conditions governing your use of KWAS Technologies (Key Web App Solutions Technologies) website, web applications, online tools, software downloads, digital licenses, and PayHere checkout services.",
  keywords: [
    "KWAS Technologies Terms and Conditions",
    "Key Web App Solutions Terms",
    "KWAS Tech Business Terms",
    "PayHere Approved Terms and Conditions",
    "KWAS Online Tools Terms",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/terms",
  },
  openGraph: {
    title: "Terms and Conditions — KWAS Technologies",
    description:
      "Official Business Terms & Conditions for KWAS Technologies. Software licensing, digital product delivery, and PayHere order processing.",
    url: "https://www.kwas.tech/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions — KWAS Technologies",
    description: "Official Terms and Conditions of KWAS Technologies.",
  },
};

export default function TermsOfServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Terms and Conditions", "item": "https://www.kwas.tech/terms" },
        ],
      },
      {
        "@type": "WebPage",
        "name": "Terms and Conditions — KWAS Technologies",
        "url": "https://www.kwas.tech/terms",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
            <FileText size={14} />
            <span>Official Business Terms &amp; Conditions</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-sm font-mono text-muted">
            KWAS Technologies (Key Web App Solutions Technologies) · Effective Date: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted">

          {/* Section 1 */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <CheckCircle2 size={18} className="text-amber" />
              <h2>1. Agreement &amp; Use of Website</h2>
            </div>
            <p>
              Welcome to <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong>, accessible at{" "}
              <a href="https://www.kwas.tech" className="text-amber hover:underline font-mono">https://www.kwas.tech</a>. These Terms and Conditions govern your access to and use of our website, web applications, free online utility tools, software downloads, digital licenses, and payment transactions.
            </p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>You must be at least <strong>18 years old</strong> (or the legal age of majority in your jurisdiction) to make purchases or enter binding contracts with KWAS Technologies.</li>
              <li>You agree to provide accurate, truthful, and complete information during any registration or order checkout process.</li>
              <li>You are responsible for maintaining the confidentiality of any account credentials or license keys issued to you.</li>
            </ul>
          </section>

          {/* Section 2 - Products & Pricing */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <ShoppingBag size={18} className="text-amber" />
              <h2>2. Product Specifications &amp; Pricing</h2>
            </div>
            <p>
              KWAS Technologies offers web application solutions, Android utility packages (such as KWAS SysLens), commercial software licenses, and developer services.
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Product Information:</strong> We make every reasonable effort to ensure accurate product descriptions, screenshots, technical parameters, and prices. However, we do not warrant that all specifications are completely error-free.
              </li>
              <li>
                <strong>Pricing &amp; Modifications:</strong> All prices are displayed in applicable currencies (LKR / USD) and are subject to change without prior notice. Active orders already accepted will be fulfilled at the confirmed price at checkout.
              </li>
            </ul>
          </section>

          {/* Section 3 - Orders & Payments (PayHere) */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <ShieldCheck size={18} className="text-amber" />
              <h2>3. Orders &amp; Payment Processing (PayHere Integration)</h2>
            </div>
            <p>
              By placing an order for software licenses or web development services on our platform, you make an offer to purchase the selected digital products under these terms:
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Payment Authorization:</strong> You authorize KWAS Technologies and our payment gateway provider (<strong>PayHere</strong>) to charge your designated payment card or account for the total order amount, including any applicable taxes.
              </li>
              <li>
                <strong>Third-Party Payment Processors:</strong> We use trusted, PCI-DSS compliant third-party payment gateways (PayHere &amp; acquiring partner banks) to securely handle payment details. We do not store or have direct access to your credit card details.
              </li>
              <li>
                <strong>Order Verification &amp; Refusal:</strong> We reserve the right to decline or cancel any order in cases of suspected fraud, pricing errors, or unauthorized transaction activity.
              </li>
            </ul>
          </section>

          {/* Section 4 - Digital Delivery */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Truck size={18} className="text-amber" />
              <h2>4. Fulfillment &amp; Digital Software Delivery</h2>
            </div>
            <p>
              Because our products consist of digital software applications, license keys, and web app builds:
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Instant Digital Download:</strong> Software application binaries (such as APK files) and digital licenses are made available for immediate download or delivered via secure email upon successful payment confirmation.
              </li>
              <li>
                <strong>Custom Web App Solutions:</strong> Delivery timelines for custom web development services follow agreed project milestone schedules provided in your commercial service agreement.
              </li>
            </ul>
          </section>

          {/* Section 5 - Returns & Refunds */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <RefreshCw size={18} className="text-amber" />
              <h2>5. Returns &amp; Refund Policy</h2>
            </div>
            <p>
              All purchases and cancellations are subject to our dedicated{" "}
              <Link href="/refund-policy" className="text-amber hover:underline font-semibold">
                Refund &amp; Return Policy
              </Link>. Approved refunds will be credited back via our payment processor (PayHere) within 3 to 7 business days.
            </p>
          </section>

          {/* Section 6 - Intellectual Property */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Scale size={18} className="text-amber" />
              <h2>6. Intellectual Property &amp; Licensing</h2>
            </div>
            <p>
              All original content, branding, logos, web interfaces, and proprietary source code are owned by <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong> or licensed from third parties.
            </p>
            <p className="mt-3">
              For open-source projects (such as MIT-licensed devkits), usage is governed by our{" "}
              <Link href="/license" className="text-amber hover:underline font-semibold">
                App Licenses Page
              </Link>. You may not modify, rebrand, or resell proprietary software binaries without explicit written consent.
            </p>
          </section>

          {/* Section 7 - Prohibited Activities */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <ShieldAlert size={18} className="text-amber" />
              <h2>7. Prohibited Uses &amp; Security Standards</h2>
            </div>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>Using our website or tools for unlawful, fraudulent, or deceptive purposes.</li>
              <li>Attempting to breach, disable, or tamper with website security or server infrastructure.</li>
              <li>Distributing viruses, malware, or unauthorized automated scraping bots.</li>
            </ul>
          </section>

          {/* Section 8 - Limitation of Liability */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <AlertCircle size={18} className="text-amber" />
              <h2>8. Limitation of Liability</h2>
            </div>
            <p>
              To the maximum extent permitted by applicable law, KWAS Technologies, its founders, and affiliates shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use our software, website, or services.
            </p>
          </section>

          {/* Section 9 - Contact */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Mail size={18} className="text-amber" />
              <h2>9. Contact &amp; Business Inquiries</h2>
            </div>
            <p>
              If you have any questions or concerns regarding these Terms and Conditions, please reach out to our team:
            </p>
            <a
              href="mailto:support@kwas.tech?subject=Terms%20%26%20Conditions%20Inquiry"
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
