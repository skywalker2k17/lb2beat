"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const ENROLLED = [
  { id: 1, title: "Beat Making 101", progress: 65, lessons: 24, completed: 15 },
  { id: 2, title: "Trap Beats Mastery", progress: 30, lessons: 32, completed: 10 },
  { id: 3, title: "Sound Design Pro", progress: 0, lessons: 28, completed: 0 },
];

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)" }}>
      {/* Sidebar + main layout */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside style={{ width: 240, minHeight: "100vh", background: "var(--bg-surface)", borderRight: "1px solid var(--border)", padding: "24px 0", position: "fixed", top: 0, left: 0, zIndex: 50 }} className="lb-sidebar">
          <div style={{ padding: "0 24px 24px", borderBottom: "1px solid var(--border)", marginBottom: 20 }}>
            <Link href={`/${locale}`} style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--amber)" }}>LB2BEAT</span>
            </Link>
          </div>
          {[
            { icon: "⊞", label: t("my_courses"), href: `/${locale}/dashboard` },
            { icon: "◎", label: "Profil", href: `/${locale}/dashboard/profile` },
            { icon: "✦", label: t("certificate"), href: `/${locale}/dashboard/certificates` },
            { icon: "↗", label: "Dekouvri Kou", href: `/${locale}/courses` },
          ].map(({ icon, label, href }) => (
            <Link key={label} href={href} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 24px", color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--amber)"; e.currentTarget.style.background = "var(--amber-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "none"; }}>
              <span style={{ fontSize: 16 }}>{icon}</span>{label}
            </Link>
          ))}
        </aside>

        {/* Main content */}
        <main style={{ marginLeft: 240, flex: 1, padding: 40, minHeight: "100vh" }} className="lb-dash-main">
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, marginBottom: 8 }}>
            {t("welcome")} <span style={{ color: "var(--amber)" }}>Jean 👋</span>
          </h1>
          <p style={{ color: "var(--text-muted)", marginBottom: 40 }}>Kontinye vwayaj beat making ou.</p>

          {/* KPI cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 48 }}>
            {[
              { label: t("my_courses"), value: "3" },
              { label: t("hours_watched"), value: "24h" },
              { label: t("completed"), value: "1" },
              { label: t("certificate"), value: "1" },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, color: "var(--amber)" }}>{value}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, marginBottom: 24 }}>{t("my_courses")}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {ENROLLED.map(course => (
              <div key={course.id} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                <div style={{ width: 72, height: 72, borderRadius: 12, background: "var(--bg-card-hover)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[3, 7, 5, 9, 4].map((h, i) => (
                      <div key={i} className="wave-bar" style={{ height: `${h * 4}px`, animationDelay: `${i * 0.15}s`, opacity: 0.5 }} />
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{course.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ flex: 1, height: 6, background: "var(--bg-surface)", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ width: `${course.progress}%`, height: "100%", background: "var(--amber)", borderRadius: 3, transition: "width 0.5s ease" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--amber)", fontWeight: 500, whiteSpace: "nowrap" }}>{course.progress}%</span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 6 }}>{course.completed}/{course.lessons} leson</p>
                </div>
                <Link href={`/${locale}/courses/${course.id}`} style={{ background: course.progress > 0 ? "var(--amber)" : "var(--bg-surface)", color: course.progress > 0 ? "#0a0a0e" : "var(--text-secondary)", border: `1px solid ${course.progress > 0 ? "var(--amber)" : "var(--border)"}`, padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>
                  {course.progress > 0 ? t("continue") : "Kòmanse"}
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <style>{`@media(max-width:768px){.lb-sidebar{display:none!important}.lb-dash-main{margin-left:0!important;padding:24px!important}}`}</style>
    </div>
  );
}
