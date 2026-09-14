import {
  Bird,
  Bot,
  Bug,
  Code,
  Globe,
  Lock,
  Server,
  ShieldCheck,
  Shuffle,
  SlidersHorizontal,
  Timer,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { LOGO_FOR, LogoMark } from "@/components/logo-icons";
import { AwsWordmark, TOOL_MARKS } from "@/components/tech-icons";

/**
 * Things that are a practice, or a product with no mark in any icon set, get a
 * lucide icon that says what they are. Wiz is here because no open icon set
 * carries it, and an empty slot looked like a bug rather than a decision.
 */
const CONCEPT_ICONS: Record<string, LucideIcon> = {
  Wiz: ShieldCheck,
  "Image hardening": Lock,
  "Vulnerability mitigation": Bug,
  "Blue/green deploys": Shuffle,
  "Canary deploys": Bird,
  "Ephemeral environments": Timer,
  DNS: Globe,
  "Fine-tuning": SlidersHorizontal,
  MLOps: Workflow,
  "Agentic workflows": Bot,
  Render: Server,
  Groovy: Code,
};

function Mark({ name }: { name: string }) {
  // Real product mark first: an RDS icon says RDS in a way a wordmark cannot.
  const logo = LOGO_FOR[name];
  if (logo) return <LogoMark name={logo} className="size-5" />;

  const concept = CONCEPT_ICONS[name];
  if (concept) {
    const Icon = concept;
    return <Icon className="size-4 text-mark-text" strokeWidth={1.75} aria-hidden />;
  }

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
