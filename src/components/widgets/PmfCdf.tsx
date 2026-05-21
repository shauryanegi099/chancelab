"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, roundRect, PAL } from "@/lib/canvas";

const INIT = [10, 25, 35, 20, 8, 2];

export default function PmfCdf() {
  const cv = useRef<HTMLCanvasElement>(null);
  const [weights, setWeights] = useState<number[]>(INIT);

  const tot = weights.reduce((a, b) => a + b, 0) || 1;
  const probs = weights.map((x) => x / tot);
  const mean = probs.reduce((a, pi, i) => a + i * pi, 0);
  const ex2 = probs.reduce((a, pi, i) => a + i * i * pi, 0);
  const vari = ex2 - mean * mean;

  function setW(i: number, v: number) {
    setWeights((prev) => { const next = prev.slice(); next[i] = v; return next; });
  }

  function draw() {
    const c = cv.current; if (!c) return;
    const { ctx, w, h } = setupCanvas(c, 280);
    const padL = 38, padR = 14, padT = 14, padB = 28, cw = w - padL - padR, ch = h - padT - padB;
    ctx.strokeStyle = PAL.grid; ctx.fillStyle = PAL.faint; ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = "right"; ctx.textBaseline = "middle";
    for (let i = 0; i <= 4; i++) {
      const y = padT + ch - ch * i / 4;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke();
      ctx.fillText((i / 4).toFixed(2), padL - 6, y);
    }
    const n = probs.length, gap = 14, bw = (cw - gap * (n - 1)) / n;
    // PMF bars
    probs.forEach((pi, i) => {
      const x = padL + i * (bw + gap), bh = pi * ch, y = padT + ch - bh;
      const g = ctx.createLinearGradient(0, y, 0, padT + ch); g.addColorStop(0, PAL.blood); g.addColorStop(1, PAL.blood + "22");
      ctx.fillStyle = g; roundRect(ctx, x, y, bw, bh, 5); ctx.fill();
      ctx.fillStyle = PAL.faint; ctx.textAlign = "center"; ctx.textBaseline = "top"; ctx.fillText(String(i), x + bw / 2, padT + ch + 7);
    });
    // CDF staircase
    const xc = (i: number) => padL + i * (bw + gap) + bw / 2;
    let cum = 0; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.globalAlpha = .92; ctx.beginPath();
    ctx.moveTo(padL, padT + ch);
    probs.forEach((pi, i) => {
      const y0 = padT + ch - cum * ch; cum += pi; const y1 = padT + ch - cum * ch;
      ctx.lineTo(xc(i), y0); ctx.lineTo(xc(i), y1);
      if (i < n - 1) ctx.lineTo(xc(i + 1), y1);
    });
    ctx.lineTo(w - padR, padT + ch - cum * ch); ctx.stroke();
    ctx.globalAlpha = 1;
    // CDF dots
    cum = 0; probs.forEach((pi, i) => { cum += pi; ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(xc(i), padT + ch - cum * ch, 3.5, 0, 7); ctx.fill(); });
    ctx.fillStyle = PAL.ink; ctx.textAlign = "right"; ctx.textBaseline = "top"; ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillText("— CDF F(x)", w - padR, padT);
    ctx.fillStyle = PAL.blood; ctx.fillText("▮ PMF p(x)", w - padR, padT + 14);
  }

  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weights]);

  return (
    <div>
      <div style={{ fontFamily: "var(--font-type)", fontSize: 12, color: "var(--dim)", marginBottom: 10 }}>
        drag the weights for X = 0…5 — the PMF (bars) auto-normalises and the CDF (line) accumulates.
      </div>
      <div className="ctrls">
        {weights.map((wt, i) => (
          <div className="ctrl" key={i} style={{ minWidth: 92 }}>
            <label>P(X={i}) <span className="v">{probs[i].toFixed(2)}</span></label>
            <input type="range" min={0} max={100} step={1} value={wt} onChange={(e) => setW(i, +e.target.value)} />
          </div>
        ))}
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
      <div className="readout">
        <div className="ro"><div className="rv">{mean.toFixed(2)}</div><div className="rl">E[X]</div></div>
        <div className="ro"><div className="rv">{vari.toFixed(2)}</div><div className="rl">variance</div></div>
        <div className="ro"><div className="rv">1.00</div><div className="rl">Σ P(x)</div></div>
      </div>
    </div>
  );
}
