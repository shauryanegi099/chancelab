"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, PAL } from "@/lib/canvas";

export default function CoinLLN() {
  const cv = useRef<HTMLCanvasElement>(null);
  const data = useRef({ flips: 0, heads: 0, hist: [] as [number, number][] });
  const anim = useRef<number | null>(null);
  const [ro, setRo] = useState({ flips: 0, heads: 0, prop: "—", dist: "—" });
  const [running, setRunning] = useState(false);

  function record() {
    const d = data.current; const p = d.heads / d.flips;
    if (d.hist.length === 0 || d.flips < 50 || d.flips % Math.max(1, Math.floor(d.flips / 400)) === 0) {
      d.hist.push([d.flips, p]); if (d.hist.length > 600) d.hist.shift();
    } else d.hist[d.hist.length - 1] = [d.flips, p];
  }
  function draw() {
    const c = cv.current; if (!c) return;
    const { ctx, w, h } = setupCanvas(c, 240);
    const d = data.current;
    setRo({ flips: d.flips, heads: d.heads, prop: d.flips ? (d.heads / d.flips).toFixed(4) : "—", dist: d.flips ? Math.abs(d.heads / d.flips - 0.5).toFixed(4) : "—" });
    const padL = 40, padR = 12, padT = 12, padB = 22, cw = w - padL - padR, ch = h - padT - padB;
    ctx.font = '10px monospace'; ctx.textAlign = "right"; ctx.textBaseline = "middle";
    [0, .25, .5, .75, 1].forEach((v) => {
      const y = padT + ch - v * ch;
      ctx.strokeStyle = v === .5 ? PAL.blood : PAL.grid; ctx.lineWidth = v === .5 ? 1.5 : 1;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke();
      ctx.fillStyle = v === .5 ? PAL.blood : PAL.faint; ctx.fillText(v.toFixed(2), padL - 6, y);
    });
    ctx.fillStyle = PAL.blood; ctx.textAlign = "left"; ctx.fillText("fate · 0.5", padL + 6, padT + ch - .5 * ch - 9);
    if (d.hist.length > 1) {
      const maxN = d.hist[d.hist.length - 1][0];
      ctx.beginPath();
      d.hist.forEach((pt, i) => { const x = padL + (pt[0] / maxN) * cw, y = padT + ch - pt[1] * ch; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.stroke();
      const last = d.hist[d.hist.length - 1];
      ctx.fillStyle = PAL.blood; ctx.beginPath(); ctx.arc(padL + cw, padT + ch - last[1] * ch, 4, 0, 7); ctx.fill();
    }
  }
  function flip(n: number) { const d = data.current; for (let i = 0; i < n; i++) { if (Math.random() < 0.5) d.heads++; d.flips++; record(); } draw(); }
  function stop() { if (anim.current) cancelAnimationFrame(anim.current); anim.current = null; setRunning(false); }
  function reset() { data.current = { flips: 0, heads: 0, hist: [] }; stop(); draw(); }
  function auto() {
    if (anim.current) { stop(); return; }
    setRunning(true);
    const step = () => { flip(40); if (data.current.flips < 50000) anim.current = requestAnimationFrame(step); else stop(); };
    step();
  }
  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => { window.removeEventListener("resize", r); if (anim.current) cancelAnimationFrame(anim.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="ctrls">
        <button className="wbtn" onClick={() => flip(1)}>Cast ×1</button>
        <button className="wbtn ghost" onClick={() => flip(100)}>Cast ×100</button>
        <button className="wbtn ghost" onClick={auto}>{running ? "⏸ halt" : "▶ auto-cast"}</button>
        <button className="wbtn ghost" onClick={reset}>reset</button>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{ro.flips.toLocaleString()}</div><div className="rl">casts</div></div>
        <div className="ro"><div className="rv">{ro.heads.toLocaleString()}</div><div className="rl">heads</div></div>
        <div className="ro"><div className="rv">{ro.prop}</div><div className="rl">proportion</div></div>
        <div className="ro"><div className="rv">{ro.dist}</div><div className="rl">|p − 0.5|</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
