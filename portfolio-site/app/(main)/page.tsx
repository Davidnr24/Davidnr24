import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { HeroIntro } from "@/components/hero-intro";
import { PageClose } from "@/components/page-close";
import { ProfileAvatar } from "@/components/profile-avatar";
import { Rows, Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cta, type CtaName } from "@/lib/analytics";
import { buildHireMeMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

const doors: {
  title: string;
  body: string;
  href: string;
  label: string;
  event: CtaName;
}[] = [
  {
    title: "Hire me full time",
    body: "Senior DevOps or Platform Engineer, remote from Charlotte, NC. I'm on the platform team at Agero today and open to the right next role.",
    href: buildHireMeMailto(),
    label: "Email me",
    event: "door_full_time",
  },
  {
    title: "Contract DevOps work",
    body: "Two to twelve week engagements for startups and small teams: AWS, Terraform, CI/CD, Kubernetes, and the tooling around them.",
    href: "/freelance",
    label: "How I work",
    event: "door_contract",
  },
  {
    title: "Automation for small businesses",
    body: "For online coaches and other small businesses: I automate the repetitive work around clients with AI, and cut down the pile of tools it runs on. The consultation is free.",
    href: "/automation",
    label: "Read the case study",
    event: "door_automation",
  },
];

const numbers = [
  { value: "40%", label: "faster deploys after rebuilding the CI/CD pipelines for ECS apps at Agero" },
  { value: "85%", label: "fewer critical vulnerabilities after hardening images and dependencies" },
  { value: "99.997%", label: "platform availability with shift-left QA and test automation" },
];

const moreNumbers = [
  "30+ hours of manual ops work a month removed with Bash and Python automation.",
  "Mean time to detect cut in half with Datadog monitoring and alerting.",
  "A custom CircleCI Orb replaced a third-party deploy product across the org.",
  "AWS costs down 20% at Blue Apron with Terraform across accounts.",
  "100+ security findings from Wiz resolved across app code and third parties.",
];

const elsewhere = [
  { label: "Career", detail: "Agero, Blue Apron, and how I got here", href: "/career", external: false },
  { label: "Skills", detail: "What I work with and what I shipped with it", href: "/skills", external: false },
  { label: "Projects", detail: "Side projects, some in production", href: "/projects", external: false },
  { label: "Personal", detail: "Spain, Charlotte, football, chess, a Camaro", href: "/personal", external: false },
  { label: "LinkedIn", detail: "linkedin.com/in/david-navarror", href: site.linkedin, external: true, event: "linkedin" as CtaName },
  { label: "GitHub", detail: "github.com/Davidnr24", href: site.github, external: true, event: "github" as CtaName },
];

export default function Home() {
  return (
    <main className="px-6 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <header className="flex flex-col-reverse gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-8">
            <HeroIntro />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={buildHireMeMailto()}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-mark px-5 text-mark-ink hover:bg-mark-hover sm:w-auto"
                )}
                {...cta("hire_me", "home_hero")}
              >
                Hire me
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <Link
                href={site.resumeHref}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto"
                )}
                {...cta("resume", "home_hero")}
              >
                Résumé (PDF)
              </Link>
              <p className="text-sm text-muted-foreground">
                AWS Solutions Architect{" "}
                <span className="text-mark-text">/</span> CKA{" "}
                <span className="text-mark-text">/</span> Terraform Associate
              </p>
            </div>
          </div>
          <div className="relative shrink-0 self-start sm:self-end">
            <span
              aria-hidden
              className="absolute -right-2 -top-2 size-full rounded-xl bg-mark-soft"
            />
            <ProfileAvatar
              src="/profile.png"
              className="relative size-28 rounded-xl sm:size-36"
            />
          </div>
        </header>

        <Section id="doors" heading="Three ways to work with me.">
          <Rows>
            {doors.map((d) => (
              <li key={d.title} className="py-5 first:pt-0">
                <h3 className="text-base font-semibold tracking-tight">
                  {d.title}
                </h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {d.body}
                </p>
                <Link
                  href={d.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-mark-text underline-offset-4 hover:underline"
                  {...cta(d.event, "home_doors")}
                >
                  {d.label}
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </Rows>
        </Section>

        <Section
          id="now"
          heading="Now."
          lede="What the day job looks like this year."
        >
          <div className="max-w-xl space-y-4 text-base leading-relaxed sm:text-lg">
            <p>
              Senior DevOps / Platform Engineer at Agero, remote. I own the
              CI/CD side of the platform: a CircleCI Orb every team deploys
              through, ephemeral environments spun up per pull request, and the
              Datadog monitoring behind it.
            </p>
            <p>
              Before that, two years of SRE at Blue Apron on EKS, Terraform, and
              Jenkins, with an on-call rotation and a lot of Helm charts.
            </p>
          </div>
        </Section>

        {/* The one dark block on the page */}
        <section
          aria-labelledby="numbers"
          className="mt-20 overflow-hidden rounded-xl bg-foreground text-background sm:mt-24"
        >
          <div className="grid grid-cols-1 gap-10 p-7 sm:grid-cols-[2fr_3fr] sm:gap-14 sm:p-12">
            <div>
              <h2
                id="numbers"
                className="mt-2 font-display text-3xl leading-tight sm:text-4xl"
              >
                What changed because I was there.
              </h2>
              <ul className="mt-6 space-y-3">
                {moreNumbers.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-3 text-sm leading-relaxed text-background/75"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block size-1.5 shrink-0 bg-mark"
                    />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-8 border-t border-background/15 pt-8 sm:border-l sm:border-t-0 sm:pl-12 sm:pt-0">
              {numbers.map((m) => (
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

        <Section id="elsewhere" heading="Elsewhere.">
          <Rows>
            {elsewhere.map((e) => {
              const inner = (
                <>
                  <span className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="w-24 shrink-0 text-base font-semibold tracking-tight">
                      {e.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {e.detail}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-mark-text"
                    aria-hidden
                  />
                </>
              );
              const className =
                "group flex items-center justify-between gap-4 py-4 first:pt-0";
              return (
                <li key={e.label}>
                  {e.external ? (
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                      {...(e.event ? cta(e.event, "home_elsewhere") : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link href={e.href} className={className}>
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </Rows>
        </Section>

        <PageClose
          heading="Hiring, or need a hand with platform work?"
          body="The button opens an email draft with the right questions already in it: company, scope, timeline, stack. Five minutes to send."
        />
      </div>
    </main>
  );
}
