import type { Metadata } from "next";

import { SkillsBody } from "@/components/pages/skills-body";
import { PageClose } from "@/components/page-close";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Skills & Work Projects",
  description:
    "Technical skill set of David Navarro, Senior DevOps / Platform Engineer. AWS, Kubernetes, Terraform, CI/CD, observability, and the platform projects shipped at Agero and Blue Apron.",
  alternates: { canonical: "/resume/skills" },
};

export default function Page() {
  return (
    <SkillsBody>
      <PageClose
        heading="Want to go deeper on any of these?"
        body="Happy to walk through the architecture and the trade-offs on a call."
        cta="Contact me"
        href={`mailto:${site.email}`}
        event="email"
      />
    </SkillsBody>
  );
}
