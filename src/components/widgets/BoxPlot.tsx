"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, roundRect, PAL } from "@/lib/canvas";

function quantile(a: number[], q: number): number {
  const p = (a.length - 1) * q, b = Math.floor(p), r = p - b;
  return a[b + 1] !== undefined ? a[b] + r * (a[b + 1] - a[b]) : a[b];
}

function gauss(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export default function BoxPlot() {
  const cv = useRef<HTMLCanvasElement>(null);
  const [data, setData] = useState("7, 8, 8, 9, 10, 10, 11, 12, 13, 14, 15, 21");
  const [ro, setRo] = useState({ med: "—", q1: "—", q3: "—", iqr: "—", mean: "—", sd: "—", range: "—" });

  function draw() {
    const c = cv.current; if (!c) return;
    const a = data.split(/[, \n]+/).map((x) => parseFloat(x)).filter((x) => !isNaN(x)).sort((p, q) => p - q);
    if (a.length < 3) return;
    const q1 = quantile(a, 0.25), med = quantile(a, 0.5), q3 = quantile(a, 0.75), iqr = q3 - q1;
    const lo = q1 - 1.5 * iqr, hi = q3 + 1.5 * iqr;
    const out = a.filter((x) => x < lo || x > hi);
    const whiskLo = Math.min(...a.filter((x) => x >= lo)), whiskHi = Math.max(...a.filter((x) => x <= hi));
    const mean = a.reduce((s, x) => s + x, 0) / a.length;
    const sd = Math.sqrt(a.reduce((s, x) => s + (x - mean) * (x - mean), 0) / a.length);
    setRo({
      med: med.toFixed(1), q1: q1.toFixed(1), q3: q3.toFixed(1), iqr: iqr.toFixed(1),
      mean: mean.toFixed(2), sd: sd.toFixed(2), range: (a[a.length - 1] - a[0]).toFixed(1),
    });
    const { ctx, w } = setupCanvas(c, 170);
    const padL = 24, padR = 24, cw = w - padL - padR, cy = 86;
    const dmin = a[0], dmax = a[a.length - 1], span = (dmax - dmin) || 1;
    const X = (v: number) => padL + ((v - dmin) / span) * cw;
    // axis
    ctx.strokeStyle = PAL.grid; ctx.fillStyle = PAL.faint; ctx.font = '10px monospace'; ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let i = 0; i <= 5; i++) { const v = dmin + span * i / 5; ctx.beginPath(); ctx.moveTo(X(v), cy + 44); ctx.lineTo(X(v), cy + 50); ctx.stroke(); ctx.fillText(String(Math.round(v * 10) / 10), X(v), cy + 53); }
    // whiskers
    ctx.strokeStyle = PAL.blood; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(X(whiskLo), cy); ctx.lineTo(X(q1), cy); ctx.moveTo(X(q3), cy); ctx.lineTo(X(whiskHi), cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(X(whiskLo), cy - 12); ctx.lineTo(X(whiskLo), cy + 12); ctx.moveTo(X(whiskHi), cy - 12); ctx.lineTo(X(whiskHi), cy + 12); ctx.stroke();
    // box
    const g = ctx.createLinearGradient(0, cy - 26, 0, cy + 26); g.addColorStop(0, PAL.blood + "55"); g.addColorStop(1, PAL.blood + "11");
    ctx.fillStyle = g; roundRect(ctx, X(q1), cy - 26, X(q3) - X(q1), 52, 6); ctx.fill();
    ctx.strokeStyle = PAL.blood; ctx.lineWidth = 2; roundRect(ctx, X(q1), cy - 26, X(q3) - X(q1), 52, 6); ctx.stroke();
    // median
    ctx.beginPath(); ctx.moveTo(X(med), cy - 26); ctx.lineTo(X(med), cy + 26); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.stroke();
    // mean dot
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(X(mean), cy, 3.5, 0, 7); ctx.fill();
    // outliers
    ctx.fillStyle = PAL.blood; out.forEach((o) => { ctx.beginPath(); ctx.arc(X(o), cy, 4, 0, 7); ctx.fill(); });
    ctx.fillStyle = PAL.faint; ctx.textAlign = "left"; ctx.fillText("◆ red = outliers (beyond 1.5×IQR)", padL, 8);
  }

  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function randomize() {
    const arr = Array.from({ length: 11 + (Math.random() * 6 | 0) }, () => Math.round(5 + gauss() * 4 + 10));
    if (Math.random() < 0.6) arr.push(Math.round(30 + Math.random() * 8));
    setData(arr.join(", "));
  }

  return (
    <div>
      <div className="ctrls">
        <div className="ctrl" style={{ minWidth: 280, flex: 1, maxWidth: 520 }}>
          <label>data set (comma separated)</label>
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            style={{ background: "#18121f", border: "1px solid #3a2f44", color: "#ece6e8", fontFamily: "monospace", padding: "9px 12px" }}
          />
        </div>
        <button className="wbtn ghost" onClick={randomize}>🎲 random data</button>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{ro.med}</div><div className="rl">median</div></div>
        <div className="ro"><div className="rv">{ro.q1}</div><div className="rl">Q1</div></div>
        <div className="ro"><div className="rv">{ro.q3}</div><div className="rl">Q3</div></div>
        <div className="ro"><div className="rv">{ro.iqr}</div><div className="rl">IQR</div></div>
        <div className="ro"><div className="rv">{ro.mean}</div><div className="rl">mean</div></div>
        <div className="ro"><div className="rv">{ro.sd}</div><div className="rl">std dev</div></div>
        <div className="ro"><div className="rv">{ro.range}</div><div className="rl">range</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
