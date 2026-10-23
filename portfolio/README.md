# david-navarro.dev

David Navarro's personal site: a resume for hiring managers at `/resume` and a contracting pitch at `/freelance`. Next.js 16, deployed by Vercel from `main`.

## Where things live

- `content/` holds the words. `career.ts` has jobs, certifications and education, `skills.ts` has the skill groups and work projects, `stack.ts` has the stack on the home page, and `personal-projects.ts` has the side projects. Most updates only touch these files.
- `components/pages/` holds the page bodies that both `/resume` and `/freelance` share.
- `public/David_Navarro_Resume.pdf` is the file behind every "Download résumé" button. Replace it in place so the links keep working.
- A tool name in a skills or project list needs a mark: a product logo mapped in `LOGO_FOR` in `components/logo-icons.tsx`, or a lucide icon in `CONCEPT_ICONS` in `components/tool-list.tsx`.

## Docs

- [DESIGN.md](DESIGN.md) is the design system. Read it before changing anything visual.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) explains the two front doors and what must never live in this public repo.
- [docs/DEPLOY.md](docs/DEPLOY.md), [docs/ANALYTICS.md](docs/ANALYTICS.md) and [docs/SECRETS.md](docs/SECRETS.md) cover deploys, PostHog and environment variables.

## Running it

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build
```
