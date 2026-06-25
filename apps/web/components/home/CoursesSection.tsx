"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const MOCK_COURSES = [
  { id: 1, level: "beginner", title: "Beat Making 101", description: "Aprann baz beat making yo: FL Studio, drums, melody.", lessons: 24, hours: 8, students: 892, price: 49 },
  { id: 2, level: "beginner", title: "Trap Beats Mastery", description: "Kreye bèl trap beats ki sone pwofesyonèl.", lessons: 32, hours: 11, students: 640, price: 69 },
  { id: 3, level: "intermediate", title: "Sound Design Pro", description: "Design pwòp son ou yo epi kreye yon son unik.", lessons: 28, hours: 10, students: 420, price: 79 },
  { id: 4, level: "intermediate", title: "Mixing & Mastering", description: "Aprann mix ak master beats ou yo pou streaming.", lessons: 20, hours: 7, students: 380, price: 89 },
  { id: 5, level: "advanced", title: "Music Business", description: "Vann beats ou yo sou internet epi bati yon mak.", lessons: 18, hours: 6, students: 290, price: 99 },
  { id: 6, level: "advanced", title: "Full Producer Pack", description: "Paket konplè: baz rive nan avanse + biznis mizik.", lessons: 80, hours: 30, students: 1200, price: 149 },
];

export default function CoursesSection() {
  const t = useTranslations("courses");
  const locale = useLocale();
  const [filter, setFilter] = useState("all");

  const filters = ["all", "beginner", "intermediate", "advanced"] as const;
  const filtered = filter === "all" ? MOCK_COURSES : MOCK_COURSES.filter(c => c.level === filter);

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-base)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 12 }}>{t("title")}</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>{t("subtitle")}</p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "9px 20px", borderRadius: 100,
              border: `1px solid ${filter === f ? "var(--amber)" : "var(--border)"}`,
              background: filter === f ? "var(--amber-glow)" : "transparent",
              color: filter === f ? "var(--amber)" : "var(--text-secondary)",
              fontSize: 14, fontWeight: 500, cursor: "pointer",
              fontFamily: "var(--font-body)",
              transition: "all 0.2s",
            }}>
              {t(f)}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {filtered.map(course => (
            <div key={course.id} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 16, overflow: "hidden",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "var(--border-strong)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}
            >
              {/* Course thumbnail skeleton */}
              <div style={{ height: 180, background: "linear-gradient(135deg, var(--bg-card-hover) 0%, var(--bg-surface) 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="wave-bar" style={{ height: `${20 + Math.random() * 40}px`, animationDelay: `${i * 0.1}s`, opacity: 0.4 }} />
                  ))}
                </div>
                <span style={{
                  position: "absolute", top: 12, left: 12,
                  background: course.level === "beginner" ? "#166534" : course.level === "intermediate" ? "#1e3a8a" : "#7c2d12",
                  color: course.level === "beginner" ? "#86efac" : course.level === "intermediate" ? "#93c5fd" : "#fdba74",
                  padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5,
                }}>
                  {t(course.level as "beginner" | "intermediate" | "advanced")}
                </span>
              </div>

              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{course.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{course.description}</p>

                <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                  {[
                    { icon: "📚", val: `${course.lessons} ${t("lessons")}` },
                    { icon: "⏱", val: `${course.hours} ${t("hours")}` },
                    { icon: "👥", val: `${course.students} ${t("students")}` },
                  ].map(({ icon, val }) => (
                    <span key={val} style={{ fontSize: 13, color: "var(--text-muted)" }}>{icon} {val}</span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--amber)" }}>${course.price}</span>
                  <Link href={`/${locale}/courses/${course.id}`} style={{
                    background: "var(--amber)", color: "#0a0a0e",
                    padding: "9px 20px", borderRadius: 8,
                    fontSize: 13, fontWeight: 700,
                    textDecoration: "none", fontFamily: "var(--font-display)",
                  }}>
                    {t("enroll")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
