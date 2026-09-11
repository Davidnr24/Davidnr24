import { Section } from "@/components/section";
import { ToolList } from "@/components/tool-list";
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
            Grouped by area. Below that, the projects at Agero and Blue Apron
            that earned most of it.
          </p>
        </header>

        <Section id="skills" heading="Skill set.">
          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-base font-semibold tracking-tight">
                  {group.category}
                </h3>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                  {group.summary}
                </p>
                <div className="mt-4">
                  <ToolList items={group.items} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="work-projects"
          heading="Work projects."
          lede="Kept short on purpose. Happy to walk through any of them on a call."
        >
          <ol className="divide-y divide-border/70">
            {workProjects.map((p) => (
              <li key={p.title} className="py-8 first:pt-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-display text-2xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="shrink-0 text-sm text-muted-foreground">
                    {p.employer}
                  </p>
                </div>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground/90">
                  {p.summary}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
                <div className="mt-5">
                  <ToolList items={p.stack} />
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {children}
      </div>
    </main>
  );
}
