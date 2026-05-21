"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TOMES, LESSONS } from "@/lib/content";

const NAV = [
  { slug: "probability", label: "Chance" },
  { slug: "bayes", label: "Judgment" },
  { slug: "expectation", label: "Fortune" },
  { slug: "normal", label: "The Bell" },
];

export default function TopBar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <div className="topbar-in">
        <Link href="/" className="brand">
          <span className="bk">✠</span>
          <span className="bt">The Chance Lab</span>
        </Link>
        <nav className="topnav">
          {NAV.map((n) => (
            <Link key={n.slug} href={`/codex/${n.slug}`} className={path === `/codex/${n.slug}` ? "on" : ""}>
              {n.label}
            </Link>
          ))}
          <Link href="/notes" className={path === "/notes" ? "on" : ""}>Notes</Link>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open the codex">☰</button>
      </div>
      <div className="scan" />

      <div className={`scrim ${open ? "on" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? "open" : ""}`}>
        <button className="menu-btn" style={{ position: "absolute", top: 20, right: 18 }} onClick={() => setOpen(false)} aria-label="Close">✕</button>
        <Link href="/notes" onClick={() => setOpen(false)} style={{ color: "var(--red-br)" }}>✎ Notes · the ledger</Link>
        {TOMES.map((t) => (
          <div key={t.id} style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: "var(--font-type)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--blood-bright)", padding: "8px 8px 2px" }}>
              {t.label} · {t.jp}
            </div>
            {t.items.map((it) =>
              it.ready ? (
                <Link key={it.slug} href={`/codex/${it.slug}`} onClick={() => setOpen(false)}>
                  {it.num} — {LESSONS[it.slug]?.title ?? it.title}
                </Link>
              ) : (
                <span key={it.slug} style={{ display: "block", padding: "12px 8px", fontFamily: "var(--font-type)", fontSize: 13, color: "#5a504a", borderBottom: "1px solid #2a2422" }}>
                  {it.num} — {it.title} · 封
                </span>
              )
            )}
          </div>
        ))}
      </aside>
    </header>
  );
}
