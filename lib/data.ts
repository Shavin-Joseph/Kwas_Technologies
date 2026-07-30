import {
  Smartphone,
  Terminal,
  ShieldCheck,
  Layers,
  RadioTower,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

export type License = "Free" | "Free + Open Source" | "Free + Commercial";
export type Status = "In Development" | "Beta" | "Stable";
export type Category = "Key Web Apps" | "Android Apps" | "Privacy & Security" | "Developer Tools";

export interface AppItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  version: string;
  status: Status;
  category: Category;
  icon: LucideIcon;
  platforms: string[];
  license: License;
  downloadUrl: string;
  sourceUrl: string;
  rating: number;
  downloads: number;
  size: string;
  isReleased: boolean;
  featured?: boolean;
  features: string[];
  releaseNotes: string;
}

export const apps: AppItem[] = [
  {
    slug: "kwas-launcher",
    name: "Kwas Launcher",
    tagline: "A home screen launcher engineered for Android",
    description:
      "A fast, gesture-driven Android launcher with no ads and zero telemetry. Custom icon packs, grid control, and instant app drawer search.",
    version: "v0.1.0-dev",
    status: "In Development",
    category: "Android Apps",
    icon: Smartphone,
    platforms: ["Android 8.0+"],
    license: "Free + Open Source",
    downloadUrl: "https://github.com/kwas-tech",
    sourceUrl: "https://github.com/kwas-tech",
    rating: 5.0,
    downloads: 0,
    size: "TBA (In Development)",
    isReleased: false,
    featured: true,
    features: [
      "Zero telemetry & offline gesture engine",
      "Custom icon pack & font engine",
      "Sub-millisecond fuzzy app drawer search",
      "Ultra-low RAM & CPU footprint",
    ],
    releaseNotes: "Currently in active pre-release development cycle. Code hosted on GitHub.",
  },
  {
    slug: "kwas-vault",
    name: "Kwas Vault",
    tagline: "Offline-first encrypted credential vault",
    description:
      "AES-256 encrypted credential storage with biometric unlock, zero-knowledge sync, and zero cloud lock-in.",
    version: "v0.1.0-dev",
    status: "In Development",
    category: "Privacy & Security",
    icon: ShieldCheck,
    platforms: ["Android", "Web App", "Desktop"],
    license: "Free + Open Source",
    downloadUrl: "https://github.com/kwas-tech",
    sourceUrl: "https://github.com/kwas-tech",
    rating: 5.0,
    downloads: 0,
    size: "TBA (In Development)",
    isReleased: false,
    featured: true,
    features: [
      "AES-256-GCM hardware key encryption",
      "Biometric fingerprint & face unlock",
      "Optional self-hosted sync server",
      "Zero trackers & offline fallback",
    ],
    releaseNotes: "Initial code architecture in progress. Pre-release binaries coming soon.",
  },
  {
    slug: "kwas-terminal",
    name: "Kwas Terminal",
    tagline: "A pocket terminal shell for Android & Web",
    description:
      "Native terminal emulator featuring tmux-style pane splitting, SSH profile storage, and a package manager for common CLI utilities.",
    version: "v0.1.0-dev",
    status: "In Development",
    category: "Developer Tools",
    icon: Terminal,
    platforms: ["Android", "Web CLI"],
    license: "Free + Open Source",
    downloadUrl: "https://github.com/kwas-tech",
    sourceUrl: "https://github.com/kwas-tech",
    rating: 5.0,
    downloads: 0,
    size: "TBA (In Development)",
    isReleased: false,
    featured: false,
    features: [
      "Split-screen terminal panes (tmux compatible)",
      "Saved SSH key profiles & auto-reconnect",
      "Custom color schemes & powerline fonts",
      "Built-in CLI utility toolchain",
    ],
    releaseNotes: "In active development. Terminal interface & engine being built.",
  },
  {
    slug: "kwas-sync",
    name: "Kwas Sync",
    tagline: "Self-hosted point-to-point file sync",
    description:
      "Direct encrypted file sync between your personal mobile devices, laptops, and local servers without a middleman cloud.",
    version: "v0.1.0-dev",
    status: "In Development",
    category: "Key Web Apps",
    icon: RadioTower,
    platforms: ["Android", "Web App", "Linux/Docker"],
    license: "Free + Open Source",
    downloadUrl: "https://github.com/kwas-tech",
    sourceUrl: "https://github.com/kwas-tech",
    rating: 5.0,
    downloads: 0,
    size: "TBA (In Development)",
    isReleased: false,
    featured: false,
    features: [
      "Direct TLS 1.3 point-to-point data transfer",
      "Automated camera roll & folder backup",
      "Docker container for home server deployment",
      "Zero central cloud server dependencies",
    ],
    releaseNotes: "Relay & protocol specs under active pre-release development.",
  },
  {
    slug: "kwas-widgets",
    name: "Kwas Widgets",
    tagline: "Modular home-screen widget kit",
    description:
      "Fifteen modular home-screen widgets — clock, weather radar, note cards, habit tracker — built in a single lightweight package.",
    version: "v0.1.0-dev",
    status: "In Development",
    category: "Android Apps",
    icon: Layers,
    platforms: ["Android 12+"],
    license: "Free + Open Source",
    downloadUrl: "https://github.com/kwas-tech",
    sourceUrl: "https://github.com/kwas-tech",
    rating: 5.0,
    downloads: 0,
    size: "TBA (In Development)",
    isReleased: false,
    featured: false,
    features: [
      "Material You dynamic color integration",
      "Zero location tracking or data collection",
      "Battery-optimized background refresh",
      "15 customizable layout templates",
    ],
    releaseNotes: "Widget layouts and Material You tinting currently being built.",
  },
  {
    slug: "kwas-devkit",
    name: "Kwas DevKit",
    tagline: "CLI toolchain for indie developers",
    description:
      "Command-line developer toolchain for scaffolding, building, signing, and distributing web & mobile app packages automatically.",
    version: "v0.1.0-dev",
    status: "In Development",
    category: "Developer Tools",
    icon: Puzzle,
    platforms: ["CLI", "Windows", "macOS", "Linux"],
    license: "Free + Open Source",
    downloadUrl: "https://github.com/kwas-tech",
    sourceUrl: "https://github.com/kwas-tech",
    rating: 5.0,
    downloads: 0,
    size: "TBA (In Development)",
    isReleased: false,
    featured: false,
    features: [
      "One-command Next.js & Android app scaffolding",
      "Automated keystore signing & release builds",
      "Built-in bundle optimizer & linter",
      "Cross-platform binary compilation",
    ],
    releaseNotes: "CLI toolchain specifications in progress.",
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
    version: "v0.1.0-dev",
    date: "Jul 2026",
    title: "KWAS Technologies — Active Development Phase",
    description: "Initial repository setup and open source architecture development for KWAS software suite.",
    type: "Feature",
  },
];
