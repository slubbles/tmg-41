import type { Metadata } from "next";
import HeroMotion from "@/components/HeroMotion";
import ContactForm from "@/components/ContactForm";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | Get Started with TMG",
  description:
    "Schedule a consultation to discover how TMG can help improve your marketing. No sales pressure, just an honest conversation about your goals.",
};

const steps = [
  {
    title: "Discovery Call",
    body:
      "A 30-minute conversation to understand your business, current marketing efforts, challenges, and growth objectives. No sales pitch, just questions and listening.",
    meta: "30 Min · Initial Call",
  },
  {
    title: "Opportunity Analysis",
    body:
      "Our team analyzes your situation and develops a preliminary assessment of opportunities, potential impact, and recommended approach. This is complimentary.",
    meta: "3-5 Days · Analysis Time",
  },
  {
    title: "Strategy Presentation",
    body:
      "We present our findings, recommendations, and proposed approach in a detailed strategy session. You will see exactly what we would do and why.",
    meta: "60 Min · Presentation",
  },
  {
    title: "Proposal & Next Steps",
    body:
      "If there is mutual fit, we provide a detailed proposal with scope, timeline, investment, and expected outcomes. No pressure to decide immediately.",
    meta: "1 Week · Decision Time",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Title band — unique to /contact */}
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
            Let’s Talk
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
            Start Your Growth Journey
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
            Schedule a consultation to discover how TMG can help improve your
            marketing. No sales pressure, just an honest conversation about your
            goals and how we might help.
          </p>
        </div>
      </section>

      {/* Facts + form */}
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
                fontSize: 40,
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "14ch",
              }}
            >
              Get in Touch
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: 17,
                color: "rgba(244,239,230,0.72)",
                maxWidth: "44ch",
              }}
            >
              Choose the best way to connect with our team.
            </p>
            <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 28 }}>
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
                  Phone
                </div>
                <a
                  href={`tel:${BRAND.phones[0]}`}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    color: "#f4efe6",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {BRAND.phones[0]}
                </a>
                <a
                  href={`tel:${BRAND.phones[1]}`}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    color: "#f4efe6",
                    textDecoration: "none",
                  }}
                >
                  {BRAND.phones[1]}
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
                  Office
                </div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    lineHeight: 1.3,
                  }}
                >
                  Austin, Texas
                </p>
                <p
                  style={{
                    margin: "8px 0 0",
                    fontSize: 16,
                    color: "rgba(244,239,230,0.72)",
                    maxWidth: "40ch",
                  }}
                >
                  Our main office is located in Austin, Texas, with distributed
                  teams supporting client work across markets.
                </p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
            <p
              style={{
                marginTop: 16,
                fontSize: 14,
                color: "rgba(244,239,230,0.55)",
                margin: "16px 0 0",
              }}
            >
              Prefer phone? Call 348-7753434 and ask for a strategist.
            </p>
          </div>
        </div>
      </section>

      {/* What to expect */}
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
              Every great partnership starts with an honest conversation.
            </h2>
            <span
              style={{
                display: "inline-block",
                marginTop: 16,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              What to Expect
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 48,
            }}
          >
            {steps.map((step, i) => (
              <div key={step.title}>
                <div
                  style={{
                    borderTop: "1px solid rgba(28,25,22,0.25)",
                    paddingTop: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      color: "var(--muted)",
                      marginBottom: 16,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28,
                      lineHeight: 1.15,
                      marginBottom: 12,
                    }}
                  >
                    {step.title}
                  </div>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                  <div
                    style={{
                      marginTop: 16,
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {step.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HeroMotion />
    </main>
  );
}
