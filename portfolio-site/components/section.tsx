import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  number: string;
  heading: React.ReactNode;
  /** Optional line under the heading in the left column. */
  lede?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/**
 * The standard numbered section from DESIGN.md: hairline on top, mono number
 * and heading in a narrow left column, content on the right. Stacks on mobile.
 */
export function Section({
  id,
  number,
  heading,
  lede,
  className,
  children,
}: SectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={cn(
        "mt-20 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-border pt-10 sm:mt-24 sm:grid-cols-[1fr_2fr]",
        className
      )}
    >
      <div>
        <p className="font-mono text-xs text-mark-text">({number})</p>
        <h2
          id={id}
          className="mt-2 font-display text-3xl leading-tight tracking-[-0.01em] sm:text-4xl"
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

type RowsProps = {
  children: React.ReactNode;
  className?: string;
};

/** A list whose items are divided by hairlines instead of boxed in cards. */
export function Rows({ children, className }: RowsProps) {
  return (
    <ul className={cn("divide-y divide-border/70", className)}>{children}</ul>
  );
}
