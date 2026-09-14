# ANALYTICS.md

PostHog, wired the same way as the other Navar Labs projects. One shared
PostHog project serves all of them; every event from this site carries
`app: "portfolio"` so the dashboard can filter its own traffic out of the rest.

## What gets captured

Automatic, no code needed:

| Event | When |
|---|---|
| `$pageview` | First load and every App Router navigation. `defaults: "2026-08-30"` sets `capture_pageview` to `history_change`, which handles client-side routing. |
| `$pageleave` | Leaving a page, so time on page is real. |
| `$autocapture` | Every click, with the element text, href and CSS selector. This is the raw "where did they click" record. |
| `$set` | A person profile per visitor. `person_profiles: "always"` because the site has no login, and without it anonymous visitors never show up in the Visitors list. |

Named on top of that:

| Event | Properties | Why |
|---|---|---|
| `cta_clicked` | `cta`, `location`, `href`, `label` | The handful of clicks that actually matter. Named so a chart survives a copy change, which an autocapture selector does not. |

`cta` values are the `CtaName` union in `lib/analytics.ts`: `hire_me`, `resume`,
`email`, `linkedin`, `github`, `workflow_audit`, `door_full_time`,
`door_contract`, `door_automation`, `project_demo`, `project_source`,
`project_access`, `cert_verify`.

`location` says where on the page the click happened (`header`, `home_hero`,
`home_doors`, `page_close`, `footer`, `automation_hero`, `automation_close`,
and the project slug on project cards). Which page it was comes through as
`$current_url` on the event, so `location` never has to repeat it.

## Adding tracking to a new button

Spread `cta()` onto the anchor. That is the whole job, and it works in a server
component:

```tsx
import { cta } from "@/lib/analytics";

<a href={someUrl} {...cta("hire_me", "pricing_table")}>Hire me</a>
```

`cta()` returns `data-ph-cta` and `data-ph-location` attributes.
`components/cta-tracker.tsx` is a single delegated click listener mounted once
in the root layout: it reads those attributes off whatever was clicked and
fires the event. No `"use client"` at the call site, no handler per button.

Add the new name to `CtaName` first. The union is the list of things worth
counting, so growing it should be a deliberate edit.

## Files

```
instrumentation-client.ts      PostHog init. Runs once, client side, before render.
lib/env.ts                     NEXT_PUBLIC_* access + the on/off gate.
lib/analytics.ts               CtaName union + cta() attribute helper. Safe in RSC.
components/cta-tracker.tsx     The delegated click listener.
next.config.ts                 /ingest reverse proxy rewrites.
```

## Local development

Analytics are off on `next dev`. `posthogEnabled` in `lib/env.ts` requires
either a production build or `NEXT_PUBLIC_POSTHOG_DEBUG=true`, so local work
does not show up in the dashboard.

To verify event wiring locally, set `NEXT_PUBLIC_POSTHOG_DEBUG=true` in
`.env.local` and watch the browser console. Debug mode logs every call. Those
events go to the real project, so turn it off when you are done.

## Two things that will waste your afternoon

**PostHog drops traffic it thinks is a bot.** Headless Chrome is on that list
by its user agent, so an automated check of the live site records nothing and
looks like a broken integration. Pass a normal user agent when testing with a
headless browser.

**The ingest proxy is not optional.** Requests go to `/ingest` on our own
domain and `next.config.ts` rewrites them to PostHog. Point `api_host` straight
at `posthog.com` and any visitor running an ad blocker disappears from the
numbers. The rewrite also needs `skipTrailingSlashRedirect: true`.

## Dashboard

[Portfolio · Main Dashboard](https://us.posthog.com/project/422710/dashboard/2084516),
PostHog project 422710 (Navar Labs, US cloud). It sits next to the DWMT
dashboard in the same project. Every tile filters `app = portfolio` and covers
the last 30 days.

| Tile | What it shows |
|---|---|
| Visitors and pageviews | Unique people and total pageviews per day. |
| Top pages | `$pageview` by `$pathname`. |
| Where they came from | `$pageview` by `$referring_domain`. |
| Campaign traffic | `$pageview` by `utm_source`. Empty until a tagged link goes out. |
| CTA clicks | `cta_clicked` by `cta`. |
| CTA clicks by position | `cta_clicked` by `location`. |
| Everything else they clicked | `$autocapture` by `$el_text`. |
| Country | `$pageview` by `$geoip_country_name`. |
| Device type | `$pageview` by `$device_type`. |
| Coaching page, EN vs ES | `/automation` against `/automatizacion`. |

Deliberately not here: conversion funnels, retention, cohorts. This site has one
step, a click, and nothing to retain.

Dashboards are created through the PostHog REST API with the personal API key in
`$POSTHOG_API_KEY`, not committed as code. To add a tile, POST an insight to
`/api/projects/422710/insights/` with `"dashboards": [2084516]`, copying the
query shape of an existing one.

The dashboard stays empty until `NEXT_PUBLIC_POSTHOG_KEY` is set in Vercel and a
deploy goes out with it. The key is inlined at build time, so setting it after a
build changes nothing until the next one.
