# Architecture notes

## Principles
- **Static first.** Every page is prerendered HTML. Only three small client components ship JavaScript:
  `HeaderShell` (scroll shadow), `MobileNav` (menu), and `EarlyAccessForm` (submission states).
- **One brand switch.** `config/brand.ts` holds every brand-specific string and colour. `app/layout.tsx`
  writes the palette to `<html style="--brand-*">`, and `styles/globals.css` maps those variables to
  Tailwind tokens. Components never contain a brand name or hex colour.
- **No image dependencies for the hero.** The "living room" scene is CSS gradients plus inline SVG
  (`HeroBackdrop.tsx`), so it downloads nothing and causes no layout shift.
- **Shared example data.** The hero dashboard and the Savings section read the same `data/sample-plan.ts`,
  so the numbers always agree.

## Component tree
```
RootLayout
├─ Header ─ HeaderShell (client) ─ Logo · nav · ButtonLink · MobileNav (client)
├─ main
│  └─ HomePage
│     ├─ Hero ─ TrustPoints · HeroBackdrop · StreamingDashboardMockup ─ MetricCard · ProviderTile · ActionChip
│     ├─ HowItWorks
│     ├─ Benefits ─ BenefitCard
│     ├─ SavingsComparison ─ PlanCard · ProviderTile · ActionChip
│     ├─ StreamingCalendarPreview ─ ProviderTile · StateCell
│     ├─ Differentiators
│     └─ FinalCTA ─ EarlyAccessForm (client)
└─ Footer
```

## Extending into the product
- Put the app under a route group (e.g. `app/(app)/dashboard`) with its own layout, so marketing pages stay static.
- Move `data/providers.ts` into a real provider catalogue (DB or CMS); `ProviderTile` already accepts `logoSrc`.
- The `PlanAction` type (`keep | bundle | pause`) is the seed of the recommendation model. Extend it with
  `cancel | reactivate | switch-tier | wait`, plus a `reason` string (recommendations must explain *why*).
- **Ranking integrity:** affiliate or referral data must never be an input to optimizer ranking.
