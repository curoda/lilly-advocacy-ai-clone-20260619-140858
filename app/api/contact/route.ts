import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Contact ("Ask a question") form endpoint.
//
// The original site posts to /api/contact and delivers the message via Resend.
// That backend secret (RESEND_API_KEY) is not part of the captured front end,
// so this route reproduces the same contract:
//   - validates the three required fields
//   - if RESEND_API_KEY is configured, sends the email via Resend
//   - otherwise accepts the submission (returns 200) so the form behaves
//     identically in the UI. NOTE: without the key no email is delivered.
// See the Manual-handling note in README for wiring up real delivery.
export async function POST(request: Request) {
  let body: { name?: string; email?: string; question?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const question = (body.question || "").trim();

  if (!name || !email || !question) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "curt@helloeiko.com";
  const from = process.env.CONTACT_FROM || "Advocacy AI <onboarding@resend.dev>";

  if (!apiKey) {
    // No mail provider configured in this clone — accept the submission so the
    // UI behaves the same. (No email is actually sent.)
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New question from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nQuestion:\n${question}`,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ error: "Delivery error" }, { status: 502 });
  }
}
