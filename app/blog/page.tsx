import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Blog | AI, Strategy & Growth Insights",
  description:
    "Succinct perspective for leaders making decisions about AI, data, media, attribution, and revenue growth.",
};

const posts = [
  {
    topic: "AI Strategy",
    title: "Treat AI as an Operating Model, Not a Tool Rollout",
    dek:
      "A practical way to move AI from scattered experiments into governed marketing workflows that improve speed, quality, and accountability.",
    author: "TMG Team",
    meta: "2026 Brief · 9 min read",
  },
  {
    topic: "Measurement",
    title: "Attribution Needs a Reset Around Incrementality",
    dek:
      "Why channel reports are not enough, and how marketing teams can combine attribution, testing, and business context to defend spend with confidence.",
    author: "TMG Team",
    meta: "2026 Brief · 9-10 min read",
  },
  {
    topic: "Customer Analytics",
    title: "Retention Data Belongs in Acquisition Decisions",
    dek:
      "Why campaign performance should be judged by the customers it creates, not only the conversions it records.",
    author: "TMG Team",
    meta: "2026 Brief · 9-10 min read",
  },
  {
    topic: "Intelligence",
    title: "Executive Dashboards Should Force Decisions",
    dek:
      "A dashboard earns its place when it clarifies tradeoffs, priorities, and next actions for the people funding growth.",
    author: "TMG Team",
    meta: "2026 Brief · 8-10 min read",
  },
  {
    topic: "Optimization",
    title: "Real-Time Optimization Requires Better Inputs",
    dek:
      "Speed helps only when goals, conversion events, quality signals, and budget rules are clear and correct.",
    author: "TMG Team",
    meta: "2026 Brief · 8-10 min read",
  },
  {
    topic: "Data",
    title: "Your First-Party Data Needs a Practical Owner",
    dek:
      "Clean customer data is a management discipline before it is a technology project.",
    author: "TMG Team",
    meta: "2026 Brief · 8-10 min read",
  },
  {
    topic: "Media",
    title: "Media Plans Need Flexibility Before They Need More Budget",
    dek:
      "Why static allocation plans break down when costs, demand, inventory, and creative performance move faster than the spreadsheet behind them.",
    author: "TMG Team",
    meta: "2026 Brief · 8-10 min read",
  },
  {
    topic: "Experimentation",
    title: "Testing Programs Fail When They Chase Trivia",
    dek:
      "A practical standard for experiments that resolve real business questions instead of cataloging cosmetic preferences.",
    author: "TMG Team",
    meta: "2026 Brief · 8-10 min read",
  },
  {
    topic: "Demand Generation",
    title: "Pipeline Quality Beats Lead Volume",
    dek:
      "A better operating model for teams that need qualified opportunities, not larger lists of weak leads.",
    author: "TMG Team",
    meta: "2026 Brief · 8-10 min read",
  },
];

export default function BlogPage() {
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
            TMG Blog
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
            Clear Thinking for Modern Growth
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: "54ch",
            }}
          >
            Succinct perspective for leaders making decisions about AI, data,
            media, attribution, and revenue growth.
          </p>
        </div>
      </section>

      {/* Intro + practical briefs note */}
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
              Practical briefs, not thought leadership theater.
            </h2>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(244,239,230,0.75)",
              }}
            >
              Useful prompts for improving the systems that turn marketing
              activity into business results. Every brief is written to be used
              in a meeting the same week it is read.
            </p>
          </div>
        </div>
      </section>

      {/* Post list */}
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            {posts.map((post, i) => (
              <article
                key={post.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "40px 8px",
                  borderTop: "1px solid rgba(28,25,22,0.14)",
                  borderBottom:
                    i === posts.length - 1
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
                  {post.topic}
                  <span
                    style={{
                      display: "block",
                      marginTop: 6,
                      fontWeight: 500,
                      textTransform: "none",
                      letterSpacing: 0,
                      fontSize: 14,
                    }}
                  >
                    {post.meta}
                  </span>
                </span>
                <span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontSize: 32,
                      lineHeight: 1.18,
                      marginBottom: 10,
                      maxWidth: "34ch",
                    }}
                  >
                    {post.title}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: 17,
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      maxWidth: "62ch",
                    }}
                  >
                    {post.dek}
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: 12,
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {post.author}
                  </span>
                </span>
              </article>
            ))}
          </div>
          <p
            style={{
              margin: "56px 0 0",
              fontSize: 17,
              color: "var(--muted)",
            }}
          >
            Looking for deeper research?{" "}
            <Link
              href="/insights"
              style={{ color: "var(--fg)", fontWeight: 600 }}
            >
              Read Industry Insights →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
