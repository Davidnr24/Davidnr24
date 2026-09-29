/**
 * Shown on every host, so it says nothing about which other domains exist and
 * links nowhere. Next includes this boundary in each route's payload, and a
 * cross-domain link here would leak into every page on every domain.
 */
export default function NotFound() {
  return (
    <main className="flex flex-1 items-center px-6 py-24">
      <div className="mx-auto w-full max-w-lg">
        <p className="font-mono text-sm text-mark-text">404</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-[-0.02em]">
          That page isn&rsquo;t here.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The address may be wrong, or the page may have moved.
        </p>
      </div>
    </main>
  );
}
