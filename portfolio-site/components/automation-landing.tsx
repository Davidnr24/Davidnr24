import {
  ArrowRight,
  BadgeCheck,
  BellOff,
  ClipboardList,
  Coffee,
  Dumbbell,
  Hammer,
  MessagesSquare,
  Receipt,
  ShieldCheck,
  Stamp,
  StickyNote,
} from "lucide-react";

import { cta } from "@/lib/analytics";
import { MarkerUnderline } from "@/components/marker-underline";
import { ProfileAvatar } from "@/components/profile-avatar";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export type AutomationLandingContent = {
  /** BCP 47 tag stamped on <main> so screen readers switch language. */
  lang: string;
  topRule: string;
  hero: {
    /** Headline pieces; `marked` gets the hand-drawn orange underline. */
    h1Before: string;
    h1Marked: string;
    h1After: string;
    subhead: string;
    cta: string;
    /** Three short mono words joined by orange slashes. */
    micro: [string, string, string];
  };
  mailto: {
    subject: string;
    bodyLines: string[];
  };
  pain: {
    heading: string;
    items: { title: string; body: string }[];
  };
  how: {
    heading: string;
    steps: { title: string; body: string }[];
  };
  caseStudy: {
    eyebrow: string;
    name: string;
    story: string;
    flow: string[];
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
  };
};

const AUDIT_EMAIL = site.email;

