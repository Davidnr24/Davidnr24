
import { Row, Rows, Section } from "@/components/section";
import { skillGroups, workProjects } from "@/content/skills";

export function SkillsBody({ children }: { children?: React.ReactNode }) {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <header>
          <h1 className="max-w-3xl text-balance font-display text-[2.6rem] leading-[1.03] tracking-[-0.02em] sm:text-5xl">
            What I work with, and what I&rsquo;ve shipped with it.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Grouped by area, with a line on where each one actually shows up in
            the work. Below that, the projects at Agero and Blue Apron that
            earned most of these in the first place.
          </p>
        </header>

        <Section id="skills" heading="Skill set.">
          <Rows>
            {skillGroups.map((group) => (
              <Row key={group.category} lead={group.category}>
                <p>{group.summary}</p>
                <p className="mt-2 text-sm text-muted-foreground/80">
                  {group.items.join(" · ")}
                </p>
              </Row>
            ))}
          </Rows>
        </Section>

        <Section
          id="work-projects"
          heading="Work projects."
          lede="Kept short on purpose. Happy to walk through any of them on a call."
        >
          <Rows>
            {workProjects.map((p) => (
              <Row key={p.title} lead={p.title} aside={p.employer}>
                <p className="text-foreground/90">{p.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 inline-block size-1.5 shrink-0 bg-mark"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted-foreground/80">
                  {p.stack.join(" · ")}
                </p>
              </Row>
            ))}
          </Rows>
        </Section>

        {children}
      </div>
    </main>
  );
}
