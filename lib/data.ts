import {
  Smartphone,
  Terminal,
  ShieldCheck,
  Layers,
  RadioTower,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

/**
 * ────────────────────────────────────────────────────────────────
 *  EDIT ME: this is the only file you need to touch to list your
 *  real apps. Everything on the Products grid is generated from
 *  this array — replace the placeholders below with your own.
 * ────────────────────────────────────────────────────────────────
 */
export type License = "Free" | "Free + Commercial";
export type Status = "Stable" | "Beta" | "Preview";

export interface AppItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  version: string;
  status: Status;
  icon: LucideIcon;
  platforms: string[];
  license: License;
  downloadUrl: string;
  sourceUrl: string;
}

export const apps: AppItem[] = [
  {
    slug: "kwas-launcher",
    name: "Kwas Launcher",
    tagline: "A home screen that gets out of your way",
    description:
      "A fast, gesture-driven Android launcher with no ads and no telemetry. Icon packs, grid control, and a searchable app drawer.",
    version: "v2.4.1",
    status: "Stable",
    icon: Smartphone,
    platforms: ["Android"],
    license: "Free + Commercial",
    downloadUrl: "#",
    sourceUrl: "https://github.com/kwas-tech",
  },
  {
    slug: "kwas-terminal",
    name: "Kwas Terminal",
    tagline: "A pocket shell for Android",
    description:
      "A native terminal emulator with tmux-style panes, SSH profiles, and a package manager for common CLI tools.",
    version: "v1.9.0",
    status: "Stable",
    icon: Terminal,
    platforms: ["Android"],
    license: "Free",
    downloadUrl: "#",
    sourceUrl: "https://github.com/kwas-tech",
  },
  {
    slug: "kwas-vault",
    name: "Kwas Vault",
    tagline: "Offline-first password manager",
    description:
      "Encrypted, local-first credential storage with biometric unlock and an optional self-hosted sync server.",
    version: "v3.1.2",
    status: "Stable",
    icon: ShieldCheck,
    platforms: ["Android", "Desktop"],
    license: "Free + Commercial",
    downloadUrl: "#",
    sourceUrl: "https://github.com/kwas-tech",
  },
  {
    slug: "kwas-sync",
    name: "Kwas Sync",
    tagline: "Self-hosted file sync",
    description:
      "Point-to-point file sync between your own devices and servers. No third-party cloud in the loop, ever.",
    version: "v1.2.0",
    status: "Beta",
    icon: RadioTower,
    platforms: ["Android", "Desktop"],
    license: "Free",
    downloadUrl: "#",
    sourceUrl: "https://github.com/kwas-tech",
  },
  {
    slug: "kwas-widgets",
    name: "Kwas Widgets",
    tagline: "A widget kit that doesn't phone home",
    description:
      "Fifteen configurable home-screen widgets — clock, weather, notes, habit tracker — built as one lightweight package.",
    version: "v1.0.4",
    status: "Stable",
    icon: Layers,
    platforms: ["Android"],
    license: "Free",
    downloadUrl: "#",
    sourceUrl: "https://github.com/kwas-tech",
  },
  {
    slug: "kwas-devkit",
    name: "Kwas DevKit",
    tagline: "CLI scaffolding for indie devs",
    description:
      "A command-line toolchain for scaffolding, signing, and shipping Android builds without touching Android Studio.",
    version: "v0.8.0",
    status: "Preview",
    icon: Puzzle,
    platforms: ["Desktop"],
    license: "Free + Commercial",
    downloadUrl: "#",
    sourceUrl: "https://github.com/kwas-tech",
  },
];

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  type: "Release" | "Feature" | "Fix";
}

export const changelog: ChangelogEntry[] = [
  {
    version: "v2.4.1",
    date: "Jul 2026",
    title: "Kwas Launcher — icon pack engine",
    description: "Third-party icon pack support and a rebuilt search index for the app drawer.",
    type: "Release",
  },
  {
    version: "v3.1.2",
    date: "Jul 2026",
    title: "Kwas Vault — biometric unlock",
    description: "Fingerprint and face unlock on supported devices, plus a faster cold start.",
    type: "Feature",
  },
  {
    version: "v1.2.0",
    date: "Jun 2026",
    title: "Kwas Sync enters beta",
    description: "Point-to-point sync is now open for testing, with a self-hosted relay option.",
    type: "Release",
  },
  {
    version: "v1.9.0",
    date: "May 2026",
    title: "Kwas Terminal — SSH profiles",
    description: "Saved SSH profiles with key-based auth and a persistent session picker.",
    type: "Feature",
  },
  {
    version: "v2.4.0",
    date: "May 2026",
    title: "Kwas Launcher — memory leak fix",
    description: "Resolved a memory leak triggered by rapid workspace switching.",
    type: "Fix",
  },
];
