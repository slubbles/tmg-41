import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Growth Framework | The Intelligence-First Method",
  description:
    "A systematic approach to building predictable, scalable, and compounding growth through clearer strategy, unified intelligence, automated execution, and continuous learning.",
};

const oldPlaybook = [
  "Strategy based on intuition and historical patterns",
  "Manual campaign management and optimization",
  "Quarterly planning cycles that miss market shifts",
  "Siloed data preventing a unified customer view",
  "Reactive optimization after performance declines",
  "Attribution gaps leave spend disconnected from business outcomes",
];

const intelligenceFirst = [
  "Predictive intelligence guides every decision",
  "Automated optimization running continuously",
  "Real-time strategy adaptation to market dynamics",
  "Unified data ecosystem with complete customer visibility",
  "Proactive optimization before issues impact performance",
  "Complete attribution clarity across all touchpoints",
];

const pillars = [
  {
    step: "Pillar 1",
    title: "Unified Intelligence",
    body:
      "Before optimization comes understanding. We unify your data sources into a single source of truth — customer behavior, campaign performance, and market context in one picture. Integration across marketing platforms, CRMs, and data sources, with real-time synchronization and automated quality validation.",
  },
  {
    step: "Pillar 2",
    title: "Predictive Models",
    body:
      "Models built on your campaign data forecast audience response, budget efficiency, and customer value — so strategy starts from evidence instead of intuition, and every media plan carries its own expectations.",
  },
  {
    step: "Pillar 3",
    title: "Automated Execution",
    body:
      "Approved plans move into deployment, follow-up, and reporting through TMG Velocity, Catalyst, and Genesis — with the team reviewing, adjusting, and approving every step the systems take.",
  },
  {
    step: "Pillar 4",
    title: "Continuous Learning",
    body:
      "Results feed back into the models. Tests, variants, and attribution readouts compound across campaigns, so the system gets sharper every quarter instead of starting over.",
  },
];

const proof = [
  { value: "33x", label: "Case Study ROAS" },
  { value: "110+", label: "New Partners" },
  { value: "$15MM+", label: "New Raise" },
  { value: "86%", label: "Cost Reduction" },
];

export default function GrowthFrameworkPage() {
  return (
    <main>
      {/* Title band */}
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
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 20,
            }}
          >
            Proven Methodology
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
            The Intelligence-First Growth Framework
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "58ch",
            }}
          >
            A systematic approach to building predictable, scalable, and
            compounding growth through clearer strategy, unified intelligence,
            automated execution, and continuous learning.
          </p>
        </div>
      </section>

      {/* Statement band */}
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
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: 40,
              lineHeight: 1.2,
              maxWidth: "24ch",
            }}
          >
            Growth is not random. It is the result of intelligent systems
            applied consistently.
          </p>
        </div>
      </section>

      {/* Old vs new */}
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
            Old playbook vs. intelligence-first
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            <div
              style={{
                border: "1px solid rgba(28,25,22,0.14)",
                borderRadius: 8,
                background: "#ffffff",
                padding: "40px 44px",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 20,
                }}
              >
                Traditional Marketing Approach
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {oldPlaybook.map((item) => (
                  <li
                    key={item}
                    style={{
                      padding: "12px 0",
                      borderTop: "1px solid rgba(28,25,22,0.08)",
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: "var(--muted)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                border: "1px solid rgba(28,25,22,0.14)",
                borderRadius: 8,
                background: "var(--fg)",
                color: "#f4efe6",
                padding: "40px 44px",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(244,239,230,0.55)",
                  marginBottom: 20,
                }}
              >
                Intelligence-First Framework
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {intelligenceFirst.map((item) => (
                  <li
                    key={item}
                    style={{
                      padding: "12px 0",
                      borderTop: "1px solid rgba(244,239,230,0.16)",
                      fontSize: 16,
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          background: "#ffffff",
          borderTop: "1px solid rgba(28,25,22,0.1)",
          borderBottom: "1px solid rgba(28,25,22,0.1)",
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
              maxWidth: "18ch",
            }}
          >
            The four pillars of intelligence-first growth
          </h2>
          <p
            style={{
              margin: "0 0 56px",
              fontSize: 18,
              color: "var(--muted)",
              maxWidth: "52ch",
            }}
          >
            Each pillar builds on the previous, creating a compounding growth
            system.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {pillars.map((pillar, i) => (
              <div
                key={pillar.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: 32,
                  alignItems: "start",
                  borderTop: "1px solid rgba(28,25,22,0.14)",
                  paddingTop: 32,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    color: "var(--muted)",
                  }}
                >
                  {pillar.step}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 32,
                      lineHeight: 1.15,
                      marginBottom: 12,
                    }}
                  >
                    {pillar.title}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 17,
                      lineHeight: 1.65,
                      color: "var(--muted)",
                      maxWidth: "68ch",
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — published case study metrics only */}
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
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 40,
              lineHeight: 1.1,
              margin: "0 0 12px",
              maxWidth: "18ch",
            }}
          >
            Framework performance, as published
          </h2>
          <p
            style={{
              margin: "0 0 48px",
              fontSize: 17,
              color: "var(--muted)",
              maxWidth: "56ch",
            }}
          >
            These figures come from TMG's published energy &amp; investment case
            study.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {proof.map((metric) => (
              <div
                key={metric.label}
                style={{
                  border: "1px solid rgba(28,25,22,0.14)",
                  borderRadius: 8,
                  background: "#ffffff",
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 52,
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {metric.value}
                </div>
                <div style={{ fontSize: 15, color: "var(--muted)" }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/case-studies"
            style={{
              display: "inline-block",
              marginTop: 40,
              fontSize: 16,
              fontWeight: 600,
              color: "var(--fg)",
              textDecoration: "none",
              borderBottom: "1px solid var(--fg)",
              paddingBottom: 2,
            }}
          >
            Read the case study →
          </Link>
        </div>
      </section>

      {/* Close */}
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
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 40,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: "18ch",
            }}
          >
            Ready to run growth as a system?
          </h2>
          <Link
            href="/contact"
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
            Start Your Growth Journey →
          </Link>
        </div>
      </section>
    </main>
  );
}
