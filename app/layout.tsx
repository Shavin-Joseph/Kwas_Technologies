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
  title: "KWAS — Key Web App Solutions",
  description: "KWAS (Key Web App Solutions) builds practical software for modern teams.",
  applicationName: "KWAS",
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