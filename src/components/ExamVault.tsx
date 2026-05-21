"use client";
import { useState } from "react";

type Item = { board: string; boardClass: string; qHtml: string; stepsHtml: string[]; answerHtml: string };

function VaultItem({ it, n }: { it: Item; n: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="xq">
      <div className="xq-top">
        <span className={`board ${it.boardClass}`}>{it.board}</span>
        <span className="q-num">PROBLEM {n}</span>
      </div>
      <div className="xq-text" dangerouslySetInnerHTML={{ __html: it.qHtml }} />
      <button className="reveal-btn" onClick={() => setOpen((o) => !o)}>
        {open ? "▾ conceal the solution" : "▸ reveal the worked solution"}
      </button>
      {open && (
        <>
          <ol className="steps">
            {it.stepsHtml.map((s, i) => <li key={i} dangerouslySetInnerHTML={{ __html: s }} />)}
          </ol>
          <div className="answer">
            <span className="l">Answer</span>
            <span className="v" dangerouslySetInnerHTML={{ __html: it.answerHtml }} />
          </div>
        </>
      )}
    </div>
  );
}

export default function ExamVault({ items }: { items: Item[] }) {
  if (!items.length) return null;
  return (
    <div className="vault">
      <div className="vault-h">
        <div className="ey">// the exam vault</div>
        <h3>JEE Advanced &amp; A-Level</h3>
        <p>The real thing — entrance-exam and board-style problems, with full worked solutions. Attempt them on paper before you break the seal.</p>
      </div>
      <div className="vault-body">
        {items.map((it, i) => <VaultItem key={i} it={it} n={i + 1} />)}
      </div>
    </div>
  );
}
