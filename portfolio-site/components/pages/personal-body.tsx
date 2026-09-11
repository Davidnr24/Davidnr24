import Image from "next/image";

export function PersonalBody({ children }: { children?: React.ReactNode }) {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <header>
          <h1 className="max-w-4xl text-balance font-display text-[2.8rem] leading-[0.98] tracking-[-0.02em] sm:text-6xl">
            Beyond the terminal.
          </h1>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-border pt-10 md:grid-cols-3">
          <div className="space-y-6 text-base leading-relaxed text-foreground/90 md:col-span-2 md:text-lg">
            <p>
              I was born and raised in Spain, between Alcalá de Henares and
              Madrid, and I moved to the US to start my career. Virginia
              first, then Boston, and now Charlotte. I&rsquo;m bilingual in
              English and Spanish, which has mattered more than I expected on
              teams spread across several countries.
            </p>
            <p>
              Most evenings I end up building something. Usually it&rsquo;s a
              side project I&rsquo;ve been thinking about for weeks, and
              sometimes it&rsquo;s just an excuse to try a tool I keep reading
              about. Most of them never turn into anything, but a few have,
              and I learn more from the ones that break than from the ones
              that work.
            </p>
            <p>
              I&rsquo;ve supported Real Madrid since I was a kid, which is
              fairly standard for someone who grew up where I did, and I still
              play football with friends most Sundays. I play tennis when the
              weather allows it, snowboard whenever I can get to the
              mountains, and go to the gym to fill in the rest of the week.
            </p>
            <p>
              Chess is the other thing I take seriously. I&rsquo;ve been
              playing for years and I&rsquo;m hard to beat.
            </p>
            <p>
              I still spend a good part of the year in Europe, and I usually
              add a trip somewhere new while I&rsquo;m over there. When I want
              to switch off without leaving home, I go for a drive in my
              Camaro, which is a manual, and that is the whole reason I
              bought it.
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
