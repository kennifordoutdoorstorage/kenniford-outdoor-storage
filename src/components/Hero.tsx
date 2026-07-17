import Image from "next/image";
import { businessConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[var(--logo-bg)] text-[var(--foreground)]"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="mx-auto mb-8 w-56 sm:w-72">
          <Image
            src="/photos/logo.jpg"
            alt="Kenniford Outdoor Storage logo"
            width={512}
            height={504}
            priority
            className="mx-auto h-auto w-full"
          />
        </div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--primary)]">
          Clyst St Mary · Exeter · Devon
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-6xl">
          Secure caravan storage on the doorstep of the M5.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--foreground)]/75 sm:text-xl">
          {businessConfig.tagline} — hardstanding pitches, CCTV coverage, and 24/7 gated access.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#enquire"
            className="rounded-full bg-[var(--primary)] px-7 py-3 text-base font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Check availability
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-[var(--primary)]/30 px-7 py-3 text-base font-medium text-[var(--primary)] transition-colors hover:bg-white/40"
          >
            See our prices
          </a>
        </div>
      </div>
    </section>
  );
}
