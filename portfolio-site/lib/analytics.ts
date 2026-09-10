// Named events, on top of what PostHog captures automatically.
//
// Autocapture already records every click. These names exist so the dashboard
// reads like a sentence instead of a pile of CSS selectors, and so renaming a
// button doesn't break a chart.
//
// This module is import-safe from a server component: it holds types and a
// helper that returns HTML attributes. The capture itself happens in
// components/cta-tracker.tsx, which reads those attributes off the click.

/** The actions worth naming. Everything else is left to autocapture. */
export type CtaName =
  | "hire_me"
  | "resume"
  | "email"
  | "linkedin"
  | "github"
  | "workflow_audit"
  | "door_full_time"
  | "door_contract"
  | "door_automation"
  | "project_demo"
  | "project_source"
  | "project_access"
  | "cert_verify";

/**
 * Where on the page the click happened. Free-form on purpose, but keep it
 * snake_case and stable: the dashboard breaks `cta_clicked` down by it.
 */
export type CtaLocation = string;

export const CTA_ATTR = "data-ph-cta";
export const CTA_LOCATION_ATTR = "data-ph-location";

/**
 * Spread onto any <a> or <button> to have it tracked as `cta_clicked`:
 *
 *   <a href={mailto} {...cta("hire_me", "header")}>Hire me</a>
 *
 * Works in server components. No "use client" needed at the call site.
 */
export function cta(name: CtaName, location: CtaLocation) {
  return {
    [CTA_ATTR]: name,
    [CTA_LOCATION_ATTR]: location,
  };
}
