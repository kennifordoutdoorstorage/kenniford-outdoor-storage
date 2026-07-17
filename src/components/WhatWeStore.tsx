const items = [
  {
    icon: "🚐",
    title: "Caravans",
    description:
      "Touring caravans of every size — from small 2-berth to twin-axle luxury vans.",
  },
  {
    icon: "🚚",
    title: "Motorhomes",
    description:
      "Long-wheelbase motorhomes and campervans, with plenty of manoeuvring room.",
  },
  {
    icon: "⛵",
    title: "Boats & trailers",
    description:
      "Boats on trailers, jet-skis, and general utility trailers — all welcome.",
  },
  {
    icon: "🏕️",
    title: "Trailer tents & pods",
    description:
      "Folding campers, trailer tents, and small trailer-mounted units.",
  },
];

export default function WhatWeStore() {
  return (
    <section id="what-we-store" className="bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
            What we store
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            If it has wheels and needs a home, we&apos;ve got you covered.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 font-display text-xl font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
