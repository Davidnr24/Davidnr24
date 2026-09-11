import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Cloud,
  Globe,
  Handshake,
  MessagesSquare,
  ShieldCheck,
  Workflow,
  Wrench,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

import { PageClose } from "@/components/page-close";
import { IndexRow, IndexRows, Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cta } from "@/lib/analytics";
import { buildHireMeMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Freelance DevOps & Platform Engineering · David Navarro",
  },
  description:
    "Hire David Navarro for contract DevOps and Platform Engineering. AWS architecture and cost, Terraform, CI/CD pipelines, Kubernetes, reliability and internal tooling. Remote, US East hours, bilingual EN / ES. Two to twelve week engagements.",
  alternates: { canonical: "/freelance" },
};

const services: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Cloud,
    title: "AWS architecture and cost",
    body: "A greenfield account set up properly, or an audit of the one you have. Multi-account organisations, networking, IAM, and cost cuts that survive the next quarter.",
  },
  {
    icon: GitBranch,
    title: "Terraform and infrastructure as code",
    body: "Move click-ops into Terraform, with module and state structure a small team can operate safely. Plan on pull request, apply on merge.",
  },
  {
    icon: Workflow,
    title: "CI/CD pipelines",
    body: "CircleCI or GitHub Actions tuned for deploys that are fast and boring. Blue/green, canary, and ephemeral environments per pull request. I can pick up a Jenkins estate too, though I would rather help you leave it.",
  },
  {
    icon: Boxes,
    title: "Kubernetes and containers",
    body: "EKS and GKE clusters with the Helm and Argo plumbing around them. Workloads that scale and recover without paging anyone at 3am.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability and security",
    body: "Observability in Datadog, an on-call rotation people can live with, an incident process, and a security baseline you can defend in an audit.",
  },
  {
    icon: Wrench,
    title: "Internal tooling",
    body: "The small Next.js and Node services, dashboards and bots that unblock your team. The ops tools nobody has time to build.",
  },
];

const metrics = [
  { value: "40%", label: "faster deploys after rebuilding the CI/CD pipelines for ECS services at Agero" },
  { value: "85%", label: "fewer critical vulnerabilities after hardening images and dependencies" },
  { value: "99.997%", label: "platform availability, with shift-left QA and test automation" },
];

const moreMetrics = [
  "30+ hours of manual ops work a month removed with Bash and Python automation.",
  "AWS spend down 20% at Blue Apron by moving cross-account infrastructure to Terraform.",
  "Mean time to detect cut in half with Datadog monitoring and alerting.",
  "A custom CircleCI Orb replaced a paid third-party deploy product across the org.",
];

const howIWork: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MessagesSquare,
    title: "Async first",
    body: "A weekly written update and a shared channel. It works across time zones and leaves a paper trail you can read later.",
  },
  {
    icon: Globe,
    title: "Remote, English or Spanish",
    body: "US East hours by default, from Charlotte, NC. Bilingual, so a Spanish-speaking team is no friction.",
  },
  {
    icon: Handshake,
    title: "You get me, not a bench",
    body: "I do the work myself. Nobody junior gets handed the keys to your production account halfway through.",
  },
];

const steps = [
  {
    title: "Intro call",
    body: "Thirty minutes. You describe the problem, I tell you honestly whether I am the right person for it. No charge.",
  },
  {
    title: "Written scope",
    body: "One page: deliverables, timeline, and price, hourly or fixed. You know what you are buying before anything starts.",
  },
  {
    title: "The work",
    body: "Async, in a shared channel, with a written update every week and a demo when a demo helps more than a paragraph.",
  },
  {
    title: "Handoff",
    body: "Docs, runbooks, and a walkthrough, so your team owns it after I am gone. No lock-in to me.",
  },
];

export default function FreelanceHome() {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <header>
          <h1 className="max-w-3xl text-balance font-display text-[2.8rem] leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            Senior DevOps, on a contract basis.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Short engagements for startups and small teams that need a senior
            platform engineer without making the hire yet. AWS, Kubernetes,
            Terraform, CI/CD, and the tooling that holds it together.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={buildHireMeMailto("a contract engagement")}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-mark px-6 text-mark-ink hover:bg-mark-hover sm:w-auto"
              )}
              {...cta("hire_me", "freelance_hero")}
            >
              Start a conversation
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <Link
              href={site.resumeHref}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto"
              )}
              {...cta("resume", "freelance_hero")}
            >
              Résumé (PDF)
            </Link>
            <p className="text-sm text-muted-foreground">
              Available now <span className="text-mark-text">/</span> 2 to 12
              weeks <span className="text-mark-text">/</span> hourly or fixed
              scope
            </p>
          </div>
        </header>

        <Section id="services" heading="What I can build for you.">
          <IndexRows>
            {services.map((s) => (
              <IndexRow key={s.title} icon={s.icon} title={s.title}>
                {s.body}
              </IndexRow>
            ))}
          </IndexRows>
        </Section>

        {/* The one dark block: numbers, because contract buyers ask for them */}
        <section
          aria-labelledby="results"
          className="mt-20 overflow-hidden rounded-xl bg-foreground text-background sm:mt-24"
        >
          <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-[2fr_3fr] sm:gap-14 sm:p-14">
            <div>
              <h2
                id="results"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                What changed on the last two platforms I ran.
              </h2>
              <ul className="mt-6 space-y-3">
                {moreMetrics.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-3 text-sm leading-relaxed text-background/75"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block size-1.5 shrink-0 bg-mark"
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-8 border-t border-background/15 pt-8 sm:border-l sm:border-t-0 sm:pl-14 sm:pt-0">
              {metrics.map((m) => (
                <div key={m.value}>
                  <p className="font-mono text-4xl font-semibold tracking-tight text-mark sm:text-5xl">
                    {m.value}
                  </p>
                  <p className="mt-1 max-w-sm text-sm text-background/70">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="how-i-work"
          heading="How I work."
          lede="The parts people usually find out too late."
        >
          <IndexRows>
            {howIWork.map((h) => (
              <IndexRow key={h.title} icon={h.icon} title={h.title}>
                {h.body}
              </IndexRow>
            ))}
          </IndexRows>
        </Section>

        <Section id="process" heading="How an engagement runs.">
          <IndexRows>
            {steps.map((s, i) => (
              <IndexRow
                key={s.title}
                mark={
                  <span
                    aria-hidden
                    className="font-display text-4xl leading-none text-mark-text transition-transform group-hover:scale-110"
                  >
                    {i + 1}
                  </span>
                }
                title={s.title}
              >
                {s.body}
              </IndexRow>
            ))}
          </IndexRows>
        </Section>

        <PageClose
          heading="Need a hand with platform work?"
          body="The button opens an email draft with the questions I would ask anyway: company, scope, timeline, stack. Five minutes to send."
          cta="Start a conversation"
          href={buildHireMeMailto("a contract engagement")}
        />
      </div>
    </main>
  );
}
