import { site } from "@/content/site";

function encode(value: string) {
  return encodeURIComponent(value);
}

/**
 * Pre-fills the user's email client with a template asking David for
 * read access to a private GitHub repo. They edit the placeholders and
 * hit send. No JS form, no backend.
 */
export function buildAccessRequestMailto(repoFullName: string): string {
  const subject = `Repo access request: ${repoFullName}`;
  const body = [
    `Hi David,`,
    ``,
    `I'd like to request read access to your private repository "${repoFullName}".`,
    ``,
    `A bit about me:`,
    `- Name:`,
    `- Company:`,
    `- Role:`,
    `- Location:`,
    `- GitHub username:`,
    `- LinkedIn:`,
    ``,
    `Reason for the request:`,
    ``,
    ``,
    `Thanks,`,
  ].join("\n");

  return `mailto:${site.email}?subject=${encode(subject)}&body=${encode(body)}`;
}

export function buildHireMeMailto(context?: string): string {
  const subject = context
    ? `Hire / contract inquiry: ${context}`
    : `Hire / contract inquiry`;
  const body = [
    `Hi David,`,
    ``,
    `I'd like to talk to you about ${context ?? "a role or contract"}.`,
    ``,
    `A bit about us:`,
    `- Company:`,
    `- Role / scope:`,
    `- Timeline:`,
    `- Engagement type (full-time / contract / consulting):`,
    `- Tech stack:`,
    ``,
    `Best way to reach you for a 30-min intro call?`,
    ``,
    `Thanks,`,
  ].join("\n");

  return `mailto:${site.email}?subject=${encode(subject)}&body=${encode(body)}`;
}
