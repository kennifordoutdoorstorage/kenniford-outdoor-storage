import { businessConfig } from "@/lib/config";

export default function LocationBlock() {
  return (
    <section id="location" className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
              Find us
            </p>
            <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              Kenniford Farm, Clyst St Mary — 2 miles from Junction 30 of the M5.
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Easy on and off the M5 — quick to reach from Exeter, Topsham,
              Exmouth, and beyond. Follow your sat-nav to{" "}
              <strong>{businessConfig.address.postcode}</strong>.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-[var(--foreground)]">Address</dt>
                <dd className="mt-1 text-[var(--muted)]">
                  {businessConfig.addressFormatted}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--foreground)]">what3words</dt>
                <dd className="mt-1">
                  <a
                    href={`https://what3words.com/${businessConfig.what3words}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline"
                  >
                    ///{businessConfig.what3words}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--foreground)]">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="text-[var(--primary)] hover:underline"
                  >
                    {businessConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--foreground)]">Hours</dt>
                <dd className="mt-1 space-y-1 text-[var(--muted)]">
                  {businessConfig.openingHours.map((h) => (
                    <div key={h.day}>
                      <span className="font-medium text-[var(--foreground)]">
                        {h.day}:
                      </span>{" "}
                      {h.hours}
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            {/* Pin coordinates: 50°41'53.8"N 3°25'59.9"W
                (decimal 50.6982778, -3.4333056). Using lat,lng as the
                query drops the pin at the exact spot. */}
            <iframe
              title="Kenniford Outdoor Storage location map"
              src="https://maps.google.com/maps?q=50.6982778,-3.4333056&z=17&t=&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/place//@50.6982778,-3.4333056,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[var(--card)] px-4 py-2 text-center text-sm font-medium text-[var(--primary)] hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
