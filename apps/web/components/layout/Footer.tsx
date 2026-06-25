"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="lb-footer-grid">
          <div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "var(--amber)" }}>LB2BEAT</span>
            <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 12, lineHeight: 1.7, maxWidth: 300 }}>{t("tagline")}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {/* Social icons — skeleton placeholders */}
              {["instagram", "youtube", "tiktok"].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-muted)", textDecoration: "none", fontSize: 12,
                }}>
                  {(s[0] ?? "").toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>{t("courses")}</p>
            {["Kou pou Débutan", "Teknik Avanse", "Sound Design", "Mixing & Mastering"].map(c => (
              <div key={c} style={{ marginBottom: 10 }}>
                <Link href={`/${locale}/courses`} style={{ color: "var(--text-muted)", fontSize: 14, textDecoration: "none" }}>{c}</Link>
              </div>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>{t("company")}</p>
            {[
              { label: t("about"), href: `/${locale}/about` },
              { label: t("contact"), href: `/${locale}/contact` },
              { label: t("terms"), href: `/${locale}/terms` },
              { label: t("privacy"), href: `/${locale}/privacy` },
            ].map(({ label, href }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <Link href={href} style={{ color: "var(--text-muted)", fontSize: 14, textDecoration: "none" }}>{label}</Link>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
            © {new Date().getFullYear()} LB2BEAT. {t("rights")}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
            Built by{" "}
            <a href="https://djovanylevasseur.com" target="_blank" rel="noopener" style={{ color: "var(--amber)", textDecoration: "none" }}>
              Djovany Levasseur
            </a>
          </p>
        </div>
      </div>
      <style>{`@media(max-width:768px){.lb-footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
