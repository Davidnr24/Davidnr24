# DEPLOY.md

## Architecture in one sentence

Vercel's Git integration builds and deploys straight from GitHub: production on
every push to `main`, a preview URL for any other branch.

## Who does what

| Actor | Job |
|---|---|
| Claude | Commits and pushes. This is a solo repo with no live users, so changes go straight to `main` rather than through a PR. |
| Vercel | Builds every push and deploys `main` to production. |
| David | Reads the result. |

## Project settings that matter

- **Root Directory: `portfolio`.** This repo has no `package.json` at the root,
  because the root is the GitHub profile README. Vercel needs to know the app
  lives one level down. If you run `vercel build` by hand, run it from the repo
  root and let the CLI append that path itself; running it from inside
  `portfolio/` makes it look for `portfolio/portfolio/package.json` and fail
  with `ENOENT`.
- **Framework: Next.js. Node: 24.x.** Both detected, neither overridden.
- **Environment variables** are set for Production and Preview:
  `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`. They are inlined
  into the browser bundle at build time, so changing one in the dashboard does
  nothing until the next build. See `docs/ANALYTICS.md`.

## Day-to-day flow

| Action | Result |
|---|---|
| Push a branch | Vercel builds it and returns a preview URL. |
| Open a PR | The preview URL is commented on the PR. Lint and typecheck run in Actions. |
| Merge to `main` | Vercel builds and deploys production at `david-navarro.dev`. |
| Rollback | Vercel dashboard, Deployments, pick a previous production deploy, Promote to Production. |

## One-time setup, already done

1. Vercel project created and linked (`.vercel/project.json`,
   git-ignored).
2. Git integration connected with `vercel git connect`, so pushes deploy.
3. Custom domain `david-navarro.dev` added, with `www` redirecting to the apex.
4. PostHog env vars added for Production and Preview.

## Local development

```bash
cd portfolio
npm install
npm run dev              # http://localhost:3000
```

Analytics stay off on `next dev`. See `docs/ANALYTICS.md` for the override.

To reproduce a production build locally, from the **repo root**:

```bash
vercel pull --yes --environment=production
vercel build --prod
```

## Troubleshooting

- **`ENOENT ... portfolio/portfolio/package.json`** means a Vercel command ran
  from inside `portfolio/`. Run it from the repo root.
- **Two deployments per push** means something in CI is deploying as well as
  Vercel. Actions must never call `vercel deploy`.
- **A push to a branch produced no preview** usually means the Git integration
  got disconnected. Check it with `vercel git connect` from the repo root.
- **Analytics missing in production** almost always means the build ran before
  `NEXT_PUBLIC_POSTHOG_KEY` existed. Redeploy.
