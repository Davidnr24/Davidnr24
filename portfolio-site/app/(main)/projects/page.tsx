import type { Metadata } from "next";

import { PageClose } from "@/components/page-close";
import { ProjectCard } from "@/components/project-card";
import { Rows } from "@/components/section";
import { personalProjects } from "@/content/personal-projects";

export const metadata: Metadata = {
  title: "Personal Projects",
  description:
    "Side projects David Navarro has built outside of work: Squadra (Next.js + Supabase), Astra DevOps (Internal Developer Platform for AWS), Xtock, Stylistic, and Generational Pictures. Full-stack, mobile, ML, and DevOps tooling.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <header>
          <h1 className="max-w-3xl text-balance font-display text-[2.6rem] leading-[1.03] tracking-[-0.02em] sm:text-5xl">
            Things I&rsquo;ve built for fun, for friends, or to learn
            something.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Production apps, experiments, and older work. Between them they
            cover most of what I touch: full-stack web, mobile, machine
            learning, and DevOps tooling.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Most repos are private. Each one below has either a live demo or a
            request access button that opens an email draft. Fill it in and
            I&rsquo;ll grant read access when I can.
          </p>
        </header>

        <div className="mt-16 border-t border-border pt-10">
          <Rows>
            {personalProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </Rows>
        </div>

        <PageClose
          heading="Want to talk through any of these?"
          body="Happy to walk through the architecture, the trade-offs, or the messy parts that never made it into the description."
        />
      </div>
    </main>
  );
}
