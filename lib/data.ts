import {
  Smartphone,
  Terminal,
  ShieldCheck,
  Layers,
  RadioTower,
  Puzzle,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { getApkFileSize } from "@/lib/apkHelper";

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
  iconImage?: string;
  platforms: string[];
  license: License;
  downloadUrl: string;
  sourceUrl: string;
  releasePageUrl?: string;
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
    slug: "kwas-syslens",
    name: "KWAS SysLens",
    tagline: "Extreme system diagnostics & low-level Linux kernel auditing",
    description:
      "A professional-grade system diagnostics tool for Android. Surface low-level hardware parameters, processor load averages, memory page faults, Wi-Fi RSSI signal metrics, and Linux kernel /proc data with 100% local privacy.",
    version: "v1.0.0",
    status: "Stable",
    category: "Android Apps",
    icon: Cpu,
    iconImage: "/images/kwas-syslens-icon.png",
    platforms: ["Android 7.0+", "Android 15 Ready"],
    license: "Free + Commercial",
    downloadUrl: "https://github.com/Shavin-Joseph/Sys_Info/releases/latest",
    sourceUrl: "https://github.com/Shavin-Joseph/Sys_Info",
    releasePageUrl: "https://github.com/Shavin-Joseph/Sys_Info/releases/tag/v1.0.0",
    rating: 5.0,
    downloads: 1420,
    size: getApkFileSize("kwas-syslens-v1.0.0.apk"),
    isReleased: true,
    featured: true,
    features: [
      "Linux kernel /proc parsing & CPU flag mapping (AES, NEON, SHA1)",
      "Memory (RAM) breakdown (Active, Dirty, Swap, VM page faults)",
      "Ultra Network Audit (Wi-Fi RSSI, BSSID, 5G/LTE cell operator)",
      "Battery mA current discharge & partition block filesystem table",
      "Jetpack Compose Material 3 Swiss-style eye-comfort typography",
    ],
    releaseNotes: "v1.0.0 Production Release — Google Play Store Ready with full offline hardware transparency.",
  },
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
    downloadUrl: "#",
    sourceUrl: "#",
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
    releaseNotes: "Currently in active pre-release development cycle.",
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
    downloadUrl: "#",
    sourceUrl: "#",
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
    downloadUrl: "#",
    sourceUrl: "#",
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
    downloadUrl: "#",
    sourceUrl: "#",
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
    downloadUrl: "#",
    sourceUrl: "#",
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
    downloadUrl: "#",
    sourceUrl: "#",
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
    version: "v1.0.0",
    date: "August 2026",
    title: "KWAS SysLens v1.0.0 Production Release",
    description: "Official production launch of KWAS SysLens — extreme Android system diagnostics & Linux kernel /proc auditing.",
    type: "Release",
  },
  {
    version: "v0.1.0-dev",
    date: "Jul 2026",
    title: "KWAS Technologies — Active Development Phase",
    description: "Initial repository setup and open source architecture development for KWAS software suite.",
    type: "Feature",
  },
];
