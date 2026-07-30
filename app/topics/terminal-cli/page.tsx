import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Terminal, CheckCircle2, Code2, TerminalSquare, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Shell & CLI — Native Mobile Terminal & SSH Tools",
  description:
    "Explore native mobile terminal emulators, saved SSH profiles, tmux integration, and CLI utilities developed by KWAS Technologies.",
  alternates: {
    canonical: "https://kwas.tech/topics/terminal-cli",
  },
  openGraph: {
    title: "Developer Shell & CLI — KWAS Technologies",
    description:
      "Native mobile terminal emulators, SSH profile managers, tmux integration, and package management by KWAS Technologies.",
    url: "https://kwas.tech/topics/terminal-cli",
  },
};

const FEATURES = [
  {
    title: "Tmux-Style Split Panes",
    description:
      "Multitask efficiently on mobile displays with vertical/horizontal pane splitting and tabbed session management.",
  },
  {
    title: "Saved SSH Profiles & Key Auth",
    description:
      "Store encrypted SSH profiles with key-based authentication for instant access to remote servers and cloud nodes.",
  },
  {
    title: "CLI Package Manager",
    description:
      "Built-in package ecosystem providing familiar Unix CLI tools, shell utilities, and scripting interpreters.",
  },
  {
    title: "Hardware Keyboard Shortcuts",
    description:
      "Full support for external Bluetooth keyboards, custom row keys (Ctrl, Alt, Esc, Tab), and keybindings.",
  },
];

export default function TerminalCLITopicPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-xs text-amber mb-4">
              <Terminal size={14} />
              <span>Core Topic · KWAS Technologies</span>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              Developer Shell &amp; CLI Tools
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              KWAS Technologies crafts native command-line environments and terminal emulation software for developers who need server access in their pocket.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Terminal Emulator", "SSH Key Auth", "Tmux", "Package Manager", "Pocket Shell", "Unix Tools"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-amber"
              >
                <Code2 size={12} />
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-xl border border-line bg-panel/60 p-6 hover:border-amber/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel2 text-amber">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-fg">{feat.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{feat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-amber/30 bg-gradient-to-r from-panel via-panel2 to-panel p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-amber mb-2">
                <Sparkles size={14} />
                <span>Featured Developer Tool</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-fg">
                Kwas Terminal — Native Android Shell
              </h3>
              <p className="mt-1 text-sm text-muted max-w-xl">
                Run SSH, tmux, and CLI tools on Android. For custom developer toolchain inquiries, email KWAS Technologies at <span className="font-mono text-amber">info@kwas.tech</span>.
              </p>
            </div>
            <Link
              href="/products"
              className="shrink-0 flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <TerminalSquare size={16} />
              Explore Kwas Terminal
            </Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
