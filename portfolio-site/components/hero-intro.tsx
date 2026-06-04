"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HeroIntro() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-3"
    >
      <motion.p
        variants={line}
        className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
      >
        David Navarro
      </motion.p>
      <motion.h1
        variants={line}
        className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Senior DevOps / Platform Engineer.
      </motion.h1>
      <motion.p
        variants={line}
        className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
      >
        I build the infrastructure that keeps software running. AWS, Kubernetes,
        Terraform, and CI/CD pipelines that ship reliably.
      </motion.p>
    </motion.div>
  );
}
