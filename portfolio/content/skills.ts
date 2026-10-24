export type SkillGroup = {
  category: string;
  summary: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AWS",
    summary:
      "My core platform at Agero and Blue Apron. At Agero I brought four new accounts into service in 2026, each with keyless CI through OIDC.",
    items: [
      "ECS",
      "Fargate",
      "EKS",
      "AWS Batch",
      "Lambda",
      "Step Functions",
      "Aurora",
      "RDS",
      "OpenSearch",
      "ElastiCache",
      "S3",
      "Route 53",
      "Secrets Manager",
      "KMS",
      "Systems Manager",
      "ECR",
    ],
  },
  {
    category: "Infrastructure as Code",
    summary:
      "Terraform is the daily driver. I published 15 modules to a private registry, each with its own tests and scanning, and Terraform Cloud runs the applies with dynamic credentials.",
    items: [
      "Terraform",
      "Terraform Cloud",
      "terraform test",
      "CloudFormation",
      "Ansible",
    ],
  },
  {
    category: "AI & agentic engineering",
    summary:
      "Since June 2026 I work with an AI coding agent under strict guardrails, and I ship about three times as many pull requests a month as before.",
    items: [
      "OpenCode",
      "Claude Code",
      "Claude",
      "MCP",
      "Agentic workflows",
      "Codex",
      "GitHub Copilot",
      "SageMaker",
      "Bedrock",
      "HuggingFace",
      "Fine-tuning",
      "MLOps",
    ],
  },
  {
    category: "Containers & orchestration",
    summary:
      "ECS Fargate for the main product, EKS for the AI agent platform, with rollouts that drain gracefully instead of dropping requests.",
    items: [
      "Docker",
      "Kubernetes (EKS)",
      "Helm",
      "ECS",
      "External Secrets",
      "AWS Load Balancer Controller",
    ],
  },
  {
    category: "CI/CD & deployment",
    summary:
      "I built the CircleCI deployment orb that replaced HarnessCD at Agero and now deploys three products across separate accounts. GitHub Actions runs the Terraform and the image builds.",
    items: [
      "CircleCI (custom Orbs)",
      "GitHub Actions",
      "Ephemeral environments",
      "Blue/green deploys",
      "Canary deploys",
      "Dependabot",
      "Jenkins (legacy)",
    ],
  },
  {
    category: "Observability & reliability",
    summary:
      "Datadog by default, on-call at both jobs, disaster recovery exercises at Agero, and a habit of measuring before I change anything.",
    items: [
      "Datadog",
      "Fluent Bit",
      "CloudWatch",
      "Splunk",
      "PagerDuty",
      "Rollbar",
    ],
  },
  {
    category: "Security",
    summary:
      "Least-privilege IAM backed by CloudTrail and Access Advisor data, hardened images, and keyless CI everywhere.",
    items: [
      "IAM",
      "OIDC",
      "IAM Identity Center",
      "Wiz",
      "Trivy",
      "Snyk",
      "HashiCorp Vault",
      "Okta",
      "WAF",
      "Image hardening",
      "Vulnerability mitigation",
    ],
  },
  {
    category: "Networking & CDN",
    summary:
      "VPCs on a shared transit network, private endpoints, load balancers, and DNS-driven traffic moves. CDN as code on Fastly.",
    items: [
      "VPC",
      "Transit Gateway",
      "Load balancers",
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
      "Postgres and Aurora every day: fast clones, a golden database for test environments, and IAM-authenticated access on request.",
    items: [
      "PostgreSQL",
      "Aurora",
      "PostGIS",
      "pgbouncer",
      "Redis (ElastiCache)",
      "Valkey",
      "Elasticsearch / OpenSearch",
      "Snowflake",
      "DynamoDB",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    category: "Languages",
    summary:
      "Python and Bash for automation, Go for internal tooling, Ruby for the Rails app I support at Agero, TypeScript on side projects.",
    items: [
      "Python",
      "Bash",
      "Go",
      "Ruby",
      "Ruby on Rails",
      "SQL",
      "TypeScript",
      "JavaScript",
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
    title: "Simulation platform from scratch",
    employer: "Agero",
    summary:
      "Gave a new simulation product a production home with GitOps: Terraform applied by CI, images tagged by commit, and deploys through the same CircleCI orb as the main product.",
    highlights: [
      "Argued for a monorepo over a git submodule design, and the team agreed",
      "15 Terraform modules in a private registry, each with mocked terraform test suites, Trivy scanning and versioning CI",
      "A new VPC on the corporate transit network, with Aurora Serverless v2, AWS Batch on Fargate, load balancers and ECS",
      "Path-filtered builds: an unchanged service skips its image build in about 30 seconds instead of 6 minutes",
      "Scaled Batch from 100 to 1,000 parallel jobs with a secondary address range, and cut a data load step from over 5 minutes to about 40 seconds by fixing a disabled cache",
    ],
    stack: ["Terraform Cloud", "GitHub Actions", "CircleCI (custom Orbs)", "AWS Batch", "ECS", "Aurora", "Trivy"],
  },
  {
    title: "Machine learning account migration",
    employer: "Agero",
    summary:
      "Moved all machine learning infrastructure into a dedicated AWS account with the same GitOps model, then cut production inference over without downtime.",
    highlights: [
      "Audited the old estate: dozens of Terraform workspaces, several SageMaker domains and 11 pipelines, consolidated into one domain, two pipelines and one workspace",
      "About 66 resources in Terraform, with OIDC dynamic credentials and an account guard",
      "Staging first, production the next day: zero errors and zero throttles in the first 24 hours",
      "A ten-phase teardown plan for the old estate, which caught a draft step that would have destroyed the wrong function",
    ],
    stack: ["SageMaker", "Lambda", "Terraform Cloud", "GitHub Actions", "CircleCI", "KMS", "S3"],
  },
  {
    title: "Ephemeral environments",
    employer: "Agero",
    summary:
      "A full copy of the main product for every pull request, created from a PR comment and destroyed on close. I built the first version in 2025 and rebuilt its data layer in 2026. Between 30 and 40 are alive at any time.",
    highlights: [
      "A seed that runs inside the production image replaced masked staging data. All 28 CI acceptance scenarios pass on it",
      "A golden database refreshed weekly by a Step Function, with copy-on-write clones in a pool that keeps spares ready",
      "Measured before optimizing: the cost was three serial database tasks, not the infrastructure. Deploys went from 14.9 minutes to 8 to 11, trigger to green from about 20 to 14",
      "Teardown rebuilt as a state machine that waits for the app to stop before releasing its database, verified over 105 teardowns",
    ],
    stack: ["CircleCI (custom Orbs)", "GitHub Actions", "Terraform Cloud", "Aurora", "Step Functions", "Lambda", "ECS"],
  },
  {
    title: "AI agent platform on EKS",
    employer: "Agero",
    summary:
      "Rebuilt the environments of an internal AI agent platform on EKS, and made its deploys and agent sessions reliable.",
    highlights: [
      "A new staging account on EKS 1.35, cut over with no interruption",
      "A new dev account with deploy, reset and teardown commands as PR comments, and an Aurora database that pauses at zero",
      "Zero-downtime rollouts with readiness gates, preStop hooks and graceful drain: over 99% of probe requests succeeded during a production rollover, with no load balancer 5xx errors",
      "Least-privilege identity for the agent pods, rolled out in four phases and backed by about 400 days of Access Advisor data",
      "Retired the old staging account: 295 resources destroyed with guarded scripts",
    ],
    stack: ["Kubernetes (EKS)", "Helm", "External Secrets", "Aurora", "GitHub Actions", "Terraform Cloud", "Datadog"],
  },
  {
    title: "Just-in-time database access",
    employer: "Agero",
    summary:
      "Production database access on request, for a fixed window, with nothing left behind when it ends.",
    highlights: [
      "An engineer asks through the service desk and a DevOps or SRE engineer approves",
      "About 9 seconds later there is a time-boxed, IAM-authenticated login with statement timeouts and per-login audit logging",
      "A reaper revokes expired logins on a schedule and closes the request",
      "65 automated tests, and approved by Security as phase 1",
    ],
    stack: ["Aurora", "PostgreSQL", "Lambda", "IAM", "Terraform"],
  },
  {
    title: "CircleCI deployment system",
    employer: "Agero",
    summary:
      "Moved every deploy off HarnessCD onto a CircleCI orb and per-environment pipelines I built, then kept extending it.",
    highlights: [
      "Migrations, web and worker services, rollbacks, deploy monitoring, Datadog markers and Slack in one versioned orb",
      "Release automation, including a hotfix flow that supports several releases a day",
      "A multi-account major version: one orb deploys three products across separate AWS accounts through OIDC",
      "Emergency pipelines that deploy production in parallel across two regions, designed for about 5 minutes instead of 30",
    ],
    stack: ["CircleCI (custom Orbs)", "ECS", "GitHub Actions", "Datadog", "YAML"],
  },
  {
    title: "Weekly QA database refresh",
    employer: "Agero",
    summary:
      "About ten long-lived QA, training and pre-production environments get fresh data every week from a Step Function. I made it fast and dependable.",
    highlights: [
      "Copy-on-write fast clones took restores from hours to minutes",
      "Retries with exponential backoff and jitter at every failure point",
      "Saves live service counts and autoscaling state, scales to zero only for the database swap, then restores them",
      "Downtime per environment down to 31 to 46 minutes, and a versioned search reindex behind aliases that went from 17 hours to 5",
    ],
    stack: ["Step Functions", "Aurora", "Lambda", "OpenSearch", "Terraform"],
  },
  {
    title: "Cross-region disaster recovery",
    employer: "Agero",
    summary:
      "Migrated the whole platform from us-east-2 to us-west-2 and back again, production and staging, with under thirty minutes of downtime. Scripted end to end so the failover is a run, not a project.",
    highlights: [
      "Full region failover and failback, rehearsed annually rather than written down and hoped for",
      "Automation scripts stand up ECS services, data stores and networking in the target region",
      "Under 30 minutes of downtime across production and staging",
      "Pipelines and DNS cutover handled in the same run, so traffic follows the infrastructure",
      "One pipeline variable flips the active region with no code change, and both regions deploy on every run with the standby scaled to zero",
    ],
    stack: ["ECS", "Terraform", "CircleCI (custom Orbs)", "Route 53", "RDS", "Bash automation"],
  },
  {
    title: "AWS account vending",
    employer: "Agero",
    summary:
      "Self-service AWS accounts for other teams. A team requests one and gets it already inside the organisation, with permissions, IAM roles and networking in place, billing consolidated, and its pipelines ready to deploy.",
    highlights: [
      "New accounts land pre-provisioned with IAM roles, guardrails and a standard VPC layout",
      "Everything under one organisation with consolidated billing and central policy",
      "Terraform modules and CI/CD pipelines generated with the account, so a microservice can deploy on day one",
      "Every account gets OIDC roles, so no pipeline holds long-lived AWS keys",
      "Removes the ticket queue: teams self-serve instead of waiting on platform engineering",
    ],
    stack: ["AWS Organizations", "IAM", "VPC", "Terraform", "CircleCI (custom Orbs)", "ECS"],
  },
  {
    title: "Least privilege and supply chain hygiene",
    employer: "Agero",
    summary:
      "Security work that ships as pull requests and is backed by CloudTrail and Access Advisor evidence.",
    highlights: [
      "Cut CI/CD and runtime IAM roles down to least privilege using CloudTrail and Access Advisor data",
      "Pinned every GitHub Action to a commit SHA in about 20 repositories",
      "Hardened Docker images and kept dependencies patched, cutting critical vulnerabilities by 85%",
    ],
    stack: ["IAM", "Wiz", "Trivy", "GitHub Actions", "KMS", "Docker"],
  },
  {
    title: "AI-assisted platform engineering",
    employer: "Agero",
    summary:
      "Since June 2026 I work with an AI coding agent as a teammate with rules. Most of the rules came from mistakes I caught it making.",
    highlights: [
      "Read-only by default: the agent runs only the exact command I reviewed, and production is off limits",
      "One git worktree per task, secrets in a password manager, Jira from the CLI, and diagrams through an MCP bridge",
      "About 58 pull requests a month, up from about 18, and about 27 resolved tickets a month, up from 17",
      "Results are measured with CI and observability data instead of estimated, including what subagents report",
    ],
    stack: ["OpenCode", "Claude", "MCP", "GitHub Copilot"],
  },
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
    title: "Preview environments in the staging cluster",
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
