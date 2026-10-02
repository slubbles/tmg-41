import Link from "next/link";
import { BRAND, FOOTER_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#14110d",
        color: "#f4efe6",
        paddingTop: 96,
        paddingBottom: 48,
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
            gap: 48,
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 72,
          }}
        >
          <div style={{ maxWidth: 340 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  background: "#ffffff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/logos/tmg-mark.svg"
                  alt="TMG"
                  width={30}
                  height={30}
                  style={{ display: "block" }}
                />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                {BRAND.name}
              </span>
            </div>
            <p
              style={{
                fontSize: 16,
                color: "rgba(244,239,230,0.72)",
                margin: 0,
              }}
            >
              {BRAND.tagline}
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(244,239,230,0.72)",
                margin: "16px 0 0",
              }}
            >
              {BRAND.phones[0]} · {BRAND.phones[1]}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 40,
              flex: 1,
              minWidth: 480,
            }}
          >
            {FOOTER_LINKS.map((group) => (
              <div key={group.heading}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(244,239,230,0.5)",
                    marginBottom: 16,
                  }}
                >
                  {group.heading}
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {group.links.map((link) => (
                    <li key={link.href} style={{ marginBottom: 8 }}>
                      <Link
                        href={link.href}
                        style={{
                          fontSize: 15,
                          color: "rgba(244,239,230,0.82)",
                          textDecoration: "none",
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(244,239,230,0.14)",
            paddingTop: 28,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            fontSize: 14,
            color: "rgba(244,239,230,0.55)",
          }}
        >
          <span>© 2026 Thela Media Group</span>
          <span>
            Advertising strategy, media, creative, and measurement built for
            measurable growth.
          </span>
        </div>
      </div>
    </footer>
  );
}
