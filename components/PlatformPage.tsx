import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PLATFORMS } from "@/lib/content";
import { CASE_STUDIES } from "@/lib/case-studies";

type PlatformProps = {
  platform: (typeof PLATFORMS)[number];
  eyebrow: string;
  lede: string;
  boldLead: string;
  boldRest: string;
  pillars: { step: string; title: string; body: string; tags: string[] }[];
  caseStudy: (typeof CASE_STUDIES)[number] | undefined;
  related: { slug: string; name: string; note?: string }[];
  cta: string;
};

export function PlatformPage({
  platform,
  eyebrow,
  lede,
  boldLead,
  boldRest,
  pillars,
  caseStudy,
  related,
  cta,
}: PlatformProps) {
  const siblings = PLATFORMS.filter((p) => p.slug !== platform.slug);
  return (
    <main>
      {/* Title band — unique to this platform */}
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
            {eyebrow}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: "14ch",
            }}
          >
            {`TMG ${platform.name}`}
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
            {lede}
          </p>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {platform.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  border: "1px solid rgba(244,239,230,0.35)",
                  borderRadius: 4,
                  padding: "8px 16px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning statement */}
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
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: 32,
              lineHeight: 1.35,
              maxWidth: "32ch",
            }}
          >
            {`${boldLead} `}
            <span style={{ color: "var(--muted)" }}>{boldRest}</span>
          </p>
        </div>
      </section>

      {/* How it works */}
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
          <div style={{ marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 40,
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "18ch",
              }}
            >
              How TMG {platform.name} works
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.step} delay={i * 0.05}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: 32,
                    alignItems: "start",
                    borderTop: "1px solid rgba(28,25,22,0.14)",
                    paddingTop: 32,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      color: "var(--muted)",
                    }}
                  >
                    {pillar.step}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 30,
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
                        lineHeight: 1.6,
                        color: "var(--muted)",
                        maxWidth: "66ch",
                      }}
                    >
                      {pillar.body}
                    </p>
                    <div
                      style={{
                        marginTop: 16,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 10,
                      }}
                    >
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            border: "1px solid rgba(28,25,22,0.2)",
                            borderRadius: 4,
                            padding: "6px 12px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Published case study */}
      {caseStudy ? (
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
                maxWidth: "16ch",
              }}
            >
              {caseStudy.company}
            </h2>
            <p
              style={{
                marginTop: 12,
                fontSize: 15,
                color: "var(--muted)",
              }}
            >
              {caseStudy.sector}
            </p>
            <div
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 40,
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
                  Challenge
                </div>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                  {caseStudy.challenge}
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
                  Solution
                </div>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                  {caseStudy.solution}
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
                  Result
                </div>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                  {caseStudy.result}
                </p>
              </div>
            </div>
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
              {caseStudy.metrics.map((metric) => (
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
          </div>
        </section>
      ) : null}

      {/* Where it connects */}
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
              margin: 0,
              maxWidth: "16ch",
            }}
          >
            Where TMG {platform.name} connects
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "58ch",
            }}
          >
            TMG {platform.name} is one layer of one operating system. The other
            platforms carry the work before and after it.
          </p>
          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {siblings.map((sibling) => (
              <Link
                key={sibling.slug}
                href={sibling.slug}
                style={{
                  display: "block",
                  border: "1px solid rgba(28,25,22,0.14)",
                  borderRadius: 8,
                  background: "#ffffff",
                  padding: "32px 36px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    marginBottom: 10,
                  }}
                >
                  {`TMG ${sibling.name}`}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: "var(--muted)",
                  }}
                >
                  {sibling.blurb}
                </p>
              </Link>
            ))}
            <Link
              href="/case-studies"
              style={{
                display: "block",
                border: "1px solid rgba(28,25,22,0.14)",
                borderRadius: 8,
                background: "var(--fg)",
                color: "#f4efe6",
                padding: "32px 36px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  marginBottom: 10,
                }}
              >
                See the proof →
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "rgba(244,239,230,0.75)",
                }}
              >
                Read the published case studies behind these systems.
              </p>
            </Link>
          </div>
          {related.length ? (
            <ul
              style={{
                margin: "40px 0 0",
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.slug}
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--fg)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--fg)",
                      paddingBottom: 2,
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
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
            {cta}
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
