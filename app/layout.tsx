import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tmg.agency"),
  title: {
    default: "Thela Media Group — Advertising Strategy, Media & Measurement",
    template: "%s — Thela Media Group",
  },
  description:
    "Advertising systems connected by intelligence infrastructure. TMG combines strategy, creative, media buying, analytics, automation, and intelligence backbones to help brands spend smarter and grow with confidence.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const FEEDBACK_JOB_ID = "41";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
      <script
        src="https://genesis-web-woad.vercel.app/genesis-feedback.js"
        data-job={FEEDBACK_JOB_ID}
        defer
      />
    </html>
  );
}
