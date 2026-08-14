import Link from "next/link";
import { Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Free Tools & Apps",
    links: [
      { label: "Image Converter & WebP", href: "/tools/image-converter" },
      { label: "Universal QR Code Generator", href: "/tools/qr-generator" },
      { label: "Word & Character Counter", href: "/tools/word-counter" },
      { label: "Internet Speed Test", href: "/tools/speed-test" },
      { label: "All Free Tools", href: "/tools" },
    ],
  },
  {
    title: "Solutions & Blog",
    links: [
      { label: "Key Web App Solutions", href: "/topics/web-apps" },
      { label: "Android Apps & Tools", href: "/topics/mobile-apps" },
      { label: "Privacy & Security", href: "/topics/privacy-security" },
      { label: "Tech Blog & Articles", href: "/blog" },
      { label: "Software Hub", href: "/products" },
    ],
  },
  {
    title: "Company & Legal",
    links: [
      { label: "About KWAS Tech", href: "/about" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "App Licenses", href: "/license" },
      { label: "Contact (support@kwas.tech)", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display text-lg font-semibold text-fg">
              KWAS Technologies
            </span>
            <p className="mt-2 text-xs font-mono text-amber">
              Key Web App Solutions Technologies
            </p>
            <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-faint">
              High-performance web app solutions, privacy-first mobile apps, and self-hosted tools built for modern teams.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="mailto:support@kwas.tech"
                aria-label="Email support@kwas.tech"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-faint hover:text-amber"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("http") || l.href.startsWith("mailto:") ? (
                      <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line/70 pt-6 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} KWAS Technologies — Key Web App Solutions Technologies</span>
          <span>support@kwas.tech</span>
        </div>
      </div>
    </footer>
  );
}
