import { businessConfig } from "@/lib/config";

const tiers = [
  {
    name: "Small",
    for: "Up to 6.99m × 3.5m",
    price: "£468",
    period: "per year",
    features: [
      "Hardstanding pitch",
      "24/7 automatic gated access",
      "24/7 CCTV monitored",
      "Key fob entry",
    ],
    highlight: false,
  },
  {
    name: "Medium",
    for: "Caravans 7m and above × 3.5m",
    price: "£520",
    period: "per year",
    features: [
      "Hardstanding pitch",
      "24/7 automatic gated access",
      "24/7 CCTV monitored",
      "Key fob entry",
    ],
    highlight: true,
  },
  {
    name: "Large",
    for: "Boats & motorhomes, 7m and above × 3.5m",
    price: "£572",
    period: "per year",
    features: [
      "Hardstanding pitch",
      "24/7 automatic gated access",
      "24/7 CCTV monitored",
      "Key fob entry",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-y border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
            Pricing
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Simple, honest annual pricing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            All prices are per year and include 24/7 access, hardstanding pitch,
            and CCTV coverage. Pitches are 3.5m wide.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                tier.highlight
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-lg"
                  : "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]"
              }`}
            >
              <h3 className="font-display text-2xl font-semibold">{tier.name}</h3>
              <p
                className={`mt-1 text-sm ${
                  tier.highlight ? "text-white/80" : "text-[var(--muted)]"
                }`}
              >
                {tier.for}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold">
                  {tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlight ? "text-white/80" : "text-[var(--muted)]"
                  }`}
                >
                  {tier.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className={tier.highlight ? "text-white" : "text-[var(--primary)]"}>
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#enquire"
                className={`mt-8 rounded-full py-3 text-center text-sm font-medium transition-colors ${
                  tier.highlight
                    ? "bg-white text-[var(--primary)] hover:bg-white/90"
                    : "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]"
                }`}
              >
                Enquire now
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 text-center">
          <p className="font-display text-lg font-semibold text-[var(--foreground)]">
            Unsure on size or have a question?
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Give us a call on{" "}
            <a href={`tel:${businessConfig.phone.replace(/\s/g, "")}`} className="font-medium text-[var(--primary)] hover:underline">
              {businessConfig.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${businessConfig.email}`} className="font-medium text-[var(--primary)] hover:underline">
              {businessConfig.email}
            </a>
            .
          </p>
          <p className="mt-4 text-xs text-[var(--muted)]">
            Access is via key fob, supplied on a fully refundable{" "}
            {businessConfig.keyFobDeposit} deposit. Storage agreements are
            non-transferable. All vehicles must be insured.
          </p>
        </div>
      </div>
    </section>
  );
}
