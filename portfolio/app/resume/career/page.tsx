import type { Metadata } from "next";

import { CareerBody } from "@/components/pages/career-body";
import { PageClose } from "@/components/page-close";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Five years of DevOps and Platform Engineering. From a DevOps internship in Madrid to Senior Platform Engineering at Agero, with two years at Blue Apron. AWS, Kubernetes, Terraform, CI/CD.",
  alternates: { canonical: "/resume/career" },
};

export default function Page() {
  return (
    <CareerBody>
      <PageClose
        heading="Want the long version?"
        body="Email me and I'll walk you through any of it, including the parts that did not make the résumé."
        cta="Contact me"
        href={`mailto:${site.email}`}
        event="email"
      />
    </CareerBody>
  );
}
