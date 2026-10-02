import Link from "next/link";
import { PLATFORMS } from "@/lib/content";

export default function PlatformIndex() {
  return (
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
        <div style={{ marginBottom: 48 }}>
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
            Our Platforms
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
            Four systems, one operating layer.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {PLATFORMS.map((platform, i) => (
            <Link
              key={platform.slug}
              href={platform.slug}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: 24,
                alignItems: "baseline",
                padding: "36px 8px",
                borderTop: "1px solid rgba(28,25,22,0.14)",
                borderBottom:
                  i === PLATFORMS.length - 1
                    ? "1px solid rgba(28,25,22,0.14)"
                    : "none",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  color: "var(--muted)",
                }}
              >
                {platform.num}
              </span>
              <span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    lineHeight: 1.1,
                    marginBottom: 8,
                  }}
                >
                  {platform.name}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: 16,
                    color: "var(--muted)",
                    maxWidth: "62ch",
                  }}
                >
                  {platform.blurb}
                </span>
              </span>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
