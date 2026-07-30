import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://kwas.tech"),
  title: {
    default: "KWAS Technologies (Key Web App Solutions Technologies) — Privacy-First Web Apps & Developer Tools",
    template: "%s | KWAS Technologies (Key Web App Solutions)",
  },
  description:
    "KWAS Technologies (Key Web App Solutions Technologies) builds privacy-first web applications, custom web app solutions, Android launcher ecosystems, developer toolchains, and self-hosted software.",
  applicationName: "KWAS Technologies",
  authors: [{ name: "KWAS Technologies (Key Web App Solutions Technologies)", url: "https://kwas.tech" }],
  creator: "KWAS Technologies (Key Web App Solutions Technologies)",
  publisher: "KWAS Technologies",
  category: "Technology & Web Application Solutions",
  keywords: [
    "KWAS Technologies",
    "Key Web App Solutions Technologies",
    "Key Web App Solutions",
    "KWAS Tech",
    "KWAS Web Apps",
    "Web Application Solutions",
    "Custom Web App Development",
    "Privacy-First Web Apps",
    "Next.js Web Applications",
    "Android Apps",
    "Android Launcher",
    "Developer Tools",
    "Self-Hosted Software",
    "Open Source Tools",
    "Terminal Emulator",
    "Offline Password Vault",
    "P2P File Sync",
    "Software Engineering",
  ],
  alternates: {
    canonical: "https://kwas.tech",
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
    title: "KWAS Technologies (Key Web App Solutions Technologies)",
    description:
      "KWAS Technologies — Key Web App Solutions Technologies. Web applications, privacy-first Android tools, password management, and self-hosted productivity software.",
    url: "https://kwas.tech",
    siteName: "KWAS Technologies (Key Web App Solutions Technologies)",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "KWAS Technologies (Key Web App Solutions Technologies) Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KWAS Technologies (Key Web App Solutions Technologies)",
    description:
      "Discover KWAS Technologies web app solutions, Android tools, and developer platforms built for speed, device ownership, and privacy.",
    images: ["/icon.png"],
    creator: "@kwas_tech",
    site: "@kwas_tech",
  },
  icons: {
    icon: "/favicon.svg?v=3",
    apple: "/favicon.svg?v=3",
  },
  manifest: "/manifest.json",
  other: {
    "brand-name": "KWAS Technologies",
    "brand-fullname": "Key Web App Solutions Technologies",
    "topics": "Web Apps, Custom Web Solutions, Mobile Apps, Developer Tools, Privacy Software",
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