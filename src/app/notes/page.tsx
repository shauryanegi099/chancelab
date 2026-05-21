import type { Metadata } from "next";
import Notes from "@/components/Notes";

export const metadata: Metadata = {
  title: "Notes — The Chance Lab",
  description: "Your personal revision ledger.",
};

export default function NotesPage() {
  return (
    <main className="shell">
      <div className="lesson-hero">
        <div className="crumb"><a href="/">The Codex</a><span>✠</span><span>The Ledger</span></div>
        <div className="num">REVISION · <span style={{ fontFamily: "var(--font-jp)" }}>帳</span></div>
        <h1>NOTES</h1>
        <p className="sub">Your private revision ledger. Drop anything — Markdown and LaTeX render instantly, and every entry is saved to this browser.</p>
      </div>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "20px 0 60px" }}>
        <Notes />
      </div>
    </main>
  );
}
