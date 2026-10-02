import Link from "next/link";

export default function LogoCloud({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const logos = [
    "/logos/forcepoint.png",
    "/logos/jecobra-aviation.png",
    "/logos/auntie-annes.png",
    "/logos/qualico.png",
    "/logos/novak-capital.png",
    "/logos/advanced-medical-trials.png",
    "/logos/restart.png",
    "/logos/the-previvor.png",
    "/logos/thryve-care.svg",
    "/logos/be-resources.png",
  ];
  return (
    <section
      style={{
        paddingTop: 64,
        paddingBottom: 64,
        background: tone === "dark" ? "#14110d" : "var(--bg)",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: 16,
          }}
        >
          {logos.map((src) => (
            <div
              key={src}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(28,25,22,0.1)",
                borderRadius: 8,
                minHeight: 96,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "18px 22px",
              }}
            >
              <img
                src={src}
                alt="TMG client logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: 44,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
        <p
          style={{
            marginTop: 20,
            marginBottom: 0,
            fontSize: 14,
            color: tone === "dark" ? "rgba(244,239,230,0.6)" : "var(--muted)",
            textAlign: "center",
          }}
        >
          A few of the brands TMG has partnered with.
        </p>
      </div>
    </section>
  );
}
