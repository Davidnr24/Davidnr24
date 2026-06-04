"use client";

import { motion, type Variants } from "motion/react";
import {
  ArrowUpRight,
  Cloud,
  GitBranch,
  Layers,
  ShieldCheck,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
};

const services: Service[] = [
  {
    icon: Cloud,
    title: "AWS architecture & cost",
    body: "Greenfield AWS setup or an audit of an existing account. Networking, IAM, and cost cuts that survive the next quarter.",
    bullets: ["Multi-account orgs", "VPC + networking", "Cost review & savings"],
  },
  {
    icon: GitBranch,
    title: "Terraform & IaC",
    body: "Move click-ops to Terraform with modules and state structure that a small team can safely operate.",
    bullets: ["Module design", "Remote state + locking", "Plan/apply pipelines"],
  },
  {
    icon: Workflow,
    title: "CI/CD pipelines",
    body: "CircleCI, Jenkins, or GitHub Actions tuned for fast, safe deploys. Blue/green, canary, ephemeral envs.",
    bullets: ["Pipeline design", "Ephemeral environments", "Progressive delivery"],
  },
  {
    icon: Layers,
    title: "Kubernetes & containers",
    body: "EKS / GKE clusters and the Helm + ArgoCD plumbing around them. Workloads that scale and recover without paging anyone.",
    bullets: ["Cluster setup", "GitOps with Argo", "Autoscaling + HPA"],
  },
  {
    icon: ShieldCheck,
    title: "Platform reliability & security",
    body: "Observability with Datadog, on-call setup, incident process, and a security baseline you can defend in an audit.",
    bullets: ["SLOs + alerting", "IAM + WAF hardening", "Wiz / Snyk integration"],
  },
  {
    icon: Wrench,
    title: "Internal tooling",
    body: "Small Next.js / Node services and dashboards that unblock your team. The ops tools no one has time to build.",
    bullets: ["Admin dashboards", "Slack + GitHub bots", "Glue scripts that stick"],
  },
];

const grid: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function FreelanceServices() {
  return (
    <motion.ul
      variants={grid}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <motion.li
            key={s.title}
            variants={card}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="group relative"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-foreground/15 via-foreground/0 to-foreground/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 group-hover:border-foreground/30 group-hover:shadow-md">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-foreground/[0.04] to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0"
              />

              <div className="relative flex items-start justify-between">
                <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-muted/60 transition-all duration-300 group-hover:scale-105 group-hover:border-foreground/40 group-hover:bg-foreground group-hover:text-background">
                  <Icon className="size-5 transition-transform duration-300 group-hover:rotate-[-4deg]" aria-hidden />
                </div>
                <ArrowUpRight
                  className="size-4 translate-x-1 -translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-foreground group-hover:opacity-100"
                  aria-hidden
                />
              </div>

              <div className="relative space-y-1.5">
                <h3 className="text-base font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>

              <ul className="relative mt-auto flex flex-wrap gap-1.5 pt-1">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-border/80 bg-background/60 px-2.5 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