const painIcons = [Coffee, StickyNote, BellOff];
const stepIcons = [MessagesSquare, Hammer, Stamp];
const flowIcons = [ClipboardList, ShieldCheck, Dumbbell];
const pricingIcons = [Receipt, BadgeCheck, Hammer];

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
    <main
      lang={content.lang}
      className="flex-1 px-6 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Standalone top rule */}
        <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span
            aria-hidden
            className="inline-block size-2 bg-(--mark)"
          />
          {content.topRule}
        </p>

        {/* Hero */}
        <header className="mt-14 sm:mt-20">
          <h1 className="max-w-3xl text-balance text-[2.6rem]/[1.05] font-semibold tracking-tight sm:text-6xl/[1.05]">
            {content.hero.h1Before}{" "}
            <span className="relative inline-block whitespace-nowrap">
              {content.hero.h1Marked}
              <MarkerUnderline />
            </span>{" "}
            {content.hero.h1After}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.hero.subhead}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={auditMailto}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-(--mark) px-5 text-(--mark-ink) hover:bg-(--mark-hover) sm:w-auto"
              )}
              {...cta("workflow_audit", "automation_hero")}
            >
              {content.hero.cta}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <p className="font-mono text-xs text-muted-foreground">
              {content.hero.micro[0]}{" "}
              <span className="text-(--mark-text)">/</span>{" "}
              {content.hero.micro[1]}{" "}
              <span className="text-(--mark-text)">/</span>{" "}
              {content.hero.micro[2]}
            </p>
          </div>
        </header>

        {/* Pain */}
        <section
          aria-labelledby="pain"
          className="mt-24 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-border pt-10 sm:mt-28 sm:grid-cols-[1fr_2fr]"
        >
          <div>
            <p className="font-mono text-xs text-(--mark-text)">(01)</p>
            <h2
              id="pain"
              className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {content.pain.heading}
            </h2>
          </div>
          <ul>
            {content.pain.items.map((p, i) => {
              const Icon = painIcons[i];
              return (
                <li
                  key={p.title}
                  className={cn(
                    "flex gap-4 py-5 sm:gap-6",
                    i > 0 && "border-t border-border/70"
                  )}
                >
                  <Icon
                    className="mt-1 size-5 shrink-0 text-(--mark-text)"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {p.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="how"
          className="mt-20 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-border pt-10 sm:mt-24 sm:grid-cols-[1fr_2fr]"
        >
          <div>
            <p className="font-mono text-xs text-(--mark-text)">(02)</p>
            <h2
              id="how"
              className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {content.how.heading}
            </h2>
          </div>
          <ol className="relative ml-4 border-l border-(--mark-border) sm:ml-5">
            {content.how.steps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <li
                  key={s.title}
                  className="relative pb-10 pl-8 last:pb-1 sm:pl-10"
                >
                  <span
                    aria-hidden
                    className="absolute -left-4 top-0 inline-flex size-8 items-center justify-center rounded-full bg-(--mark) font-mono text-xs font-semibold text-(--mark-ink) sm:-left-4.5 sm:size-9"
                  >
                    {i + 1}
                  </span>
                  <h3 className="flex items-center gap-2 text-base font-semibold tracking-tight">
                    {s.title}
                    <Icon
                      className="size-4 text-(--mark-text)"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Case study: the one dark, editorial moment on the page */}
        <section
          aria-labelledby="case-study"
          className="mt-20 overflow-hidden rounded-xl bg-foreground text-background sm:mt-24"
        >
          <div className="grid grid-cols-1 gap-10 p-7 sm:grid-cols-[3fr_2fr] sm:gap-14 sm:p-12">
            <div>
              <p className="font-mono text-xs text-(--mark)">
                (03) {content.caseStudy.eyebrow}
              </p>
              <h2
                id="case-study"
                className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {content.caseStudy.name}
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-background/70 sm:text-base">
                {content.caseStudy.story}
              </p>
              <ul className="mt-6 space-y-4">
                {content.caseStudy.flow.map((text, i) => {
                  const Icon = flowIcons[i];
                  return (
                    <li key={text} className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 size-4.5 shrink-0 text-(--mark)"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <p className="text-sm leading-relaxed text-background/80 sm:text-base">
                        {text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-8 border-t border-background/15 pt-8 sm:border-l sm:border-t-0 sm:pl-12 sm:pt-0">
              {content.caseStudy.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-4xl font-semibold tracking-tight text-(--mark) sm:text-5xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm text-background/70">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial. Quote comes from the 1 Sept 2026 call with Alfre. */}
        <section aria-labelledby="testimonial" className="mt-20 sm:mt-24">
          <h2 id="testimonial" className="sr-only">
            {content.testimonial.srHeading}
          </h2>
          <figure className="mx-auto max-w-2xl">
            <p
              aria-hidden
              className="font-serif text-7xl leading-none text-(--mark)"
            >
              &ldquo;
            </p>
            <blockquote className="-mt-6 pl-8 font-serif text-xl italic leading-relaxed sm:text-2xl">
              {content.testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 pl-8 font-mono text-xs text-muted-foreground">
              {content.testimonial.name}{" "}
              <span className="text-(--mark-text)">/</span> AlfreHealth
            </figcaption>
          </figure>
        </section>

        {/* Pricing model */}
        <section
          aria-labelledby="pricing"
          className="mt-20 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-border pt-10 sm:mt-24 sm:grid-cols-[1fr_2fr]"
        >
          <div>
            <p className="font-mono text-xs text-(--mark-text)">(04)</p>
            <h2
              id="pricing"
              className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {content.pricing.heading}
            </h2>
          </div>
          <ul>
            {content.pricing.items.map((p, i) => {
              const Icon = pricingIcons[i];
              return (
                <li
                  key={p.title}
                  className={cn(
                    "flex gap-4 py-5 sm:gap-6",
                    i > 0 && "border-t border-border/70"
                  )}
                >
                  <Icon
                    className="mt-1 size-5 shrink-0 text-(--mark-text)"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {p.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* About */}
        <section
          aria-labelledby="about"
          className="mt-20 flex flex-col items-start gap-7 border-t border-border pt-10 sm:mt-24 sm:flex-row sm:items-center sm:gap-10"
        >
          <div className="relative shrink-0">
            <span
              aria-hidden
              className="absolute -right-2 -top-2 size-full rounded-xl bg-(--mark-soft)"
            />
            <ProfileAvatar
              src="/profile.png"
              className="relative size-24 rounded-xl sm:size-28"
            />
          </div>
          <div>
            <p className="font-mono text-xs text-(--mark-text)">(05)</p>
            <h2
              id="about"
              className="mt-2 text-xl font-semibold tracking-tight"
            >
              {content.about.heading}
            </h2>
            <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {content.about.body}
            </p>
          </div>
        </section>

        {/* Final CTA: solid orange band */}
        <section className="mt-20 rounded-xl bg-(--mark) p-7 text-(--mark-ink) sm:mt-24 sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="max-w-md text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {content.finalCta.heading}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-(--mark-ink)/80 sm:text-base">
                {content.finalCta.body}
              </p>
            </div>
            <a
              href={auditMailto}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full shrink-0 bg-foreground px-5 text-background hover:bg-foreground/85 sm:w-auto"
              )}
              {...cta("workflow_audit", "automation_close")}
            >
              {content.finalCta.cta}
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </section>

        <footer className="mt-14 flex items-center justify-between font-mono text-xs text-muted-foreground/70">
          <span>© {new Date().getFullYear()} David Navarro</span>
          <span
            aria-hidden
            className="inline-block size-2 bg-(--mark)"
          />
        </footer>
      </div>
    </main>
  );
}
