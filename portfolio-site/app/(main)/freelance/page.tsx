import type { Metadata } from "next";
import { Clock, Globe2, MapPin, Sparkles } from "lucide-react";

import { ContactCTAs } from "@/components/contact-ctas";
import { FreelanceServices } from "@/components/freelance-services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Freelance DevOps & Platform Engineering",
  description:
    "Hire David Navarro for freelance and contract DevOps / Platform Engineering work. AWS architecture and cost, Terraform and IaC, CI/CD pipelines, Kubernetes ops, platform reliability and security, and internal tooling. Remote, US East hours, bilingual EN / ES. 2 to 12 week engagements, hourly or fixed scope.",
  alternates: { canonical: "/freelance" },
};

const engagementHighlights = [
  {
    icon: Clock,
    label: "Async-first",
    body: "Weekly written updates and a shared channel. Works across time zones.",
  },
  {
    icon: Globe2,
    label: "Remote, EN / ES",
    body: "US East hours by default. Bilingual English / Spanish.",
  },
  {
    icon: Sparkles,
    label: "Senior-only",
    body: "I work the engagement myself. No juniors handed the keys.",
  },
];

const steps = [
  {
    n: "01",
    title: "30-min intro call",
    body: "You explain the problem, I tell you whether I'm the right fit. No charge.",
  },
  {
    n: "02",
    title: "Written scope",
    body: "One page covering deliverables, timeline, and pricing (hourly or fixed).",
  },
  {
    n: "03",
    title: "The work",
    body: "Async with a shared channel and a weekly written update. Demos when it helps.",
  },
  {
    n: "04",
    title: "Handoff",
    body: "Docs, runbooks, and a walkthrough so your team owns it after I'm gone.",
  },
];

export default function FreelancePage() {
  return (
    <main className="px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl space-y-20">
        <header className="relative space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for contract work
          </div>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Senior DevOps,{" "}
              <span className="text-muted-foreground">on a contract basis.</span>
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Short-term and project-based engagements for startups and small
              teams that need a Senior DevOps / Platform Engineer, without
              making the hire yet. AWS, Kubernetes, Terraform, CI/CD, and the
              internal tooling that holds it all together.
            </p>
          </div>

          <ContactCTAs size="lg" />

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden />
              Remote from {site.location}
            </span>
            <span aria-hidden>·</span>
            <span>Hourly or fixed-scope</span>
            <span aria-hidden>·</span>
            <span>2-12 week engagements</span>
          </div>
        </header>

        <section aria-labelledby="services" className="space-y-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Services
              </p>
              <h2
                id="services"
                className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                What I can build for you
              </h2>
            </div>
          </div>
          <FreelanceServices />
        </section>

        <section aria-labelledby="engagement" className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Engagement
            </p>
            <h2
              id="engagement"
              className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              How I work
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {engagementHighlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
                >
                  <div className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-muted/60 transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Icon className="size-4" aria-hidden />
                  </div>
                  <p className="mt-3 text-sm font-semibold tracking-tight">
                    {h.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {h.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="how-it-works" className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Process
            </p>
            <h2
              id="how-it-works"
              className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              How it works
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {steps.map((s) => (
              <li
                key={s.n}
                className="group relative rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    {s.n}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="engagements"
          className="rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center"
        >
          <h2
            id="engagements"
            className="text-base font-semibold tracking-tight"
          >
            No public engagements listed yet
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            As I take on freelance work, projects (with each client&rsquo;s
            permission) will show up here.
          </p>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-foreground/[0.06]"
          />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Need a hand with platform work?
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                The Hire me button drops you straight into an email draft with
                the right questions already there: company, scope, timeline,
                stack. Five minutes to send.
              </p>
            </div>
            <ContactCTAs size="lg" className="shrink-0" />
          </div>
        </section>
      </div>
    </main>
  );
}
