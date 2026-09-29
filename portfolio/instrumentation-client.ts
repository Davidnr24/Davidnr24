// PostHog browser init. Next.js runs this file once, client-side, before the
// app renders (https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client).
//
// What we get out of the box with these settings:
// - $pageview on first load and on every App Router navigation (`defaults`
//   from 2025-05-24 onward set capture_pageview to "history_change")
// - $pageleave, so time-on-page is real
// - $autocapture: every click, with the element text, href and selector
//
// Anything beyond that is a named event. See lib/analytics.ts.

import posthog from "posthog-js";

import { clientEnv, posthogEnabled } from "./lib/env";

if (typeof window !== "undefined" && posthogEnabled && clientEnv.posthogKey) {
  posthog.init(clientEnv.posthogKey, {
    // Same-origin proxy from next.config.ts, so ad blockers that filter
    // *.posthog.com don't silently drop the traffic.
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-08-30",
    // The site has no login, so every visitor is anonymous. "always" still
    // builds a person profile for them, which is what makes the Visitors list
    // and per-person event history usable.
    person_profiles: "always",
    loaded: (ph) => {
      // One PostHog project serves every Navar Labs app. This property is how
      // the portfolio's dashboard filters its own traffic out of the rest.
      ph.register({ app: "portfolio" });
      if (clientEnv.posthogDebug) {
        ph.debug();
      }
    },
  });
}
