/**
 * The tech stack shown with brand marks on the front doors. Each entry is a
 * sentence or two about what David has actually done with the thing, not a
 * proficiency score. `icon` maps to a component in components/tech-icons.tsx.
 */
export type StackEntry = {
  icon: "aws" | "kubernetes" | "terraform" | "docker" | "ci" | "datadog";
  name: string;
  body: string;
};

export const stack: StackEntry[] = [
  {
    icon: "aws",
    name: "AWS",
    body: "My core platform at both Agero and Blue Apron. Multi-account organisations, ECS Fargate and EKS, AWS Batch, Aurora, Step Functions, SageMaker, VPC networking and IAM. In 2026 I brought four new accounts into service at Agero, each with keyless CI through OIDC. I own the cost side as well as the architecture.",
  },
  {
    icon: "kubernetes",
    name: "Kubernetes",
    body: "EKS at both Agero and Blue Apron, alongside ECS at Agero. At Agero I rebuilt an AI agent platform's EKS environments and took the downtime out of its deploys with readiness gates, preStop hooks and graceful drain. Shared Helm charts, least-privilege pod identity and version upgrades. Certified Kubernetes Administrator.",
  },
  {
    icon: "terraform",
    name: "Terraform",
    body: "The daily driver for infrastructure. I published 15 modules to a private registry, each with its own terraform test suite and scanning, and Terraform Cloud runs the applies with dynamic credentials. Plan on pull request, apply on merge, so a small team can change production without holding its breath. HashiCorp certified.",
  },
  {
    icon: "ci",
    name: "CI/CD",
    body: "CircleCI and GitHub Actions, with Jenkins earlier in my career. At Agero I built the CircleCI deployment orb that replaced a paid deploy product and now deploys three products across separate accounts, plus an environment per pull request that deploys in 8 to 11 minutes, down from 14.9.",
  },
  {
    icon: "docker",
    name: "Docker",
    body: "Images built, hardened and slimmed, and the dependency patching that keeps them out of the vulnerability reports. I decoupled monoliths into container services back in my consulting days and have been doing it since.",
  },
  {
    icon: "datadog",
    name: "Datadog",
    body: "Dashboards, alerting and service level objectives at both jobs, on-call rotation at both, and the disaster recovery exercises at Agero. I also moved an EKS platform's logs into one Datadog organization with consistent tags, and removed a job that was producing about 23,000 errors a day.",
  },
];
