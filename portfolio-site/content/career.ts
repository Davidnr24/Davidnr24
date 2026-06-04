export type Job = {
  company: string;
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
    role: "Senior DevOps / Platform Engineer",
    location: "Medford, MA (Remote)",
    start: "Oct 2024",
    end: "Present",
    current: true,
    highlights: [
      "Designed and optimized CI/CD pipelines with CircleCI, cutting deploy times by 40% and improving release frequency for ECS-based applications.",
      "Automated infrastructure tasks with Bash and Python, removing 30+ hours of manual ops work per month.",
      "Hardened Docker images and managed dependencies, reducing critical vulnerabilities by 85%.",
      "Implemented Datadog monitoring and alerting, cutting MTTD by 50%.",
      "Standardized deployments across teams via custom CircleCI Orbs, lifting system uptime by 25%.",
      "Built on-demand ephemeral environments, improving developer workflow speed by 20%.",
      "Shift-left QA + testing automation kept platform availability at 99.997%.",
      "Designed and ran annual disaster-recovery exercises to reduce RTO during outages.",
      "Resolved 100+ security vulnerabilities flagged by Wiz across third-parties and application code.",
    ],
  },
  {
    company: "Blue Apron",
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
  degree: string;
  location: string;
  start: string;
  end: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "Polytechnic University of Madrid",
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
    name: "AWS Certified Solutions Architect (Associate)",
    issuer: "Amazon Web Services",
    date: "June 2023",
    validity: "Valid 3 years",
    href: "https://www.credly.com/badges/853033b4-4f3c-46d3-85d6-38499bd8f545",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    date: "February 2024",
    validity: "Valid 3 years",
    href: "https://www.credly.com/badges/8a918573-f297-495e-87cc-b690fbd5834c",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "September 2025",
    validity: "Valid 2 years",
    href: "https://www.credly.com/badges/f6fcb896-3760-498e-8571-6cfdd077a272",
  },
];
