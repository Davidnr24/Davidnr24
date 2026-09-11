export type SkillGroup = {
  category: string;
  summary: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AWS",
    summary:
      "My core platform at Agero and Blue Apron, across multiple accounts.",
    items: [
      "S3",
      "RDS",
      "Aurora",
      "ECS",
      "EKS",
      "EC2",
      "Lambda",
      "OpenSearch",
      "ElastiCache",
      "Route 53",
      "Systems Manager",
      "Parameter Store",
      "ECR",
    ],
  },
  {
    category: "Infrastructure as Code",
    summary:
      "Terraform is the daily driver. CloudFormation and Ansible where I inherited them.",
    items: ["Terraform", "CloudFormation", "Ansible"],
  },
  {
    category: "Containers & orchestration",
    summary:
      "EKS and ECS at both jobs, running distributed microservices across accounts and environments.",
    items: ["Docker", "Kubernetes (EKS)", "Helm", "ECS"],
  },
  {
    category: "CI/CD & deployment",
    summary:
      "Built and run in production. I authored the org-wide CircleCI Orb at Agero.",
    items: [
      "CircleCI (custom Orbs)",
      "Jenkins",
      "GitHub Actions",
      "Blue/green deploys",
      "Canary deploys",
      "Ephemeral environments",
    ],
  },
  {
    category: "Observability & reliability",
    summary:
      "Datadog by default, on-call at both jobs, disaster recovery drills at Agero.",
    items: ["Datadog", "CloudWatch", "Splunk", "PagerDuty", "Rollbar"],
  },
  {
    category: "Security",
    summary:
      "Hardened images, resolved 100+ Wiz findings, and own the IAM and WAF baselines.",
    items: [
      "Wiz",
      "Snyk",
      "WAF",
      "IAM",
      "Image hardening",
      "Vulnerability mitigation",
    ],
  },
  {
    category: "Networking & CDN",
    summary:
      "VPC design, certificates, and DNS-driven traffic moves. CDN as code on Fastly.",
    items: [
      "VPC",
      "DNS",
      "Route 53",
      "Cloudflare",
      "Fastly",
      "Certificate management",
    ],
  },
  {
    category: "Databases",
    summary:
      "Postgres and Aurora every day, plus Redis and OpenSearch migrations.",
    items: [
      "PostgreSQL",
      "Aurora",
      "MySQL",
      "Redis (ElastiCache)",
      "Elasticsearch / OpenSearch",
      "MongoDB",
      "DynamoDB",
    ],
  },
  {
    category: "Languages",
    summary:
      "Python and Bash for automation, Go for internal tooling, TypeScript on side projects.",
    items: [
      "Python",
      "Bash",
      "Go",
      "TypeScript",
      "JavaScript",
      "Ruby",
      "Groovy",
    ],
  },
  {
    category: "Web & mobile",
    summary:
      "Side projects keep me sharp on the application layer, end to end.",
    items: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "Motion",
      "Supabase (Auth, Postgres, Realtime, RLS)",
      "React Native (Expo)",
      "Ruby on Rails",
      "next-intl (i18n)",
      "Vercel",
      "Render",
    ],
  },
  {
    category: "AI & ML",
    summary:
      "Part of my daily engineering loop, and the subject of my ML sandbox.",
    items: [
      "Claude",
      "GitHub Copilot",
      "HuggingFace",
      "Fine-tuning",
      "SageMaker",
      "Bedrock",
      "MLOps",
    ],
  },
];

export type WorkProject = {
  title: string;
  employer: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const workProjects: WorkProject[] = [
  {
    title: "OpenSearch instance upgrade",
    employer: "Agero",
    summary:
      "Upgraded production OpenSearch from r6g.xlarge to r8g.xlarge across every environment without downtime or data loss.",
    highlights: [
      "Zero downtime across all environments including production",
      "Migrated storage from GP2 to GP3 and coordinated with reserved-instance purchase",
      "30% performance gain and 10% cost reduction",
    ],
    stack: ["AWS OpenSearch", "Terraform", "AWS Reserved Instances"],
  },
  {
    title: "Ephemeral environments",
    employer: "Agero",
    summary:
      "On-demand environments spun directly from a PR to test features before merging, with a pre-warmed RDS pool for near-instant availability.",
    highlights: [
      "Pre-warmed RDS pool for fast provisioning",
      "End-to-end CI/CD automation to stand up an env in minimum time",
      "Cost-efficient, secure, hands-off cleanup pipeline",
    ],
    stack: ["CircleCI", "Terraform", "AWS RDS", "ECS"],
  },
  {
    title: "CircleCI Orb architecture",
    employer: "Agero",
    summary:
      "Designed and built the org-wide CircleCI Orb to replace HarnessCD as the deployment solution for ECS services.",
    highlights: [
      "YAML configuration templates for ECS services and task definitions",
      "Reduced pain points in the previous deploy flow",
      "Improved developer experience and standardized deploys across teams",
    ],
    stack: ["CircleCI Orbs", "ECS", "YAML"],
  },
  {
    title: "“Herb” preview environments",
    employer: "Blue Apron",
    summary:
      "Preview environments that live inside the staging Kubernetes cluster, so feature branches can talk to real staging services.",
    highlights: [
      "Devs can test a feature branch against the real staging surface, skipping slow test runs when wanted",
      "Integrates with existing CI/CD workflow, so there's no parallel system to maintain",
    ],
    stack: ["Kubernetes (EKS)", "Helm", "Jenkins"],
  },
  {
    title: "Fastly CI/CD pipeline with Terraform",
    employer: "Blue Apron",
    summary:
      "Self-serve pipeline that lets developers manage Fastly (CDN) services via Terraform without needing Terraform expertise.",
    highlights: [
      "Plan-on-PR, apply-on-merge with safe gating",
      "Better version control, fewer security risks",
    ],
    stack: ["Terraform", "Fastly", "Jenkins"],
  },
  {
    title: "ElastiCache Redis migration",
    employer: "Blue Apron",
    summary:
      "Moved Redis instances to a different AWS account inside a strict 1-hour downtime window.",
    highlights: [
      "Mapped every dependent app and service in advance",
      "Used Route 53 DNS records to switch traffic atomically",
      "Snapshot + automated migration scripts to minimize human error",
      "Hit the 1-hour downtime SLA",
    ],
    stack: ["AWS ElastiCache", "Route 53", "Bash automation"],
  },
  {
    title: "Internal Go CLI tool",
    employer: "Blue Apron",
    summary:
      "Go-based CLI that gave developers an ergonomic interface to AWS, Kubernetes, and internal infra.",
    highlights: [
      "AWS login flow and resource access",
      "Friendly Kubernetes management (restarts, logs, resource views)",
      "Lookup tool for internal/external hostnames per app",
      "Secrets and keys management via AWS Parameter Store",
    ],
    stack: ["Go", "AWS SDK", "kubectl"],
  },
];
