export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let payload: Record<string, unknown> = {};
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";
  if (!name || !message) {
    return Response.json(
      { ok: false, error: "Name and message are required" },
      { status: 400 },
    );
  }

  const webhook = process.env.WEBHOOK_URL_CONTACT;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "contact", ...payload }),
      });
    } catch {
      // Webhook delivery failed; still confirm receipt to the visitor.
    }
  }

  return Response.json({ ok: true, delivered: Boolean(webhook) });
}
