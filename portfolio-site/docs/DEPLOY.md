# DEPLOY.md

## Architecture in one sentence

GitHub Actions runs lint + typecheck + `vercel build --prebuilt`, uploads `.vercel/output` as an artifact, then a second job runs `vercel deploy --prebuilt` to ship it. Vercel acts as a dumb CDN host.

## One-time setup

### 1. Create the Vercel project

```bash
# From repo root
cd portfolio-site
npx vercel@latest login
npx vercel@latest link
# When prompted:
#   - Set up and deploy?            → No, just link
#   - Which scope?                  → personal account
#   - Link to existing project?     → No
#   - Project name?                 → david-navarro-portfolio (or similar)
#   - In which directory is your code? → ./   (we're already inside portfolio-site)
#   - Modify settings?              → No
```

This creates `portfolio-site/.vercel/project.json` containing `orgId` and `projectId`. **Do not commit `.vercel/`** — it's git-ignored.

### 2. Disable Vercel's native Git integration

Vercel project → Settings → Git → **Disconnect** repo (or never connect it). The GitHub Actions workflow is the only thing that deploys, otherwise every push triggers two builds.

### 3. Add the custom domain

Vercel project → Settings → Domains → Add:
- `david-navarro.dev` (apex)
- `www.david-navarro.dev` (redirect to apex, or vice versa — Vercel handles this)

Then at the domain registrar:
- **Either** point nameservers to Vercel's NS records (easiest), **or**
- Add the A/ALIAS + CNAME records Vercel displays.

Vercel auto-issues a Let's Encrypt cert. Propagation takes minutes to an hour.

### 4. Add GitHub Secrets

```bash
# Run from repo root with gh CLI authenticated
gh secret set VERCEL_TOKEN     # paste a token from https://vercel.com/account/tokens
gh secret set VERCEL_ORG_ID    # value from portfolio-site/.vercel/project.json -> orgId
gh secret set VERCEL_PROJECT_ID # value from portfolio-site/.vercel/project.json -> projectId
```

## Day-to-day flow

| Action | Result |
|---|---|
| Push to a feature branch + open PR | CI runs `quality → build → deploy` with `--environment=preview`. Vercel returns a preview URL. |
| Merge PR to `main` | CI runs the same chain with `--prod`. New build replaces production at `david-navarro.dev`. |
| Rollback | Vercel dashboard → Deployments → click any prior production deploy → Promote to Production. |

## Local development

```bash
cd portfolio-site
npm install
npm run dev              # http://localhost:3000

# To run a production-equivalent build locally:
npx vercel@latest pull --yes --environment=production
npx vercel@latest build --prod
# Output lives in .vercel/output — you can preview it with `npx vercel dev` or by running `next start` against the standard .next build.
```

## Troubleshooting

- **CI deploy fails with "project not found"** → `VERCEL_PROJECT_ID` or `VERCEL_ORG_ID` is wrong. Re-run `vercel link` locally, copy values from `.vercel/project.json`, re-set secrets.
- **Build artifact too large to upload** → check `.vercelignore`; ensure `node_modules` isn't being bundled into `.vercel/output`.
- **Preview URL doesn't update on PR** → confirm the workflow uses `--environment=preview` (without `--prod`) on `pull_request` events.
- **Double deploys** → Vercel's native Git integration is still connected; disconnect it (see step 2 above).
