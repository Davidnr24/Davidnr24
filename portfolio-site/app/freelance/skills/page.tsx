import type { Metadata } from "next";

import { SkillsBody } from "@/components/pages/skills-body";
import { PageClose } from "@/components/page-close";
import { buildHireMeMailto } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Skills & Work Projects",
  description: "AWS, Kubernetes, Terraform, CI/CD and observability, and the platform projects shipped with them.",
  // Same content as the resume copy; consolidate ranking there.
  alternates: { canonical: "/resume/skills" },
};

export default function Page() {
  return (
    <SkillsBody>
      <PageClose
        heading="Need a hand with platform work?"
        body="Tell me the problem and the timeline. I will tell you honestly whether I am the right person for it."
        cta="Start a conversation"
        href={buildHireMeMailto("a contract engagement")}
      />
    </SkillsBody>
  );
}
