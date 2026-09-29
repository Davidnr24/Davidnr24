import { permanentRedirect } from "next/navigation";

/**
 * The bare domain goes straight to the resume.
 *
 * This used to be a password-gated index listing three front doors, because one
 * project served this domain plus the company and agency ones. Each of those
 * has its own repo and domain now, so there is nothing here to keep private and
 * nothing to choose between: a recruiter who types the domain wants the resume.
 * /freelance is still in the header for anyone buying a contract.
 */
export default function Home() {
  permanentRedirect("/resume");
}
