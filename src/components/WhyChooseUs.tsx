const features = [
  {
    title: "CASSOA accredited",
    body: "Recognised by the Caravan Storage Site Owners Association — meaning insurers know us and often offer a discount.",
  },
  {
    title: "2 miles from M5 Junction 30",
    body: "Easy on, easy off — quick to reach whether you're heading to Devon, Cornwall, or beyond.",
  },
  {
    title: "24/7 CCTV coverage",
    body: "The whole site is covered by CCTV recording around the clock.",
  },
  {
    title: "Automatic gated access",
    body: "Perimeter fenced with automatic gates — enter and exit any time with your issued key fob.",
  },
  {
    title: "Hardstanding pitches",
    body: "Every pitch is at least 3.5m wide on well-drained hardstanding — no soft ground, no bogged-in wheels.",
  },
  {
    title: "Family-run in Devon",
    body: "Local, personal service. When you ring, you speak to a real person on the farm.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
            Why choose Kenniford
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Storage you can trust, from people who care.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-semibold text-[var(--foreground)]">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
