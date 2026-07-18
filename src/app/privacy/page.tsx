import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Kenniford Outdoor Storage",
  description:
    "How Kenniford Outdoor Storage collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  const lastUpdated = "July 2026";
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-[var(--background)]">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
            Legal
          </p>
          <h1 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Last updated: {lastUpdated}
          </p>

          <div className="prose prose-slate mt-8 max-w-none space-y-6 text-[var(--foreground)]">
            <p>
              This privacy policy explains what personal information{" "}
              <strong>{businessConfig.name}</strong> collects when you use this
              website, why we collect it, how it is used, and what your rights
              are under UK data-protection law (UK GDPR and the Data Protection
              Act 2018).
            </p>

            <h2 className="font-display text-xl font-semibold">Who we are</h2>
            <p>
              {businessConfig.name} is the data controller for personal
              information collected through this website. You can contact us
              at:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-[var(--muted)]">
              <li>Email: {businessConfig.email}</li>
              <li>Phone: {businessConfig.phone}</li>
              <li>Address: {businessConfig.addressFormatted}</li>
            </ul>

            <h2 className="font-display text-xl font-semibold">
              What we collect and why
            </h2>
            <p>
              We only collect the personal information you actively give us:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-[var(--muted)]">
              <li>
                <strong>Enquiry form</strong> — your name, email address,
                phone number, details about the vehicle you want to store, and
                any message you send. We use this to reply to your enquiry and
                to arrange storage if you become a customer.
              </li>
              <li>
                <strong>Server logs</strong> — our hosting provider (Vercel)
                records your IP address and basic technical information for
                each request. This is used only for security, debugging, and to
                keep the site online.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> use tracking pixels, advertising
              cookies, or any analytics service that identifies you personally.
            </p>

            <h2 className="font-display text-xl font-semibold">Cookies</h2>
            <p>
              This site uses browser storage (local storage) only to remember
              your cookie-preference choice.
            </p>
            <p>
              The <strong>Location</strong>{" "}section can display an embedded
              Google Map. Google Maps is a third-party service that may set
              cookies of its own. We do not load the Google Map until you have
              accepted cookies via the notice at the bottom of the site. If you
              choose &quot;Essential only&quot;, no Google Maps embed is loaded
              and no third-party cookies are set.
            </p>

            <h2 className="font-display text-xl font-semibold">
              Who we share it with
            </h2>
            <p>
              We do not sell or rent your data. We share it only with:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-[var(--muted)]">
              <li>
                Our <strong>hosting provider</strong> (Vercel Inc.) — required
                to serve the site.
              </li>
              <li>
                Our <strong>email delivery provider</strong> (Resend Inc., if
                configured) — used to deliver enquiry-form messages to us.
              </li>
            </ul>
            <p>
              Both are contracted data processors and only process your data on
              our instructions.
            </p>

            <h2 className="font-display text-xl font-semibold">
              How long we keep it
            </h2>
            <p>
              Enquiries that do not become customers are kept for up to 12
              months and then deleted. If you become a customer, we keep your
              contact details for the duration of your storage agreement plus
              seven years for tax and record-keeping purposes.
            </p>

            <h2 className="font-display text-xl font-semibold">Your rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul className="ml-6 list-disc space-y-1 text-[var(--muted)]">
              <li>Ask what data we hold about you</li>
              <li>Ask us to correct anything that is wrong</li>
              <li>Ask us to delete your data (where we no longer need it)</li>
              <li>Object to how we use it</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href={`mailto:${businessConfig.email}`}
                className="font-medium text-[var(--primary)] hover:underline"
              >
                {businessConfig.email}
              </a>
              . We will respond within one month.
            </p>
            <p>
              If you are unhappy with how we handle your data, you can complain
              to the UK Information Commissioner&apos;s Office (
              <a
                href="https://ico.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--primary)] hover:underline"
              >
                ico.org.uk
              </a>
              ).
            </p>

            <h2 className="font-display text-xl font-semibold">
              Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. Material changes
              will be highlighted at the top of the page.
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="inline-block rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]/40"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
