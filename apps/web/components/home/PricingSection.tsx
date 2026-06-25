"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    price: { monthly: 19, lifetime: 99 },
    features: ["Aksè 3 kou", "Sètifika Rekonpans", "Sipò Email", "Mizajou 6 mwa"],
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 39, lifetime: 149 },
    features: ["Aksè tout kou yo", "Sètifika Rekonpans", "Sipò WhatsApp", "Mizajou Pou Lavi", "Kominote VIP", "Raw Files + Presets"],
    popular: true,
  },
  {
    name: "Studio",
    price: { monthly: 79, lifetime: 299 },
    features: ["Tout nan Pro +", "1-on-1 Coaching Chak Mwa", "Feedback sou Beats ou", "Aksè Beta Kou Nouvo", "Sètifika Studio", "Priorité Sipò"],
    popular: false,
  },
];

export default function PricingSection() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-base)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 12 }}>{t("title")}</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>{t("subtitle")}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24 }}>
          {PLANS.map(plan => (
            <div key={plan.name} style={{
              background: plan.popular ? "var(--bg-card)" : "var(--bg-surface)",
              border: `1px solid ${plan.popular ? "var(--amber)" : "var(--border)"}`,
              borderRadius: 20, padding: 32,
              position: "relative",
              boxShadow: plan.popular ? "0 0 40px rgba(245,158,11,0.12)" : "none",
            }}>
              {plan.popular && (
                <div style={{
                  position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
                  background: "var(--amber)", color: "#0a0a0e",
                  padding: "4px 16px", borderRadius: 100,
                  fontSize: 11, fontWeight: 700, fontFamily: "var(--font-display)",
                  textTransform: "uppercase", letterSpacing: 1,
                }}>
                  {t("popular")}
                </div>
              )}

              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>{plan.name}</h3>

              <div style={{ marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, color: "var(--amber)" }}>${plan.price.lifetime}</span>
                <span style={{ color: "var(--text-muted)", fontSize: 14, marginLeft: 6 }}>/ {t("lifetime")}</span>
              </div>

              <div style={{ height: 1, background: "var(--border)", marginBottom: 24 }} />

              <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "var(--font-mono)" }}>{t("features_title")}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{f}</span>
                  </div>
                ))}
              </div>

              <Link href={`/${locale}/register`} style={{
                display: "block", textAlign: "center",
                background: plan.popular ? "var(--amber)" : "transparent",
                border: `1px solid ${plan.popular ? "var(--amber)" : "var(--border-strong)"}`,
                color: plan.popular ? "#0a0a0e" : "var(--text-primary)",
                padding: "14px 24px", borderRadius: 10,
                fontSize: 15, fontWeight: 700,
                textDecoration: "none", fontFamily: "var(--font-display)",
                transition: "all 0.2s",
              }}>
                {t("cta")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
