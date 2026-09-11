import { ArrowRight } from "lucide-react";

import { MarkerUnderline } from "@/components/marker-underline";
import { ProfileAvatar } from "@/components/profile-avatar";
import { buttonVariants } from "@/components/ui/button";
import { cta } from "@/lib/analytics";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export type AutomationLandingContent = {
  /** BCP 47 tag stamped on <main> so screen readers switch language. */
  lang: string;
  hero: {
    /** Headline pieces; `marked` gets the hand-drawn orange underline. */
    h1Before: string;
    h1Marked: string;
    h1After: string;
    subhead: string;
    cta: string;
    /** Three short words under the button, joined by orange slashes. */
    micro: [string, string, string];
  };
  mailto: {
    subject: string;
    bodyLines: string[];
  };
  services: {
    heading: string;
    items: { title: string; body: string }[];
  };
  how: {
    heading: string;
    lede: string;
    steps: { title: string; body: string }[];
  };
  caseStudy: {
    label: string;
    name: string;
    story: string;
    metrics: { value: string; label: string }[];
  };
  testimonial: {
    srHeading: string;
    quote: string;
    name: string;
  };
  pricing: {
    heading: string;
    items: { title: string; body: string }[];
  };
  about: {
    heading: string;
    body: string;
  };
  finalCta: {
    heading: string;
    body: string;
    cta: string;
    note: string;
  };
};

const AUDIT_EMAIL = site.email;

function buildAuditMailto(subject: string, bodyLines: string[]): string {
  return `mailto:${AUDIT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

export function AutomationLanding({
  content,
}: {
  content: AutomationLandingContent;
}) {
  const auditMailto = buildAuditMailto(
    content.mailto.subject,
    content.mailto.bodyLines
  );

  return (
    <main lang={content.lang} className="flex-1 px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        {/* Hero. No label above the headline, on purpose. See DESIGN.md. */}
        <header>
          <h1 className="max-w-3xl text-balance font-display text-[2.9rem] leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-7xl">
            {content.hero.h1Before}{" "}
            <span className="relative inline-block whitespace-nowrap">
              {content.hero.h1Marked}
              <MarkerUnderline />
            </span>{" "}
            {content.hero.h1After}
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {content.hero.subhead}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={auditMailto}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-mark px-6 text-mark-ink hover:bg-mark-hover sm:w-auto"
              )}
              {...cta("workflow_audit", "automation_hero")}
            >
              {content.hero.cta}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <p className="text-sm text-muted-foreground">
              {content.hero.micro[0]}{" "}
              <span className="text-mark-text">/</span>{" "}
              {content.hero.micro[1]} <span className="text-mark-text">/</span>{" "}
              {content.hero.micro[2]}
            </p>
          </div>
        </header>

        {/* What I do */}
        <section
          aria-labelledby="services"
          className="mt-24 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-border pt-12 sm:mt-28 sm:grid-cols-[1fr_2fr]"
        >
          <h2
            id="services"
            className="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-4xl"
          >
            {content.services.heading}
          </h2>
          <ul className="divide-y divide-border/70">
            {content.services.items.map((s) => (
              <li key={s.title} className="py-6 first:pt-0">
                <h3 className="text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="how"
          className="mt-20 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-border pt-12 sm:mt-24 sm:grid-cols-[1fr_2fr]"
        >
          <div>
            <h2
              id="how"
              className="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-4xl"
            >
              {content.how.heading}
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {content.how.lede}
            </p>
          </div>
          <ol className="divide-y divide-border/70">
            {content.how.steps.map((s, i) => (
              <li key={s.title} className="flex gap-6 py-6 first:pt-0 sm:gap-8">
                <span
                  aria-hidden
                  className="font-display text-3xl leading-none text-mark-text sm:text-4xl"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Case study: the one dark block on the page */}
        <section
          aria-labelledby="case-study"
          className="mt-20 overflow-hidden rounded-xl bg-foreground text-background sm:mt-24"
        >
          <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-[3fr_2fr] sm:gap-14 sm:p-14">
            <div>
              <h2
                id="case-study"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                {content.caseStudy.name}
              </h2>
              <p className="mt-2 text-sm text-background/60">
                {content.caseStudy.label}
              </p>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-background/80">
                {content.caseStudy.story}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-8 border-t border-background/15 pt-8 sm:border-l sm:border-t-0 sm:pl-14 sm:pt-0">
              {content.caseStudy.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-4xl font-semibold tracking-tight text-mark sm:text-5xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm text-background/70">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section aria-labelledby="testimonial" className="mt-20 sm:mt-24">
          <h2 id="testimonial" className="sr-only">
            {content.testimonial.srHeading}
          </h2>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="text-balance font-display text-2xl leading-snug sm:text-3xl">
              &ldquo;{content.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              {content.testimonial.name}
            </figcaption>
          </figure>
        </section>

        {/* What it costs */}
        <section
          aria-labelledby="pricing"
          className="mt-20 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-border pt-12 sm:mt-24 sm:grid-cols-[1fr_2fr]"
        >
          <h2
            id="pricing"
            className="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-4xl"
          >
            {content.pricing.heading}
          </h2>
          <ul className="divide-y divide-border/70">
            {content.pricing.items.map((p) => (
              <li key={p.title} className="py-6 first:pt-0">
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section
          aria-labelledby="about"
          className="mt-20 flex flex-col items-start gap-8 border-t border-border pt-12 sm:mt-24 sm:flex-row sm:items-center sm:gap-12"
        >
          <div className="relative shrink-0">
            <span
              aria-hidden
              className="absolute -right-2 -top-2 size-full rounded-xl bg-mark-soft"
            />
            <ProfileAvatar
              src="/profile.png"
              className="relative size-24 rounded-xl sm:size-28"
            />
          </div>
          <div>
            <h2
              id="about"
              className="font-display text-2xl leading-tight sm:text-3xl"
            >
              {content.about.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {content.about.body}
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 rounded-xl bg-mark p-8 text-mark-ink sm:mt-24 sm:p-14">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="max-w-lg text-balance font-display text-3xl leading-tight sm:text-4xl">
                {content.finalCta.heading}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-mark-ink/80">
                {content.finalCta.body}
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={auditMailto}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-foreground px-6 text-background hover:bg-foreground/85 sm:w-auto"
                )}
                {...cta("workflow_audit", "automation_close")}
              >
                {content.finalCta.cta}
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <p className="mt-3 text-sm text-mark-ink/70 sm:text-right">
                {content.finalCta.note}
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </div>
    </main>
  );
}
