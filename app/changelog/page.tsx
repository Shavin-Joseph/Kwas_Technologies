import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Changelog } from "@/components/Changelog";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Changelog & Releases",
  description:
    "Stay updated with the latest software updates, releases, features, and fixes from KWAS Technologies (Key Web App Solutions Technologies).",
  alternates: {
    canonical: "https://kwas.tech/changelog",
  },
  openGraph: {
    title: "Changelog & Releases — KWAS Technologies",
    description: "Track version history and new feature releases across all KWAS Technologies products.",
    url: "https://kwas.tech/changelog",
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
