import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  heading: React.ReactNode;
  /** Optional line under the heading in the left column. */
  lede?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/**
 * The standard section from DESIGN.md: hairline on top, heading in a narrow
 * left column, content on the right. Stacks on mobile.
 *
 * No label above the heading. See the banned list in DESIGN.md: a small kicker
 * over a title is the strongest tell that a page was generated.
 */
export function Section({ id, heading, lede, className, children }: SectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={cn(
        "mt-20 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-border pt-10 sm:mt-24 sm:grid-cols-[1fr_2fr]",
        className
      )}
    >
      <div>
        <h2
          id={id}
          className="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-4xl"
        >
          {heading}
        </h2>
        {lede ? (
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {lede}
          </p>
        ) : null}
      </div>
      <div>{children}</div>
    </section>
  );
}

/** A list whose items are divided by hairlines instead of boxed in cards. */
export function Rows({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("divide-y divide-border/70", className)}>{children}</ul>
  );
}

/**
 * One row. `lead` is the bold first line, children the body. Used everywhere a
 * card would once have been.
 */
export function Row({
  lead,
  aside,
  children,
  className,
}: {
  lead: React.ReactNode;
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("py-6 first:pt-0", className)}>
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="text-base font-semibold tracking-tight">{lead}</h3>
        {aside ? (
          <span className="shrink-0 text-sm text-muted-foreground">{aside}</span>
        ) : null}
      </div>
      {children ? (
        <div className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {children}
        </div>
      ) : null}
    </li>
  );
}
