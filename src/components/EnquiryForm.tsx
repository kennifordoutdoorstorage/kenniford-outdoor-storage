"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const VEHICLE_TYPES = ["Caravan", "Motorhome", "Boat", "Car", "Other"];
const VEHICLE_SIZES = ["Small", "Medium", "Large", "Other"];

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [vehicleType, setVehicleType] = useState<string>("");
  const [vehicleTypeOther, setVehicleTypeOther] = useState<string>("");
  const [vehicleSize, setVehicleSize] = useState<string>("");
  const [vehicleSizeOther, setVehicleSizeOther] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    // If "Other" is selected, use the free-text value in the payload
    // instead of the literal string "Other".
    const typeValue =
      vehicleType === "Other" && vehicleTypeOther.trim()
        ? `Other: ${vehicleTypeOther.trim()}`
        : vehicleType;
    const sizeValue =
      vehicleSize === "Other" && vehicleSizeOther.trim()
        ? `Other: ${vehicleSizeOther.trim()}`
        : vehicleSize;
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      vehicleType: typeValue,
      vehicleSize: sizeValue,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setVehicleType("");
      setVehicleTypeOther("");
      setVehicleSize("");
      setVehicleSizeOther("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email or call us directly.");
    }
  }

  return (
    <section id="enquire" className="bg-[var(--background)]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
            Enquire
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Ready to reserve your pitch?
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Fill in the form and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {status === "sent" ? (
          <div className="rounded-2xl border border-[var(--primary)] bg-[var(--card)] p-10 text-center">
            <h3 className="font-display text-2xl font-semibold text-[var(--primary)]">
              Thanks — enquiry received.
            </h3>
            <p className="mt-3 text-[var(--muted)]">
              We&apos;ll be in touch shortly. For anything urgent, call us on{" "}
              <a href="tel:01392875938" className="font-medium text-[var(--primary)] hover:underline">
                01392 875938
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>

            <Field label="Email" name="email" type="email" required />

            <ChipGroupWithOther
              label="Vehicle type"
              options={VEHICLE_TYPES}
              selected={vehicleType}
              onSelect={setVehicleType}
              otherValue={vehicleTypeOther}
              onOtherChange={setVehicleTypeOther}
              otherPlaceholder="Please tell us what you're storing"
            />

            <ChipGroupWithOther
              label="Vehicle size"
              options={VEHICLE_SIZES}
              selected={vehicleSize}
              onSelect={setVehicleSize}
              otherValue={vehicleSizeOther}
              onOtherChange={setVehicleSizeOther}
              otherPlaceholder="Please give approximate dimensions"
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[var(--foreground)]" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Anything else we should know — preferred start date, questions..."
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-full bg-[var(--primary)] py-3 font-medium text-white transition-colors hover:bg-[var(--primary-hover)] disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send enquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[var(--foreground)]" htmlFor={name}>
        {label}
        {required && <span className="text-[var(--primary)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none"
      />
    </div>
  );
}

function ChipGroupWithOther({
  label,
  options,
  selected,
  onSelect,
  otherValue,
  onOtherChange,
  otherPlaceholder,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  otherValue: string;
  onOtherChange: (value: string) => void;
  otherPlaceholder: string;
}) {
  const showOther = selected === "Other";
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[var(--foreground)]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isActive = selected === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                  : "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--primary)]"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {showOther && (
        <input
          type="text"
          value={otherValue}
          onChange={(e) => onOtherChange(e.target.value)}
          placeholder={otherPlaceholder}
          className="mt-1 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none"
        />
      )}
    </div>
  );
}
