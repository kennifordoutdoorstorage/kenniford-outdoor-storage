import Image from "next/image";

export default function CassoaSection() {
  return (
    <section id="cassoa" className="border-t border-[var(--border)] bg-[var(--logo-bg-soft)]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <div className="mx-auto lg:mx-0">
            <Image
              src="/photos/SilverCertificateLogo.jpg"
              alt="CaSSOA Silver Award — Caravan Storage Site Owners' Association"
              width={480}
              height={160}
              className="h-auto w-56 sm:w-64"
            />
          </div>
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
              Accredited &amp; recognised
            </p>
            <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              A CaSSOA Silver Award site.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Kenniford Outdoor Storage is a proud member of{" "}
              <strong className="text-[var(--foreground)]">CaSSOA</strong> — the
              Caravan Storage Site Owners&apos; Association — and holds their{" "}
              <strong className="text-[var(--foreground)]">Silver Award</strong>{" "}
              for site security and standards.
            </p>
            <p className="mt-4 text-[var(--muted)]">
              CaSSOA is the industry body that inspects and certifies caravan
              storage sites across the UK. The Silver Award recognises sites
              with strong perimeter security, controlled access, CCTV
              monitoring, and a proven operational track record.
            </p>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="text-sm font-medium text-[var(--foreground)]">
                What this means for you
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>
                    Many insurers offer discounts when your caravan or
                    motorhome is stored at a CaSSOA-registered site — check
                    with your provider.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>
                    You know the site meets national standards for
                    fencing, gating, lighting, and CCTV coverage.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)]">✓</span>
                  <span>
                    Independent inspection and continuous compliance — not just
                    a marketing badge.
                  </span>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Learn more at{" "}
              <a
                href="https://www.cassoa.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--primary)] hover:underline"
              >
                cassoa.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
