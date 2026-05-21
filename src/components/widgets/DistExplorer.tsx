"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, barChart, PAL } from "@/lib/canvas";
import { binomPMF, poissonPMF } from "@/lib/stats";

type Kind = "binomial" | "poisson" | "geometric";
const geomPMF = (p: number, k: number) => Math.pow(1 - p, k - 1) * p;

export default function DistExplorer({ config }: { config?: string }) {
  const cv = useRef<HTMLCanvasElement>(null);
  const [kind, setKind] = useState<Kind>(config === "poisson" ? "poisson" : "binomial");
  const [n, setN] = useState(20);
  const [p, setP] = useState(0.4);
  const [lam, setLam] = useState(4);
  const [gp, setGp] = useState(0.3);

  const items: { label: string; value: number }[] = [];
  let modeK = 0, modeP = -1, mean: number, vari: number;
  if (kind === "binomial") {
    for (let k = 0; k <= n; k++) { const pk = binomPMF(n, k, p); items.push({ label: String(k), value: pk }); if (pk > modeP) { modeP = pk; modeK = k; } }
    mean = n * p; vari = n * p * (1 - p);
  } else if (kind === "poisson") {
    const kmax = Math.min(40, Math.ceil(lam + 4 * Math.sqrt(lam) + 3));
    for (let k = 0; k <= kmax; k++) { const pk = poissonPMF(lam, k); items.push({ label: String(k), value: pk }); if (pk > modeP) { modeP = pk; modeK = k; } }
    mean = lam; vari = lam;
  } else {
    const kmax = Math.min(40, Math.ceil(Math.log(0.01) / Math.log(1 - gp)) + 1);
    for (let k = 1; k <= kmax; k++) { const pk = geomPMF(gp, k); items.push({ label: String(k), value: pk }); if (pk > modeP) { modeP = pk; modeK = k; } }
    mean = 1 / gp; vari = (1 - gp) / (gp * gp);
  }

  function draw() {
    const c = cv.current; if (!c) return;
    const { ctx, w, h } = setupCanvas(c, 280);
    barChart(ctx, w, h, items, { color: PAL.blood, dp: 2 });
  }

  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, n, p, lam, gp]);

  return (
    <div>
      <div className="seg" style={{ marginBottom: 16 }}>
        {(["binomial", "poisson", "geometric"] as Kind[]).map((k) => (
          <button key={k} className={k === kind ? "on" : ""} onClick={() => setKind(k)}>
            {k.charAt(0).toUpperCase() + k.slice(1)}
          </button>
        ))}
      </div>
      <div className="ctrls">
        {kind === "binomial" && (
          <>
            <div className="ctrl"><label>n (trials) <span className="v">{n}</span></label>
              <input type="range" min={1} max={50} step={1} value={n} onChange={(e) => setN(+e.target.value)} /></div>
            <div className="ctrl"><label>p (success) <span className="v">{p.toFixed(2)}</span></label>
              <input type="range" min={0.01} max={0.99} step={0.01} value={p} onChange={(e) => setP(+e.target.value)} /></div>
          </>
        )}
        {kind === "poisson" && (
          <div className="ctrl"><label>λ (avg rate) <span className="v">{lam.toFixed(1)}</span></label>
            <input type="range" min={0.2} max={25} step={0.1} value={lam} onChange={(e) => setLam(+e.target.value)} /></div>
        )}
        {kind === "geometric" && (
          <div className="ctrl"><label>p (success) <span className="v">{gp.toFixed(2)}</span></label>
            <input type="range" min={0.05} max={0.95} step={0.01} value={gp} onChange={(e) => setGp(+e.target.value)} /></div>
        )}
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{mean.toFixed(2)}</div><div className="rl">mean E[X]</div></div>
        <div className="ro"><div className="rv">{vari.toFixed(2)}</div><div className="rl">variance</div></div>
        <div className="ro"><div className="rv">{Math.sqrt(vari).toFixed(2)}</div><div className="rl">std dev</div></div>
        <div className="ro"><div className="rv">{modeK}</div><div className="rl">most likely</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
