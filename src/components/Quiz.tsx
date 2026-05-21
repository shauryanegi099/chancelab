"use client";
import { useMemo, useState } from "react";

type Diff = "easy" | "med" | "hard";
type MCQ = { type: "mcq"; diff: Diff; qHtml: string; choicesHtml: string[]; answer: number; explainHtml: string };
type NUM = { type: "num"; diff: Diff; qHtml: string; answer: number; tol: number; explainHtml: string };
export type QPrepared = MCQ | NUM;

const tierLabel = (d: Diff) => (d === "easy" ? "Initiate" : d === "med" ? "Adept" : "Master");

function MCQItem({ q, n, hidden, onCorrect }: { q: MCQ; n: number; hidden: boolean; onCorrect: () => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const done = picked !== null;
  return (
    <div className={`q ${hidden ? "hide" : ""}`}>
      <div className="q-top"><span className="q-num">№ {n}</span><span className={`tier ${q.diff}`}>{tierLabel(q.diff)}</span></div>
      <div className="q-text" dangerouslySetInnerHTML={{ __html: q.qHtml }} />
      <div className="choices">
        {q.choicesHtml.map((c, ci) => {
          let cls = "choice";
          if (done) { cls += " lock"; if (ci === q.answer) cls += " right"; else if (ci === picked) cls += " wrong"; }
          return (
            <button key={ci} className={cls} onClick={() => { if (done) return; setPicked(ci); if (ci === q.answer) onCorrect(); }}>
              <span className="mk">{String.fromCharCode(65 + ci)}</span>
              <span dangerouslySetInnerHTML={{ __html: c }} />
              {done && ci === picked && ci !== q.answer && <span className="wasted">WASTED</span>}
            </button>
          );
        })}
      </div>
      {done && (
        <div className="q-why show"><b>The reasoning — </b><span dangerouslySetInnerHTML={{ __html: q.explainHtml }} /></div>
      )}
    </div>
  );
}

function NumItem({ q, n, hidden, onCorrect }: { q: NUM; n: number; hidden: boolean; onCorrect: () => void }) {
  const [val, setVal] = useState("");
  const [state, setState] = useState<null | "ok" | "no">(null);
  const check = () => {
    if (state) return;
    const x = parseFloat(val.replace(/[, ]/g, ""));
    if (isNaN(x)) { setState("no"); return; }
    const ok = Math.abs(x - q.answer) <= q.tol + 1e-9;
    setState(ok ? "ok" : "no");
    if (ok) onCorrect();
  };
  return (
    <div className={`q ${hidden ? "hide" : ""}`}>
      <div className="q-top"><span className="q-num">№ {n}</span><span className={`tier ${q.diff}`}>{tierLabel(q.diff)}</span></div>
      <div className="q-text" dangerouslySetInnerHTML={{ __html: q.qHtml }} />
      <div className="num-ans">
        <input className={state ?? ""} value={val} onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") check(); }} readOnly={!!state}
          inputMode="decimal" placeholder="inscribe your answer…" />
        <button className="wbtn" onClick={check} disabled={!!state}>
          {state === "ok" ? "✓ true" : state === "no" ? `answer: ${q.answer}` : "judge"}
        </button>
        {state === "no" && <span className="wasted">WASTED</span>}
      </div>
      {state && (
        <div className="q-why show"><b>The reasoning — </b><span dangerouslySetInnerHTML={{ __html: q.explainHtml }} /></div>
      )}
    </div>
  );
}

export default function Quiz({ items }: { items: QPrepared[] }) {
  const order: Record<Diff, number> = { easy: 0, med: 1, hard: 2 };
  const sorted = useMemo(() => [...items].sort((a, b) => order[a.diff] - order[b.diff]), [items]);
  const [filter, setFilter] = useState<"all" | Diff>("all");
  const [score, setScore] = useState(0);
  const inc = () => setScore((s) => s + 1);

  return (
    <div className="judgment">
      <div className="jh">
        <span className="jp">審判</span>
        <h3>The Judgment</h3>
        <span className="score">verdict <b>{score}</b> / {items.length}</span>
      </div>
      <div className="jfilter">
        {(["all", "easy", "med", "hard"] as const).map((f) => (
          <button key={f} className={`jchip ${filter === f ? "on" : ""}`} onClick={() => setFilter(f)}>
            {f === "all" ? "All" : f === "easy" ? "Initiate" : f === "med" ? "Adept" : "Master"}
          </button>
        ))}
      </div>
      <div className="jbody">
        {sorted.map((q, i) => {
          const hidden = filter !== "all" && q.diff !== filter;
          return q.type === "mcq"
            ? <MCQItem key={i} q={q} n={i + 1} hidden={hidden} onCorrect={inc} />
            : <NumItem key={i} q={q} n={i + 1} hidden={hidden} onCorrect={inc} />;
        })}
      </div>
    </div>
  );
}
