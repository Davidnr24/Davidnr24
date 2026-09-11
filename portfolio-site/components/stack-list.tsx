import { IndexRow, IndexRows } from "@/components/section";
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
  const className = "size-8 text-foreground transition-transform group-hover:scale-110";
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
        <AwsWordmark className="text-2xl font-bold leading-none tracking-tight text-foreground transition-transform group-hover:scale-110" />
      );
  }
}

/** The stack: brand mark, name, and what he did with it. */
export function StackList() {
  return (
    <IndexRows>
      {stack.map((s) => (
        <IndexRow key={s.name} mark={<Mark icon={s.icon} />} title={s.name}>
          {s.body}
        </IndexRow>
      ))}
    </IndexRows>
  );
}
