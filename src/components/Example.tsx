"use client";
import { useState } from "react";

export default function Example({
  title, problemHtml, stepsHtml, answerHtml,
}: { title: string; problemHtml: string; stepsHtml: string[]; answerHtml: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="exemplar">
      <div className="eh">
        <span className="tag">Exemplar</span>
        <span className="t">{title}</span>
      </div>
      <div className="eb">
        <div className="prob" dangerouslySetInnerHTML={{ __html: problemHtml }} />
        <button className="reveal-btn" onClick={() => setOpen((o) => !o)}>
          {open ? "▾ conceal the working" : "▸ reveal the working"}
        </button>
        {open && (
          <>
            <ol className="steps">
              {stepsHtml.map((s, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: s }} />
              ))}
            </ol>
            <div className="answer">
              <span className="l">Answer</span>
              <span className="v" dangerouslySetInnerHTML={{ __html: answerHtml }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
