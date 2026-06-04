import type { Metadata } from "next";

import { ContactCTAs } from "@/components/contact-ctas";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skillGroups, workProjects } from "@/content/skills";

export const metadata: Metadata = {
  title: "Skills & Work Projects",
  description:
    "Technical skill set and a deeper look at the platform projects David Navarro has shipped at Agero and Blue Apron.",
};

export default function SkillsPage() {
  return (
    <main className="px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl space-y-16">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Skills
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What I work with, and what I&rsquo;ve shipped with it.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Grouped by area, with a line on where each one actually shows up
            in my work. Below that, a handful of projects from my time at
            Agero and Blue Apron that earned most of these skills in the
            first place.
          </p>
        </header>

        <section aria-labelledby="skills">
          <h2 id="skills" className="text-xl font-semibold tracking-tight">
            Skill set
          </h2>
          <Separator className="mt-3 mb-8" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {group.category}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {group.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge variant="secondary" className="font-normal">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="work-projects">
          <h2
            id="work-projects"
            className="text-xl font-semibold tracking-tight"
          >
            Work projects
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A handful of projects from my employment history, kept short on
            purpose. Happy to walk through any of them in a call.
          </p>
          <Separator className="mt-3 mb-8" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {workProjects.map((p) => (
              <Card key={p.title} className="flex h-full flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {p.employer}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {p.summary}
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2">
                        <span
                          aria-hidden
                          className="mt-2 inline-block size-1 shrink-0 rounded-full bg-muted-foreground/60"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="outline" className="font-normal">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border/60 bg-muted/30 p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Want the long version?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The résumé has dates, scopes, and outcomes formatted for ATS.
          </p>
          <ContactCTAs className="mt-4" />
        </section>
      </div>
    </main>
  );
}
