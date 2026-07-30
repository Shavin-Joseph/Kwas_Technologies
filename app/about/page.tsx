import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About & Open Source",
  description:
    "Learn about KWAS Technologies (Key Web App Solutions Technologies), our privacy-first philosophy, open-source principles, and engineering values.",
  alternates: {
    canonical: "https://kwas.tech/about",
  },
  openGraph: {
    title: "About & Open Source — KWAS Technologies",
    description:
      "Built the way we'd want to use it: free by default, source-available, zero-telemetry, and native-first software.",
    url: "https://kwas.tech/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Philosophy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
