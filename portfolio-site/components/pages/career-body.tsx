import { ExternalLink } from "lucide-react";

import { CompanyLink } from "@/components/company-link";
import { Row, Rows, Section } from "@/components/section";
import { cta } from "@/lib/analytics";
import { jobs, education, certifications } from "@/content/career";

export function CareerBody({ children }: { children?: React.ReactNode }) {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <header>
          <h1 className="max-w-4xl text-balance font-display text-[2.8rem] leading-[0.98] tracking-[-0.02em] sm:text-6xl">
            Five years building platforms that don&rsquo;t go down.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            From a DevOps internship in Madrid to senior platform engineering
            at Agero. The path, and what I shipped along the way.
          </p>
        </header>

        <Section id="experience" heading="Experience.">
          <ol className="divide-y divide-border/70">
            {jobs.map((job) => (
              <li key={`${job.company}-${job.start}`} className="py-8 first:pt-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-display text-2xl leading-tight">
                    {job.role}
                  </h3>
                  <p className="shrink-0 text-sm text-muted-foreground">
                    {job.start} to {job.current ? "now" : job.end}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-foreground/90">
                  <CompanyLink
                    name={job.company}
                    url={job.url}
                    logo={job.logo}
                  />
                  <span className="text-mark-text">/</span>
                  <span className="text-muted-foreground">{job.location}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 inline-block size-1.5 shrink-0 bg-mark"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="certs" heading="Certifications.">
          <Rows>
            {certifications.map((c) => (
              <Row key={c.name} lead={c.name} aside={c.date}>
                <p>
                  {c.issuer} <span className="text-mark-text">/</span>{" "}
                  {c.validity}
                </p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-mark-text underline-offset-4 hover:underline"
                  {...cta("cert_verify", c.name)}
                >
                  Verify on Credly
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </Row>
            ))}
          </Rows>
        </Section>

        <Section id="education" heading="Education.">
          <Rows>
            {education.map((e) => (
              <Row
                key={e.school}
                lead={e.degree}
                aside={`${e.start} to ${e.end}`}
              >
                <CompanyLink name={e.school} url={e.url} />{" "}
                <span className="text-mark-text">/</span> {e.location}
                {e.detail ? (
                  <>
                    {" "}
                    <span className="text-mark-text">/</span> {e.detail}
                  </>
                ) : null}
              </Row>
            ))}
          </Rows>
        </Section>

        {children}
      </div>
    </main>
  );
}
