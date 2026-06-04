import { MapPin } from "lucide-react";

import { ContactCTAs } from "@/components/contact-ctas";
import { HeroIntro } from "@/components/hero-intro";
import { ProfileAvatar } from "@/components/profile-avatar";
import { site } from "@/content/site";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] items-center px-6 py-10 sm:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 sm:gap-8">
        <ProfileAvatar
          src="/profile.png"
          className="size-24 sm:size-32 lg:size-40"
        />

        <HeroIntro />

        <ContactCTAs size="lg" className="pt-1" />

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden />
            {site.location} · bilingual EN / ES
          </span>
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <span>AWS Solutions Architect · CKA · Terraform Associate</span>
        </div>
      </div>
    </section>
  );
}
