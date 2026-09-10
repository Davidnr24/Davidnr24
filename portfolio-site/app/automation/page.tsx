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
    "I build automations for online coaches so client notes, session summaries, and follow-ups handle themselves. Get hours back every week and take on more clients. Free workflow audit.",
  keywords: [
    "workflow automation for coaches",
    "online coaching automation",
    "client notes automation",
    "session summaries",
    "coaching admin",
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
      "Client notes, session summaries, and follow-ups that handle themselves. Get hours back every week with a free workflow audit.",
    url: "/automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow automation for online coaches | David Navarro",
    description:
      "Client notes, session summaries, and follow-ups that handle themselves. Get hours back every week with a free workflow audit.",
  },
};

// Case study published with Alfre's permission (call on 1 Sept 2026). The
// numbers and the quote come from that call. Get his written OK on the exact
// quote wording before sharing this page widely.
const content: AutomationLandingContent = {
  lang: "en",
  topRule: "david-navarro.dev / automation for online coaches",
  hero: {
    h1Before: "Get",
    h1Marked: "hours back",
    h1After: "every week. Take on more clients, not more admin.",
    subhead:
      "I build automations for online coaches so client onboarding, session notes, and follow-ups handle themselves.",
    cta: "Get a free workflow audit",
    micro: ["free", "30 minutes", "no tech talk"],
  },
  mailto: {
    subject: "Free workflow audit",
    bodyLines: [
      "Hi David,",
      "",
      "I'd like a free workflow audit.",
      "",
      "- My name:",
      "- What kind of coaching I do:",
      "- Roughly how many clients I work with:",
      "- The admin task that eats most of my time:",
      "",
      "Thanks!",
    ],
  },
  pain: {
    heading: "Sound familiar?",
    items: [
      {
        title: "Notes at 9pm",
        body: "You finish your last session, then spend the evening rewriting notes while dinner gets cold.",
      },
      {
        title: "Copy, paste, repeat",
        body: "The same client info gets typed into your spreadsheet, your coaching app, and your inbox. Three times.",
      },
      {
        title: "Follow-ups slip",
        body: "A check-in gets missed, a client feels forgotten, and you only notice when they go quiet.",
      },
    ],
  },
  how: {
    heading: "Three steps. You stay in control.",
    steps: [
      {
        title: "A quick call",
        body: "We walk through how you run your week. I map where your time actually goes and what can run on its own.",
      },
      {
        title: "I build it",
        body: "I connect the tools you already use. You keep coaching. Nothing changes for your clients.",
      },
      {
        title: "You approve it",
        body: "You review everything and sign off before it goes live. Nothing runs without your OK.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "case study",
    name: "AlfreHealth",
    story:
      "Alfre runs AlfreHealth, an online health coaching business. Every new client meant the same hour of admin: screenshots of the intake form, notes from the first call, a client profile typed out by hand, and a first-month plan. I built him a small app that does that part. He pastes in his call notes, picks the client, and the app writes the call summary, the month-one plan, and the welcome message. He reads it, changes a few things, and sends it.",
    flow: [
      "Pulls the intake form and the call notes into one client profile, so nothing gets copied by hand.",
      "Drafts the first month's plan for Alfre to review. Nothing reaches the client until he says so.",
      "Next up: he picks one of his own training routines from a list and the app drops it into the plan.",
    ],
    metrics: [
      { value: "1 hr", label: "saved on every new client" },
      { value: "15 min", label: "to onboard a client. It used to take over an hour." },
      { value: "1", label: "double-click to run it. No terminal, no tech skills." },
    ],
  },
  testimonial: {
    srHeading: "Testimonial",
    quote:
      "It does it brilliantly, really well. An hour per client, an hour per onboarding, that's wild.",
    name: "Alfre, online health coach",
  },
  pricing: {
    heading: "Fixed prices. You pay when it works.",
    items: [
      {
        title: "Priced per phase",
        body: "We agree on what each phase delivers and what it costs before I start. There is no hourly meter running.",
      },
      {
        title: "Paid when it's live",
        body: "You pay for a phase once it's running in your business, not before.",
      },
      {
        title: "Start small",
        body: "The first automation is small on purpose. You see it run before we talk about anything bigger.",
      },
    ],
  },
  about: {
    heading: "Hi, I'm David.",
    body: "I'm a senior engineer who has spent the last five years automating work for large companies. Now I use those same skills to help online coaches run leaner: the repetitive day-to-day work runs itself, so you can take on more clients without burning out.",
  },
  finalCta: {
    heading: "Curious what you could hand off?",
    body: "Book a free workflow audit. We look at how you run your week, and I tell you exactly what could run itself so you can take on more clients without adding hours. If it's not a fit, you still leave with ideas.",
    cta: "Get a free workflow audit",
  },
};

export default function AutomationPage() {
  return <AutomationLanding content={content} />;
}
