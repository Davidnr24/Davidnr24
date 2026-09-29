import { SiteChrome } from "@/components/site-chrome";
import { site } from "@/content/site";
import { resumeNav } from "@/lib/nav";

const DESCRIPTION =
  "Senior DevOps / Platform Engineer based in Charlotte, NC. AWS, Kubernetes, Terraform and CI/CD, with five years at Blue Apron and Agero.";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteChrome
      nav={resumeNav}
      home="/resume"
      ctaLabel="Contact me"
      ctaHref={`mailto:${site.email}`}
      description={DESCRIPTION}
    >
      {children}
    </SiteChrome>
  );
}
