// Sentry env-ready: no-op until SENTRY_DSN / NEXT_PUBLIC_SENTRY_DSN is set.
import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (!process.env.NEXT_RUNTIME) return;

  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "browser") {
    await import("./sentry.client.config");
  }
}

export function onRequestError(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
  (Sentry as any).captureRequestError?.(...args);
}
