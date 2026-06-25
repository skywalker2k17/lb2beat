"use client";
import { useTranslations } from "next-intl";

const icons = [
  <svg key="clock" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="star" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  <svg key="award" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  <svg key="users" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
];

export default function FeaturesSection() {
  const t = useTranslations("features");
  const items = t.raw("items") as { title: string; desc: string }[];

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, textAlign: "center", marginBottom: 64, letterSpacing: "-1px" }}>
          {t("title")}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 16, padding: 32,
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "var(--amber)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--amber-glow)", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--amber)", marginBottom: 20 }}>
                {icons[i]}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}>{item.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
