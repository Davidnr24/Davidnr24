"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { MarkerUnderline } from "@/components/marker-underline";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export function HeroIntro() {
  const reduceMotion = useReducedMotion();
  const line: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <motion.p
        variants={line}
        className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground"
      >
        <span aria-hidden className="inline-block size-2 bg-mark" />
        Charlotte, NC <span className="text-mark-text">/</span> English and
        Spanish <span className="text-mark-text">/</span> open to roles and
        contracts
      </motion.p>
      <motion.h1
        variants={line}
        className="max-w-3xl text-balance font-display text-[2.8rem] leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-7xl"
      >
        Infrastructure that{" "}
        <span className="relative inline-block whitespace-nowrap">
          stays up.
          <MarkerUnderline />
        </span>{" "}
        Pipelines that ship.
      </motion.h1>
      <motion.p
        variants={line}
        className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        I&rsquo;m David Navarro, a Senior DevOps / Platform Engineer. Five
        years on AWS, Kubernetes, Terraform and CI/CD at Blue Apron and Agero,
        where I work on the platform team today.
      </motion.p>
    </motion.div>
  );
}
