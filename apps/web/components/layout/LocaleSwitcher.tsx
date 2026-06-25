"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const locales = [
  { code: "ht", label: "Kreyòl" },
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
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
        cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        {current?.label}
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0,
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: 10, overflow: "hidden", minWidth: 130, zIndex: 200,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}>
          {locales.map(l => (
            <button key={l.code} onClick={() => switchLocale(l.code)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "10px 16px", background: l.code === locale ? "var(--amber-glow)" : "none",
              border: "none", color: l.code === locale ? "var(--amber)" : "var(--text-secondary)",
              fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}
              onMouseEnter={e => { if (l.code !== locale) e.currentTarget.style.background = "var(--bg-card-hover)"; }}
              onMouseLeave={e => { if (l.code !== locale) e.currentTarget.style.background = "none"; }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
