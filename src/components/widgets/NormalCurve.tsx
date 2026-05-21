"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, PAL } from "@/lib/canvas";
import { normPDF, normCDF } from "@/lib/stats";

export default function NormalCurve() {
  const cv = useRef<HTMLCanvasElement>(null);
  const [mu, setMu] = useState(0);
  const [sd, setSd] = useState(1);
  const [lo, setLo] = useState(-1);
  const [hi, setHi] = useState(1);

  function draw() {
    const c = cv.current; if (!c) return;
    const { ctx, w, h } = setupCanvas(c, 250);
    const xmin = mu - 4 * sd, xmax = mu + 4 * sd, N = 260;
    const pts: [number, number][] = []; let ymax = 0;
    for (let i = 0; i <= N; i++) { const x = xmin + (xmax - xmin) * i / N; const y = normPDF(x, mu, sd); pts.push([x, y]); if (y > ymax) ymax = y; }
    ymax *= 1.18;
    const padL = 42, padR = 14, padT = 14, padB = 28, cw = w - padL - padR, ch = h - padT - padB;
    const X = (x: number) => padL + ((x - xmin) / (xmax - xmin)) * cw;
    const Y = (y: number) => padT + ch - (y / ymax) * ch;
    ctx.strokeStyle = PAL.grid; ctx.fillStyle = PAL.faint; ctx.font = '10px monospace'; ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let i = 0; i <= 5; i++) { const x = xmin + (xmax - xmin) * i / 5; ctx.beginPath(); ctx.moveTo(X(x), padT); ctx.lineTo(X(x), padT + ch); ctx.stroke(); ctx.fillText(String(Math.round(x * 100) / 100), X(x), padT + ch + 6); }
    // shade
    ctx.beginPath(); ctx.moveTo(X(Math.max(lo, xmin)), Y(0));
    for (let i = 0; i <= N; i++) { const x = pts[i][0]; if (x >= lo && x <= hi) ctx.lineTo(X(x), Y(pts[i][1])); }
    ctx.lineTo(X(Math.min(hi, xmax)), Y(0)); ctx.closePath();
    ctx.fillStyle = PAL.blood + "44"; ctx.fill();
    // sigma marks
    ([[mu - sd, PAL.faint], [mu + sd, PAL.faint], [mu - 2 * sd, "#bcae90"], [mu + 2 * sd, "#bcae90"]] as [number, string][]).forEach(([mx, cc]) => {
      ctx.strokeStyle = cc; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(X(mx), padT); ctx.lineTo(X(mx), padT + ch); ctx.stroke(); ctx.setLineDash([]);
    });
    // curve
    ctx.beginPath(); pts.forEach((p, i) => { i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])); });
    ctx.strokeStyle = PAL.blood; ctx.lineWidth = 2.4; ctx.stroke();
  }
  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mu, sd, lo, hi]);

  const p = normCDF(hi, mu, sd) - normCDF(lo, mu, sd);
  const within = (normCDF(mu + sd, mu, sd) - normCDF(mu - sd, mu, sd)) * 100;

  return (
    <div>
      <div className="ctrls">
        <div className="ctrl"><label>μ (mean) <span className="v">{mu}</span></label>
          <input type="range" min={-5} max={5} step={0.5} value={mu} onChange={(e) => setMu(+e.target.value)} /></div>
        <div className="ctrl"><label>σ (spread) <span className="v">{sd.toFixed(1)}</span></label>
          <input type="range" min={0.4} max={4} step={0.1} value={sd} onChange={(e) => setSd(+e.target.value)} /></div>
        <button className="wbtn ghost" onClick={() => { setMu(0); setSd(1); setLo(-1); setHi(1); }}>↺ standardize Z</button>
      </div>
      <div className="ctrls" style={{ marginTop: 6 }}>
        <div className="ctrl"><label>shade from <span className="v">{lo.toFixed(1)}</span></label>
          <input type="range" min={-12} max={12} step={0.1} value={lo} onChange={(e) => setLo(Math.min(+e.target.value, hi))} /></div>
        <div className="ctrl"><label>shade to <span className="v">{hi.toFixed(1)}</span></label>
          <input type="range" min={-12} max={12} step={0.1} value={hi} onChange={(e) => setHi(Math.max(+e.target.value, lo))} /></div>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{p.toFixed(4)}</div><div className="rl">P(lo ≤ X ≤ hi)</div></div>
        <div className="ro"><div className="rv">{((lo - mu) / sd).toFixed(2)}</div><div className="rl">z(lo)</div></div>
        <div className="ro"><div className="rv">{((hi - mu) / sd).toFixed(2)}</div><div className="rl">z(hi)</div></div>
        <div className="ro"><div className="rv">{within.toFixed(1)}%</div><div className="rl">within μ±σ</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
