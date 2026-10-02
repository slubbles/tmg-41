export default function Hero() {
  return (
    <section
      className="hero"
      data-hero
      style={{
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="/photos/earth-night-lights.jpg"
        alt="TMG — advertising systems connected by intelligence infrastructure"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 96,
          background: "linear-gradient(to top, rgba(20,16,12,0.72), rgba(20,16,12,0.12))",
        }}
      >
        <h1
          data-hero-motion
          style={{
            fontSize: 68,
            lineHeight: 1.05,
            color: "#ffffff",
            maxWidth: "16ch",
            margin: 0,
            fontFamily: "var(--font-display)",
          }}
        >
          {"Elite Systems for the Most Demanding Campaigns"}
        </h1>
        <p
          data-hero-motion
          style={{
            fontSize: 18,
            color: "#ffffff",
            maxWidth: "48ch",
            margin: "16px 0 0",
          }}
        >
          {"Advertising systems connected by intelligence infrastructure"}
        </p>
        <a
          data-hero-motion
          href="/contact"
          style={{
            marginTop: 28,
            color: "#ffffff",
            background: "#1a1714",
            padding: 14,
            width: "fit-content",
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {"Call 348-7753434"}
        </a>
      </div>
    </section>
  );
}
