import Link from "next/link";
import { BRAND, NAV } from "@/lib/content";

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,239,230,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(28,25,22,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/"
          aria-label="Thela Media Group home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src="/logos/tmg-mark.svg"
            alt="TMG"
            width={34}
            height={34}
            style={{ display: "block" }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            {BRAND.name}
          </span>
        </Link>
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            flexWrap: "wrap",
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "var(--fg)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#ffffff",
              background: "var(--fg)",
              padding: "10px 22px",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
