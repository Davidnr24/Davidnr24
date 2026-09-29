import type { Metadata } from "next";

import { PersonalBody } from "@/components/pages/personal-body";
import { PageClose } from "@/components/page-close";
import { buildHireMeMailto } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Personal",
  description: "A bit about David Navarro outside of work.",
  // Same content as the resume copy; consolidate ranking there.
  alternates: { canonical: "/resume/personal" },
};

export default function Page() {
  return (
    <PersonalBody>
      <PageClose
        heading="Need a hand with platform work?"
        body="Tell me the problem and the timeline. I will tell you honestly whether I am the right person for it."
        cta="Start a conversation"
        href={buildHireMeMailto("a contract engagement")}
      />
    </PersonalBody>
  );
}
