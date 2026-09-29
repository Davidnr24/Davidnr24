import type { Metadata } from "next";

import { PersonalBody } from "@/components/pages/personal-body";
import { PageClose } from "@/components/page-close";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Personal",
  description:
    "A bit about David Navarro outside of work. Born and raised in Spain, based in Charlotte NC. Real Madrid fan, snowboarder, tennis player and chess player.",
  alternates: { canonical: "/resume/personal" },
};

export default function Page() {
  return (
    <PersonalBody>
      <PageClose
        heading="Let's talk."
        body="Whether it's about a role, or just to compare notes on how big an AWS bill can get."
        cta="Contact me"
        href={`mailto:${site.email}`}
        event="email"
      />
    </PersonalBody>
  );
}
