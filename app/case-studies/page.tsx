import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Real Marketing Results",
  description:
    "See how companies across industries have partnered with TMG to achieve measurable growth, lower costs, and lasting competitive advantage.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Title band — unique crop/type, not the home hero */}
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
            Proven Results
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
            Real Growth. Real Numbers. Real Impact.
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 20,
              lineHeight: 1.6,
              color: "rgba(244,239,230,0.75)",
              maxWidth: "58ch",
            }}
          >
            See how companies across industries have partnered with TMG to
            achieve measurable growth, lower costs, and lasting competitive
            advantage.
          </p>
        </div>
      </section>

      {/* Studies as large editorial bands */}
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
            display: "flex",
            flexDirection: "column",
            gap: 32,
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
            Every company has a unique growth story. Here are some of ours.
          </h2>
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05}>
              <article
                style={{
                  border: "1px solid rgba(28,25,22,0.14)",
                  borderRadius: 8,
                  background: "#ffffff",
                  padding: "56px 60px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 24,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        marginBottom: 8,
                      }}
                    >
                      Case Study · {study.sector}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 36,
                        lineHeight: 1.1,
                      }}
                    >
                      {study.company}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 40,
                    marginBottom: 40,
                  }}
                >
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
                      The Challenge
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 17,
                        lineHeight: 1.6,
                      }}
                    >
                      {study.challenge}
                    </p>
                  </div>
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
                      The Solution
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 17,
                        lineHeight: 1.6,
                      }}
                    >
                      {study.solution}
                    </p>
                  </div>
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
                      The Result
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 17,
                        lineHeight: 1.6,
                      }}
                    >
                      {study.result}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 16,
                    borderTop: "1px solid rgba(28,25,22,0.12)",
                    paddingTop: 32,
                  }}
                >
                  {study.metrics.map((metric) => (
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
                      <div
                        style={{
                          fontSize: 15,
                          color: "var(--muted)",
                        }}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                {study.quote ? (
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
                      “{study.quote.text}”
                    </p>
                    <figcaption
                      style={{
                        marginTop: 14,
                        fontSize: 15,
                        color: "var(--muted)",
                      }}
                    >
                      — {study.quote.person}
                    </figcaption>
                  </blockquote>
                ) : null}
              </article>
            </Reveal>
          ))}
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
            Ready to be the next case study?
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
