"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
export default function LoginPage() {
  const locale = useLocale();
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "var(--bg-base)" }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <Link href={`/${locale}`} style={{ textDecoration: "none" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "var(--amber)", textAlign: "center", marginBottom: 40 }}>LB2BEAT</div>
        </Link>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 20, padding: 40 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Konekte</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 32 }}>Entre ak kont ou pou kontinye.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>Email</label>
              <input type="email" placeholder="ou@example.com" style={{ width: "100%", padding: "12px 16px", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 10, color: "var(--text-primary)", fontSize: 15, boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>Modpas</label>
              <input type="password" placeholder="••••••••" style={{ width: "100%", padding: "12px 16px", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 10, color: "var(--text-primary)", fontSize: 15, boxSizing: "border-box" }} />
            </div>
            <Link href={`/${locale}/dashboard`} style={{ display: "block", textAlign: "center", background: "var(--amber)", color: "#0a0a0e", padding: "14px 24px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", fontFamily: "var(--font-display)", marginTop: 8 }}>
              Konekte
            </Link>
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--text-muted)", marginTop: 24 }}>
            Pa gen kont?{" "}<Link href={`/${locale}/register`} style={{ color: "var(--amber)", textDecoration: "none", fontWeight: 600 }}>Enskri gratis</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
