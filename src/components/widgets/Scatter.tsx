"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, PAL } from "@/lib/canvas";

function gauss(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

const N = 90;

export default function Scatter() {
  const cv = useRef<HTMLCanvasElement>(null);
  const pts = useRef<[number, number][]>([]);
  const [target, setTarget] = useState(0.7);
  const [ro, setRo] = useState({ rs: "—", cov: "—", rel: "—", relColor: PAL.faint });

  function gen(r: number) {
    const next: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      const z1 = gauss(), z2 = gauss();
      const x = z1;
      const y = r * z1 + Math.sqrt(Math.max(0, 1 - r * r)) * z2;
      next.push([x, y]);
    }
    pts.current = next;
  }

  function stats() {
    const p = pts.current; const n = p.length;
    const mx = p.reduce((s, q) => s + q[0], 0) / n, my = p.reduce((s, q) => s + q[1], 0) / n;
    let sxy = 0, sx = 0, sy = 0;
    p.forEach((q) => { sxy += (q[0] - mx) * (q[1] - my); sx += (q[0] - mx) ** 2; sy += (q[1] - my) ** 2; });
    const cov = sxy / n; const r = sxy / Math.sqrt(sx * sy);
    return { cov, r, mx, my };
  }

  function draw() {
    const c = cv.current; if (!c) return;
    if (pts.current.length === 0) return;
    const s = stats();
    const ar = Math.abs(s.r);
    let rel = ar < 0.15 ? "none" : ar < 0.4 ? "weak" : ar < 0.7 ? "moderate" : "strong";
    const relColor = ar < 0.15 ? PAL.faint : (s.r > 0 ? PAL.gold : PAL.blood);
    rel += s.r > 0 ? " +" : (ar < 0.15 ? "" : " −");
    setRo({ rs: s.r.toFixed(2), cov: s.cov.toFixed(2), rel, relColor });
    const { ctx, w, h } = setupCanvas(c, 280);
    const pad = 34, cw = w - pad * 2, ch = h - pad * 2;
    const xs = pts.current.map((p) => p[0]), ys = pts.current.map((p) => p[1]);
    const xmin = Math.min(...xs), xmax = Math.max(...xs), ymin = Math.min(...ys), ymax = Math.max(...ys);
    const X = (x: number) => pad + ((x - xmin) / ((xmax - xmin) || 1)) * cw;
    const Y = (y: number) => pad + ch - ((y - ymin) / ((ymax - ymin) || 1)) * ch;
    ctx.strokeStyle = PAL.grid; ctx.lineWidth = 1;
    ctx.strokeRect(pad, pad, cw, ch);
    // regression line: slope = cov/var(x)
    const vx = xs.reduce((a, x) => a + (x - s.mx) ** 2, 0) / pts.current.length;
    const slope = s.cov / vx, intc = s.my - slope * s.mx;
    ctx.strokeStyle = PAL.blood; ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
    ctx.beginPath(); ctx.moveTo(X(xmin), Y(slope * xmin + intc)); ctx.lineTo(X(xmax), Y(slope * xmax + intc)); ctx.stroke(); ctx.setLineDash([]);
    // points
    pts.current.forEach((p) => { ctx.fillStyle = PAL.blood; ctx.globalAlpha = 0.8; ctx.beginPath(); ctx.arc(X(p[0]), Y(p[1]), 3.4, 0, 7); ctx.fill(); });
    ctx.globalAlpha = 1;
    ctx.fillStyle = PAL.faint; ctx.font = '11px monospace'; ctx.textAlign = "left"; ctx.textBaseline = "bottom";
    ctx.fillText("X →", w - pad - 24, h - 8);
    ctx.save(); ctx.translate(12, pad + 24); ctx.rotate(-Math.PI / 2); ctx.fillText("Y →", 0, 0); ctx.restore();
  }

  useEffect(() => {
    if (pts.current.length === 0) gen(target);
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onTarget(v: number) { setTarget(v); gen(v); draw(); }
  function resample() { gen(target); draw(); }

  return (
    <div>
      <div className="ctrls">
        <div className="ctrl" style={{ minWidth: 220 }}>
          <label>target correlation r <span className="v">{target.toFixed(2)}</span></label>
          <input type="range" min={-1} max={1} step={0.05} value={target} onChange={(e) => onTarget(+e.target.value)} />
        </div>
        <button className="wbtn ghost" onClick={resample}>🎲 resample</button>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{ro.rs}</div><div className="rl">sample r</div></div>
        <div className="ro"><div className="rv">{ro.cov}</div><div className="rl">covariance</div></div>
        <div className="ro"><div className="rv" style={{ fontSize: 16, color: ro.relColor }}>{ro.rel}</div><div className="rl">relationship</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
