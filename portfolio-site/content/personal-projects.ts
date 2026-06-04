export type PersonalProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "Full-stack web" | "DevOps tooling" | "Machine learning" | "Mobile" | "Frontend";
  year: string;
  status: "Production" | "Active development" | "Archived";
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  repoVisibility: "public" | "private";
  // GitHub-style "owner/repo" for the private access-request flow.
  repoFullName?: string;
  notes?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    slug: "squadra",
    name: "Squadra",
    tagline: "World Cup 2026 quiniela web app for friends.",
    description:
      "A real production app: a prediction-pool platform for a private group to compete during the 2026 FIFA World Cup. Auth, RLS, realtime, internationalization, the whole thing. Currently in active use.",
    category: "Full-stack web",
    year: "2026",
    status: "Production",
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Supabase (Auth, Postgres, Realtime, RLS)",
      "next-intl (ES/EN)",
      "Vercel",
    ],
    liveUrl: "https://squadra-game.com",
    repoVisibility: "private",
    repoFullName: "Davidnr24/squadra",
    notes: "Source is private (production app for a closed group).",
  },
  {
    slug: "astra-devops",
    name: "Astra DevOps",
    tagline: "Opinionated Internal Developer Platform for production-grade AWS.",
    description:
      "An IDP that gives startups the deployment workflows and operational maturity of a mature platform team, without having to staff one. Infrastructure runs in the customer's own AWS account; Astra provides the control plane.",
    category: "DevOps tooling",
    year: "2025-2026",
    status: "Active development",
    stack: [
      "TypeScript",
      "Next.js",
      "Terraform",
      "AWS (multi-account)",
      "ECS / EKS",
    ],
    liveUrl: "https://astra-devops.vercel.app",
    repoVisibility: "private",
    repoFullName: "Davidnr24/astra-devops",
    notes:
      "Combines everything I do day-to-day at work into one packaged product: IaC, deploys, observability, security baselines.",
  },
  {
    slug: "xtock",
    name: "Xtock",
    tagline: "ML model that predicts the stock market from X (Twitter) posts.",
    description:
      "Trains and serves a model that ingests posts from X and tries to predict short-term stock movement. Experimental sandbox for ML inference, fine-tuning, and MLOps patterns.",
    category: "Machine learning",
    year: "2025",
    status: "Active development",
    stack: ["JavaScript", "Python (training)", "HuggingFace", "Vercel", "X API"],
    liveUrl: "https://xtock.vercel.app",
    repoVisibility: "private",
    repoFullName: "Davidnr24/xtock",
    notes: "Personal R&D project for exploring inference latency and model serving.",
  },
  {
    slug: "stylistic",
    name: "Stylistic",
    tagline: "Cross-platform fashion app: mobile frontend with a Rails backend.",
    description:
      "React Native (Expo) mobile app backed by a Ruby on Rails + Postgres API. End-to-end CI/CD via CircleCI deploying the phone build and the backend to Render. Demonstrates mobile dev plus full-stack ownership.",
    category: "Mobile",
    year: "2024",
    status: "Archived",
    stack: ["React Native (Expo)", "Ruby on Rails", "PostgreSQL", "CircleCI", "Render.com"],
    repoVisibility: "private",
    repoFullName: "Davidnr24/Stylistic",
    notes: "Mobile app. No public web demo, but screenshots available on request.",
  },
  {
    slug: "generational-pictures",
    name: "Generational Pictures",
    tagline: "Static brand site for a photography studio. Built before the AI boom.",
    description:
      "React + Tailwind static site I designed and coded with a collaborator for a photography brand. The first real frontend project I shipped end-to-end, and a useful proof point that the React and UI work predates the current AI tooling era.",
    category: "Frontend",
    year: "2023-2024",
    status: "Production",
    stack: ["React", "Tailwind CSS", "NoCode Form", "GitHub Pages"],
    liveUrl: "https://generational-pictures.com",
    repoUrl: "https://github.com/Davidnr24/generational-pictures",
    repoVisibility: "public",
  },
];
