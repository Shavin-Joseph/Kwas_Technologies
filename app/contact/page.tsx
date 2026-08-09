import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — support@kwas.tech",
  description:
    "Get in touch with KWAS Technologies (Key Web App Solutions Technologies). Send a message or email support@kwas.tech for custom web application solutions.",
  keywords: [
    "Contact KWAS Technologies",
    "KWAS Tech Email",
    "support@kwas.tech",
    "Key Web App Solutions Contact",
    "KWAS Software Support",
  ],
  alternates: {
    canonical: "https://kwas.tech/contact",
  },
  openGraph: {
    title: "Contact Us — KWAS Technologies",
    description:
      "Contact KWAS Technologies for Key Web App Solutions, commercial licenses, or developer inquiries. Email: support@kwas.tech.",
    url: "https://kwas.tech/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — KWAS Technologies",
    description: "Contact KWAS Technologies for custom web application solutions. Email: support@kwas.tech.",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://kwas.tech/contact" },
        ],
      },
      {
        "@type": "ContactPage",
        "name": "Contact KWAS Technologies",
        "url": "https://kwas.tech/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "KWAS Technologies (Key Web App Solutions Technologies)",
          "email": "support@kwas.tech",
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
      <main className="pt-8">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
