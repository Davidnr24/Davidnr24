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
              I grew up in Spain, between Alcalá de Henares and Madrid, and
              moved to the US to start my career. Virginia first, then Boston,
              and now Charlotte. I work in English and Spanish, which has come
              in useful more often than I expected, since most of the teams
              I&rsquo;ve been on were spread across time zones anyway.
            </p>
            <p>
              Most evenings I end up building something. Usually a side
              project I&rsquo;ve been turning over for weeks. Sometimes
              it&rsquo;s just an excuse to try a tool I keep reading about.
              Either way it&rsquo;s where the bad first version gets made,
              well before anything goes near production.
            </p>
            <p>
              Real Madrid since I was a kid, like most people I grew up with.
              I still play football with friends most Sundays. Tennis when the
              weather cooperates, snowboarding whenever I can get to the
              mountains, gym the rest of the time.
            </p>
            <p>
              Chess is the other one. I&rsquo;ve played for years and I
              don&rsquo;t lose often.
            </p>
            <p>
              I spend a good part of the year back in Europe and usually add a
              trip somewhere onto it. When I want to switch off without going
              anywhere, I drive. The Camaro is a manual, which is most of the
              point.
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
