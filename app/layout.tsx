import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CircuitTraces } from "@/components/CircuitTraces";
import { ThemeProvider } from "@/components/ThemeProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kwas.tech"),
  title: {
    default: "Kwas Technologies — Privacy-First Android Apps & Developer Tools",
    template: "%s | Kwas Technologies",
  },
  description:
    "Kwas Technologies (Key Web App Solutions Technologies) builds privacy-first Android apps, developer tooling, and self-hosted software for modern teams and independent creators.",
  applicationName: "Kwas Technologies",
  authors: [{ name: "Kwas Technologies" }],
  creator: "Kwas Technologies",
  publisher: "Kwas Technologies",
  category: "technology",
  keywords: [
    "Kwas Technologies",
    "Key Web App Solutions Technologies",
    "Android apps",
    "privacy-first software",
    "developer tools",
    "self-hosted software",
    "open source",
    "mobile app launcher",
    "terminal emulator",
    "password manager",
    "file sync",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kwas Technologies — Privacy-First Android Apps & Developer Tools",
    description:
      "Supportive software for the modern stack: Android launchers, terminals, password management, and self-hosted productivity tools.",
    url: "https://kwas.tech",
    siteName: "Kwas Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "KWAS logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwas Technologies — Privacy-First Android Apps & Developer Tools",
    description:
      "Discover Kwas Technologies apps and tools designed for device ownership, independent workflows, and practical productivity.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/favicon.svg?v=3",
    apple: "/favicon.svg?v=3",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="relative min-h-screen bg-ink font-body text-fg transition-colors duration-300">
        <ThemeProvider>
          <div className="pointer-events-none fixed inset-0 -z-20 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
          <CircuitTraces variant="ambient" className="pointer-events-none fixed inset-0 -z-10 opacity-40" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}