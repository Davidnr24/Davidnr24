import {
  Activity,
  Boxes,
  Cloud,
  Code,
  Database,
  GitBranch,
  Network,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { IndexRow, IndexRows, Section } from "@/components/section";
import { ToolList } from "@/components/tool-list";
import { skillGroups, workProjects } from "@/content/skills";

const GROUP_ICONS: Record<string, LucideIcon> = {
  AWS: Cloud,
  "Infrastructure as Code": GitBranch,
  "Containers & orchestration": Boxes,
  "CI/CD & deployment": Workflow,
  "Observability & reliability": Activity,
  Security: ShieldCheck,
  "Networking & CDN": Network,
  Databases: Database,
  Languages: Code,
  "Web & mobile": Smartphone,
  "AI & ML": Sparkles,
};

export function SkillsBody({ children }: { children?: React.ReactNode }) {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <header>
          <h1 className="max-w-4xl text-balance font-display text-[2.8rem] leading-[0.98] tracking-[-0.02em] sm:text-6xl">
            What I work with, and what I&rsquo;ve shipped with it.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Grouped by area. Below that, the projects at Agero and Blue Apron
            that earned most of it.
          </p>
        </header>

        <Section id="skills" heading="Skill set.">
          <IndexRows>
            {skillGroups.map((group) => (
              <IndexRow
                key={group.category}
                icon={GROUP_ICONS[group.category]}
                title={group.category}
              >
                <p>{group.summary}</p>
                <div className="mt-4">
                  <ToolList items={group.items} />
                </div>
              </IndexRow>
            ))}
          </IndexRows>
        </Section>

        <Section
          id="work-projects"
          heading="Work projects."
          lede="Kept short on purpose. Happy to walk through any of them on a call."
        >
          <IndexRows>
            {workProjects.map((p) => (
              <IndexRow key={p.title} title={p.title} aside={p.employer}>
                <p className="text-foreground/90">{p.summary}</p>
                <ul className="mt-3 space-y-1.5 text-base">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 inline-block size-1.5 shrink-0 bg-mark"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <ToolList items={p.stack} />
                </div>
              </IndexRow>
            ))}
          </IndexRows>
        </Section>

        {children}
      </div>
    </main>
  );
}
