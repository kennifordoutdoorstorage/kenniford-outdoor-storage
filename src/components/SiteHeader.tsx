import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/lib/config";

const navItems = [
  { href: "#what-we-store", label: "What We Store" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gallery", label: "The Site" },
  { href: "#pricing", label: "Pricing" },
  { href: "#location", label: "Location" },
  { href: "#enquire", label: "Enquire" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
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
        <nav className="hidden gap-6 text-sm text-[var(--muted)] lg:flex">
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
        <a
          href="#enquire"
          className="hidden rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)] md:inline-block"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
