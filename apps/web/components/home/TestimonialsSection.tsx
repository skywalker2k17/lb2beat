"use client";
import { useTranslations } from "next-intl";

const TESTIMONIALS = [
  { name: "Jean-Marc D.", role: "Beatmaker", text: "Depi m fini kou a, m ap vann beats mwen sou BeatStars. Meilleure investment m te fè.", stars: 5 },
  { name: "Sabine R.", role: "Producer", text: "FL Studio pa te jamais klike pou mwen. Kou a chanje tout bagay. Eksplikasyon yo klè anpil.", stars: 5 },
  { name: "Marcus P.", role: "Artiste", text: "Kounye a m ka pwodui pwòp mizik mwen yo. LB2BEAT se youn nan pi bon platfòm nan Ayiti.", stars: 5 },
  { name: "Keyla F.", role: "Étudiant", text: "Kou mixing la te ban m yon lòt nivel. Beats mwen yo sone pwofesyonèl kounye a.", stars: 5 },
  { name: "David N.", role: "Beatmaker", text: "Bon valè pou lajan an. 30 tan de kontni pou $149 se yon bèl deal. M rekòmande!", stars: 5 },
  { name: "Naomi L.", role: "Music Producer", text: "Community a se youn nan pi bon aspè yo. Tout moun ap ede youn lòt grandi.", stars: 5 },
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, textAlign: "center", marginBottom: 64, letterSpacing: "-1px" }}>
          {t("title")}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {TESTIMONIALS.map((item, i) => (
            <div key={i} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 16, padding: 28,
            }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                {Array.from({ length: item.stars }).map((_, s) => (
                  <span key={s} style={{ color: "var(--amber)", fontSize: 16 }}>★</span>
                ))}
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{item.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--amber-glow)", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--amber)", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                  {item.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
