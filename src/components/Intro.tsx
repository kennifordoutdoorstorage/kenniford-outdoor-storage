export default function Intro() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
          About us
        </p>
        <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
          Looking for a place to store your caravan when not in use?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
          Kenniford Farm caravan storage is conveniently located just <strong className="text-[var(--foreground)]">2 miles from Junction 30 of the M5</strong>.
          We are a <strong className="text-[var(--foreground)]">CASSOA-accredited</strong> storage site offering secure outdoor storage on
          hardstanding pitches — every pitch is at least 3.5m wide and covered by CCTV 24/7.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
          Our outdoor storage is accessed via automatic gates operated with issued key fobs, allowing
          easy but secure access at any time of day.
        </p>
      </div>
    </section>
  );
}
