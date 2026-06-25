"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function FlagHT() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0 }}>
      <rect width="20" height="7" fill="#00209F"/>
      <rect y="7" width="20" height="7" fill="#D21034"/>
      <rect x="7" y="4" width="6" height="6" fill="white"/>
      <rect x="9" y="5" width="2" height="4" fill="#00209F"/>
      <rect x="7" y="6" width="6" height="2" fill="#D21034"/>
    </svg>
  );
}

function FlagFR() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0 }}>
      <rect width="20" height="14" fill="white"/>
      <rect width="7" height="14" fill="#002395"/>
      <rect x="13" width="7" height="14" fill="#ED2939"/>
    </svg>
  );
}

function FlagEN() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0 }}>
      <rect width="20" height="14" fill="#012169"/>
      {/* X diagonals white */}
      <line x1="0" y1="0" x2="20" y2="14" stroke="white" strokeWidth="3"/>
      <line x1="20" y1="0" x2="0" y2="14" stroke="white" strokeWidth="3"/>
      {/* X diagonals red */}
      <line x1="0" y1="0" x2="20" y2="14" stroke="#C8102E" strokeWidth="1.5"/>
      <line x1="20" y1="0" x2="0" y2="14" stroke="#C8102E" strokeWidth="1.5"/>
      {/* Cross white */}
      <rect x="8" y="0" width="4" height="14" fill="white"/>
      <rect x="0" y="5" width="20" height="4" fill="white"/>
      {/* Cross red */}
      <rect x="9" y="0" width="2" height="14" fill="#C8102E"/>
      <rect x="0" y="6" width="20" height="2" fill="#C8102E"/>
    </svg>
  );
}

const locales = [
  { code: "ht", label: "Kreyòl", Flag: FlagHT },
  { code: "fr", label: "Français", Flag: FlagFR },
  { code: "en", label: "English", Flag: FlagEN },
] as const;

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const switchLocale = (next: string) => {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
    setOpen(false);
  };

  const current = locales.find(l => l.code === locale);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} style={{
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: 8, padding: "7px 12px",
        color: "var(--text-secondary)", fontSize: 13, fontWeight: 500,
        cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
      }}>
        {current && <current.Flag />}
        <span>{current?.label}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ opacity: 0.5, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0,
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: 10, overflow: "hidden", minWidth: 148, zIndex: 200,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}>
          {locales.map(({ code, label, Flag }) => (
            <button key={code} onClick={() => switchLocale(code)} style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", textAlign: "left",
              padding: "10px 14px",
              background: code === locale ? "var(--amber-glow)" : "none",
              border: "none",
              color: code === locale ? "var(--amber)" : "var(--text-secondary)",
              fontSize: 13, fontWeight: 500, cursor: "pointer",
              transition: "background 0.15s",
            }}
              onMouseEnter={e => { if (code !== locale) e.currentTarget.style.background = "var(--bg-card-hover)"; }}
              onMouseLeave={e => { if (code !== locale) e.currentTarget.style.background = "none"; }}
            >
              <Flag />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
