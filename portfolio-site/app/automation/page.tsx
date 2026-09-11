import type { Metadata } from "next";

import {
  AutomationLanding,
  type AutomationLandingContent,
} from "@/components/automation-landing";

export const metadata: Metadata = {
  title: {
    absolute: "Workflow automation for online coaches | David Navarro",
  },
  description:
    "I automate the repetitive work in small businesses with AI, and simplify the tools you run on. Client intake, notes, summaries and follow-ups that handle themselves. The consultation is free.",
  keywords: [
    "AI automation for small business",
    "workflow automation for coaches",
    "business process automation",
    "client onboarding automation",
    "tool consolidation",
    "free automation consultation",
    "David Navarro",
  ],
  alternates: {
    canonical: "/automation",
    languages: {
      en: "/automation",
      es: "/automatizacion",
    },
  },
  openGraph: {
    title: "Workflow automation for online coaches | David Navarro",
    description:
      "AI automation for the repetitive work around your clients, and fewer tools to run it on. The consultation is free.",
    url: "/automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow automation for online coaches | David Navarro",
    description:
      "AI automation for the repetitive work around your clients, and fewer tools to run it on. The consultation is free.",
  },
};

// Case study published with Alfre's permission (call on 1 Sept 2026). The
// numbers and the quote come from that call. Get his written OK on the exact
// quote wording before pushing this page hard.
const content: AutomationLandingContent = {
  lang: "en",
  hero: {
    h1Before: "Get",
    h1Marked: "hours back",
    h1After: "every week. Take on more clients, not more admin.",
    subhead:
      "I use AI to automate the repetitive work around your clients, and I cut down the pile of tools you need to run your business.",
    cta: "Book a free consultation",
    micro: ["completely free", "30 minutes", "no jargon"],
  },
  mailto: {
    subject: "Free consultation",
    bodyLines: [
      "Hi David,",
      "",
      "I'd like to book the free consultation.",
      "",
      "- My name:",
      "- What my business does:",
      "- Roughly how many clients I work with:",
      "- The task that eats most of my week:",
      "",
      "Thanks!",
    ],
  },
  services: {
    heading: "What I do",
    items: [
      {
        title: "Automate your processes with AI",
        body: "Client intake, session notes, summaries, follow-ups. The work that repeats for every single client gets done by software instead, and you review it before anything reaches anyone.",
      },
      {
        title: "Simplify your tools",
        body: "Most people are paying for five tools that half overlap, and still copying the same information between them. I cut that down to what you actually use and make the rest talk to each other.",
      },
      {
        title: "Build the piece that's missing",
        body: "When nothing off the shelf fits how you work, I build a small app that does the one job you need and nothing else.",
      },
    ],
  },
  how: {
    heading: "How it works",
    lede: "Three steps, and the first one costs nothing.",
    steps: [
      {
        title: "A free call",
        body: "Thirty minutes on how you actually run your week: what you do every day, what you repeat for every client, what you put off. No cost, no commitment, no tech talk.",
      },
      {
        title: "I find what's costing you time",
        body: "I map your day to day and come back with the few things worth fixing first, and roughly what each one is costing you in hours.",
      },
      {
        title: "I build it, you approve it",
        body: "I connect the tools you already use. Nothing goes live until you have seen it and signed it off, and nothing changes for your clients.",
      },
    ],
  },
  caseStudy: {
    label: "Case study",
    name: "AlfreHealth",
    story:
      "Alfre runs an online health coaching business. Every new client meant the same hour of admin: screenshots of the intake form, notes from the first call, a client profile typed out by hand, and a plan for the first month. I built him a small app that does that part. He pastes in his call notes, picks the client, and the app writes the summary, the month one plan and the welcome message. He reads it, changes what he wants, and sends it.",
    metrics: [
      { value: "1 hr", label: "saved on every new client" },
      { value: "15 min", label: "to onboard a client, down from over an hour" },
      { value: "0", label: "steps he has to remember" },
    ],
  },
  testimonial: {
    srHeading: "Testimonial",
    quote:
      "It does it brilliantly, really well. An hour saved on every client, every onboarding. That's wild.",
    name: "Alfre, online health coach",
  },
  pricing: {
    heading: "What it costs",
    items: [
      {
        title: "The consultation is free",
        body: "The call, and what I find in it, cost you nothing. That holds whether or not we end up working together.",
      },
      {
        title: "Fixed price per phase",
        body: "We agree what a phase delivers and what it costs before I start. There is no hourly meter running.",
      },
      {
        title: "You pay when it's running",
        body: "A phase gets paid once it works in your business, not before.",
      },
    ],
  },
  about: {
    heading: "Hi, I'm David.",
    body: "I'm a senior engineer. I have spent the last five years automating work inside large companies, the kind that count the savings in engineer hours per month. I do the same thing now for small businesses, where an hour a day matters a great deal more.",
  },
  finalCta: {
    heading: "Let's find an hour in your week.",
    body: "Book the call. We go through how you run your week and I tell you what could run without you. If it is not a fit, you keep the ideas anyway.",
    cta: "Book a free consultation",
    note: "Free, no commitment.",
  },
};

export default function AutomationPage() {
  return <AutomationLanding content={content} />;
}
