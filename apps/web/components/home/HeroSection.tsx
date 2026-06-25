"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

// Signature element: animated waveform SVG that pulses like a beat
function BeatWaveform() {
  const bars = [3, 7, 5, 9, 4, 8, 6, 10, 5, 7, 3, 9, 6, 8, 4, 10, 7, 5, 9, 3, 8, 6, 4, 10, 5];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3, height: 64 }}>
      {bars.map((h, i) => (
        <div key={i} className="wave-bar" style={{
          height: `${h * 6}px`,
          animationDelay: `${(i * 0.08) % 1.2}s`,
          opacity: 0.6 + (h / 10) * 0.4,
        }} />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section style={{
      minHeight: "100vh", paddingTop: 68,
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background radial glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative" }}>
        <div style={{ maxWidth: 760 }}>
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--amber-glow)", border: "1px solid var(--border-strong)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--amber)", display: "block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--amber)", letterSpacing: 0.5 }}>
              {t("eyebrow")}
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-1px",
            marginBottom: 24,
          }}>
            {t("headline").split(" ").map((word, i) => (
              <span key={i} style={{ color: ["Fè", "Make", "Créer"].includes(word) || ["Beats", "Beat"].includes(word) ? "var(--amber)" : "var(--text-primary)" }}>
                {word}{" "}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: 40,
            maxWidth: 560,
          }}>
            {t("subheadline")}
          </p>

          {/* Waveform — signature element */}
          <div style={{ marginBottom: 40 }}>
            <BeatWaveform />
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href={`/${locale}/register`} style={{
              background: "var(--amber)", color: "#0a0a0e",
              padding: "16px 32px", borderRadius: 10,
              fontSize: 16, fontWeight: 700,
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.3px",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-block",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--amber-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--amber)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {t("cta_primary")}
            </Link>
            <Link href={`/${locale}/courses`} style={{
              background: "transparent",
              border: "1px solid var(--border-strong)",
              color: "var(--text-primary)",
              padding: "16px 32px", borderRadius: 10,
              fontSize: 16, fontWeight: 600,
              textDecoration: "none",
              display: "flex", alignItems: "center", gap: 8,
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {t("cta_secondary")}
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
            {[
              { value: "2,400+", label: t("students") },
              { value: "4.9★", label: t("rating") },
              { value: "12", label: t("courses_count") },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--amber)", letterSpacing: "-1px" }}>{value}</div>
                <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
