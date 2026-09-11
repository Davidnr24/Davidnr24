import Image from "next/image";


export function PersonalBody({ children }: { children?: React.ReactNode }) {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <header>
          <h1 className="max-w-3xl text-balance font-display text-[2.6rem] leading-[1.03] tracking-[-0.02em] sm:text-5xl">
            Beyond the terminal.
          </h1>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-border pt-10 md:grid-cols-3">
          <div className="space-y-6 text-base leading-relaxed text-foreground/90 md:col-span-2 md:text-lg">
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
              something. Sometimes that&rsquo;s a side project that&rsquo;s
              been bouncing around my head for weeks, other times it&rsquo;s
              just an excuse to play with a tool I&rsquo;ve been meaning to
              learn. It&rsquo;s where I get to make the messy first version of
              things before any of it goes near real production.
            </p>
            <p>
              I grew up obsessed with Real Madrid, like most kids in Spain, and
              a kickabout with friends on a Sunday still beats most other ways
              to spend an afternoon. The rest of the week I try to stay active.
              Tennis when the weather plays along, snowboarding whenever I can
              get out to the mountains, and the gym to keep things consistent
              in between.
            </p>
            <p>
              Off the pitch, chess is the other thing I take seriously.
              I&rsquo;ve been playing for years and I&rsquo;m hard to beat.
              Same instinct as the day job: pattern-match, think a few moves
              ahead, and don&rsquo;t blow up your own position.
            </p>
            <p>
              I still split a good chunk of the year between the US and Europe
              and will take any excuse to fly out and see somewhere new on the
              continent. And when I need a break from coding without leaving
              home, the move is usually a drive in my manual Chevy Camaro. Best
              way I&rsquo;ve found to clear my head.
            </p>
          </div>

          <div className="space-y-4 md:col-span-1 md:sticky md:top-20 md:self-start">
            <Image
              src="/personal/soccer.jpeg"
              alt="Playing soccer"
              width={1200}
              height={1200}
              sizes="(min-width: 768px) 320px, 100vw"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <Image
              src="/personal/snowboard.jpeg"
              alt="Snowboarding in the mountains"
              width={1200}
              height={1200}
              sizes="(min-width: 768px) 320px, 100vw"
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {children}
      </div>
    </main>
  );
}
