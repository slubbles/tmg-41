import type { Metadata } from "next";
import Link from "next/link";
import { QUOTES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industry Insights | Marketing Intelligence & AI Trends",
  description:
    "Executive analysis on the shifts changing marketing strategy, measurement, customer data, and media investment.",
};

const signals = [
  {
    tag: "Core",
    title: "AI Workflow Adoption",
    body:
      "Marketing teams are moving from isolated prompts to repeatable workflows for planning, content, analysis, and service.",
  },
  {
    tag: "Required",
    title: "Privacy-Safe Measurement",
    body:
      "Attribution, media mix modeling, server-side signals, and incrementality testing are converging into one measurement agenda.",
  },
  {
    tag: "Changing",
    title: "AI Search Visibility",
    body:
      "Content must be clear, structured, and credible enough to be understood by buyers and AI answer systems.",
  },
  {
    tag: "Foundational",
    title: "Customer Data Quality",
    body:
      "Personalization and predictive analytics only improve when data definitions, consent, and lifecycle rules are clean.",
  },
];

const briefs = [
  {
    topic: "Measurement",
    title: "Privacy-Safe Measurement Is Becoming the Default",
    dek:
      "Signal loss is pushing teams toward blended measurement built on attribution, experiments, modeling, and finance-ready assumptions.",
    meta: "2026 Analysis · 9-10 min read",
  },
  {
    topic: "Performance Media",
    title: "Media Strategy Has to Stay Flexible Under Volatility",
    dek:
      "Budget plans should make room for fast learning, deliberate channel shifts, and ongoing creative testing as costs and demand change.",
    meta: "2026 Analysis · 8-10 min read",
  },
  {
    topic: "Revenue Alignment",
    title: "Revenue Teams Need One Definition of a Qualified Opportunity",
    dek:
      "Growth improves when account fit, intent, stage, and handoff rules are shared across marketing and sales.",
    meta: "2026 Analysis · 8 min read",
  },
  {
    topic: "Content",
    title: "AI Search Changes the Job of Content Strategy",
    dek:
      "Content now has to serve buyers, sales teams, search engines, and AI answer systems at the same time.",
    meta: "2026 Analysis · 9-11 min read",
  },
  {
    topic: "Creative",
    title: "Creative Automation Needs Brand Governance",
    dek:
      "Faster production creates value only when briefs, approval rules, asset standards, and testing plans are in place.",
    meta: "2026 Analysis · 9-11 min read",
  },
];

export default function InsightsPage() {
  return (
    <main>
      {/* Title band */}
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          background: "#14110d",
          color: "#f4efe6",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(244,239,230,0.55)",
              marginBottom: 20,
            }}
          >
            Insights
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: "16ch",
            }}
          >
            Research for Better Growth Decisions
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 20,
              lineHeight: 1.6,
              color: "rgba(244,239,230,0.75)",
              maxWidth: "56ch",
            }}
          >
            Executive analysis on the shifts changing marketing strategy,
            measurement, customer data, and media investment.
          </p>
        </div>
      </section>

      {/* Why leaders read */}
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          background: "var(--bg)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 40,
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "14ch",
              }}
            >
              Marketing leaders need cleaner signals.
            </h2>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: 1.65,
                color: "var(--muted)",
              }}
            >
              AI adoption, privacy changes, fragmented media, and buying
              committee complexity are making surface-level reporting less
              useful. The teams that win will connect strategy, data, and
              execution into one operating picture — and the cost of guessing
              keeps rising.
            </p>
          </div>
        </div>
      </section>

      {/* Priority signals */}
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          background: "var(--bg)",
          borderTop: "1px solid rgba(28,25,22,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 40,
              lineHeight: 1.1,
              margin: "0 0 48px",
              maxWidth: "18ch",
            }}
          >
            Priority signals we are watching
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 40,
            }}
          >
            {signals.map((signal) => (
              <div
                key={signal.title}
                style={{
                  borderTop: "1px solid rgba(28,25,22,0.25)",
                  paddingTop: 24,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 12,
                  }}
                >
                  {signal.tag}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    lineHeight: 1.15,
                    marginBottom: 10,
                  }}
                >
                  {signal.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--muted)",
                  }}
                >
                  {signal.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Briefs */}
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          background: "#ffffff",
          borderTop: "1px solid rgba(28,25,22,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 40,
              lineHeight: 1.1,
              margin: "0 0 16px",
              maxWidth: "20ch",
            }}
          >
            Research and analysis briefs
          </h2>
          <p
            style={{
              margin: "0 0 48px",
              fontSize: 18,
              color: "var(--muted)",
            }}
          >
            Concise briefs for leaders deciding where to focus next.
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {briefs.map((brief, i) => (
              <div
                key={brief.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "32px 8px",
                  borderTop: "1px solid rgba(28,25,22,0.14)",
                  borderBottom:
                    i === briefs.length - 1
                      ? "1px solid rgba(28,25,22,0.14)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {brief.topic}
                </span>
                <span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontSize: 28,
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    {brief.title}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: "var(--muted)",
                      maxWidth: "62ch",
                    }}
                  >
                    {brief.dek}
                  </span>
                </span>
                <span style={{ fontSize: 14, color: "var(--muted)", whiteSpace: "nowrap" }}>
                  {brief.meta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + close */}
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          background: "#14110d",
          color: "#f4efe6",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}
        >
          <blockquote
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: "26ch",
            }}
          >
            “Useful research should make the next decision easier. That is the
            standard for every brief we publish.”
          </blockquote>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Link
              href="/blog"
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#14110d",
                background: "#f4efe6",
                padding: "14px 28px",
                borderRadius: 4,
                textDecoration: "none",
              }}
            >
              Read the blog →
            </Link>
            <Link
              href="/contact"
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#f4efe6",
                border: "1px solid rgba(244,239,230,0.4)",
                padding: "14px 28px",
                borderRadius: 4,
                textDecoration: "none",
              }}
            >
              Talk to TMG
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
