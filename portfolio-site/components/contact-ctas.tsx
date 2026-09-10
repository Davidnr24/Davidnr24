import Link from "next/link";
import { Briefcase, FileText, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { LinkedInIcon } from "@/components/brand-icons";
import { site } from "@/content/site";
import { cta } from "@/lib/analytics";
import { buildHireMeMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "default" | "lg";
  /** Tells two instances on the same page apart. Which page it was comes
   *  through as $current_url on the event. */
  location?: string;
};

export function ContactCTAs({
  className,
  size = "default",
  location = "contact_ctas",
}: Props) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={buildHireMeMailto()}
        className={buttonVariants({ size })}
        aria-label="Hire me (opens an email draft)"
        {...cta("hire_me", location)}
      >
        <Briefcase className="mr-1 size-4" aria-hidden />
        Hire me
      </a>
      <a
        href={`mailto:${site.email}`}
        className={buttonVariants({ variant: "outline", size })}
        {...cta("email", location)}
      >
        <Mail className="mr-1 size-4" aria-hidden />
        Contact
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline", size })}
        {...cta("linkedin", location)}
      >
        <LinkedInIcon className="mr-1 size-4" aria-hidden />
        LinkedIn
      </a>
      <Link
        href={site.resumeHref}
        target="_blank"
        className={buttonVariants({ variant: "outline", size })}
        aria-label="Download résumé (PDF)"
        {...cta("resume", location)}
      >
        <FileText className="mr-1 size-4" aria-hidden />
        Résumé
      </Link>
    </div>
  );
}
