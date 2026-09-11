import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroIntro } from "@/components/hero-intro";
import { ProfileAvatar } from "@/components/profile-avatar";
import { CompanyLink } from "@/components/company-link";
import { Row, Rows, Section } from "@/components/section";
import { StackList } from "@/components/stack-list";
import { buttonVariants } from "@/components/ui/button";
import { jobs } from "@/content/career";
import { site } from "@/content/site";
import { cta } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "David Navarro · Senior DevOps / Platform Engineer",
  },
  description:
    "Senior DevOps / Platform Engineer in Charlotte, NC. Five years on AWS, Kubernetes, Terraform and CI/CD at Blue Apron and Agero. AWS Solutions Architect, CKA and Terraform Associate certified.",
  alternates: { canonical: "/resume" },
};

export default function ResumeHome() {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <header className="flex flex-col-reverse gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-8">
            <HeroIntro />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={site.resumeHref}
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-mark px-6 text-mark-ink hover:bg-mark-hover sm:w-auto"
                )}
                {...cta("resume", "resume_hero")}
              >
                Download résumé
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto"
                )}
                {...cta("email", "resume_hero")}
              >
                Contact me
              </a>
              <p className="text-sm text-muted-foreground">
                AWS Solutions Architect <span className="text-mark-text">/</span>{" "}
                CKA <span className="text-mark-text">/</span> Terraform
                Associate
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

        <Section
          id="stack"
          heading="What I work with."
          lede="And what I've actually done with it."
        >
          <StackList />
        </Section>

        <Section id="where" heading="Where I've worked.">
          <Rows>
            {jobs.slice(0, 3).map((job) => (
              <Row
                key={`${job.company}-${job.start}`}
                lead={job.role}
                aside={`${job.start} to ${job.current ? "now" : job.end}`}
              >
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <CompanyLink
                    name={job.company}
                    url={job.url}
                    logo={job.logo}
                  />
                  <span className="text-mark-text">/</span>
                  <span>{job.location}</span>
                </span>
              </Row>
            ))}
          </Rows>
          <Link
            href="/resume/career"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-mark-text underline-offset-4 hover:underline"
          >
            The full history
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </Section>

        <section className="mt-20 border-t border-border pt-12 sm:mt-24">
          <h2 className="max-w-xl text-balance font-display text-3xl leading-tight sm:text-4xl">
            Happy to talk about a role.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            The résumé has the dates and the detail. If you want the version
            with context, email me and I&rsquo;ll walk you through it.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-mark px-6 text-mark-ink hover:bg-mark-hover sm:w-auto"
              )}
              {...cta("email", "resume_close")}
            >
              Contact me
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <p className="text-sm text-muted-foreground">{site.email}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
