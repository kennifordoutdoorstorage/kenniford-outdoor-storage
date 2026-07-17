"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { businessConfig } from "@/lib/config";

const navItems = [
  { href: "/#what-we-store", label: "What We Store" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#gallery", label: "The Site" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#location", label: "Location" },
  { href: "/#enquire", label: "Enquire" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <a
            href="https://www.cassoa.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CaSSOA Silver Award — Caravan Storage Site Owners' Association"
            className="flex items-center"
          >
            <Image
              src="/photos/SilverCertificateLogo.jpg"
              alt="CaSSOA Silver Award"
              width={480}
              height={160}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </a>
          <Link
            href="/"
            className="hidden font-display text-lg font-semibold text-[var(--primary)] sm:inline-block"
          >
            {businessConfig.name}
          </Link>
        </div>

        <nav
          aria-label="Primary"
          className="hidden gap-6 text-sm text-[var(--muted)] lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#enquire"
            className="hidden rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)] md:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-[var(--border)]/50 lg:hidden"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[var(--border)] bg-[var(--background)] lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]/40"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
              className="mt-3 rounded-lg px-3 py-3 text-base font-medium text-[var(--primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Call {businessConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
