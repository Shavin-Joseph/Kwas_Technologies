"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle"; // Added import

const LINKS = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "Open Source" },
  { href: "#changelog", label: "Changelog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-display text-lg font-semibold tracking-tight text-fg">
            KWAS
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            all systems operational
          </span>
          <a
            href="https://github.com/kwas-tech"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-fg px-3.5 py-2 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <Github size={16} strokeWidth={2} />
            GitHub
          </a>
          
          {/* Added ThemeToggle for Desktop */}
          <ThemeToggle /> 
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Added ThemeToggle for Mobile */}
          <ThemeToggle />
          
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 text-fg"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line/70 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm text-muted hover:bg-panel hover:text-fg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://github.com/kwas-tech"
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-fg px-3.5 py-2.5 text-sm font-medium text-ink"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <Image
      src="/icon.png?v=2"
      alt="KWAS logo"
      width={28}
      height={28}
      className="rounded-md object-cover"
      priority
    />
  );
}