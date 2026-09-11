import type { Metadata } from "next";

import { ProjectsBody } from "@/components/pages/projects-body";
import { PageClose } from "@/components/page-close";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Personal Projects",
  description:
    "Side projects David Navarro has built outside of work: Squadra, Astra DevOps, Xtock, Stylistic and Generational Pictures. Full-stack, mobile, machine learning and DevOps tooling.",
  alternates: { canonical: "/resume/projects" },
};

export default function Page() {
  return (
    <ProjectsBody>
      <PageClose
        heading="Want to talk through any of these?"
        body="Happy to walk through the architecture, the trade-offs, or the messy parts."
        cta="Contact me"
        href={`mailto:${site.email}`}
        event="email"
      />
    </ProjectsBody>
  );
}
