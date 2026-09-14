import { ExternalLink, Lock, Mail } from "lucide-react";

import { GitHubIcon } from "@/components/brand-icons";
import { buttonVariants } from "@/components/ui/button";
import type { PersonalProject } from "@/content/personal-projects";
import { cta } from "@/lib/analytics";
import { buildAccessRequestMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

/**
 * One project as a row, not a card. See the banned list in DESIGN.md.
 * Meant to sit inside <Rows> from components/section.tsx.
 */
export function ProjectCard({ project }: { project: PersonalProject }) {
  const isPrivate = project.repoVisibility === "private";

  return (
    <li className="py-8 first:pt-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-display text-2xl leading-tight">{project.name}</h3>
        <p className="shrink-0 text-sm text-muted-foreground">
          {project.category} <span className="text-mark-text">/</span>{" "}
          {project.year} <span className="text-mark-text">/</span>{" "}
          {project.status}
          {isPrivate ? (
            <>
              {" "}
              <span className="text-mark-text">/</span>{" "}
              <span className="inline-flex items-center gap-1">
                <Lock className="size-3" aria-hidden />
                private
              </span>
            </>
          ) : null}
        </p>
      </div>

      <p className="mt-1 text-base text-foreground/90">{project.tagline}</p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {project.description}
      </p>
      {project.notes ? (
        <p className="mt-2 max-w-2xl text-sm italic text-muted-foreground">
          {project.notes}
        </p>
      ) : null}

      <p className="mt-4 text-sm text-muted-foreground">
        {project.stack.join(" · ")}
      </p>

      {project.liveUrl || project.repoUrl || (isPrivate && project.repoFullName) ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
              {...cta("project_demo", project.slug)}
            >
              <ExternalLink className="mr-1 size-3.5" aria-hidden />
              Live demo
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
              {...cta("project_source", project.slug)}
            >
              <GitHubIcon className="mr-1 size-3.5" aria-hidden />
              Source
            </a>
          ) : null}
          {isPrivate && project.repoFullName ? (
            <a
              href={buildAccessRequestMailto(project.repoFullName)}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              aria-label={`Request access to ${project.repoFullName} (opens an email draft)`}
              {...cta("project_access", project.slug)}
            >
              <Mail className="mr-1 size-3.5" aria-hidden />
              Request access
            </a>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}
