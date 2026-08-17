import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About KWAS Technologies — Privacy-First Web Apps & Open Source",
  description:
    "Learn what KWAS Technologies builds, how it approaches privacy-first software, and why its tools are designed for speed, ownership, and independence.",
  alternates: {
    canonical: "https://www.kwas.tech/about",
  },
  openGraph: {
    title: "About KWAS Technologies — Privacy-First Web Apps & Open Source",
    description:
      "Built the way we’d want to use it: privacy-first, source-aware, and designed for real-world control and simplicity.",
    url: "https://www.kwas.tech/about",
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
