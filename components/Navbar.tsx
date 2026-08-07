"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Smartphone,
  ShieldCheck,
  Server,
  Terminal,
  Cpu,
  Sparkles,
  Mail,
  Layers,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const TOPIC_NAV_ITEMS = [
  {
    href: "/topics/web-apps",
    label: "Key Web App Solutions",
    description: "Next.js, React, PWAs & Custom Web Applications",
    icon: Globe,
  },
  {
    href: "/topics/mobile-apps",
    label: "Android & Mobile Apps",
    description: "Native Launchers, Gesture Engines & Widgets",
    icon: Smartphone,
  },
  {
    href: "/topics/privacy-security",
    label: "Privacy & Security",
    description: "Zero-Telemetry & Offline Encrypted Vaults",
    icon: ShieldCheck,
  },
  {
    href: "/topics/self-hosted",
    label: "Self-Hosted Cloud",
    description: "Point-to-Point Data Sync & Private Relay Servers",
    icon: Server,
  },
  {
    href: "/topics/terminal-cli",
    label: "Developer Shell & CLI",
    description: "Native Mobile Terminal & SSH Profiles",
    icon: Terminal,
  },
  {
    href: "/topics/devkits",
    label: "DevKits & Toolchains",
    description: "CLI Scaffolding & Build Automation Tools",
    icon: Cpu,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTopicsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <Logo />
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-fg group-hover:text-amber transition-colors leading-none">
              KWAS Technologies
            </span>
            <span className="hidden xl:inline font-mono text-[9px] text-faint tracking-tight mt-1 leading-none">
              Key Web App Solutions Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Main Navigation Links (Active at 1024px+) */}
        <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {/* Products Link */}
          <Link
            href="/products"
            className={`text-sm font-medium transition-colors ${
              isActive("/products") ? "text-amber font-semibold" : "text-muted hover:text-fg"
            }`}
          >
            Products
          </Link>

          {/* Topics Dropdown Container */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setTopicsOpen(true)}
            onMouseLeave={() => setTopicsOpen(false)}
          >
            <button
              onClick={() => setTopicsOpen((prev) => !prev)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                isActive("/topics") ? "text-amber font-semibold" : "text-muted hover:text-fg"
              }`}
            >
              <span>Topics &amp; Solutions</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${topicsOpen || isActive("/topics") ? "rotate-180 text-amber" : ""}`}
              />
            </button>

            {/* Theme-Adaptive Dropdown Menu Card */}
            <AnimatePresence>
              {topicsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute -left-12 top-full mt-1 w-[560px] rounded-xl border border-slate-200 dark:border-line bg-white dark:bg-[#12161f] p-5 shadow-2xl z-[100]"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-line pb-3 px-1">
                    <span className="font-mono text-xs text-amber font-semibold flex items-center gap-1.5">
                      <Sparkles size={14} />
                      Key Web App Solutions &amp; Topics
                    </span>
                    <Link
                      href="/topics"
                      onClick={() => setTopicsOpen(false)}
                      className="font-mono text-[11px] text-slate-500 dark:text-muted hover:text-amber transition-colors flex items-center gap-1"
                    >
                      View All Topics <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2.5">
                    {TOPIC_NAV_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setTopicsOpen(false)}
                          className="group flex items-start gap-3 rounded-lg bg-slate-50 dark:bg-panel2 p-3 transition-all border border-slate-200/80 dark:border-line/60 hover:border-amber/50 hover:bg-slate-100 dark:hover:bg-panel"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-line bg-white dark:bg-panel text-amber group-hover:scale-105 transition-transform">
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="font-display text-xs font-semibold text-slate-900 dark:text-fg group-hover:text-amber transition-colors">
                              {item.label}
                            </div>
                            <div className="mt-0.5 text-[11px] text-slate-500 dark:text-muted line-clamp-1 leading-tight">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Free Online Tools Link */}
          <Link
            href="/tools"
            className={`text-sm font-medium font-mono transition-colors flex items-center gap-1 shrink-0 ${
              isActive("/tools")
                ? "text-amber font-bold"
                : "text-muted hover:text-amber"
            }`}
          >
            <Sparkles size={14} className={isActive("/tools") ? "text-amber" : ""} />
            Free Tools
          </Link>

          {/* Blog Link */}
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors ${
              isActive("/blog") ? "text-amber font-semibold" : "text-muted hover:text-fg"
            }`}
          >
            Blog
          </Link>

          {/* Open Source / About */}
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about") ? "text-amber font-semibold" : "text-muted hover:text-fg"
            }`}
          >
            Open Source
          </Link>

          {/* Changelog */}
          <Link
            href="/changelog"
            className={`text-sm font-medium transition-colors ${
              isActive("/changelog") ? "text-amber font-semibold" : "text-muted hover:text-fg"
            }`}
          >
            Changelog
          </Link>
        </div>

        {/* Desktop Utility Controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="hidden xl:flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 font-mono text-xs font-medium text-fg transition-colors hover:border-amber/50 hover:text-amber shrink-0"
          >
            <Mail size={14} />
            info@kwas.tech
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle mobile menu"
            className="rounded-md p-2 text-fg border border-line bg-panel2"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line/70 bg-ink lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-panel hover:text-fg"
              >
                Products
              </Link>

              <Link
                href="/tools"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-amber font-mono hover:bg-panel"
              >
                Free Tools (Online Utilities)
              </Link>

              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-panel hover:text-fg"
              >
                Blog &amp; Articles
              </Link>

              {/* Mobile Expandable Topics Accordion */}
              <div>
                <button
                  onClick={() => setMobileTopicsOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-panel hover:text-fg"
                >
                  <span>Topics &amp; Solutions</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileTopicsOpen ? "rotate-180 text-amber" : ""}`}
                  />
                </button>

                {mobileTopicsOpen && (
                  <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-line/60 pl-3">
                    <Link
                      href="/topics"
                      onClick={() => setOpen(false)}
                      className="rounded-md py-1.5 text-xs font-mono text-amber hover:underline"
                    >
                      All Topics Overview →
                    </Link>
                    {TOPIC_NAV_ITEMS.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md py-1.5 text-xs text-muted hover:text-fg flex items-center gap-2"
                      >
                        <t.icon size={14} className="text-amber" />
                        {t.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-panel hover:text-fg"
              >
                Open Source
              </Link>

              <Link
                href="/changelog"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-panel hover:text-fg"
              >
                Changelog
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-amber hover:bg-panel"
              >
                Contact Us (info@kwas.tech)
              </Link>
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
      alt="KWAS Technologies logo"
      width={28}
      height={28}
      className="h-7 w-7 rounded-md object-cover"
      priority
    />
  );
}