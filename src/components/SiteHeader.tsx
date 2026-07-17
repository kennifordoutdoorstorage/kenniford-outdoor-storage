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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold text-[var(--primary)]">
          {businessConfig.name}
        </Link>
        <nav className="hidden gap-8 text-sm text-[var(--muted)] md:flex">
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
