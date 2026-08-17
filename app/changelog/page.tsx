import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Changelog } from "@/components/Changelog";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Changelog & Releases — KWAS Technologies",
  description:
    "Track the latest software updates, releases, product improvements, and fixes across KWAS Technologies products.",
  alternates: {
    canonical: "https://www.kwas.tech/changelog",
  },
  openGraph: {
    title: "Changelog & Releases — KWAS Technologies",
    description: "Track version history and feature updates across KWAS Technologies products.",
    url: "https://www.kwas.tech/changelog",
  },
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Changelog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
