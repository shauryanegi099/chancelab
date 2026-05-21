"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, PAL } from "@/lib/canvas";

type Kind = "uniform" | "exp";

export default function ContDist({ config }: { config?: string }) {
  const cv = useRef<HTMLCanvasElement>(null);
  const [kind, setKind] = useState<Kind>(config === "exponential" ? "exp" : "uniform");
  const [a, setA] = useState(2);
  const [b, setB] = useState(8);
  const [lam, setLam] = useState(0.5);
  const [lo, setLo] = useState(config === "exponential" ? 0.5 : 3);
  const [hi, setHi] = useState(config === "exponential" ? 2 : 6);

  const pdf = (x: number): number => {
    if (kind === "uniform") return x >= a && x <= b ? 1 / (b - a) : 0;
    return x >= 0 ? lam * Math.exp(-lam * x) : 0;
  };
  const dom = (): [number, number] =>
    kind === "uniform" ? [a - 1, b + 1] : [0, Math.max(6, 6 / lam)];

  function draw() {
    const c = cv.current; if (!c) return;
    const { ctx, w, h } = setupCanvas(c, 250);
    const [xmin, xmax] = dom(); const N = 260;
    const pts: [number, number][] = []; let ymax = 0;
    for (let i = 0; i <= N; i++) { const x = xmin + (xmax - xmin) * i / N; const y = Math.max(0, pdf(x)); pts.push([x, y]); if (y > ymax) ymax = y; }
    ymax = ymax * 1.18 || 1;
    const padL = 42, padR = 14, padT = 14, padB = 28, cw = w - padL - padR, ch = h - padT - padB;
    const X = (x: number) => padL + ((x - xmin) / (xmax - xmin)) * cw;
    const Y = (y: number) => padT + ch - (y / ymax) * ch;
    ctx.strokeStyle = PAL.grid; ctx.fillStyle = PAL.faint; ctx.font = '10px monospace'; ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let i = 0; i <= 5; i++) { const x = xmin + (xmax - xmin) * i / 5; ctx.beginPath(); ctx.moveTo(X(x), padT); ctx.lineTo(X(x), padT + ch); ctx.stroke(); ctx.fillText(String(Math.round(x * 100) / 100), X(x), padT + ch + 6); }
    // shade [lo, hi]
    ctx.beginPath(); ctx.moveTo(X(Math.max(lo, xmin)), Y(0));
    for (let i = 0; i <= N; i++) { const x = pts[i][0]; if (x >= lo && x <= hi) ctx.lineTo(X(x), Y(pts[i][1])); }
    ctx.lineTo(X(Math.min(hi, xmax)), Y(0)); ctx.closePath();
    ctx.fillStyle = PAL.blood + "44"; ctx.fill();
    // curve
    ctx.beginPath(); pts.forEach((p, i) => { i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])); });
    ctx.strokeStyle = PAL.blood; ctx.lineWidth = 2.4; ctx.stroke();
  }
  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, a, b, lam, lo, hi]);

  function pick(k: Kind) {
    setKind(k);
    setLo(k === "uniform" ? 3 : 0.5);
    setHi(k === "uniform" ? 6 : 2);
  }

  let mean: number, vari: number, prob: number;
  if (kind === "uniform") {
    mean = (a + b) / 2; vari = (b - a) ** 2 / 12;
    prob = Math.max(0, (Math.min(hi, b) - Math.max(lo, a)) / (b - a));
  } else {
    mean = 1 / lam; vari = 1 / (lam * lam);
    prob = Math.exp(-lam * Math.max(0, lo)) - Math.exp(-lam * Math.max(0, hi));
  }
  const [dlo, dhi] = dom();

  return (
    <div>
      <div className="seg" style={{ marginBottom: 14 }}>
        <button className={kind === "uniform" ? "on" : ""} onClick={() => pick("uniform")}>Uniform</button>
        <button className={kind === "exp" ? "on" : ""} onClick={() => pick("exp")}>Exponential</button>
      </div>
      <div className="ctrls">
        {kind === "uniform" ? (
          <>
            <div className="ctrl"><label>a <span className="v">{a}</span></label>
              <input type="range" min={0} max={9} step={0.5} value={a} onChange={(e) => setA(Math.min(+e.target.value, b - 0.5))} /></div>
            <div className="ctrl"><label>b <span className="v">{b}</span></label>
              <input type="range" min={1} max={10} step={0.5} value={b} onChange={(e) => setB(Math.max(+e.target.value, a + 0.5))} /></div>
          </>
        ) : (
          <div className="ctrl"><label>λ (rate) <span className="v">{lam.toFixed(2)}</span></label>
            <input type="range" min={0.1} max={2} step={0.05} value={lam} onChange={(e) => setLam(+e.target.value)} /></div>
        )}
        <div className="ctrl"><label>area from <span className="v">{lo.toFixed(1)}</span></label>
          <input type="range" min={dlo} max={dhi} step={0.1} value={lo} onChange={(e) => setLo(Math.min(+e.target.value, hi))} /></div>
        <div className="ctrl"><label>area to <span className="v">{hi.toFixed(1)}</span></label>
          <input type="range" min={dlo} max={dhi} step={0.1} value={hi} onChange={(e) => setHi(Math.max(+e.target.value, lo))} /></div>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{mean.toFixed(2)}</div><div className="rl">mean</div></div>
        <div className="ro"><div className="rv">{vari.toFixed(2)}</div><div className="rl">variance</div></div>
        <div className="ro"><div className="rv">{prob.toFixed(3)}</div><div className="rl">P(lo ≤ X ≤ hi)</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
