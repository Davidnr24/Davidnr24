
import { ProjectCard } from "@/components/project-card";
import { Rows } from "@/components/section";
import { personalProjects } from "@/content/personal-projects";

export function ProjectsBody({ children }: { children?: React.ReactNode }) {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <header>
          <h1 className="max-w-4xl text-balance font-display text-[2.8rem] leading-[0.98] tracking-[-0.02em] sm:text-6xl">
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

        {children}
      </div>
    </main>
  );
}
