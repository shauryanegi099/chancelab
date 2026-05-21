"use client";
import { useState } from "react";

export default function BayesWaffle() {
  const [pv, setPv] = useState(1);
  const [se, setSe] = useState(99);
  const [sp, setSp] = useState(95);
  const prev = pv / 100, sens = se / 100, spec = sp / 100;
  const post = (prev * sens) / (prev * sens + (1 - prev) * (1 - spec));
  const sick = Math.round(prev * 1000);
  const tp = Math.round(sick * sens);
  const fp = Math.round((1000 - sick) * (1 - spec));
  const cells = [];
  for (let i = 0; i < 1000; i++) {
    let cls = "";
    if (i < tp) cls = "tp"; else if (i < tp + fp) cls = "fp";
    cells.push(<i key={i} className={cls} />);
  }
  return (
    <div>
      <div className="ctrls">
        <div className="ctrl"><label>prevalence <span className="v">{pv}%</span></label>
          <input type="range" min={0.1} max={50} step={0.1} value={pv} onChange={(e) => setPv(+e.target.value)} /></div>
        <div className="ctrl"><label>sensitivity <span className="v">{se}%</span></label>
          <input type="range" min={50} max={100} step={0.5} value={se} onChange={(e) => setSe(+e.target.value)} /></div>
        <div className="ctrl"><label>specificity <span className="v">{sp}%</span></label>
          <input type="range" min={50} max={100} step={0.5} value={sp} onChange={(e) => setSp(+e.target.value)} /></div>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{(post * 100).toFixed(1)}%</div><div className="rl">P(cursed | +)</div></div>
        <div className="ro"><div className="rv">{tp + fp}</div><div className="rl">positives / 1000</div></div>
        <div className="ro"><div className="rv">{tp}</div><div className="rl">true positives</div></div>
        <div className="ro"><div className="rv">{fp}</div><div className="rl">false omens</div></div>
      </div>
      <div className="waffle">{cells}</div>
      <div className="legend">
        <span><i style={{ background: "var(--blood)" }} /> cursed &amp; positive</span>
        <span><i style={{ background: "var(--ink)" }} /> clean &amp; positive (false omen)</span>
        <span><i style={{ background: "var(--paper-edge)" }} /> negative</span>
      </div>
    </div>
  );
}
