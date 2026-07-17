import { businessConfig } from "@/lib/config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--foreground)] text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-white">
            {businessConfig.name}
          </p>
          <p className="mt-1 text-white/60">{businessConfig.addressFormatted}</p>
        </div>
        <div className="text-white/60">
          <a
            href={`mailto:${businessConfig.email}`}
            className="hover:text-white"
          >
            {businessConfig.email}
          </a>
          <p className="mt-1">
            © {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
