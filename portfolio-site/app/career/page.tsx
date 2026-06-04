import type { Metadata } from "next";
import { ExternalLink, GraduationCap, Award } from "lucide-react";

import { ContactCTAs } from "@/components/contact-ctas";
import { Separator } from "@/components/ui/separator";
import { jobs, education, certifications } from "@/content/career";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Career history of David Navarro, Senior DevOps / Platform Engineer at Agero, previously Blue Apron. Education and certifications.",
};

export default function CareerPage() {
  return (
    <main className="px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl space-y-16">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Career
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Five years building platforms that don&rsquo;t go down.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            From a DevOps internship in Madrid to Senior Platform Engineering
            at Agero. Here&rsquo;s the path and what I shipped along the way.
          </p>
        </header>

        <section aria-labelledby="experience">
          <h2 id="experience" className="text-xl font-semibold tracking-tight">
            Experience
          </h2>
          <Separator className="mt-3 mb-8" />
          <ol className="space-y-12">
            {jobs.map((job) => (
              <li key={`${job.company}-${job.start}`} className="relative">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {job.role}{" "}
                      <span className="text-muted-foreground">
                        · {job.company}
                      </span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {job.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {job.start} - {job.end}
                    {job.current ? (
                      <span className="ml-2 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        Current
                      </span>
                    ) : null}
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/90">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-2 inline-block size-1 shrink-0 rounded-full bg-muted-foreground/60"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="education">
          <h2
            id="education"
            className="flex items-center gap-2 text-xl font-semibold tracking-tight"
          >
            <GraduationCap className="size-5" aria-hidden />
            Education
          </h2>
          <Separator className="mt-3 mb-6" />
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.school}>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {e.school} · {e.location} · {e.start}-{e.end}
                  {e.detail ? ` · ${e.detail}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="certs">
          <h2
            id="certs"
            className="flex items-center gap-2 text-xl font-semibold tracking-tight"
          >
            <Award className="size-5" aria-hidden />
            Certifications
          </h2>
          <Separator className="mt-3 mb-6" />
          <ul className="space-y-4">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {c.issuer} · {c.date} · {c.validity}
                  </p>
                </div>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Verify on Credly
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-border/60 bg-muted/30 p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Hiring or contracting?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The fastest way to start a conversation.
          </p>
          <ContactCTAs className="mt-4" />
        </section>
      </div>
    </main>
  );
}
