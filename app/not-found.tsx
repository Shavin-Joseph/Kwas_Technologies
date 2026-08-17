import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        The page you requested may have moved, been removed, or never existed. Explore the main KWAS pages to continue.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-lg border border-line bg-panel px-4 py-2 text-sm text-fg transition-colors hover:border-amber/60 hover:text-amber">
          Home
        </Link>
        <Link href="/tools" className="rounded-lg border border-line bg-panel px-4 py-2 text-sm text-fg transition-colors hover:border-amber/60 hover:text-amber">
          Free tools
        </Link>
        <Link href="/blog" className="rounded-lg border border-line bg-panel px-4 py-2 text-sm text-fg transition-colors hover:border-amber/60 hover:text-amber">
          Blog
        </Link>
        <Link href="/contact" className="rounded-lg border border-line bg-panel px-4 py-2 text-sm text-fg transition-colors hover:border-amber/60 hover:text-amber">
          Contact
        </Link>
      </div>
    </main>
  );
}
