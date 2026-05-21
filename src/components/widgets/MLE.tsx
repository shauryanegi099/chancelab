"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, PAL } from "@/lib/canvas";
import { lgamma } from "@/lib/stats";

export default function MLE() {
  const cv = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState(20);
  const [k, setK] = useState(13);
  const [log, setLog] = useState(false);

  const L = (p: number): number => {
    if (p <= 0) return k === 0 ? 1 : 0;
    if (p >= 1) return k === n ? 1 : 0;
    return Math.exp(lgamma(n + 1) - lgamma(k + 1) - lgamma(n - k + 1) + k * Math.log(p) + (n - k) * Math.log(1 - p));
  };

  function draw() {
    const c = cv.current; if (!c) return;
    const { ctx, w, h } = setupCanvas(c, 250);
    const hat = k / n;
    const fn = (p: number): number => { if (!log) return L(p); const v = L(p); return v > 0 ? Math.log(v) : -50; };
    // scan for ymin/ymax (for log-likelihood baseline shift)
    let yMax = -Infinity, yMin = Infinity;
    for (let i = 1; i < 200; i++) { const y = fn(i / 200); if (y > yMax) yMax = y; if (y > -49 && y < yMin) yMin = y; }
    const plot = (p: number): number => { const y = fn(p); return log ? (y - yMin) : y; };
    const xmin = 0.001, xmax = 0.999, N = 260;
    const pts: [number, number][] = []; let ymax = 0;
    for (let i = 0; i <= N; i++) { const x = xmin + (xmax - xmin) * i / N; const y = Math.max(0, plot(x)); pts.push([x, y]); if (y > ymax) ymax = y; }
    ymax = (log ? (yMax - yMin) * 1.1 : ymax * 1.1) || 1;
    const padL = 42, padR = 14, padT = 14, padB = 28, cw = w - padL - padR, ch = h - padT - padB;
    const X = (x: number) => padL + ((x - xmin) / (xmax - xmin)) * cw;
    const Y = (y: number) => padT + ch - (y / ymax) * ch;
    ctx.strokeStyle = PAL.grid; ctx.fillStyle = PAL.faint; ctx.font = '10px monospace'; ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let i = 0; i <= 5; i++) { const x = xmin + (xmax - xmin) * i / 5; ctx.beginPath(); ctx.moveTo(X(x), padT); ctx.lineTo(X(x), padT + ch); ctx.stroke(); ctx.fillText(String(Math.round(x * 100) / 100), X(x), padT + ch + 6); }
    // MLE mark (vertical dashed line)
    ctx.strokeStyle = PAL.ink; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(X(hat), padT); ctx.lineTo(X(hat), padT + ch); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = PAL.ink; ctx.textAlign = "center"; ctx.fillText("p̂=" + hat.toFixed(2), X(hat), padT + 1);
    // curve
    ctx.beginPath(); pts.forEach((p, i) => { i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])); });
    ctx.strokeStyle = PAL.blood; ctx.lineWidth = 2.4; ctx.stroke();
  }

  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n, k, log]);

  function changeN(v: number) { setN(v); if (k > v) setK(v); }
  function changeK(v: number) { setK(Math.min(v, n)); }

  const hat = k / n;

  return (
    <div>
      <div className="ctrls">
        <div className="ctrl" style={{ minWidth: 180 }}><label>flips n <span className="v">{n}</span></label>
          <input type="range" min={1} max={100} value={n} onChange={(e) => changeN(+e.target.value)} /></div>
        <div className="ctrl" style={{ minWidth: 180 }}><label>heads observed k <span className="v">{k}</span></label>
          <input type="range" min={0} max={n} value={k} onChange={(e) => changeK(+e.target.value)} /></div>
        <button className={log ? "wbtn" : "wbtn ghost"} style={{ alignSelf: "flex-end" }} onClick={() => setLog((v) => !v)}>
          {log ? "show likelihood" : "show log-likelihood"}
        </button>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{hat.toFixed(3)}</div><div className="rl">MLE p̂ = k/n</div></div>
        <div className="ro"><div className="rv">{L(hat).toExponential(2)}</div><div className="rl">peak likelihood</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
