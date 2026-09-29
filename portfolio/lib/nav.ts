export type NavLink = { href: string; label: string };

/**
 * Two front doors, each for one audience, each with its own navigation, so a
 * visitor reading the resume never gets the contracting pitch and vice versa.
 * The bare domain redirects to /resume.
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
