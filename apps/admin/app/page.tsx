"use client";
import { useState } from "react";

const MOCK_STATS = [
  { label: "Total Elèv", value: "2,441", delta: "+18%", color: "var(--amber)" },
  { label: "Kou Aktif", value: "12", delta: "+2", color: "var(--green)" },
  { label: "Revni Mwa Sa", value: "$8,240", delta: "+24%", color: "var(--blue)" },
  { label: "Nouvo Enskripsiyon", value: "143", delta: "+31%", color: "var(--amber)" },
];

const MOCK_USERS = [
  { id: 1, name: "Jean-Marc Dubois", email: "jm@email.com", course: "Beat Making 101", status: "active", joined: "12 Jen 2026" },
  { id: 2, name: "Sabine Remy", email: "sabine@email.com", course: "Trap Beats Mastery", status: "active", joined: "10 Jen 2026" },
  { id: 3, name: "Marcus Pierre", email: "marcus@email.com", course: "Sound Design Pro", status: "inactive", joined: "8 Jen 2026" },
  { id: 4, name: "Keyla François", email: "keyla@email.com", course: "Mixing & Mastering", status: "active", joined: "5 Jen 2026" },
  { id: 5, name: "David Noël", email: "david@email.com", course: "Music Business", status: "active", joined: "3 Jen 2026" },
];

const NAV = [
  { icon: "⊞", label: "Dashboard" },
  { icon: "👥", label: "Elèv yo" },
  { icon: "📚", label: "Kou yo" },
  { icon: "💰", label: "Peman yo" },
  { icon: "📊", label: "Analitik" },
  { icon: "⚙", label: "Paramèt" },
];

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: "var(--bg-surface)", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", padding: "24px 0", position: "fixed", top: 0, bottom: 0, zIndex: 50 }}>
        <div style={{ padding: "0 20px 24px", borderBottom: "1px solid var(--border)", marginBottom: 20 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--amber)" }}>LB2BEAT</span>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>ADMIN PANEL</div>
        </div>
        {NAV.map(({ icon, label }) => (
          <button key={label} onClick={() => setActiveNav(label)} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "11px 20px",
            background: activeNav === label ? "var(--amber-glow)" : "none",
            borderLeft: `2px solid ${activeNav === label ? "var(--amber)" : "transparent"}`,
            border: "none", borderLeft: `2px solid ${activeNav === label ? "var(--amber)" : "transparent"}`,
            color: activeNav === label ? "var(--amber)" : "var(--text-secondary)",
            fontSize: 13, fontWeight: 500, cursor: "pointer", textAlign: "left", width: "100%",
            fontFamily: "var(--font-body)", transition: "all 0.15s",
          }}>
            <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>{icon}</span>{label}
          </button>
        ))}
        <div style={{ marginTop: "auto", padding: "20px", borderTop: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--amber-glow)", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--amber)", fontSize: 13, fontWeight: 700 }}>A</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Admin</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>admin@lb2beat.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ marginLeft: 220, flex: 1, padding: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28 }}>Dashboard</h1>
            <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 4 }}>Jou sa: {new Date().toLocaleDateString("ht")}</p>
          </div>
          <button style={{ background: "var(--amber)", color: "#0a0a0e", padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-display)" }}>
            + Ajoute Kou
          </button>
        </div>

        {/* KPI Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
          {MOCK_STATS.map(stat => (
            <div key={stat.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "var(--font-mono)" }}>{stat.label}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: stat.color, marginBottom: 6 }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: "var(--green)" }}>↑ {stat.delta} vs mwa pase</div>
            </div>
          ))}
        </div>

        {/* Users table */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700 }}>Dènye Enskripsiyon yo</h2>
            <button style={{ background: "none", border: "1px solid var(--border)", borderRadius: 8, padding: "7px 14px", color: "var(--text-secondary)", fontSize: 13, cursor: "pointer" }}>Wè Tout</button>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--bg-surface)" }}>
                  {["Non", "Email", "Kou", "Statut", "Dat Enskripsiyon"].map(h => (
                    <th key={h} style={{ padding: "12px 24px", textAlign: "left", fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MOCK_USERS.map((u, i) => (
                  <tr key={u.id} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                    <td style={{ padding: "14px 24px", fontSize: 14, fontWeight: 600 }}>{u.name}</td>
                    <td style={{ padding: "14px 24px", fontSize: 13, color: "var(--text-secondary)" }}>{u.email}</td>
                    <td style={{ padding: "14px 24px", fontSize: 13, color: "var(--text-secondary)" }}>{u.course}</td>
                    <td style={{ padding: "14px 24px" }}>
                      <span style={{ background: u.status === "active" ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)", color: u.status === "active" ? "var(--green)" : "var(--red)", padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>
                        {u.status === "active" ? "Aktif" : "Inaktif"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 24px", fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{u.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
