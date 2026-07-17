"use client";

import { useState } from "react";
import { businessConfig } from "@/lib/config";

type Duration = "3-monthly" | "6-monthly" | "yearly";

const durationLabels: Record<Duration, string> = {
  "3-monthly": "3 months",
  "6-monthly": "6 months",
  yearly: "Yearly",
};

const durationPeriodShort: Record<Duration, string> = {
  "3-monthly": "for 13 weeks",
  "6-monthly": "for 26 weeks",
  yearly: "per year",
};

const tiers: Array<{
  name: string;
  for: string;
  prices: Record<Duration, string>;
  highlight: boolean;
}> = [
  {
    name: "Small",
    for: "Up to 6.99m × 3.5m",
    prices: {
      "3-monthly": "£117",
      "6-monthly": "£234",
      yearly: "£468",
    },
    highlight: false,
  },
  {
    name: "Medium",
    for: "Caravans 7m and above × 3.5m",
    prices: {
      "3-monthly": "£130",
      "6-monthly": "£260",
      yearly: "£520",
    },
    highlight: true,
  },
  {
    name: "Large",
    for: "Boats & motorhomes, 7m and above × 3.5m",
    prices: {
      "3-monthly": "£143",
      "6-monthly": "£286",
      yearly: "£572",
    },
    highlight: false,
  },
];

const durationOrder: Duration[] = ["3-monthly", "6-monthly", "yearly"];

export default function Pricing() {
  const [duration, setDuration] = useState<Duration>("yearly");

  return (
    <section id="pricing" className="border-y border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
            Pricing
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Simple, honest pricing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Pay quarterly, half-yearly, or annually — whichever suits you.
            Pitches are 3.5m wide, all-inclusive.
          </p>
          <p className="mt-2 text-sm font-medium text-[var(--primary)]">
            All prices include VAT.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Payment frequency"
          className="mx-auto mb-10 flex w-fit flex-wrap justify-center gap-1 rounded-full border border-[var(--border)] bg-[var(--background)] p-1"
        >
          {durationOrder.map((d) => {
            const active = d === duration;
            return (
              <button
                key={d}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setDuration(d)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {durationLabels[d]}
              </button>
            );
          })}
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
                  {tier.prices[duration]}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlight ? "text-white/80" : "text-[var(--muted)]"
                  }`}
                >
                  {durationPeriodShort[duration]}
                </span>
              </div>
              <p
                className={`mt-2 text-xs ${
                  tier.highlight ? "text-white/70" : "text-[var(--muted)]"
                }`}
              >
                inc. VAT
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className={tier.highlight ? "text-white" : "text-[var(--primary)]"}>
                    ✓
                  </span>
                  <span>Hardstanding pitch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={tier.highlight ? "text-white" : "text-[var(--primary)]"}>
                    ✓
                  </span>
                  <span>Gated access (7am – 8pm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={tier.highlight ? "text-white" : "text-[var(--primary)]"}>
                    ✓
                  </span>
                  <span>24/7 CCTV monitored</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={tier.highlight ? "text-white" : "text-[var(--primary)]"}>
                    ✓
                  </span>
                  <span>Key fob entry</span>
                </li>
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
