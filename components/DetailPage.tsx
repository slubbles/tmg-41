import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { DetailItem } from "@/lib/details";

export default function DetailPage({ item }: { item: DetailItem }) {
  return (
    <main>
      {/* Title band — unique to this slug */}
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
            {item.eyebrow}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: "18ch",
            }}
          >
            {item.title}
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 20,
              lineHeight: 1.6,
              color: "rgba(244,239,230,0.75)",
              maxWidth: "60ch",
            }}
          >
            {item.lede}
          </p>
        </div>
      </section>

      {/* Body sections */}
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 56,
            }}
          >
            {item.sections.map((section, i) => (
              <Reveal key={section.heading} delay={Math.min(i * 0.06, 0.3)}>
                <div
                  style={{
                    borderTop: "1px solid rgba(28,25,22,0.25)",
                    paddingTop: 28,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 30,
                      lineHeight: 1.15,
                      marginBottom: 14,
                    }}
                  >
                    {section.heading}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 17,
                      lineHeight: 1.65,
                      color: "var(--muted)",
                    }}
                  >
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      {item.caseStudy ? (
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
              Published Case Study
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 40,
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "18ch",
              }}
            >
              {item.caseStudy.company}
            </h2>
            {item.caseStudy.sector ? (
              <p style={{ margin: "12px 0 0", fontSize: 15, color: "var(--muted)" }}>
                {item.caseStudy.sector}
              </p>
            ) : null}
            <div
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 40,
              }}
            >
              {item.caseStudy.challenge ? (
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 10,
                    }}
                  >
                    Challenge
                  </div>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                    {item.caseStudy.challenge}
                  </p>
                </div>
              ) : null}
              {item.caseStudy.solution ? (
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 10,
                    }}
                  >
                    Solution
                  </div>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                    {item.caseStudy.solution}
                  </p>
                </div>
              ) : null}
              {item.caseStudy.result ? (
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 10,
                    }}
                  >
                    Result
                  </div>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                    {item.caseStudy.result}
                  </p>
                </div>
              ) : null}
            </div>
            {item.caseStudy.metrics?.length ? (
              <div
                style={{
                  marginTop: 40,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 16,
                  borderTop: "1px solid rgba(28,25,22,0.12)",
                  paddingTop: 32,
                }}
              >
                {item.caseStudy.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 44,
                        lineHeight: 1,
                        marginBottom: 8,
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
            ) : null}
            {item.caseStudy.quote ? (
              <blockquote
                style={{
                  margin: "40px 0 0",
                  padding: "28px 0 0",
                  borderTop: "1px solid rgba(28,25,22,0.12)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    lineHeight: 1.5,
                    maxWidth: "60ch",
                  }}
                >
                  “{item.caseStudy.quote.text}”
                </p>
                <figcaption
                  style={{ marginTop: 14, fontSize: 15, color: "var(--muted)" }}
                >
                  — {item.caseStudy.quote.person}
                </figcaption>
              </blockquote>
            ) : null}
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
              View all case studies →
            </Link>
          </div>
        </section>
      ) : null}

      {/* Related */}
      {item.related.length ? (
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
                maxWidth: "16ch",
              }}
            >
              {item.relatedHeading ?? "Related"}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 24,
              }}
            >
              {item.related.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 40,
                    border: "1px solid rgba(28,25,22,0.14)",
                    borderRadius: 8,
                    background: "#ffffff",
                    padding: "32px 36px",
                    textDecoration: "none",
                    color: "inherit",
                    minHeight: 160,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 26,
                      lineHeight: 1.15,
                    }}
                  >
                    {rel.label}
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>
                    Explore →
                  </span>
                </Link>
              ))}
              <Link
                href="/contact"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 40,
                  border: "1px solid rgba(28,25,22,0.14)",
                  borderRadius: 8,
                  background: "var(--fg)",
                  color: "#f4efe6",
                  padding: "32px 36px",
                  textDecoration: "none",
                  minHeight: 160,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    lineHeight: 1.15,
                  }}
                >
                  Talk to TMG
                </span>
                <span style={{ fontSize: 15, fontWeight: 600 }}>
                  Start Your Growth Journey →
                </span>
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
