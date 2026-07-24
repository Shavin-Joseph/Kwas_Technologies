import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Products } from "@/components/Products";
import { Philosophy } from "@/components/Philosophy";
import { Changelog } from "@/components/Changelog";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Philosophy />
        <Changelog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
