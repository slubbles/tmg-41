import Link from "next/link";
import Hero from "@/components/Hero";
import HeroMotion from "@/components/HeroMotion";
import PlatformIndex from "@/components/PlatformIndex";
import LogoCloud from "@/components/LogoCloud";
import Reveal from "@/components/Reveal";
import { QUOTES } from "@/lib/content";

const pillars = [
  {
    step: "01",
    title: "Unified Intelligence",
    body:
      "Strategy, creative, media buying, analytics, and automation connected as one system — so every decision is made on the same picture of the customer.",
  },
  {
    step: "02",
    title: "Predictive Media",
    body:
      "Intelligence platforms read behavior, competitive signals, and campaign data before the next dollar moves — then budget moves toward what is working.",
  },
  {
    step: "03",
    title: "Disciplined Execution",
    body:
      "Structured briefs, tests, variants, and reporting turn strategy into repeatable execution, with clear performance feedback at every step.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroMotion />

      {/* Band 2 — The New Standard */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 64,
          }}
        >
          <Reveal>
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
              The New Standard
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 44,
                lineHeight: 1.08,
                margin: 0,
                maxWidth: "16ch",
              }}
            >
              We believe great advertising is built on judgment, data, and
              discipline.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.6,
                color: "var(--muted)",
                margin: 0,
                maxWidth: "52ch",
              }}
            >
              In an era of noise, precision is the only currency. TMG combines
              strategy, creative, media buying, analytics, automation, and
              intelligence backbones to help brands spend smarter and grow with
              confidence.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--muted)",
                margin: "24px 0 0",
                maxWidth: "60ch",
              }}
            >
              Our platforms power AI-driven marketing intelligence that
              transforms brands across healthcare, finance, technology, real
              estate, and energy.
            </p>
            <Link
              href="/growth-framework"
              style={{
                display: "inline-block",
                marginTop: 28,
                fontSize: 16,
                fontWeight: 600,
                color: "var(--fg)",
                textDecoration: "none",
                borderBottom: "1px solid var(--fg)",
                paddingBottom: 2,
              }}
            >
              See the growth framework →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Band 3 — Platforms */}
      <div style={{ background: "var(--bg)" }}>
        <PlatformIndex />
      </div>

      {/* Band 4 — How we build */}
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
          <div style={{ marginBottom: 64 }}>
            <span
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(244,239,230,0.55)",
                marginBottom: 16,
              }}
            >
              How We Build
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 40,
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "20ch",
              }}
            >
              Elite systems for the most demanding campaigns.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 48,
            }}
          >
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.step} delay={i * 0.1}>
                <div
                  style={{
                    borderTop: "1px solid rgba(244,239,230,0.25)",
                    paddingTop: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      color: "rgba(244,239,230,0.55)",
                      marginBottom: 16,
                    }}
                  >
                    {pillar.step}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 30,
                      lineHeight: 1.15,
                      marginBottom: 14,
                    }}
                  >
                    {pillar.title}
                  </div>
                  <p
                    style={{
                      fontSize: 17,
                      lineHeight: 1.6,
                      color: "rgba(244,239,230,0.78)",
                      margin: 0,
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Band 5 — Selected work: client proof */}
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
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 56,
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 16,
                }}
              >
                Selected Work
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 44,
                  lineHeight: 1.08,
                  margin: 0,
                  maxWidth: "14ch",
                }}
              >
                Results that redefine markets.
              </h2>
            </div>
            <Link
              href="/case-studies"
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "var(--fg)",
                textDecoration: "none",
                borderBottom: "1px solid var(--fg)",
                paddingBottom: 2,
              }}
            >
              View case studies →
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {QUOTES.slice(0, 2).map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.08}>
                <figure
                  style={{
                    margin: 0,
                    border: "1px solid rgba(28,25,22,0.14)",
                    borderRadius: 8,
                    padding: "48px 56px",
                    background: "#ffffff",
                  }}
                >
                  <blockquote
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      lineHeight: 1.45,
                      maxWidth: "62ch",
                    }}
                  >
                    “{item.quote.split(". ").slice(0, 2).join(". ")}.”
                  </blockquote>
                  <figcaption
                    style={{
                      marginTop: 28,
                      display: "flex",
                      gap: 12,
                      alignItems: "baseline",
                      fontSize: 16,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{item.company}</span>
                    <span style={{ color: "var(--muted)" }}>{item.person}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p
            style={{
              margin: "40px 0 0",
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "62ch",
            }}
          >
            Our advertising strategies, paired with our intelligence platform,
            help clients grow across healthcare, finance, technology, real
            estate, and energy. These are real results from real clients.
          </p>
        </div>
      </section>

      {/* Band 6 — Client logos on white plates */}
      <LogoCloud />

      {/* Band 7 — Contact */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 64,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 44,
                lineHeight: 1.08,
                margin: 0,
                maxWidth: "14ch",
              }}
            >
              Every great partnership starts with an honest conversation.
            </h2>
            <p
              style={{
                marginTop: 24,
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(244,239,230,0.75)",
                maxWidth: "44ch",
              }}
            >
              Schedule a consultation to discover how TMG can help improve your
              marketing. No sales pressure, just an honest conversation about
              your goals.
            </p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                marginBottom: 32,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(244,239,230,0.5)",
                    marginBottom: 6,
                  }}
                >
                  Call
                </div>
                <a
                  href="tel:348-7753434"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 30,
                    color: "#f4efe6",
                    textDecoration: "none",
                  }}
                >
                  348-7753434
                </a>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(244,239,230,0.5)",
                    marginBottom: 6,
                  }}
                >
                  Or
                </div>
                <a
                  href="tel:888-6021919"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 30,
                    color: "#f4efe6",
                    textDecoration: "none",
                  }}
                >
                  888-6021919
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
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
        </div>
      </section>
    </main>
  );
}
