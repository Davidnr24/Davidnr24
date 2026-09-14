import type { Metadata } from "next";

import { CareerBody } from "@/components/pages/career-body";
import { PageClose } from "@/components/page-close";
import { buildHireMeMailto } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Career",
  description: "Five years of DevOps and Platform Engineering across Agero, Blue Apron and consulting in Madrid.",
  // Same content as the resume copy; consolidate ranking there.
  alternates: { canonical: "/resume/career" },
};

export default function Page() {
  return (
    <CareerBody>
      <PageClose
        heading="Need a hand with platform work?"
        body="Tell me the problem and the timeline. I will tell you honestly whether I am the right person for it."
        cta="Start a conversation"
        href={buildHireMeMailto("a contract engagement")}
      />
    </CareerBody>
  );
}
