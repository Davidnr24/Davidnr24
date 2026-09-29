import type { Metadata } from "next";

import { ProjectsBody } from "@/components/pages/projects-body";
import { PageClose } from "@/components/page-close";
import { buildHireMeMailto } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Personal Projects",
  description: "Side projects built outside of work: full-stack web, mobile, machine learning and DevOps tooling.",
  // Same content as the resume copy; consolidate ranking there.
  alternates: { canonical: "/resume/projects" },
};

export default function Page() {
  return (
    <ProjectsBody>
      <PageClose
        heading="Need a hand with platform work?"
        body="Tell me the problem and the timeline. I will tell you honestly whether I am the right person for it."
        cta="Start a conversation"
        href={buildHireMeMailto("a contract engagement")}
      />
    </ProjectsBody>
  );
}
