import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact KWAS Technologies — Support & Inquiries",
  description:
    "Contact KWAS Technologies for web app projects, custom software inquiries, support, and technical questions by email.",
  keywords: [
    "Contact KWAS Technologies",
    "KWAS support",
    "support@kwas.tech",
    "custom web app inquiry",
    "software support",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/contact",
  },
  openGraph: {
    title: "Contact KWAS Technologies — Support & Inquiries",
    description:
      "Reach KWAS Technologies for custom web app projects, developer tools, privacy-first solutions, and support.",
    url: "https://www.kwas.tech/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact KWAS Technologies — Support & Inquiries",
    description: "Reach KWAS Technologies for support, custom projects, and technical questions.",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kwas.tech" },
          { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.kwas.tech/contact" },
        ],
      },
      {
        "@type": "ContactPage",
        "name": "Contact KWAS Technologies",
        "url": "https://www.kwas.tech/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "KWAS Technologies (Key Web App Solutions Technologies)",
          "email": "support@kwas.tech",
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
      <main className="pt-8">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
