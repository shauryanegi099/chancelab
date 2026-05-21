"use client";
import { useState } from "react";

export default function Rites({ items }: { items: { qHtml: string; aHtml: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  if (!items.length) return null;
  return (
    <div className="rites">
      <div className="rites-h">
        <span className="g">✠</span>
        <div>
          <h3>The Rite of Understanding</h3>
          <div className="s">The questions the examiners speak aloud. Answer in your own tongue, then break the seal.</div>
        </div>
      </div>
      {items.map((it, i) => (
        <div key={i} className={`rite ${open === i ? "open" : ""}`}>
          <button className="rq" onClick={() => setOpen(open === i ? null : i)}>
            <span className="tag">Explain</span>
            <span className="t" dangerouslySetInnerHTML={{ __html: it.qHtml }} />
            <span className="chev">▸</span>
          </button>
          <div className="ra">
            <div className="ra-in" dangerouslySetInnerHTML={{ __html: it.aHtml }} />
          </div>
        </div>
      ))}
    </div>
  );
}
