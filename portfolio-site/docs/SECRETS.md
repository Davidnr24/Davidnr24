# SECRETS.md

> **This repository is PUBLIC.** Every commit is visible to the entire internet, forever. Treat secret hygiene as a hard constraint, not a guideline.

## Core rules

1. **Never commit a `.env*` file.** The scaffold's `.gitignore` already covers `.env*`. The repo-root `.gitignore` reinforces it. If you ever see `git status` showing `portfolio-site/.env*`, stop and investigate.
2. **`NEXT_PUBLIC_*` is a public broadcast.** Anything prefixed with `NEXT_PUBLIC_` is inlined into the JS bundle and shipped to every browser. Use it only for values that are safe to publish (site IDs, public analytics keys, public API URLs).
3. **Server-only secrets live in Vercel and GH Secrets — nowhere else.** No fallback in code, no committed example with real values.
4. **`.env.example` is fine.** Commit a `.env.example` with key names and dummy values so contributors know what to set, but never real values.

## Where each kind of secret lives

| Secret | Lives in | Used by |
|---|---|---|
| `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` | **GitHub repo Secrets** (`gh secret set`) | The deploy workflow only |
| Server-side env vars for the app (none today; future: e.g., contact-form provider key) | **Vercel project Environment Variables** (per environment: Production / Preview / Development) | Next.js server runtime; pulled into local `.env.local` via `vercel env pull` |
| Public values bundled into the client (none today; future: e.g., analytics site ID) | **Vercel project env vars prefixed `NEXT_PUBLIC_*`** | Browser bundle |
| Local-only development secrets | **`portfolio-site/.env.local`** (git-ignored) — populated by `vercel env pull` | `npm run dev` |

## Local dev workflow

```bash
cd portfolio-site
npx vercel@latest env pull .env.local         # fetches the Development env from Vercel
# .env.local is git-ignored — never commit it
```

## If a secret leaks

1. **Rotate it first.** Revoke the leaked token at its source (Vercel account, provider console, etc.) before doing anything else. Git history is permanent — assuming the leaked value is dead is the only safe move.
2. Remove the value from the offending file and commit the fix.
3. Optionally rewrite history with `git filter-repo` or BFG — but treat this as cosmetic, not a substitute for rotation.

## Audit checks

Periodically run from repo root:

```bash
# Anything that looks like a secret?
git grep -nIE '(sk_live|sk_test|AKIA[0-9A-Z]{16}|ghp_|vercel_|sb_secret_)'

# Anything env-shaped that shouldn't be tracked?
git ls-files | grep -E '\.env($|\.)'
```

## Recommended follow-up (not blocking initial scaffold)

- Add **gitleaks** as a pre-commit hook (`brew install gitleaks` → `gitleaks protect --staged`) so leaks get caught locally before they reach the public remote.
- Enable **GitHub secret scanning** (free for public repos, on by default for many providers).
- If a future feature requires non-trivial secret material, consider Vercel's encrypted env vars + per-environment scoping rather than ad-hoc env handling.

## Today's secret footprint

**Zero application secrets.** The site has no backend. The only credentials in the system are the three GH Secrets needed by the deploy workflow. Keep it that way as long as possible.
