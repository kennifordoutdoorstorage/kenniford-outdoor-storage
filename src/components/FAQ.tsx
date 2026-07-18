// The visible copy here MUST stay in sync with the FAQPage JSON-LD
// in src/app/layout.tsx — Google inspects both and drops FAQ rich
// snippets if the schema mentions questions that aren't on the page.

const faqs = [
  {
    q: "How close is Kenniford to the M5?",
    a: "Kenniford Farm is just 2 miles from Junction 30 of the M5, near Clyst St Mary in Exeter. Easy on and off the motorway whether you're heading to Devon, Cornwall, or beyond.",
  },
  {
    q: "What size pitches do you offer?",
    a: "All pitches are 3.5m wide and on hardstanding. We offer three lengths: Small (up to 6.99m), Medium (7m+) for caravans, and Large (7m+) for motorhomes and boats.",
  },
  {
    q: "Do insurers offer a discount for CaSSOA sites?",
    a: "Yes — most UK caravan and motorhome insurers offer a discount when your vehicle is stored at a CaSSOA-registered site. Kenniford holds the CaSSOA Silver Award. Check with your insurer for the exact discount.",
  },
  {
    q: "What are your access hours?",
    a: "The gate is open 7am to 8pm daily, entered with an issued key fob. Outside these hours, access can be arranged by prior agreement.",
  },
  {
    q: "What does storage cost?",
    a: "Annual rates start at £468 for Small (up to 6.99m), £520 for Medium (caravans 7m+), and £572 for Large (boats and motorhomes 7m+). All prices include VAT. You can also pay by 3-month or 6-month periods.",
  },
  {
    q: "Is there a deposit for the key fob?",
    a: "Yes — a fully refundable £10 deposit is taken for the access key fob when you start your storage agreement.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
            Frequently asked
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Answers to the common questions.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-[var(--foreground)] list-none">
                {item.q}
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--logo-bg-soft)] text-[var(--primary)] transition-transform group-open:rotate-45"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
