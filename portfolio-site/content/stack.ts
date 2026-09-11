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
    body: "My core platform at both Agero and Blue Apron. Multi-account organisations, ECS and EKS, RDS and Aurora, OpenSearch, VPC networking and IAM. I own the cost side as well as the architecture, and I hold the Solutions Architect certification.",
  },
  {
    icon: "kubernetes",
    name: "Kubernetes",
    body: "EKS clusters running distributed microservices at Blue Apron, with shared Helm charts, image hardening and version upgrades across every environment. Certified Kubernetes Administrator.",
  },
  {
    icon: "terraform",
    name: "Terraform",
    body: "The daily driver for infrastructure. Multi-account modules, remote state with locking, and plan on pull request with apply on merge, so a small team can change production without holding its breath. HashiCorp certified.",
  },
  {
    icon: "ci",
    name: "CI/CD",
    body: "CircleCI, Jenkins and GitHub Actions in production. At Agero I designed the org-wide CircleCI Orb that replaced a third-party deploy product, plus ephemeral environments spun up per pull request.",
  },
  {
    icon: "docker",
    name: "Docker",
    body: "Images built, hardened and slimmed, and the dependency patching that keeps them out of the vulnerability reports. I decoupled monoliths into container services back in my consulting days and have been doing it since.",
  },
  {
    icon: "datadog",
    name: "Datadog",
    body: "Dashboards, alerting and service level objectives at both jobs, on-call rotation at both, and the annual disaster recovery exercise at Agero.",
  },
];
