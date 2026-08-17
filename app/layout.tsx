import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CircuitTraces } from "@/components/CircuitTraces";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieConsent } from "@/components/CookieConsent";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0f12" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kwas.tech"),
  title: {
    default: "KWAS Technologies — Privacy-First Web Apps & Developer Tools",
    template: "%s | KWAS Technologies",
  },
  description:
    "KWAS Technologies builds privacy-first web apps, developer tools, and self-hosted software for modern teams, creators, and independent builders.",
  applicationName: "KWAS Technologies",
  authors: [{ name: "KWAS Technologies", url: "https://www.kwas.tech" }],
  creator: "KWAS Technologies",
  publisher: "KWAS Technologies",
  category: "Technology & Web Application Solutions",
  keywords: [
    "KWAS Technologies",
    "privacy-first web apps",
    "developer tools",
    "self-hosted software",
    "custom web app development",
    "Next.js web applications",
    "Android apps",
    "privacy software",
  ],
  alternates: {
    canonical: "https://www.kwas.tech",
  },
  verification: {
    google: "google11e9ee6b456fb3da",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KWAS Technologies",
    description:
      "KWAS Technologies builds privacy-first web apps, developer tools, and self-hosted software for people who value control, speed, and simplicity.",
    url: "https://www.kwas.tech",
    siteName: "KWAS Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.kwas.tech/icon.png",
        width: 512,
        height: 512,
        alt: "KWAS Technologies logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KWAS Technologies",
    description:
      "Privacy-first web apps, developer tools, and self-hosted software built for modern teams and independent creators.",
    images: ["https://www.kwas.tech/icon.png"],
    creator: "@kwas_tech",
    site: "@kwas_tech",
  },
  icons: {
    icon: "/favicon.svg?v=3",
    apple: "/favicon.svg?v=3",
  },
  manifest: "/manifest.json",
  other: {
    "google-adsense-account": "ca-pub-8249181691893109",
    "brand-name": "KWAS Technologies",
    "brand-fullname": "Key Web App Solutions Technologies",
    "topics": "Web Apps, Custom Web Solutions, Mobile Apps, Developer Tools, Privacy Software",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-8249181691893109" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8249181691893109"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="relative min-h-screen bg-ink font-body text-fg transition-colors duration-300">
        <ThemeProvider>
          <div className="pointer-events-none fixed inset-0 -z-20 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
          <CircuitTraces variant="ambient" className="pointer-events-none fixed inset-0 -z-10 opacity-40" />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}