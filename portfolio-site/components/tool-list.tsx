import { LOGO_FOR, LogoMark } from "@/components/logo-icons";
import { AwsWordmark, TOOL_MARKS } from "@/components/tech-icons";

function Mark({ name }: { name: string }) {
  // Real product mark first: an RDS icon says RDS in a way a wordmark cannot.
  const logo = LOGO_FOR[name];
  if (logo) return <LogoMark name={logo} className="size-5" />;

  // Monochrome fallback for the handful with no logo in the set.
  const mark = TOOL_MARKS[name];
  if (mark === "aws") {
    return (
      <AwsWordmark className="text-[0.65rem] font-bold leading-none tracking-tight text-foreground" />
    );
  }
  if (mark) {
    const Icon = mark;
    return <Icon className="size-4 text-foreground" aria-hidden />;
  }
  // A practice rather than a product. Keep the slot so labels stay aligned.
  return <span aria-hidden className="size-1.5 bg-mark" />;
}

/**
 * A wrapped list of tools, each with its product mark. Replaces a wall of
 * comma-separated names: same information, read at a glance.
 */
export function ToolList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm">
          <span className="flex size-5 shrink-0 items-center justify-center">
            <Mark name={item} />
          </span>
          <span className="text-foreground/90">{item}</span>
        </li>
      ))}
    </ul>
  );
}
