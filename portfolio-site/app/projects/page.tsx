import type { Metadata } from "next";
import { Info } from "lucide-react";

import { ContactCTAs } from "@/components/contact-ctas";
import { ProjectCard } from "@/components/project-card";
import { Separator } from "@/components/ui/separator";
import { personalProjects } from "@/content/personal-projects";

export const metadata: Metadata = {
  title: "Personal Projects",
  description:
    "Side projects David Navarro has built outside of work: Squadra (Next.js + Supabase), Astra DevOps (Internal Developer Platform for AWS), Xtock, Stylistic, and Generational Pictures. Full-stack, mobile, ML, and DevOps tooling.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl space-y-12">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Personal projects
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I&rsquo;ve built for fun, for friends, or to learn something.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            A mix of production apps, R&amp;D experiments, and older work that
            covers most of what I touch: full-stack web, mobile, ML, DevOps
            tooling, and pre-AI-era frontend.
          </p>
        </header>

        <div className="flex items-start gap-2 rounded-md border border-border/60 bg-muted/30 p-4 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <p>
            Most repos are private. Each card has either a live demo or a{" "}
            <span className="font-medium text-foreground">Request access</span>{" "}
            button that pops open an email draft. Fill in your details and
            I&rsquo;ll grant read access when I can.
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {personalProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <section className="rounded-lg border border-border/60 bg-muted/30 p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Want to talk through any of these?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Happy to walk through architecture, trade-offs, or the messy parts.
          </p>
          <ContactCTAs className="mt-4" />
        </section>
      </div>
    </main>
  );
}
