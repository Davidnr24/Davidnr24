export type SkillGroup = {
  category: string;
  summary: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AWS",
    summary:
      "My core platform at Agero and Blue Apron. Multi-account org work, daily across compute, storage, networking, and managed services.",
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
      "Terraform is the daily driver: multi-account modules, plan/apply pipelines, state strategy. CloudFormation and Ansible where I've inherited them.",
    items: ["Terraform", "CloudFormation", "Ansible"],
  },
  {
    category: "Containers & orchestration",
    summary:
      "EKS clusters running distributed microservices at Blue Apron, ECS-heavy at Agero. Custom Helm charts, image hardening, and version upgrades across environments.",
    items: ["Docker", "Kubernetes (EKS)", "Helm", "ECS"],
  },
  {
    category: "CI/CD & deployment",
    summary:
      "Built and run CircleCI, Jenkins, and GitHub Actions pipelines in production. Authored a custom CircleCI Orb at Agero that replaced a third-party deploy product across the org.",
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
      "Datadog is my default. Dashboards and alerting at both jobs, an on-call rotation at Blue Apron, and annual disaster-recovery exercises at Agero.",
    items: ["Datadog", "CloudWatch", "Splunk", "PagerDuty", "Rollbar"],
  },
  {
    category: "Security",
    summary:
      "Hardened production images, resolved 100+ vulnerabilities flagged by Wiz, and own IAM and WAF baselines across AWS environments.",
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
      "VPC design, certificate management, and DNS-driven traffic moves. Drove a CDN-as-code project on Fastly via Terraform at Blue Apron.",
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
      "Postgres and Aurora are the everyday tools. Ops experience on Redis migrations, Elasticsearch/OpenSearch upgrades, and managed databases generally.",
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
      "Python and Bash daily for automation. Go for internal tooling (the Blue Apron CLI). TypeScript across personal projects. Ruby and Groovy where the platform calls for it.",
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
      "Side projects keep me sharp on the application layer. Next.js + Supabase on Squadra, React Native + Rails on Stylistic, React + Tailwind on older work. I'm used to standing up a product end-to-end and shipping it.",
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
      "Two angles. Claude and Copilot are part of my daily engineering loop. On the applied side, Xtock is my sandbox for HuggingFace models, fine-tuning, and serving with an eye on inference cost and latency.",
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
