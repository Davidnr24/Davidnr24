export type Job = {
  company: string;
  /** Official site, opened in a new tab from the company name. */
  url?: string;
  /**
   * Path under /public to a logo file, if we have one. Leave unset and the
   * company renders as a wordmark instead. Agero's own SVG is a gradient
   * Illustrator export with hidden layers, and Blue Apron blocks automated
   * downloads, so neither ships here. Drop a file in /public/logos and set
   * this to swap it in.
   */
  logo?: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
};

export const jobs: Job[] = [
  {
    company: "Agero",
    url: "https://www.agero.com",
    role: "Senior DevOps / Platform Engineer",
    location: "Medford, MA (Remote)",
    start: "Oct 2024",
    end: "Present",
    current: true,
    highlights: [
      "Run the platform under four products: a Ruby on Rails dispatch app on multi-region ECS Fargate with a DR region, an AI agent platform on EKS, a simulation product, and the ML platform the main app calls.",
      "Built a production platform for a new simulation product from scratch: a monorepo, 15 Terraform modules in a private registry, a new VPC, ECS, AWS Batch, Aurora and CircleCI deploys. Later scaled Batch from 100 to 1,000 parallel jobs.",
      "Moved the machine learning platform into its own AWS account and cut production inference over with zero errors and zero throttling in the first 24 hours.",
      "Designed just-in-time production database access. After approval, a time-boxed, IAM-authenticated and audited login exists in about 9 seconds and is revoked when it expires.",
      "Replaced masked staging data in per-PR environments with a seeded golden database and a pool of copy-on-write clones. All 28 acceptance scenarios pass on it, which QA had considered not possible for almost two years.",
      "Cut the per-PR environment deploy from 14.9 minutes to 8 to 11, with the database step down from 9.8 minutes to about 4.",
      "Moved every deploy off HarnessCD onto a CircleCI orb and pipelines I built, cutting deploy times by 40%. Standardizing teams on it lifted uptime by 25%, and a later major version deploys three products across separate AWS accounts.",
      "Rebuilt the AI agent platform's staging and dev accounts on EKS with no interruption, and took the downtime out of its deploys with readiness gates, preStop hooks and graceful drain.",
      "Made the weekly QA database refresh reliable with fast clones, retries and autoscaling-aware scale-down. Downtime per environment dropped to 31 to 46 minutes.",
      "Built on-demand ephemeral environments in 2025, improving developer workflow speed by 20%, and shift-left QA automation that kept platform availability at 99.997%.",
      "Implemented Datadog monitoring and alerting, cutting MTTD by 50%, and moved the AI platform's logs into one Datadog organization with consistent tags.",
      "Hardened Docker images, reducing critical vulnerabilities by 85%, resolved 100+ Wiz findings, and cut CI/CD and runtime IAM roles to least privilege using CloudTrail and Access Advisor data.",
      "Automated infrastructure tasks with Bash and Python, removing 30+ hours of manual ops work per month.",
      "Since June 2026 I work with an AI coding agent under strict guardrails: about 58 pull requests a month, up from about 18.",
      "Run the disaster recovery exercises and share the on-call rotation for the platform.",
    ],
  },
  {
    company: "Blue Apron",
    url: "https://www.blueapron.com",
    role: "DevOps / SRE Engineer",
    location: "New York, NY (Remote)",
    start: "Oct 2022",
    end: "Oct 2024",
    highlights: [
      "Administered and upgraded cross-environment Kubernetes clusters on AWS EKS for distributed microservices, lifting deploy efficiency by 30% via shared Helm charts.",
      "Managed cross-account AWS infrastructure with Terraform. Stability up, costs down 20%.",
      "Designed Jenkins CI/CD pipelines that made app deploys 40% faster.",
      "Supported developers by triaging Jenkins failures and provisioning new infra, dropping blocked downtime by 15%.",
      "Monitored apps via Datadog, Rollbar, and Snyk, cutting security risk surface by 25%.",
      "On-call rotation maintaining 99.9% uptime.",
    ],
  },
  {
    company: "Alamo Consulting",
    role: "DevOps Consultant Intern",
    location: "Madrid, Spain (Hybrid)",
    start: "Sept 2021",
    end: "Aug 2022",
    highlights: [
      "Set up Jenkins pipelines for multiple client projects, lifting deploy efficiency by 25%.",
      "Optimized client AWS infrastructure for a 15% cost reduction.",
      "Decoupled monolithic apps into Docker-based microservices for scalability.",
      "Managed Git/GitHub repos to improve cross-team collaboration.",
    ],
  },
  {
    company: "Madrid Polytechnic University",
    url: "https://www.upm.es",
    role: "Python Backend Developer",
    location: "Madrid, Spain",
    start: "Feb 2022",
    end: "Jul 2022",
    highlights: [
      "Developed a Python wrapper around a RESTful API for a health-research application.",
      "Worked alongside professors and PhD students on the app.",
      "Project lives at https://medal.ctb.upm.es",
    ],
  },
];

export type Education = {
  school: string;
  url?: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "Polytechnic University of Madrid",
    url: "https://www.upm.es",
    degree: "B.S. Software Engineering",
    location: "Madrid, Spain",
    start: "2018",
    end: "2022",
    detail: "GPA 3.5",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  validity: string;
  href: string;
};

export const certifications: Certification[] = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    date: "February 2024",
    validity: "Valid until February 2027",
    href: "https://www.credly.com/badges/8a918573-f297-495e-87cc-b690fbd5834c",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "September 2025",
    validity: "Valid until September 2027",
    href: "https://www.credly.com/badges/f6fcb896-3760-498e-8571-6cfdd077a272",
  },
  {
    name: "AWS Certified Solutions Architect (Associate)",
    issuer: "Amazon Web Services",
    date: "June 2023",
    validity: "Expired June 2026",
    href: "https://www.credly.com/badges/853033b4-4f3c-46d3-85d6-38499bd8f545",
  },
];
