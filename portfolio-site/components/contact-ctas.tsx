import Link from "next/link";
import { Briefcase, FileText, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { LinkedInIcon } from "@/components/brand-icons";
import { site } from "@/content/site";
import { buildHireMeMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "default" | "lg";
};

export function ContactCTAs({ className, size = "default" }: Props) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={buildHireMeMailto()}
        className={buttonVariants({ size })}
        aria-label="Hire me (opens an email draft)"
      >
        <Briefcase className="mr-1 size-4" aria-hidden />
        Hire me
      </a>
      <a
        href={`mailto:${site.email}`}
        className={buttonVariants({ variant: "outline", size })}
      >
        <Mail className="mr-1 size-4" aria-hidden />
        Contact
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size })}
      >
        <LinkedInIcon className="mr-1 size-4" aria-hidden />
        LinkedIn
      </a>
      <Link
        href={site.resumeHref}
        target="_blank"
        className={buttonVariants({ variant: "outline", size })}
        aria-label="Download résumé (PDF)"
      >
        <FileText className="mr-1 size-4" aria-hidden />
        Résumé
      </Link>
    </div>
  );
}
