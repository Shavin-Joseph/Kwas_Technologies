import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RefreshCw, ShieldCheck, Mail, FileCheck, AlertCircle, HelpCircle, PackageX, CreditCard, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Return Policy — KWAS Technologies",
  description:
    "Official Refund, Return, and Exchange Policy for KWAS Technologies (Key Web App Solutions Technologies). Clear guidelines on digital software downloads, custom web app development, digital licenses, and payment processing.",
  keywords: [
    "KWAS Technologies Refund Policy",
    "KWAS Tech Return Policy",
    "Key Web App Solutions Refund Terms",
    "Digital Software Refund Policy",
    "PayHere Approved Refund Policy",
  ],
  alternates: {
    canonical: "https://kwas.tech/refund-policy",
  },
  openGraph: {
    title: "Refund & Return Policy — KWAS Technologies",
    description:
      "Official Refund & Return Policy of KWAS Technologies (Key Web App Solutions Technologies). Digital product delivery, software licensing, and refund processing.",
    url: "https://kwas.tech/refund-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Return Policy — KWAS Technologies",
    description: "Official Refund & Return Policy of KWAS Technologies.",
  },
};

export default function RefundPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Refund Policy", "item": "https://kwas.tech/refund-policy" },
        ],
      },
      {
        "@type": "WebPage",
        "name": "Refund & Return Policy — KWAS Technologies",
        "url": "https://kwas.tech/refund-policy",
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Technologies (Key Web App Solutions Technologies)",
          "url": "https://kwas.tech",
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
            <RefreshCw size={14} />
            <span>Customer Protection &amp; Satisfaction Guarantee</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Refund &amp; Return Policy
          </h1>
          <p className="mt-2 text-sm font-mono text-muted">
            KWAS Technologies (Key Web App Solutions Technologies) · Effective Date: August 2026
          </p>
        </div>

        {/* Intro Banner */}
        <div className="mt-8 rounded-xl border border-line bg-panel/50 p-6 leading-relaxed text-sm text-muted">
          <p>
            Thank you for choosing <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong>, accessible at{" "}
            <a href="https://kwas.tech" className="text-amber hover:underline font-mono">https://kwas.tech</a>. We value your business and strive to deliver state-of-the-art web application solutions, Android software tools, and digital developer services.
          </p>
          <p className="mt-3">
            This Refund &amp; Return Policy outlines the conditions under which refunds, returns, exchanges, or cancellations are processed for our digital software products, application license keys, and commercial web development services.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-muted">

          {/* Section 1: Digital Products & Returns */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <FileCheck size={18} className="text-amber" />
              <h2>1. Digital Products &amp; Return Eligibility</h2>
            </div>
            <p>
              KWAS Technologies primarily provides digital software, application packages (APK files, web apps), commercial software licenses, and developer services.
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Free Software &amp; Utility Tools:</strong> Our public utility tools (such as Image Converter, QR Generator, Word Counter, Speed Test, Unit Converter) and free tier Android APKs (such as KWAS SysLens) are free of charge and do not require refunds.
              </li>
              <li>
                <strong>Commercial Licenses &amp; Paid Digital Products:</strong> You may request a refund within <strong>14 calendar days</strong> from the date of purchase if the digital software product or license key fails to function as advertised, contains unresolvable technical defects, or was not delivered to you.
              </li>
              <li>
                <strong>Service &amp; Web App Solutions:</strong> For custom web application development, refund requests are evaluated based on agreed milestone deliverables prior to final project sign-off.
              </li>
            </ul>
          </section>

          {/* Section 2: Non-Returnable Items */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <PackageX size={18} className="text-amber" />
              <h2>2. Non-Returnable &amp; Non-Refundable Items</h2>
            </div>
            <p>The following digital items and services are non-returnable and non-refundable:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>Activated or redeemed commercial license keys once full access has been delivered and verified.</li>
              <li>Custom development work or consulting hours that have already been completed and approved by the client.</li>
              <li>Promotional, discounted, or gift software items clearly marked as non-refundable prior to checkout.</li>
            </ul>
          </section>

          {/* Section 3: Damaged, Defective, or Non-Delivered Digital Items */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <AlertCircle size={18} className="text-amber" />
              <h2>3. Defective Products &amp; Delivery Failure</h2>
            </div>
            <p>
              In the unlikely event that your digital order arrives incomplete, corrupted, or fails to download due to technical errors on our platform:
            </p>
            <ol className="mt-3 flex flex-col gap-2 list-decimal pl-5">
              <li>Contact our technical support team immediately at <a href="mailto:support@kwas.tech" className="font-mono text-amber hover:underline">support@kwas.tech</a> with your order ID.</li>
              <li>We will verify the transaction and re-issue the digital download link or license key within <strong>24 business hours</strong>.</li>
              <li>If the issue cannot be resolved, we will process a full refund to your original payment method.</li>
            </ol>
          </section>

          {/* Section 4: Refund Processing & Timelines */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <CreditCard size={18} className="text-amber" />
              <h2>4. Refund Processing &amp; Payment Gateways</h2>
            </div>
            <p>
              Once your refund request is submitted and approved by KWAS Technologies:
            </p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>
                Refunds will be credited directly to the original method of payment used during checkout (processed via our payment gateway partner, <strong>PayHere</strong> / bank network).
              </li>
              <li>
                Approved refunds are initiated within <strong>3 to 7 business days</strong>.
              </li>
              <li>
                Depending on your financial institution or bank processing times, it may take an additional <strong>3 to 10 business days</strong> for the refunded amount to reflect in your bank account or credit card statement.
              </li>
            </ul>
          </section>

          {/* Section 5: Cancellations & Exchanges */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Clock size={18} className="text-amber" />
              <h2>5. Cancellations &amp; Product Exchanges</h2>
            </div>
            <p>
              If you ordered an incorrect software tier or wish to exchange a digital license for a different solution tier, please notify customer support within <strong>7 days</strong> of purchase. If eligible, the price difference will be adjusted or refunded accordingly.
            </p>
          </section>

          {/* Section 6: Contact Customer Support */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Mail size={18} className="text-amber" />
              <h2>6. Contact Customer Support</h2>
            </div>
            <p>
              If you have any questions, concerns, or refund requests regarding our products or services, please contact our support team:
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="mailto:support@kwas.tech?subject=Refund%20/%20Return%20Request"
                className="inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2.5 font-mono text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                <Mail size={16} />
                support@kwas.tech
              </a>
              <span className="text-xs font-mono text-faint">
                Response time: Within 24 business hours
              </span>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
