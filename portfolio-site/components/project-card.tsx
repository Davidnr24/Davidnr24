import { ExternalLink, Lock, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { GitHubIcon } from "@/components/brand-icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { PersonalProject } from "@/content/personal-projects";
import { buildAccessRequestMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

const statusTone: Record<PersonalProject["status"], string> = {
  Production: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  "Active development": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  Archived: "bg-muted text-muted-foreground",
};

export function ProjectCard({ project }: { project: PersonalProject }) {
  const isPrivate = project.repoVisibility === "private";

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.tagline}
            </p>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",
              statusTone[project.status]
            )}
          >
            {project.status}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span>{project.category}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
          {isPrivate ? (
            <>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <Lock className="size-3" aria-hidden />
                Private source
              </span>
            </>
          ) : null}
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-sm leading-relaxed text-foreground/90">
          {project.description}
        </p>
        {project.notes ? (
          <p className="text-xs italic text-muted-foreground">{project.notes}</p>
        ) : null}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary" className="font-normal">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm" })}
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
          >
            <GitHubIcon className="mr-1 size-3.5" aria-hidden />
            Source
          </a>
        ) : null}
        {isPrivate && project.repoFullName ? (
          <a
            href={buildAccessRequestMailto(project.repoFullName)}
            className={buttonVariants({ variant: "outline", size: "sm" })}
            aria-label={`Request access to ${project.repoFullName} (opens an email draft)`}
          >
            <Mail className="mr-1 size-3.5" aria-hidden />
            Request access
          </a>
        ) : null}
      </CardFooter>
    </Card>
  );
}
