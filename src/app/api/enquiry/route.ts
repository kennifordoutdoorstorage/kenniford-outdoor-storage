import { NextRequest, NextResponse } from "next/server";
import { businessConfig } from "@/lib/config";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface EnquiryPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  vehicleType?: unknown;
  vehicleSize?: unknown;
  message?: unknown;
}

export async function POST(request: NextRequest) {
  let body: EnquiryPayload;
  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const vehicleType =
    typeof body.vehicleType === "string" ? body.vehicleType.trim() : "";
  const vehicleSize =
    typeof body.vehicleSize === "string" ? body.vehicleSize.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 100) {
    return NextResponse.json(
      { success: false, error: "Please provide your name." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email." },
      { status: 400 }
    );
  }

  const enquiry = {
    to: businessConfig.email,
    receivedAt: new Date().toISOString(),
    name,
    email,
    phone,
    vehicleType,
    vehicleSize,
    message,
  };

  // Delivery path.
  //
  // If RESEND_API_KEY is set, deliver via Resend. Otherwise, log the
  // enquiry and return success so the UI flow works in local dev without
  // requiring email credentials.
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Default to Resend's built-in sender so the free tier
          // works without a verified domain. Once we own a domain
          // and verify it, override with RESEND_FROM in Vercel env.
          from: process.env.RESEND_FROM ?? "Kenniford Enquiries <onboarding@resend.dev>",
          to: businessConfig.email,
          reply_to: email,
          subject: `New enquiry from ${name} (${vehicleType || "vehicle unspecified"})`,
          html: buildEmailHtml(enquiry),
        }),
      });
      if (!res.ok) {
        const errText = await res.text();
        console.error("[enquiry] resend error:", res.status, errText);
        return NextResponse.json(
          { success: false, error: "Email delivery failed." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("[enquiry] resend threw:", err);
      return NextResponse.json(
        { success: false, error: "Email delivery failed." },
        { status: 502 }
      );
    }
  } else {
    console.log("[enquiry] (no RESEND_API_KEY set — logging only)", enquiry);
  }

  return NextResponse.json({ success: true });
}

function buildEmailHtml(e: {
  name: string;
  email: string;
  phone: string;
  vehicleType: string;
  vehicleSize: string;
  message: string;
}): string {
  const rows: [string, string][] = [
    ["Name", e.name],
    ["Email", e.email],
    ["Phone", e.phone || "(not given)"],
    ["Vehicle type", e.vehicleType || "(not specified)"],
    ["Vehicle size", e.vehicleSize || "(not specified)"],
  ];
  return `
    <h2 style="margin:0 0 12px 0;font-family:system-ui,sans-serif;">New enquiry</h2>
    <table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666;">${k}</td><td style="padding:4px 0;"><strong>${escapeHtml(v)}</strong></td></tr>`
        )
        .join("")}
    </table>
    <h3 style="margin-top:20px;font-family:system-ui,sans-serif;">Message</h3>
    <p style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap;">${escapeHtml(e.message) || "(no message)"}</p>
  `;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
