# Streaming Optimizer: Marketing Site

The public marketing website for an early-stage consumer product that helps households simplify and optimize their streaming subscriptions.

One codebase serves **two candidate brands**, **SimplyStream** and **StreamRight**. You switch between them with a single setting.

> Phase 1 is the marketing site only. There is no optimizer engine, accounts, payments, Plaid, Supabase, or provider APIs yet.

---

## Tech stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, fully static output) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4, with brand colors exposed as CSS variables |
| Font | Plus Jakarta Sans (open source, SIL OFL), self-hosted in `app/fonts/` |
| Forms | Netlify Forms (no backend) |
| Hosting | Netlify, auto-deployed from GitHub |

The only runtime dependencies are `next`, `react`, and `react-dom`. There's no UI kit, no icon package, and no animation library.

---

## Quick start

Requires **Node.js 20.9+** (22 recommended; see `.nvmrc`).

```bash
npm install          # install dependencies
npm run dev          # start dev server → http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check (no emit) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run check` | Lint + typecheck + build (run before pushing) |

---

## Switching between SimplyStream and StreamRight

**Option 1 (permanent):** edit one line in [`config/brand.ts`](config/brand.ts):

```ts
export const ACTIVE_BRAND: BrandId = "simplystream"; // or "streamright"
```

**Option 2 (no code change):** set the environment variable `NEXT_PUBLIC_BRAND=streamright`, either in `.env.local` or in Netlify. This overrides the file setting, so you could run a second Netlify site or a branch deploy that shows the other brand.

Either way, the switch changes the name, logo, headline, body copy, CTAs, trust points, feature copy, dashboard labels, final CTA, colors, page title, meta description, Open Graph image, and favicon.

**When the final name is chosen:** delete the other brand's entry in `config/brand.ts` and delete its files (`public/logos/<brand>-mark.svg` and `public/images/og-<brand>.png`).

### Where things live

| What | Where |
|---|---|
| **All brand copy** (headline, CTAs, benefits, SEO text) | `config/brand.ts`, in each brand's object |
| **Brand colors** | `config/brand.ts`, in each brand's `colors` block |
| Color → Tailwind token mapping (`bg-primary`, `text-muted`…) | `styles/globals.css`, in `@theme` |
| Shared (brand-neutral) section copy | The section component in `components/marketing/` |
| Example numbers ($148 → $96, $624/yr) | `data/sample-plan.ts` (savings and percent are calculated) |
| Calendar example | `data/calendar.ts` |
| Streaming provider placeholders | `data/providers.ts` |
| Nav links, contact email, site URL | `lib/site.ts` |
| Logos | `components/ui/Logo.tsx` (rendered) and `public/logos/*-mark.svg` (favicons) |

### Adding official provider logos later

Put the files in `public/logos/providers/` and set `logoSrc` on the provider in `data/providers.ts`:

```ts
netflix: { id: "netflix", name: "Netflix", label: "N", bg: "#141414", fg: "#E50914", logoSrc: "/logos/providers/netflix.svg" },
```

`ProviderTile` switches to the image automatically, with no layout change. Make sure you have the right to use each logo.

---

## Project structure

```
app/                     Routes (App Router)
  layout.tsx             <html>, fonts, brand CSS variables, metadata, header/footer
  page.tsx               Home page (assembles sections)
  privacy/  terms/       Placeholder legal pages
  robots.ts  sitemap.ts  SEO files (generated)
  fonts/                 Self-hosted Plus Jakarta Sans
components/
  layout/                Header, HeaderShell, MobileNav, Footer, LegalPage
  marketing/             Hero, dashboard mockup, How It Works, Benefits, Savings,
                         Calendar, Differentiators, Final CTA, Early-access form
  ui/                    Button, Icon, Logo, ProviderTile, MetricCard, TrustPoints, …
config/brand.ts          ← brand switch + all brand copy/colors
data/                    Example plan, calendar, providers
lib/site.ts              Site URL, nav, indexing flag
public/
  __forms.html           Netlify Forms detection file (do not delete)
  images/  logos/
styles/globals.css       Tailwind + design tokens
docs/                    Architecture and deployment notes
netlify.toml             Netlify build settings
```

---

## Environment variables

All of them are **optional**. The site builds with none set. See `.env.example`.

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_BRAND` | `simplystream` or `streamright`; overrides `config/brand.ts` | value in `config/brand.ts` |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for canonical tags, Open Graph, and sitemap | Netlify's `URL`, then `http://localhost:3000` |
| `NEXT_PUBLIC_ALLOW_INDEXING` | Set to `true` to let search engines index the site | blocked (`noindex`) |

`NEXT_PUBLIC_*` values are baked in at build time. **Trigger a new deploy after changing them.**

---

## Git and GitHub

```bash
git init -b main              # skip if the repo is already initialized
git add .
git commit -m "Initial marketing site"
git branch development

# Create an empty repo on github.com first (no README/license), then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
git push -u origin development
```

Suggested flow: work on `development`, open a pull request into `main`, check the Netlify deploy preview, then merge. Merging to `main` deploys production.

---

## Deploying to Netlify

1. Sign in at [app.netlify.com](https://app.netlify.com), then click **Add new project → Import an existing project → GitHub**.
2. Authorize Netlify and pick the repository.
3. Netlify reads `netlify.toml`, so the defaults are already right:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Production branch: `main`
4. Optional: under **Environment variables**, add any of the variables above.
5. Click **Deploy**. Netlify detects Next.js and installs its Next.js runtime automatically. Don't add `@netlify/plugin-nextjs` yourself.
6. **Enable form detection** (once): go to **Project configuration → Forms** and enable form detection if it isn't already on, then redeploy. The **early-access** form will then appear, and submissions will show up there. You can add email notifications under **Forms → Form notifications**.
7. Deploy previews for pull requests are on by default (**Project configuration → Build & deploy → Deploy Previews**).

When you have a custom domain, add it in Netlify **Domain management**, set `NEXT_PUBLIC_SITE_URL`, and set `NEXT_PUBLIC_ALLOW_INDEXING=true` for production when you're ready to launch.

### How the early-access form works

Netlify registers forms by scanning static HTML at deploy time, and it can't see forms rendered by React. So the form is declared twice:

- `public/__forms.html` is a hidden static copy that Netlify detects.
- `components/marketing/EarlyAccessForm.tsx` is the real form. It POSTs to `/__forms.html` with `fetch`.

**If you add or rename a field, update both files.** A hidden `brand` field records which brand the visitor saw.

Locally, `npm run dev` simulates a successful submission. `npm run start` shows the error state, because Netlify isn't there to receive the form. Forms only store real submissions on a Netlify deploy.

---

## Product principles baked into the code

- It's a plan, not a cancellation tool. The UI shows **keep / bundle / pause** actions and a calendar with paused services that come back.
- Examples are clearly labeled as illustrations. There are no exaggerated savings claims.
- **Affiliate revenue must never influence recommendation ranking.** See the note in `components/marketing/Differentiators.tsx`.
