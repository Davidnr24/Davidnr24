export type NavLink = { href: string; label: string };

/**
 * The site has three front doors, each for one audience, each with its own
 * navigation. A visitor sent to /resume never sees the contracting pitch, and
 * a coach sent to the agency pages never sees either. The private index at /
 * is the only place all three are listed.
 */
export const resumeNav: NavLink[] = [
  { href: "/resume", label: "Home" },
  { href: "/resume/career", label: "Career" },
  { href: "/resume/skills", label: "Skills" },
  { href: "/resume/projects", label: "Projects" },
  { href: "/resume/personal", label: "Personal" },
];

export const freelanceNav: NavLink[] = [
  { href: "/freelance", label: "Home" },
  { href: "/freelance/career", label: "Career" },
  { href: "/freelance/skills", label: "Skills" },
  { href: "/freelance/projects", label: "Projects" },
  { href: "/freelance/personal", label: "Personal" },
];
