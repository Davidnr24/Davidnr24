import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cta as ctaAttrs, type CtaName } from "@/lib/analytics";
import { buildHireMeMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";

type PageCloseProps = {
  heading: string;
  body: string;
  cta?: string;
  href?: string;
  /** Which named CTA this button counts as in analytics. */
  event?: CtaName;
};

/**
 * The one closing block every main page ends with: an orange band, one line,
 * one action. Replaces the grey "Let's talk" box.
 */
export function PageClose({
  heading,
  body,
  cta = "Hire me",
  href = buildHireMeMailto(),
  event = "hire_me",
}: PageCloseProps) {
  return (
    <section className="mt-20 rounded-xl bg-mark p-7 text-mark-ink sm:mt-24 sm:p-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="max-w-md text-balance font-display text-3xl leading-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-mark-ink/80 sm:text-base">
            {body}
          </p>
        </div>
        <a
          href={href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full shrink-0 bg-foreground px-5 text-background hover:bg-foreground/85 sm:w-auto"
          )}
          {...ctaAttrs(event, "page_close")}
        >
          {cta}
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
