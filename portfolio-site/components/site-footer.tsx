import Link from "next/link";
import { Mail, FileText } from "lucide-react";

import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{site.name}</p>
          <p className="text-sm text-muted-foreground">
            {site.role} · {site.location}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Mail className="size-4" aria-hidden />
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <LinkedInIcon className="size-4" aria-hidden />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <GitHubIcon className="size-4" aria-hidden />
              GitHub
            </a>
          </li>
          <li>
            <Link
              href={site.resumeHref}
              target="_blank"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <FileText className="size-4" aria-hidden />
              Résumé
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-4 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} {site.name} · {site.domain}
        </div>
      </div>
    </footer>
  );
}
