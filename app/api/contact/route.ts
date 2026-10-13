import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function errorResponse(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return errorResponse("Please send JSON data.", 415);
  }

  let payload: ContactPayload;
  try {
    const raw = await request.text();
    if (raw.length > 10_000) return errorResponse("Message is too long.", 413);
    payload = JSON.parse(raw) as ContactPayload;
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return errorResponse("Invalid message details.", 400);
    }
  } catch {
    return errorResponse("Invalid message details.", 400);
  }

  // Hidden field: quietly discard simple automated spam submissions.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return errorResponse("Please enter a name between 2 and 100 characters.", 400);
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return errorResponse("Please enter a valid email address.", 400);
  }
  if (message.length < 10 || message.length > 5000) {
    return errorResponse("Your message should contain 10 to 5,000 characters.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "julkernkarim@gmail.com";

  if (!apiKey || !from) {
    return errorResponse("The contact form is not configured yet. Please use the email link instead.", 503);
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
        text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      console.error("Contact email provider returned status", response.status);
      return errorResponse("The message could not be delivered. Please email me directly.", 502);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact email request failed", error instanceof Error ? error.message : "Unknown error");
    return errorResponse("The email service is unavailable right now. Please try again or email me directly.", 502);
  }
}
