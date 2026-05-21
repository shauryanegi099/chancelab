"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, PAL } from "@/lib/canvas";
import { normPDF } from "@/lib/stats";

type PopKey = "uniform" | "exp" | "bern" | "dice";
type Pop = { draw: () => number; mu: number; sd: number; lbl: string };

const POPS: Record<PopKey, Pop> = {
  uniform: { draw: () => Math.random(), mu: 0.5, sd: Math.sqrt(1 / 12), lbl: "Uniform(0,1)" },
  exp: { draw: () => -Math.log(1 - Math.random()), mu: 1, sd: 1, lbl: "Exponential(1)" },
  bern: { draw: () => (Math.random() < 0.3 ? 1 : 0), mu: 0.3, sd: Math.sqrt(0.21), lbl: "Bernoulli(0.3)" },
  dice: { draw: () => 1 + (Math.random() * 6 | 0), mu: 3.5, sd: Math.sqrt(35 / 12), lbl: "Die(1–6)" },
};

const POP_ORDER: { k: PopKey; label: string }[] = [
  { k: "uniform", label: "Uniform" },
  { k: "exp", label: "Exponential" },
  { k: "bern", label: "Bernoulli" },
  { k: "dice", label: "Die" },
];

export default function CLT() {
  const cv = useRef<HTMLCanvasElement>(null);
  const means = useRef<number[]>([]);
  const [pop, setPop] = useState<PopKey>("uniform");
  const [n, setN] = useState(5);
  const [obs, setObs] = useState("—");

  function draw() {
    const c = cv.current; if (!c) return;
    const P = POPS[pop];
    const { ctx, w, h } = setupCanvas(c, 270);
    const arr = means.current;
    if (!arr.length) {
      ctx.fillStyle = PAL.faint; ctx.font = '13px monospace'; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("press “draw sample means” to watch the bell appear", w / 2, h / 2);
      setObs("—"); return;
    }
    const mn = Math.min(...arr), mx = Math.max(...arr), span = (mx - mn) || 1;
    const bins = 34, counts = new Array(bins).fill(0);
    arr.forEach((m) => { let bi = Math.floor((m - mn) / span * bins); if (bi >= bins) bi = bins - 1; if (bi < 0) bi = 0; counts[bi]++; });
    const mean = arr.reduce((s, x) => s + x, 0) / arr.length;
    const sd = Math.sqrt(arr.reduce((s, x) => s + (x - mean) * (x - mean), 0) / arr.length);
    setObs(sd.toFixed(3));
    const padL = 30, padR = 14, padT = 14, padB = 24, cw = w - padL - padR, ch = h - padT - padB;
    const maxC = Math.max(...counts);
    const bw = cw / bins;
    counts.forEach((cnt, i) => {
      const bh = (cnt / maxC) * ch, x = padL + i * bw, y = padT + ch - bh;
      const g = ctx.createLinearGradient(0, y, 0, padT + ch);
      g.addColorStop(0, PAL.blood); g.addColorStop(1, PAL.blood + "22");
      ctx.fillStyle = g; ctx.fillRect(x, y, bw - 1, bh);
    });
    // overlay normal(mu, sd/sqrt n) in light
    const se = P.sd / Math.sqrt(n);
    ctx.beginPath();
    for (let i = 0; i <= 120; i++) {
      const x = mn + span * i / 120;
      const dens = normPDF(x, P.mu, se);
      const binW = span / bins;
      const expected = dens * binW * arr.length;
      const yy = padT + ch - (expected / maxC) * ch;
      const xx = padL + ((x - mn) / span) * cw;
      i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy);
    }
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.globalAlpha = 0.9; ctx.stroke(); ctx.globalAlpha = 1;
    ctx.fillStyle = PAL.ink; ctx.font = '11px monospace'; ctx.textAlign = "right"; ctx.textBaseline = "top";
    ctx.fillText("— normal curve", w - padR, padT);
  }

  function drawBatch() {
    const P = POPS[pop]; const arr = means.current;
    for (let i = 0; i < 3000; i++) { let s = 0; for (let j = 0; j < n; j++) s += P.draw(); arr.push(s / n); }
    draw();
  }
  function reset() { means.current = []; draw(); }

  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pop, n]);

  function pick(k: PopKey) { means.current = []; setPop(k); }
  function changeN(v: number) { means.current = []; setN(v); }

  const P = POPS[pop];

  return (
    <div>
      <div className="seg" style={{ marginBottom: 14 }}>
        {POP_ORDER.map(({ k, label }) => (
          <button key={k} className={pop === k ? "on" : ""} onClick={() => pick(k)}>{label}</button>
        ))}
      </div>
      <div className="ctrls">
        <div className="ctrl" style={{ minWidth: 200 }}><label>sample size n <span className="v">{n}</span></label>
          <input type="range" min={1} max={50} value={n} onChange={(e) => changeN(+e.target.value)} /></div>
        <button className="wbtn" onClick={drawBatch}>▶ draw 3000 sample means</button>
        <button className="wbtn ghost" onClick={reset}>Reset</button>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{P.mu.toFixed(2)}</div><div className="rl">population μ</div></div>
        <div className="ro"><div className="rv">{P.sd.toFixed(2)}</div><div className="rl">population σ</div></div>
        <div className="ro"><div className="rv">{(P.sd / Math.sqrt(n)).toFixed(3)}</div><div className="rl">σ/√n (predicted)</div></div>
        <div className="ro"><div className="rv">{obs}</div><div className="rl">observed SD of means</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
