# ARCHITECTURE.md

## What this is

A statically-generated marketing/portfolio site for David Navarro (Senior DevOps / Platform Engineer). Lives at `david-navarro.dev`.

Goals:
- Showcase personal projects, professional career, hobbies
- Funnel for job interviews, freelance DevOps work, and automation clients

## Front doors

The site is not one portfolio with a nav bar listing everything. It is three
self-contained sites, so David can send a link to exactly the person it was
written for and they see nothing else.

| Door | Audience | Contains |
|---|---|---|
| `/resume` | Full-time hiring managers | Hero, the stack with brand marks, work history, and career / skills / projects / personal. No contracting, no agency, no percentages. |
| `/freelance` | Contract buyers | Services, results with the numbers, how engagements run, and the same four inner pages. |
| `/agency` | Coaches and small businesses | Automation and AI work, at `/agency/automation` (EN) and `/agency/automatizacion` (ES). |

`/` and `/agency` are private indexes for navigating between doors. Both are
behind a password in `proxy.ts`; see `docs/SECRETS.md`.

Each door has its own `layout.tsx` rendering `SiteChrome`, which supplies the
header, its navigation, the footer and the structured data. No door links to
another.

Career, skills, projects and personal are identical across the resume and
freelance doors. The bodies live in `components/pages/` and are shared; the
freelance copies canonicalise to the resume ones so search engines see one
copy while visitors keep the right navigation.

## Stack

| Concern | Tool |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, RSC) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@theme` directive, CSS variables) |
| Components | shadcn/ui (Radix primitives, copied into `components/ui/`) |
| Animation | Motion (`motion/react`) |
| Icons | lucide-react |
| Analytics | PostHog (`posthog-js`), proxied through `/ingest` |
| Fonts | Geist Sans + Geist Mono via `next/font` |
| Hosting | Vercel (Hobby tier; Pro when monetized) |
| CI/CD | GitHub Actions → `vercel deploy --prebuilt` |

## Rendering model

Default Next.js build (no `output: 'export'`). Every page is statically pre-rendered at build time and served from Vercel's CDN. Route Handlers and middleware remain available for future use (e.g., a contact form).

## Project layout (inside `portfolio-site/`)

```
app/
├── layout.tsx         Root layout, fonts, analytics listener
├── page.tsx           Private index (password protected)
├── resume/            Front door: full-time roles
│   ├── layout.tsx     SiteChrome with the resume navigation
│   ├── page.tsx       Hero, stack, work history
│   └── career|skills|projects|personal/
├── freelance/         Front door: contract work
│   ├── layout.tsx     SiteChrome with the freelance navigation
│   ├── page.tsx       Services, results, engagement process
│   └── career|skills|projects|personal/
└── agency/            Front door: automation clients
    ├── page.tsx       Private index (password protected)
    ├── automation/    English landing
    └── automatizacion/ Spanish landing

components/
├── ui/                shadcn primitives (do not edit by hand, managed by CLI)
├── pages/             Shared bodies for the four inner pages
├── site-chrome.tsx    Header + footer + structured data for one door
├── stack-list.tsx     The tech stack rows
└── tech-icons.tsx     Inlined brand marks

content/               Typed data: career, skills, projects, stack, site
lib/                   cn(), nav per door, mailto builders, analytics helpers
proxy.ts               Basic auth on the two private indexes
```

## Content model

Project entries and job history will be authored as typed data (TS modules in `content/`) rather than CMS-driven. Rationale: low volume, no need for editors, perfect for git-based workflow. MDX is an option if long-form writing becomes a thing.

## Where things go

- **New page** → `app/<route>/page.tsx`
- **New reusable UI primitive** → `npx shadcn@latest add <name>` (don't write from scratch if shadcn has it)
- **New animation** → client component with `import { motion } from "motion/react"` and `"use client"` at top
- **New static asset** → `public/`
- **New env var** → see `docs/SECRETS.md`
- **New tracked button** → spread `cta(name, location)` onto it; see `docs/ANALYTICS.md`
