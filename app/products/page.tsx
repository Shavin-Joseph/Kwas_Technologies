import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Products & Apps Downloads — KWAS SysLens, Utility Tools & DevKits",
  description:
    "Official Software Hub of KWAS Technologies (Key Web App Solutions Technologies). Download KWAS SysLens (v1.0.0) Android APK, system diagnostics tools, password vaults, and developer toolchains.",
  keywords: [
    "KWAS Products",
    "KWAS SysLens APK download",
    "KWAS Software Downloads",
    "Key Web App Solutions Apps",
    "android system diagnostics app",
    "linux kernel proc parser android",
    "view cpu load averages android",
    "check memory page faults android",
    "wifi rssi signal audit android",
    "Android Apps KWAS",
    "Kwas Launcher",
    "Kwas Vault",
    "Kwas Terminal",
    "Kwas Sync",
    "Kwas Widgets",
    "Kwas DevKit",
  ],
  alternates: {
    canonical: "https://www.kwas.tech/products",
  },
  openGraph: {
    title: "Products & Apps Downloads — KWAS Technologies",
    description:
      "Explore KWAS SysLens (v1.0.0) system diagnostics APK and privacy-first software built by KWAS Technologies.",
    url: "https://www.kwas.tech/products",
    images: [{ url: "https://www.kwas.tech/images/kwas-syslens-icon.png", alt: "KWAS Software Hub" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Apps Downloads — KWAS Technologies",
    description: "Download KWAS SysLens APK & privacy-first software from KWAS Technologies.",
    images: ["https://www.kwas.tech/images/kwas-syslens-icon.png"],
  },
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kwas.tech" },
          { "@type": "ListItem", position: 2, name: "Products & Apps", item: "https://www.kwas.tech/products" },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "KWAS Technologies Software Downloads",
        url: "https://www.kwas.tech/products",
        publisher: {
          "@type": "Organization",
          name: "KWAS Technologies",
          url: "https://www.kwas.tech",
        },
        hasPart: [
          {
            "@type": "MobileApplication",
            name: "KWAS SysLens",
            softwareVersion: "v1.0.0",
            operatingSystem: "Android 7.0+",
            applicationCategory: "UtilitiesApplication",
            url: "https://www.kwas.tech/products/kwas-syslens",
            downloadUrl: "https://www.kwas.tech/downloads/kwas-syslens-v1.0.0.apk",
          },
        ],
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
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
