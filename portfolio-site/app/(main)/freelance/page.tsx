import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageClose } from "@/components/page-close";
import { Row, Rows, Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cta } from "@/lib/analytics";
import { buildHireMeMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Freelance DevOps & Platform Engineering",
  description:
    "Hire David Navarro for freelance and contract DevOps / Platform Engineering work. AWS architecture and cost, Terraform and IaC, CI/CD pipelines, Kubernetes ops, platform reliability and security, and internal tooling. Remote, US East hours, bilingual EN / ES. 2 to 12 week engagements, hourly or fixed scope.",
  alternates: { canonical: "/freelance" },
};

const services = [
  {
    title: "AWS architecture and cost",
    body: "A greenfield account set up properly, or an audit of the one you have. Multi-account organisations, networking, IAM, and cost cuts that survive the next quarter.",
  },
  {
    title: "Terraform and infrastructure as code",
    body: "Move click-ops into Terraform, with module and state structure a small team can operate safely. Plan on pull request, apply on merge.",
  },
  {
    title: "CI/CD pipelines",
    body: "CircleCI, Jenkins or GitHub Actions tuned for deploys that are fast and boring. Blue/green, canary, and ephemeral environments per pull request.",
  },
  {
    title: "Kubernetes and containers",
    body: "EKS and GKE clusters with the Helm and Argo plumbing around them. Workloads that scale and recover without paging anyone at 3am.",
  },
  {
    title: "Reliability and security",
    body: "Observability in Datadog, an on-call rotation people can live with, an incident process, and a security baseline you can defend in an audit.",
  },
  {
    title: "Internal tooling",
    body: "The small Next.js and Node services, dashboards and bots that unblock your team. The ops tools nobody has time to build.",
  },
];

const howIWork = [
  {
    title: "Async first",
    body: "A weekly written update and a shared channel. It works across time zones and it leaves a paper trail you can read later.",
  },
  {
    title: "Remote, English or Spanish",
    body: "US East hours by default, from Charlotte, NC. Bilingual, so a Spanish-speaking team is no friction.",
  },
  {
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

export default function FreelancePage() {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
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
          <Rows>
            {services.map((s) => (
              <Row key={s.title} lead={s.title}>
                {s.body}
              </Row>
            ))}
          </Rows>
        </Section>

        <Section
          id="how-i-work"
          heading="How I work."
          lede="The parts people usually find out too late."
        >
          <Rows>
            {howIWork.map((h) => (
              <Row key={h.title} lead={h.title}>
                {h.body}
              </Row>
            ))}
          </Rows>
        </Section>

        {/* The one dark block on this page */}
        <section
          aria-labelledby="process"
          className="mt-20 overflow-hidden rounded-xl bg-foreground p-8 text-background sm:mt-24 sm:p-14"
        >
          <h2
            id="process"
            className="max-w-lg text-balance font-display text-3xl leading-tight sm:text-4xl"
          >
            How an engagement runs.
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-x-14 gap-y-8 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span
                  aria-hidden
                  className="font-display text-3xl leading-none text-mark"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/75">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <PageClose
          heading="Need a hand with platform work?"
          body="The button opens an email draft with the questions I would ask anyway: company, scope, timeline, stack. Five minutes to send."
          cta="Start a conversation"
        />
      </div>
    </main>
  );
}
