import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, FileText, Lock, Eye, AlertCircle, ExternalLink, ShieldAlert, CheckCircle2, Award, Ban, Globe, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Publisher Policies Compliance — KWAS Technologies",
  description:
    "Official Google Publisher Policy Compliance statement for KWAS Technologies (Key Web App Solutions Technologies). Detailed disclosures on Content Policies, Behavioral Policies, Privacy Disclosures, and Better Ads Standards across AdSense, AdMob, and Ad Manager.",
  keywords: [
    "Google Publisher Policies KWAS",
    "KWAS Technologies AdSense Compliance",
    "Google AdMob Compliance",
    "Google Publisher Content Policies",
    "Google Behavioral Policies",
    "Google Privacy Disclosures KWAS",
  ],
  alternates: {
    canonical: "https://kwas.tech/publisher-policies",
  },
  openGraph: {
    title: "Google Publisher Policies Compliance — KWAS Technologies",
    description:
      "Official Google Publisher Policy Compliance statement for KWAS Technologies. Full adherence to Content, Behavioral, Privacy, and Better Ads Standards.",
    url: "https://kwas.tech/publisher-policies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Publisher Policies Compliance — KWAS Technologies",
    description: "Official Google Publisher Policy statement of KWAS Technologies.",
  },
};

export default function PublisherPoliciesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Google Publisher Policies", "item": "https://kwas.tech/publisher-policies" },
        ],
      },
      {
        "@type": "WebPage",
        "name": "Google Publisher Policies Compliance — KWAS Technologies",
        "url": "https://kwas.tech/publisher-policies",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-blue-400 mb-4">
            <Award size={14} />
            <span>Google Publisher &amp; AdSense Compliant</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Google Publisher Policies &amp; Standards
          </h1>
          <p className="mt-2 text-sm font-mono text-muted">
            KWAS Technologies (Key Web App Solutions Technologies) · Publisher ID: ca-pub-8249181691893109
          </p>
        </div>

        {/* Intro Overview */}
        <div className="mt-8 rounded-xl border border-line bg-panel/50 p-6 leading-relaxed text-sm text-muted">
          <p>
            At <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong>, accessible at{" "}
            <a href="https://kwas.tech" className="text-amber hover:underline font-mono">https://kwas.tech</a>, we maintain strict compliance with all{" "}
            <a
              href="https://support.google.com/publisherpolicies"
              target="_blank"
              rel="noreferrer"
              className="text-amber hover:underline font-semibold inline-flex items-center gap-1"
            >
              Google Publisher Policies <ExternalLink size={12} />
            </a>{" "}
            and Google Publisher Restrictions across Google AdSense, Google AdMob, and Google Ad Manager.
          </p>
          <p className="mt-3">
            Maintaining a trusted digital ecosystem requires setting uncompromising standards on content safety, ad placement integrity, user privacy, and technical security. This policy outlines our complete compliance framework.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted">

          {/* 1. Content Policies */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Ban size={18} className="text-red-400" />
              <h2>1. Content Policies &amp; Zero Tolerance Commitments</h2>
            </div>
            <p>
              KWAS Technologies strictly enforces Google&apos;s Content Policies. We do not publish, host, or monetize any of the following prohibited content categories:
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Illegal Content &amp; Intellectual Property Protection:</strong> We do not allow illegal content or counterfeit goods. We uphold strict DMCA copyright procedures and respond promptly to counter-notifications.
              </li>
              <li>
                <strong>Dangerous or Derogatory Content:</strong> Zero tolerance for hate speech, harassment, bullying, extortion, intimidation, or content inciting violence against individuals or protected groups.
              </li>
              <li>
                <strong>Misrepresentative &amp; Deceptive Content:</strong> We forbid misleading representation, false claims, health crises misinformation, climate change denialism, phishing, or manipulated media.
              </li>
              <li>
                <strong>Enabling Dishonest Behavior:</strong> No software or content that facilitates hacking, cracking, spyware, unauthorized surveillance, keylogging, or DRM circumvention.
              </li>
              <li>
                <strong>Adult Content &amp; Child Safety:</strong> Strict prohibition of sexually explicit material, adult themes in family content, and absolute zero tolerance for Child Sexual Abuse Material (CSAM) or child exploitation.
              </li>
            </ul>
          </section>

          {/* 2. Behavioral Policies */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Eye size={18} className="text-amber" />
              <h2>2. Behavioral Policies &amp; Ad Placement Integrity</h2>
            </div>
            <p>
              We design our web applications and digital tools to ensure smooth, non-intrusive user experiences:
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Non-Interfering Ad Placements:</strong> Google-served ads are never placed adjacent to or overlaying navigation controls, buttons, or interactive elements. We do not place ads on dead-end screens.
              </li>
              <li>
                <strong>High Inventory Value:</strong> Ads are never served on screens without publisher content, under-construction pages, or blank alert screens.
              </li>
              <li>
                <strong>Original Content Requirement:</strong> We do not monetize screens with replicated or scraped content from external sources without adding original value, utility, or commentary.
              </li>
              <li>
                <strong>Balanced Ad Ratio:</strong> We maintain a clean content-to-ad ratio adhering to Coalition for Better Ads standards, ensuring primary user focus remains on our high-quality web applications and tools.
              </li>
              <li>
                <strong>Authorized Ads.txt Inventory:</strong> Our domain operates with a verified <code className="font-mono text-amber">ads.txt</code> record certifying Google (<code className="font-mono text-emerald-400">pub-8249181691893109</code>) as an authorized direct inventory seller.
              </li>
            </ul>
          </section>

          {/* 3. Privacy-Related Policies */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Lock size={18} className="text-emerald-400" />
              <h2>3. Privacy Disclosures &amp; Personalized Advertising Rules</h2>
            </div>
            <p>
              In accordance with Google Privacy-Related Policies and global privacy laws:
            </p>
            <ul className="mt-3 flex flex-col gap-2.5 list-disc pl-5">
              <li>
                <strong>Third-Party Cookie Disclosure:</strong> We disclose to all visitors that third parties (including Google) may place and read cookies, web beacons, or IP addresses on users&apos; browsers to serve contextual and interest-based ads. Learn more at{" "}
                <a
                  href="https://www.google.com/policies/privacy/partners/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber hover:underline font-mono inline-flex items-center gap-1"
                >
                  How Google uses data <ExternalLink size={12} />
                </a>.
              </li>
              <li>
                <strong>No Sensitive Category Targeting:</strong> We do not target personalized ads based on sensitive user data such as health history, financial status, racial/ethnic origin, religious beliefs, political affiliation, or sexual orientation.
              </li>
              <li>
                <strong>No PII Passing:</strong> We do not pass any Personally Identifiable Information (PII) to Google advertising systems or merge un-consented PII with non-personally identifiable metrics.
              </li>
              <li>
                <strong>Device &amp; Location Data Security:</strong> Any precise geographic location data is processed strictly with explicit user opt-in consent and encrypted transit.
              </li>
              <li>
                <strong>COPPA &amp; EU Consent Compliance:</strong> Ad requests respect US COPPA child-directed rules and EU User Consent Policy mandates.
              </li>
            </ul>
          </section>

          {/* 4. Technical Standards & Sanctions */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <Globe size={18} className="text-amber" />
              <h2>4. Technical Standards &amp; Sanctions Compliance</h2>
            </div>
            <p>
              KWAS Technologies adheres strictly to Google Requirements &amp; Standards:
            </p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>
                <strong>Zero Malware or Unwanted Software:</strong> All client-side tools and Android APK downloads (such as KWAS SysLens) undergo rigorous security scans to ensure zero viruses, trojans, dialers, or unwanted software bundling.
              </li>
              <li>
                <strong>Google Web Search Spam Policies:</strong> Our pages strictly comply with Google Webmaster and Search Spam Guidelines.
              </li>
              <li>
                <strong>Trade Sanctions Compliance:</strong> We comply with OFAC and US Commerce Department export controls and trade sanctions regulations.
              </li>
            </ul>
          </section>

          {/* Section 5 - Contact */}
          <section className="rounded-xl border border-line bg-panel/50 p-6">
            <div className="flex items-center gap-2 font-display text-base font-semibold text-fg mb-3">
              <ShieldCheck size={18} className="text-amber" />
              <h2>5. Policy Compliance Officer Contact</h2>
            </div>
            <p>
              If you have any questions or policy inquiries regarding Google Publisher compliance at KWAS Technologies, please contact our team:
            </p>
            <a
              href="mailto:support@kwas.tech?subject=Google%20Publisher%20Policy%20Inquiry"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2.5 font-mono text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <ShieldCheck size={16} />
              support@kwas.tech
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
