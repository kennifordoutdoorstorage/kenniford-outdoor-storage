"use client";

import { businessConfig } from "@/lib/config";
import { useCookieConsent, readCookieConsent } from "@/components/CookieNotice";

const MAP_LAT = 50.6982778;
const MAP_LNG = -3.4333056;
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&t=&ie=UTF8&iwloc=&output=embed`;
const MAP_OPEN_URL = `https://www.google.com/maps/place//@${MAP_LAT},${MAP_LNG},17z`;

export default function LocationBlock() {
  const consent = useCookieConsent();

  return (
    <section id="location" className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
            {consent === "accepted" ? (
              <>
                <iframe
                  title="Kenniford Outdoor Storage location map"
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 380 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={MAP_OPEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[var(--card)] px-4 py-2 text-center text-sm font-medium text-[var(--primary)] hover:underline"
                >
                  Open in Google Maps →
                </a>
              </>
            ) : (
              <MapConsentPlaceholder />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Shown when the visitor has not yet accepted cookies (or explicitly
 * declined). The Google Maps iframe sets third-party cookies, so we
 * only render it after consent.
 */
function MapConsentPlaceholder() {
  const acceptAndReload = () => {
    window.localStorage.setItem("kenniford-cookie-consent", "accepted");
    window.dispatchEvent(new CustomEvent("cookieconsentchange", { detail: "accepted" }));
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 bg-[var(--logo-bg-soft)] p-8 text-center"
      style={{ minHeight: 380 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-12 w-12 text-[var(--primary)]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
      <p className="max-w-sm text-sm text-[var(--muted)]">
        The interactive map is embedded from Google and sets its own cookies.
        Load it, or open the location directly in Google Maps.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={acceptAndReload}
          className="min-h-[44px] rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
        >
          Load map
        </button>
        <a
          href={MAP_OPEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]/40"
        >
          Open in Google Maps ↗
        </a>
      </div>
      <p className="mt-2 text-xs text-[var(--muted)]">
        Or, on iPhone, take you straight there using{" "}
        <a
          href={`https://what3words.com/${businessConfig.what3words}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--primary)] hover:underline"
        >
          ///{businessConfig.what3words}
        </a>
      </p>
      <span className="sr-only">{readCookieConsent() ?? ""}</span>
    </div>
  );
}
