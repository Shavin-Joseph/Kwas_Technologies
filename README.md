# KWAS.tech

A free/open-source + commercial Android & software distribution site, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Designed to deploy straight to Vercel from GitHub.

## Stack & why

| Tool | Why |
|---|---|
| **Next.js 14** | Vercel's own framework — zero-config deploys, image/font optimization, great SEO defaults. |
| **TypeScript** | Catches mistakes before they ship. |
| **Tailwind CSS** | Fast styling without a separate CSS build step. |
| **Framer Motion** | The scroll reveals, hero stagger, and mobile menu animation. |
| **lucide-react** | Icon set used throughout. |

---

## 1. Run it locally

You need [Node.js 18.18+](https://nodejs.org) and Git installed.

```bash
# unzip the project, then inside the folder:
npm install
npm run dev
```

Open **http://localhost:3000**. Edit any file under `app/` or `components/` and it hot-reloads.

To check it builds cleanly (this is what Vercel runs):

```bash
npm run build
```

---

## 2. Project structure

```
kwas-tech/
├─ app/
│  ├─ layout.tsx        ← fonts, <head> metadata, global background
│  ├─ page.tsx           ← assembles the sections in order
│  ├─ globals.css        ← Tailwind + the circuit-trace animation
│  ├─ icon.svg            ← favicon (auto-detected by Next.js)
│  ├─ robots.ts / sitemap.ts
├─ components/
│  ├─ Navbar.tsx, Hero.tsx, Terminal.tsx, TrustBar.tsx
│  ├─ Products.tsx        ← renders cards from lib/data.ts
│  ├─ Philosophy.tsx, Changelog.tsx, CTA.tsx, Footer.tsx
│  ├─ CircuitTraces.tsx   ← the animated background (signature visual)
├─ lib/
│  ├─ data.ts             ← ⭐ EDIT THIS to list your real apps
│  └─ utils.ts
```

## 3. Add your real apps

Open **`lib/data.ts`**. Replace the six placeholder entries in the `apps` array with your own — name, description, version, license type, and your real download/GitHub links. Icons come from [lucide.dev](https://lucide.dev/icons) — swap the `icon:` import for any icon you like.

The `changelog` array in the same file drives the "Build log" section. If you'd rather it update itself automatically, wire it to the [GitHub Releases API](https://docs.github.com/en/rest/releases/releases) (`GET /repos/{owner}/{repo}/releases`) inside a server component — ask me if you want that built out.

## 4. Customize the brand

- **Colors** — `tailwind.config.ts`, the `colors` block (`ink`, `panel`, `amber`, `signal`, etc).
- **Copy/headline** — `components/Hero.tsx`.
- **Logo mark** — the inline SVG in `components/Navbar.tsx` and `app/icon.svg`.
- **Fonts** — `app/layout.tsx` (currently Space Grotesk / Inter / JetBrains Mono via `next/font/google`).

---

## 5. Push to GitHub

```bash
cd kwas-tech
git init
git add .
git commit -m "Initial commit — KWAS site"
```

Create a new **empty** repo on GitHub (no README/license, so there's no conflict) — [github.com/new](https://github.com/new) — then:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/kwas-tech.git
git push -u origin main
```

## 6. Deploy to Vercel

1. Go to **[vercel.com/new](https://vercel.com/new)** and sign in with GitHub.
2. Import the `kwas-tech` repo. Vercel auto-detects Next.js — no config needed.
3. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.
4. From now on, every `git push` to `main` triggers a new production deploy automatically; every other branch/PR gets its own preview URL.

## 7. Connect your domain (kwas.tech)

In the Vercel dashboard: **Project → Settings → Domains → Add**, type `kwas.tech`, and add it. Vercel will also prompt you to add `www.kwas.tech` — accept that so both work, and set one as the canonical redirect target.

Then, at whatever registrar you bought `kwas.tech` from, add the DNS records Vercel shows you. As of now they're typically:

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

**Always use the exact values shown on your own domain's settings page in Vercel** — they can be project-specific, and the ones above may change over time. DNS propagation usually takes minutes, sometimes up to a few hours. Vercel issues an SSL certificate automatically once it verifies.

> If your registrar's DNS is proxied through Cloudflare (orange cloud), switch those two records to "DNS only" (grey cloud) or certificate verification will fail.

---

## 8. About the GitHub Student Developer Pack

A couple of things worth knowing so you don't over-provision:

- **Vercel's Hobby plan is free for everyone**, student or not — you don't need the Student Pack to deploy this. It includes automatic HTTPS, previews, and a global CDN.
- The Hobby plan's terms are meant for personal/non-commercial use. A marketing/distribution site like this one is normally fine on Hobby, but since you're planning **commercial** software distribution as the brand grows, keep an eye on that — if KWAS starts operating as a registered business or the site's traffic/usage grows a lot, Vercel's Pro plan (~$20/mo, sometimes discounted via partner offers) is the compliant option.
- From the Student Pack itself, the pieces actually relevant to this project are: **GitHub Pro** (unlimited private repos, useful while you're still building), and **GitHub Codespaces/Actions minutes** (handy for CI, e.g. auto-running `npm run build` or `npm run lint` on every pull request). The cloud-credit offers (DigitalOcean, Azure, etc.) aren't needed here since Vercel is hosting the frontend.

## 9. Suggested next steps

- Replace the six placeholder apps and real download links.
- Add real screenshots (drop them in `public/` and reference with Next's `<Image>` component for automatic optimization).
- Add a GitHub Actions workflow to run `npm run lint` and `npm run build` on every PR before merging to `main`.
- If you want app detail pages (`/apps/kwas-launcher`), that's a natural next feature — each app already has a unique `slug` in `lib/data.ts` ready for it.

---

Built with Next.js · Tailwind CSS · Framer Motion
