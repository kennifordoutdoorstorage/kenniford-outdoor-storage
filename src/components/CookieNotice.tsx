"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "kenniford-cookie-consent";

/** Read consent state from localStorage. Returns null if never answered. */
export function readCookieConsent(): "accepted" | "declined" | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  if (v === "accepted" || v === "declined") return v;
  return null;
}

function setConsent(value: "accepted" | "declined") {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent("cookieconsentchange", { detail: value }));
}

/**
 * Hook: subscribe to the consent state and re-render on change.
 * Returns null on initial SSR render, then the current value on client mount.
 */
export function useCookieConsent(): "accepted" | "declined" | null {
  const [state, setState] = useState<"accepted" | "declined" | null>(null);
  useEffect(() => {
    setState(readCookieConsent());
    const handler = () => setState(readCookieConsent());
    window.addEventListener("cookieconsentchange", handler);
    return () => window.removeEventListener("cookieconsentchange", handler);
  }, []);
  return state;
}

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show the notice if consent hasn't been given or refused yet.
    setVisible(readCookieConsent() === null);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[var(--card)] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
        <p className="text-sm text-[var(--muted)]">
          We use essential cookies to make the site work. If you accept, we&apos;ll
          also load an embedded Google Map on the Location page — Google may
          set its own cookies.{" "}
          <Link href="/privacy" className="font-medium text-[var(--primary)] hover:underline">
            Read our privacy policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          <button
            type="button"
            onClick={() => {
              setConsent("declined");
              setVisible(false);
            }}
            className="min-h-[44px] rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]/40"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => {
              setConsent("accepted");
              setVisible(false);
            }}
            className="min-h-[44px] rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
