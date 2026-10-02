"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          message: String(data.get("message") ?? ""),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "sent") {
    return (
      <div
        style={{
          border: "1px solid rgba(28,25,22,0.2)",
          borderRadius: 8,
          padding: 32,
          background: "#ffffff",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            marginBottom: 8,
          }}
        >
          Message received.
        </div>
        <p style={{ margin: 0, fontSize: 17, color: "var(--muted)" }}>
          Thank you — a strategist from TMG will follow up shortly. Prefer to
          talk now? Call 348-7753434.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontSize: 17,
    padding: "14px 16px",
    borderRadius: 8,
    border: "1px solid rgba(28,25,22,0.25)",
    background: "#ffffff",
    color: "var(--fg)",
    fontFamily: "var(--font-body)",
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        border: "1px solid rgba(28,25,22,0.2)",
        borderRadius: 8,
        padding: 32,
        background: "#ffffff",
      }}
    >
      <label style={{ fontSize: 15, fontWeight: 600 }}>
        Name
        <input
          name="name"
          required
          autoComplete="name"
          style={{ ...inputStyle, marginTop: 8, fontWeight: 400 }}
        />
      </label>
      <label style={{ fontSize: 15, fontWeight: 600 }}>
        Message
        <textarea
          name="message"
          required
          rows={5}
          style={{ ...inputStyle, marginTop: 8, fontWeight: 400, resize: "vertical" }}
        />
      </label>
      {status === "error" && error ? (
        <p style={{ margin: 0, fontSize: 15, color: "#8a2f22" }}>{error}</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: "#ffffff",
          background: "var(--fg)",
          border: "none",
          borderRadius: 4,
          padding: "14px 24px",
          cursor: status === "sending" ? "default" : "pointer",
          width: "fit-content",
          opacity: status === "sending" ? 0.7 : 1,
        }}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
