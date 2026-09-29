"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

import { CTA_ATTR, CTA_LOCATION_ATTR } from "@/lib/analytics";
import { posthogEnabled } from "@/lib/env";

/**
 * One delegated click listener for the whole site. Any element carrying the
 * attributes from `cta()` in lib/analytics.ts fires a `cta_clicked` event.
 *
 * Delegation rather than an onClick per button: it keeps every page and CTA a
 * server component, and adding tracking to a new link is one spread, not a
 * "use client" conversion.
 */
export function CtaTracker() {
  useEffect(() => {
    if (!posthogEnabled) return;

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const el = target.closest(`[${CTA_ATTR}]`);
      if (!el) return;

      const name = el.getAttribute(CTA_ATTR);
      if (!name) return;

      posthog.capture("cta_clicked", {
        cta: name,
        location: el.getAttribute(CTA_LOCATION_ATTR) ?? "unknown",
        href: el.getAttribute("href") ?? undefined,
        label: el.textContent?.trim().slice(0, 80) || undefined,
      });
    }

    // Capture phase, so the event is recorded even if something downstream
    // stops propagation before it reaches the document.
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
