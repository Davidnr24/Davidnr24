// Client-safe environment access.
//
// Rules:
// - Only NEXT_PUBLIC_* vars belong here. Anything else must be read server-side.
// - Every var must be referenced as the literal `process.env.NEXT_PUBLIC_X` so
//   Next.js inlines it at build time. Do not loop over or compute the key: the
//   build-time replacement only works on literal lookups. See
//   node_modules/next/dist/docs/01-app/02-guides/environment-variables.md.
// - Because these are inlined at `next build`, they are frozen per deployment.
//   Changing the value in Vercel does not update an existing deployment. Redeploy.

export const clientEnv = {
  posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  posthogHost:
    process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
  // When "true", PostHog also initializes on a `next dev` localhost run. Off by
  // default so local work doesn't pollute the real project.
  posthogDebug: process.env.NEXT_PUBLIC_POSTHOG_DEBUG === "true",
} as const;

// Analytics run on production-style builds (Vercel sets NODE_ENV=production for
// both Production and Preview) and stay silent on `next dev` unless the debug
// override is set.
export const posthogEnabled =
  Boolean(clientEnv.posthogKey) &&
  (process.env.NODE_ENV === "production" || clientEnv.posthogDebug);
