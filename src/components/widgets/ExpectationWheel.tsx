"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { setupCanvas, PAL } from "@/lib/canvas";

const tin: React.CSSProperties = {
  fontFamily: "var(--font-type)", fontSize: 14, background: "var(--paper)",
  border: "2px solid var(--ink)", color: "var(--ink)", padding: "8px 10px", width: "100%",
};

export default function ExpectationWheel() {
  const [rows, setRows] = useState([{ v: 100, w: 1 }, { v: 50, w: 1 }, { v: 0, w: 1 }, { v: -50, w: 1 }]);
  const cv = useRef<HTMLCanvasElement>(null);
  const sim = useRef({ spins: 0, sum: 0, hist: [] as [number, number][] });
  const anim = useRef<number | null>(null);
  const [ro, setRo] = useState({ ev: "—", avg: "—", varr: "—", spins: 0 });

  function model() {
    const vals = rows.map((r) => r.v), ws = rows.map((r) => Math.max(0, r.w));
    const tot = ws.reduce((a, b) => a + b, 0) || 1;
    const probs = ws.map((w) => w / tot);
    const EV = vals.reduce((a, v, i) => a + v * probs[i], 0);
    const EX2 = vals.reduce((a, v, i) => a + v * v * probs[i], 0);
    return { vals, probs, EV, vari: EX2 - EV * EV };
  }
  function sample(m: ReturnType<typeof model>) {
    const r = Math.random(); let c = 0;
    for (let i = 0; i < m.probs.length; i++) { c += m.probs[i]; if (r <= c) return m.vals[i]; }
    return m.vals[m.vals.length - 1];
  }
  function draw() {
    const c = cv.current; if (!c) return;
    const m = model(); const { ctx, w, h } = setupCanvas(c, 210); const s = sim.current;
    setRo({ ev: m.EV.toFixed(2), avg: s.spins ? (s.sum / s.spins).toFixed(2) : "—", varr: m.vari.toFixed(1), spins: s.spins });
    const padL = 44, padR = 12, padT = 12, padB = 22, cw = w - padL - padR, ch = h - padT - padB;
    const allV = [...s.hist.map((p) => p[1]), m.EV];
    let lo = Math.min(...allV), hi = Math.max(...allV); if (lo === hi) { lo -= 1; hi += 1; }
    const pad = (hi - lo) * .15; lo -= pad; hi += pad;
    const Y = (v: number) => padT + ch - ((v - lo) / (hi - lo)) * ch;
    ctx.strokeStyle = PAL.grid; ctx.fillStyle = PAL.faint; ctx.font = '10px monospace'; ctx.textAlign = "right"; ctx.textBaseline = "middle";
    for (let i = 0; i <= 4; i++) { const v = lo + (hi - lo) * i / 4, y = Y(v); ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke(); ctx.fillText(v.toFixed(0), padL - 6, y); }
    const ey = Y(m.EV); ctx.strokeStyle = PAL.blood; ctx.setLineDash([5, 4]); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(padL, ey); ctx.lineTo(w - padR, ey); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = PAL.blood; ctx.textAlign = "left"; ctx.fillText("E[X]=" + m.EV.toFixed(2), padL + 6, ey - 9);
    if (s.hist.length > 1) {
      const maxN = s.hist[s.hist.length - 1][0];
      ctx.beginPath(); s.hist.forEach((p, i) => { const x = padL + (p[0] / maxN) * cw, y = Y(p[1]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.stroke();
    }
  }
  function spin() {
    const m = model(); if (anim.current) cancelAnimationFrame(anim.current);
    const target = sim.current.spins + 2000;
    const step = () => {
      const s = sim.current;
      for (let i = 0; i < 40 && s.spins < target; i++) { s.sum += sample(m); s.spins++; if (s.spins % 5 === 0 || s.spins < 30) { s.hist.push([s.spins, s.sum / s.spins]); if (s.hist.length > 500) s.hist.shift(); } }
      draw(); if (s.spins < target) anim.current = requestAnimationFrame(step);
    };
    step();
  }
  function reset() { sim.current = { spins: 0, sum: 0, hist: [] }; if (anim.current) cancelAnimationFrame(anim.current); draw(); }

  useEffect(() => {
    reset(); const r = () => draw(); window.addEventListener("resize", r);
    return () => { window.removeEventListener("resize", r); if (anim.current) cancelAnimationFrame(anim.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const upd = (i: number, k: "v" | "w", val: number) => setRows((rs) => rs.map((r, j) => (j === i ? { ...r, [k]: val } : r)));

  return (
    <div>
      <div style={{ fontFamily: "var(--font-type)", fontSize: 12, color: "var(--ink-soft)", marginBottom: 8 }}>
        inscribe the wheel — outcome &amp; weight (auto-normalised)
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, maxWidth: 340 }}>
        {rows.map((r, i) => (
          <Fragment key={i}>
            <input style={tin} value={r.v} onChange={(e) => upd(i, "v", parseFloat(e.target.value) || 0)} />
            <input style={tin} value={r.w} onChange={(e) => upd(i, "w", parseFloat(e.target.value) || 0)} />
          </Fragment>
        ))}
      </div>
      <div className="ctrls" style={{ marginTop: 12 }}>
        <button className="wbtn" onClick={spin}>▶ spin ×2000</button>
        <button className="wbtn ghost" onClick={reset}>reset</button>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{ro.ev}</div><div className="rl">theoretical E[X]</div></div>
        <div className="ro"><div className="rv">{ro.avg}</div><div className="rl">running average</div></div>
        <div className="ro"><div className="rv">{ro.varr}</div><div className="rl">variance</div></div>
        <div className="ro"><div className="rv">{ro.spins.toLocaleString()}</div><div className="rl">spins</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
