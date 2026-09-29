# ARCHITECTURE.md

David's personal site. One Next app, one domain, two front doors.

## One domain

`www.david-navarro.dev`, served by the Vercel project built from `portfolio/`
in this repo. There is no host routing and no password gate: everything here is
public and personal.

| Path | What |
|---|---|
| `/` | Permanent redirect to `/resume`. Someone typing the bare domain wants the resume, not a menu. |
| `/resume` | For a hiring manager filling a full-time role. The stack, the history, the certifications. |
| `/freelance` | For someone buying a contract. Same background, framed around engagements and outcomes. |
| `/resume/{career,skills,projects,personal}` | The inner pages. `/freelance/*` mirrors them for its own audience. |

The two doors exist so a recruiter never reads the contracting pitch and a
contract buyer never reads a resume aimed at a salaried role. They share the
page bodies in `components/pages/` and differ in framing, navigation and
calls to action.

`/freelance/*` inner pages canonicalise to their `/resume/*` equivalents, so
search engines see one copy. That is why the sitemap lists the resume set plus
`/freelance` itself, and nothing under `/freelance/`.

## Nothing about Navar Labs lives here

This repo is public and it is David personally: a resume, a skills list, a
freelance pitch. The company and its brands are deliberately absent, each in
its own private repo on its own domain:

| What | Repo | Domain |
|---|---|---|
| Navar Labs, the company | `Davidnr24/navarlabs` | `navarlabs.dev` |
| david-workflows | `Davidnr24/david-workflows` | `david-workflows.navarlabs.dev` |
| DWMT | `Davidnr24/dwmt` | `dwmt.navarlabs.dev` |

If a change here would add a company link, a brand name, or a client's
details, it belongs in one of those instead.

## Where things are

```
portfolio/
  app/                 routes. /resume and /freelance plus their inner pages.
  app/layout.tsx       David's metadata: name, keywords, OG card.
  components/pages/    the shared page bodies both doors render.
  components/          site chrome, rows, marks, icons.
  content/             the actual content: career, skills, stack, projects.
  lib/                 analytics, mailto builders, nav definitions.
  docs/                this, plus ANALYTICS, DEPLOY, SECRETS.
  DESIGN.md            the design system. Read it before touching any UI.
```

`README.md` at the repo root is the GitHub profile README, not this site. It
renders on github.com/Davidnr24, which is why this repo is public.

## History

This app used to serve three domains from one Vercel project, choosing what to
show by hostname in a `proxy.ts`, with the bare domain behind `SITE_PASSWORD`
as a private index of the front doors. That collapsed into one domain per repo
in September 2026. The proxy, the password gate and the host helpers are gone
rather than left dormant. The earlier history, including the company and agency
pages, is in `Davidnr24/david-workflows`.
