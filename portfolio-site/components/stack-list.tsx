import {
  AwsWordmark,
  DatadogIcon,
  DockerIcon,
  GitHubActionsIcon,
  KubernetesIcon,
  TerraformIcon,
} from "@/components/tech-icons";
import { stack, type StackEntry } from "@/content/stack";

function Mark({ icon }: { icon: StackEntry["icon"] }) {
  const className = "size-7 text-foreground";
  switch (icon) {
    case "kubernetes":
      return <KubernetesIcon className={className} aria-hidden />;
    case "terraform":
      return <TerraformIcon className={className} aria-hidden />;
    case "docker":
      return <DockerIcon className={className} aria-hidden />;
    case "ci":
      return <GitHubActionsIcon className={className} aria-hidden />;
    case "datadog":
      return <DatadogIcon className={className} aria-hidden />;
    case "aws":
      return (
        <AwsWordmark className="text-2xl font-semibold leading-none tracking-tight text-foreground" />
      );
  }
}

/** The stack, one row per technology: brand mark, name, what he did with it. */
export function StackList() {
  return (
    <ul className="divide-y divide-border/70">
      {stack.map((s) => (
        <li key={s.name} className="flex gap-6 py-6 first:pt-0 sm:gap-8">
          <span className="flex size-10 shrink-0 items-center justify-center">
            <Mark icon={s.icon} />
          </span>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{s.name}</h3>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
              {s.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
