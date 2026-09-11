import { SiteChrome } from "@/components/site-chrome";
import { freelanceNav } from "@/lib/nav";
import { buildHireMeMailto } from "@/lib/mailto";

const DESCRIPTION =
  "Freelance and contract DevOps / Platform Engineering. AWS, Terraform, CI/CD, Kubernetes and internal tooling, on two to twelve week engagements. Remote from Charlotte, NC, bilingual English and Spanish.";

export default function FreelanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteChrome
      nav={freelanceNav}
      home="/freelance"
      ctaLabel="Start a conversation"
      ctaHref={buildHireMeMailto("a contract engagement")}
      description={DESCRIPTION}
    >
      {children}
    </SiteChrome>
  );
}
