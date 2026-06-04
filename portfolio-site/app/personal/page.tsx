import type { Metadata } from "next";
import Image from "next/image";

import { ContactCTAs } from "@/components/contact-ctas";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Personal",
  description:
    "A bit about David Navarro outside of work: where he's from, what he likes to build on the side, and what he gets up to away from a keyboard.",
};

export default function PersonalPage() {
  return (
    <main className="px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-2xl space-y-12">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Personal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Beyond the terminal.
          </h1>
        </header>

        <Separator />

        <section className="space-y-6 text-base leading-relaxed text-foreground/90">
          <p>
            I was born and raised in Spain, between Alcalá de Henares and
            Madrid, and moved to the US to start my career. From there it was
            Virginia, then Boston, and eventually Charlotte, NC, where
            I&rsquo;m based now. I&rsquo;m bilingual in English and Spanish,
            and bouncing between cultures and time zones has come in handy on
            every distributed team I&rsquo;ve worked with.
          </p>
          <p>
            Most evenings I end up back at the keyboard anyway, building
            something. Sometimes that&rsquo;s a side project that&rsquo;s been
            bouncing around my head for weeks, other times it&rsquo;s just an
            excuse to play with a tool I&rsquo;ve been meaning to learn. It&rsquo;s
            where I get to make the messy first version of things before any
            of it goes near real production.
          </p>
          <p>
            I grew up obsessed with Real Madrid, like most kids in Spain, and
            a kickabout with friends on a Sunday still beats most other ways
            to spend an afternoon. The rest of the week I try to stay active.
            Tennis when the weather plays along, snowboarding whenever I can
            get out to the mountains, and the gym to keep things consistent in
            between.
          </p>

          <div className="not-prose grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <Image
                src="/personal/soccer.jpeg"
                alt="Playing soccer"
                width={1200}
                height={1200}
                sizes="(min-width: 640px) 320px, 100vw"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </figure>
            <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <Image
                src="/personal/snowboard.jpeg"
                alt="Snowboarding in the mountains"
                width={1200}
                height={1200}
                sizes="(min-width: 640px) 320px, 100vw"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </figure>
          </div>

          <p>
            Off the pitch, chess is the other thing I take seriously. I&rsquo;ve
            been playing for years and I&rsquo;m hard to beat. Same instinct as
            the day job: pattern-match, think a few moves ahead, and
            don&rsquo;t blow up your own position.
          </p>
          <p>
            I still split a good chunk of the year between the US and Europe
            and will take any excuse to fly out and see somewhere new on the
            continent. And when I need a break from coding without leaving
            home, the move is usually a drive in my manual Chevy Camaro. Best
            way I&rsquo;ve found to clear my head.
          </p>
        </section>

        <section className="rounded-lg border border-border/60 bg-muted/30 p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Let&rsquo;s talk
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Whether it&rsquo;s work or just to compare notes on AWS bills.
          </p>
          <ContactCTAs className="mt-4" />
        </section>
      </div>
    </main>
  );
}
