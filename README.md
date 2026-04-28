# Angaza Nuru

A marketing website for *Angaza Nuru*, a community in Bodoi, Kenya focused on education, food security, and long-term family relationships.

## What it does

A 4-page editorial site rendered as static HTML by Next.js:

| Route | What's on it |
| --- | --- |
| `/` | Hero, three pillars, programs grid, story preview, stats band, visit & donate bands. |
| `/our-story` | Founders, narrative timeline, pull-quote, values strip, Swahili band, CTA. |
| `/what-we-do` | Hero, four programs (school, kitchen, farm, scholarship), interlude, knit-together section, CTA. |
| `/why-bodoi` | Hero, intro, map strip, day-in-Bodoi timeline, reality grid, voices, needle, CTA. |

Plus a shared header/footer, mobile menu, and a "plan a visit" modal.

All copy lives in `src/content/*.ts`, all sections live in `src/app/<route>/_components/`, and shared UI lives in `src/components/`.

## Stack

- **Next.js 16** (App Router, Turbopack, static export of all routes)
- **React 19**
- **Tailwind CSS v4** (theme tokens declared in `src/app/globals.css` via `@theme`)
- **TypeScript 5**

The Tailwind setup is custom: brand palette, fluid type scale, radii, shadows, and motion tokens are all defined as CSS variables and exposed to Tailwind via `@theme`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerendered)
npm run lint
npm run format   # prettier + tailwind class sorting
```

## Layout

```
src/
  app/
    layout.tsx              shared shell, fonts, header, footer, modal context
    page.tsx                / homepage
    our-story/              /our-story page + section components
    what-we-do/             /what-we-do page + section components
    why-bodoi/              /why-bodoi page + section components
    globals.css             Tailwind import + design tokens
    _components/homepage/   homepage section components
  components/
    shared/                 Header, Footer, MobileMenu, VisitModal
    ui/                     Button, Eyebrow, IconChip, Pattern, StampPill
    donate/                 DonateCard
  content/                  typed copy for each route
  lib/                      visit-modal context
design_handoff_angaza_nuru_site/   reference handoff (HTML/CSS) — not built
```

## Notes for working in this repo

- **Next.js 16 has breaking changes from earlier majors.** Read the relevant guide in `node_modules/next/dist/docs/` before touching APIs you're unsure of.
- Content edits stay in `src/content/`. Layout edits stay in `_components/`. Tokens stay in `globals.css`.
- `design_handoff_angaza_nuru_site/` is the original static handoff and is not part of the build.
