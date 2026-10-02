import * as Sentry from "@sentry/nextjs";

export function registerSentry() {
  const dsn = process.env.SENTRY_DSN;
  if (!dsn) return; // env unset: no-op, ready for credentials
  Sentry.init({
    dsn,
    environment: process.env.SENTRY_ENVIRONMENT ?? "production",
    tracesSampleRate: 0.1,
  });
}
