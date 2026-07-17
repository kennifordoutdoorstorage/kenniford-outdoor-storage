import Link from "next/link";
import { businessConfig } from "@/lib/config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--foreground)] text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm sm:px-6 sm:py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-white">
            {businessConfig.name}
          </p>
          <p className="mt-1 text-white/60">{businessConfig.addressFormatted}</p>
          <p className="mt-1 text-white/60">
            <a href={`tel:${businessConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
              {businessConfig.phone}
            </a>
            {" · "}
            <a href={`mailto:${businessConfig.email}`} className="hover:text-white">
              {businessConfig.email}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-white/60 md:items-end">
          <Link href="/privacy" className="hover:text-white">
            Privacy policy
          </Link>
          <a href="/#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="/#enquire" className="hover:text-white">
            Enquire
          </a>
          <p className="mt-4 text-xs text-white/50">
            © {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
