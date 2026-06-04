# ARCHITECTURE.md

## What this is

A statically-generated marketing/portfolio site for David Navarro (Senior DevOps / Platform Engineer). Lives at `david-navarro.dev`.

Goals:
- Showcase personal projects, professional career, hobbies
- Funnel for job interviews and freelance DevOps work

## Stack

| Concern | Tool |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, RSC) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@theme` directive, CSS variables) |
| Components | shadcn/ui (Radix primitives, copied into `components/ui/`) |
| Animation | Motion (`motion/react`) |
| Icons | lucide-react |
| Fonts | Geist Sans + Geist Mono via `next/font` |
| Hosting | Vercel (Hobby tier; Pro when monetized) |
| CI/CD | GitHub Actions → `vercel deploy --prebuilt` |

## Rendering model

Default Next.js build (no `output: 'export'`). Every page is statically pre-rendered at build time and served from Vercel's CDN. Route Handlers and middleware remain available for future use (e.g., a contact form).

## Project layout (inside `portfolio-site/`)

```
app/                   App Router routes
├── layout.tsx         Root layout, fonts, theme provider
├── page.tsx           Home (hero)
├── projects/          (future) personal projects
├── experience/        (future) career timeline
├── about/             (future) bio + hobbies
└── services/          (future, gated on Pro tier) freelance DevOps offering

components/
├── ui/                shadcn primitives (do not edit by hand — managed by CLI)
└── ...                custom composite components

content/               (future) MDX or TS data files for project entries, jobs, etc.

lib/
└── utils.ts           cn() helper from shadcn

public/                static assets

docs/                  this directory — all project docs live here
DESIGN.md              design tokens — read before any UI work
components.json        shadcn config
next.config.ts
```

## Content model

Project entries and job history will be authored as typed data (TS modules in `content/`) rather than CMS-driven. Rationale: low volume, no need for editors, perfect for git-based workflow. MDX is an option if long-form writing becomes a thing.

## Where things go

- **New page** → `app/<route>/page.tsx`
- **New reusable UI primitive** → `npx shadcn@latest add <name>` (don't write from scratch if shadcn has it)
- **New animation** → client component with `import { motion } from "motion/react"` and `"use client"` at top
- **New static asset** → `public/`
- **New env var** → see `docs/SECRETS.md`
