import { Github, Mail, Twitter } from "lucide-react";

const COLUMNS = [
  {
    title: "Solutions & Topics",
    links: [
      { label: "Key Web App Solutions", href: "#topics" },
      { label: "Android Apps & Tools", href: "#topics" },
      { label: "Privacy & Security", href: "#topics" },
      { label: "Self-Hosted Infrastructure", href: "#topics" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Kwas Launcher", href: "#products" },
      { label: "Kwas Vault", href: "#products" },
      { label: "Kwas Terminal", href: "#products" },
      { label: "All products", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About KWAS Tech", href: "#about" },
      { label: "Changelog", href: "#changelog" },
      { label: "GitHub", href: "https://github.com/kwas-tech" },
      { label: "Contact", href: "mailto:hello@kwas.tech" },
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
                href="https://github.com/kwas-tech"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-faint hover:text-fg"
              >
                <Github size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-faint hover:text-fg"
              >
                <Twitter size={16} />
              </a>
              <a
                href="mailto:hello@kwas.tech"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-faint hover:text-fg"
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
                    <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line/70 pt-6 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Kwas Technologies — all rights reserved.</span>
          <span>Built with Next.js · deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
