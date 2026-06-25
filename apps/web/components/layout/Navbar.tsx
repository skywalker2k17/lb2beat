"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { key: "courses", href: `/${locale}/courses` },
    { key: "about", href: `/${locale}/about` },
    { key: "pricing", href: `/${locale}/pricing` },
  ] as const;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: "1px solid var(--border)",
      backdropFilter: "blur(20px)",
      background: "rgba(10,10,14,0.85)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        <Link href={`/${locale}`} style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--amber)", letterSpacing: "-0.5px" }}>
            LB2BEAT
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="lb-desk-nav">
          {links.map(({ key, href }) => (
            <Link key={key} href={href} style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
              {t(key)}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <LocaleSwitcher />
          <Link href={`/${locale}/login`} style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none" }} className="lb-desk-nav">
            {t("login")}
          </Link>
          <Link href={`/${locale}/register`} style={{ background: "var(--amber)", color: "#0a0a0e", padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "var(--font-display)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--amber-light)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--amber)")}>
            {t("join")}
          </Link>
          <button onClick={() => setOpen(!open)} className="lb-mob-btn"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", padding: 4, display: "none" }} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(({ key, href }) => (
            <Link key={key} href={href} onClick={() => setOpen(false)} style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 16, fontWeight: 500 }}>
              {t(key)}
            </Link>
          ))}
          <Link href={`/${locale}/register`} onClick={() => setOpen(false)} style={{ background: "var(--amber)", color: "#0a0a0e", padding: "12px 20px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
            {t("join")}
          </Link>
        </div>
      )}

      <style>{`@media(max-width:768px){.lb-desk-nav{display:none!important}.lb-mob-btn{display:block!important}}`}</style>
    </nav>
  );
}
