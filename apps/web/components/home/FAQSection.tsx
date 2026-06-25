"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FAQ_ITEMS = [
  { q: "Kòman m kòmanse si m pa gen okenn eksperyans?", a: "Kou Beginner nou yo fèt espesyalman pou moun ki depoze. Ou pa bezwen okenn konesans anvan." },
  { q: "Kijan m ap jwenn aksè ak kou a apre peman?", a: "Imedyatman apre peman an konfime, ou resevwa yon imèl ak lyen aksè. 24/7, nenpòt aparèy." },
  { q: "Ki lojisyèl m bezwen?", a: "FL Studio oswa Ableton Live. Men nou gen kou pou chak lojisyèl. Yo tout disponib gratis pou tès." },
  { q: "Èske gen yon ranbousman si m pa satisfè?", a: "Wi, nou gen yon garanti 30 jou. Si ou pa satisfè, nou ranbouse ou san kesyon." },
  { q: "Èske aksè a limite nan tan?", a: "Non. Kou Lifetime yo ba w aksè pou lavi. Ou ka tounen gade yo nenpòt ki lè." },
  { q: "Èske m ka jwenn yon sètifika?", a: "Wi! Apre ou fin konplete 100% nan kou a, ou resevwa yon sètifika dijital ofisyèl." },
];

export default function FAQSection() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, textAlign: "center", marginBottom: 64, letterSpacing: "-0.3px" }}>
          {t("title")}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{ background: "var(--bg-card)", border: `1px solid ${open === i ? "var(--amber)" : "var(--border)"}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", textAlign: "left", padding: "20px 24px",
                background: "none", border: "none", cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                color: "var(--text-primary)", fontFamily: "var(--font-body)",
              }}>
                <span style={{ fontSize: 15, fontWeight: 600, flex: 1, marginRight: 16 }}>{item.q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s", flexShrink: 0 }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px", color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
