"use client";
import { useEffect, useState } from "react";
import { renderNote } from "@/lib/renderNote";

type Note = { id: string; title: string; body: string; ts: number };
const KEY = "chancelab.notes.v1";

const SEED: Note = {
  id: "seed-transform",
  title: "Transformation of Mean & Standard Deviation",
  ts: Date.now(),
  body: `**Given:** $\\bar{x}=50,\\quad \\sigma_x=8$

**Transformation:** $y = 3x - 10$

---

#### Mean of $y$

For a transformation $y = ax + b$, the mean transforms as $\\bar{y} = a\\bar{x} + b$.

$$\\bar{y} = 3(50) - 10 = 150 - 10 = 140$$

So the mean of $y$ is $\\boxed{140}$.

---

#### Standard Deviation of $y$

The standard deviation scales **only** by the multiplier: $\\sigma_y = |a|\\,\\sigma_x$.

$$\\sigma_y = 3(8) = 24$$

So $\\boxed{24}$.

---

#### Effect of each constant

For $y = 3x - 10$:

- The multiplier **3** stretches the data, so the standard deviation becomes **3× larger**.
- The constant **−10** shifts every value down by 10 — it changes the **mean** but **not** the spread.

**Summary:** multiplying changes **both** mean and spread; adding or subtracting changes **only the mean**.`,
};

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editing, setEditing] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      setNotes(raw ? JSON.parse(raw) : [SEED]);
    } catch { setNotes([SEED]); }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(KEY, JSON.stringify(notes));
  }, [notes, loaded]);

  function save() {
    if (!title.trim() && !body.trim()) return;
    if (editing) {
      setNotes((ns) => ns.map((n) => (n.id === editing ? { ...n, title: title.trim() || "Untitled", body, ts: Date.now() } : n)));
    } else {
      setNotes((ns) => [{ id: "n" + Date.now(), title: title.trim() || "Untitled", body, ts: Date.now() }, ...ns]);
    }
    setTitle(""); setBody(""); setEditing(null);
  }
  function edit(n: Note) {
    setEditing(n.id); setTitle(n.title); setBody(n.body);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function del(id: string) {
    setNotes((ns) => ns.filter((n) => n.id !== id));
    if (editing === id) { setEditing(null); setTitle(""); setBody(""); }
  }
  function cancel() { setEditing(null); setTitle(""); setBody(""); }

  return (
    <div className="notes-wrap">
      <div className="note-editor">
        <div className="ne-head">
          <span className="ne-tag">{editing ? "editing" : "new entry"}</span>
          <span className="ne-hint">Markdown + LaTeX · inline <code>$…$</code> · display <code>$$…$$</code> · also <code>\\( \\)</code> &amp; <code>\\[ \\]</code></span>
        </div>
        <input className="ne-title" placeholder="Title — e.g. Transformation of mean & SD" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="ne-body" placeholder={"Drop your revision here…\n\nExample:\n$$\\bar{y}=a\\bar{x}+b$$"} value={body} onChange={(e) => setBody(e.target.value)} spellCheck={false} />
        {body.trim() && (
          <div className="ne-preview">
            <div className="ne-preview-label">live preview</div>
            <div className="note-render" dangerouslySetInnerHTML={{ __html: renderNote(body) }} />
          </div>
        )}
        <div className="ne-actions">
          <button className="btn btn-blood" onClick={save}>{editing ? "Update entry" : "Save to ledger"}</button>
          {editing && <button className="btn btn-ghost" onClick={cancel}>Cancel</button>}
          <span className="ne-count">{notes.length} {notes.length === 1 ? "entry" : "entries"}</span>
        </div>
      </div>

      {loaded && notes.length === 0 && (
        <div className="notes-empty">The ledger is empty. Drop your first revision above.</div>
      )}

      <div className="notes-list">
        {notes.map((n) => (
          <article key={n.id} className="note-card">
            <div className="note-card-head">
              <h3>{n.title}</h3>
              <div className="note-card-tools">
                <button onClick={() => edit(n)} title="Edit">✎</button>
                <button onClick={() => del(n.id)} title="Delete">✕</button>
              </div>
            </div>
            <div className="note-date">{new Date(n.ts).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}</div>
            <div className="note-render" dangerouslySetInnerHTML={{ __html: renderNote(n.body) }} />
          </article>
        ))}
      </div>
    </div>
  );
}
