"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, barChart, PAL } from "@/lib/canvas";

const theoW = [0, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]; // ways to make sum index

export default function DiceSum() {
  const cv = useRef<HTMLCanvasElement>(null);
  const data = useRef({ counts: new Array<number>(13).fill(0), rolls: 0, lastA: 0, lastB: 0 });
  const anim = useRef<number | null>(null);
  const showTheo = useRef(true);
  const [theo, setTheo] = useState(true);
  const [running, setRunning] = useState(false);
  const [ro, setRo] = useState({ rolls: 0, mode: "—", last: "—" });

  function draw() {
    const c = cv.current; if (!c) return;
    const { ctx, w, h } = setupCanvas(c, 260);
    const d = data.current;
    const items: { label: string; value: number; theo: number | null }[] = [];
    for (let s = 2; s <= 12; s++) {
      items.push({ label: String(s), value: d.rolls ? d.counts[s] / d.rolls : 0, theo: showTheo.current ? theoW[s] / 36 : null });
    }
    barChart(ctx, w, h, items, { color: PAL.blood, max: 0.20, dp: 2 });
    let mx = 0, mi = 7; for (let s = 2; s <= 12; s++) if (d.counts[s] > mx) { mx = d.counts[s]; mi = s; }
    setRo({
      rolls: d.rolls,
      mode: d.rolls ? String(mi) : "—",
      last: d.rolls ? `${d.lastA}+${d.lastB}=${d.lastA + d.lastB}` : "—",
    });
  }
  function roll(n: number) {
    const d = data.current;
    for (let i = 0; i < n; i++) {
      d.lastA = 1 + (Math.random() * 6 | 0); d.lastB = 1 + (Math.random() * 6 | 0);
      d.counts[d.lastA + d.lastB]++; d.rolls++;
    }
    draw();
  }
  function stop() { if (anim.current) cancelAnimationFrame(anim.current); anim.current = null; setRunning(false); }
  function reset() { data.current = { counts: new Array<number>(13).fill(0), rolls: 0, lastA: 0, lastB: 0 }; stop(); draw(); }
  function auto() {
    if (anim.current) { stop(); return; }
    setRunning(true);
    const step = () => { roll(60); if (data.current.rolls < 100000) anim.current = requestAnimationFrame(step); else stop(); };
    step();
  }
  function toggleTheo(v: boolean) { showTheo.current = v; setTheo(v); draw(); }

  useEffect(() => {
    draw(); const r = () => draw(); window.addEventListener("resize", r);
    return () => { window.removeEventListener("resize", r); if (anim.current) cancelAnimationFrame(anim.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="ctrls">
        <button className="wbtn" onClick={() => roll(1)}>Roll ×1</button>
        <button className="wbtn ghost" onClick={() => roll(100)}>Roll ×100</button>
        <button className="wbtn ghost" onClick={auto}>{running ? "⏸ Stop" : "▶ Auto-run"}</button>
        <button className="wbtn ghost" onClick={reset}>Reset</button>
        <label style={{ display: "flex", gap: 8, alignItems: "center", fontFamily: "var(--font-type)", fontSize: 12, color: "var(--dim)" }}>
          <input type="checkbox" checked={theo} onChange={(e) => toggleTheo(e.target.checked)} /> show theoretical
        </label>
      </div>
      <div className="readout">
        <div className="ro"><div className="rv">{ro.rolls.toLocaleString()}</div><div className="rl">rolls</div></div>
        <div className="ro"><div className="rv">{ro.mode}</div><div className="rl">most common</div></div>
        <div className="ro"><div className="rv">{ro.last}</div><div className="rl">last roll</div></div>
      </div>
      <canvas ref={cv} style={{ marginTop: 14 }} />
    </div>
  );
}
