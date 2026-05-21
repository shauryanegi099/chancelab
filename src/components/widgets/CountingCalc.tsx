"use client";
import { useState } from "react";

function nPr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  let p = 1;
  for (let i = 0; i < r; i++) p *= n - i;
  return p;
}
function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  r = Math.min(r, n - r);
  let c = 1;
  for (let i = 0; i < r; i++) c = (c * (n - i)) / (i + 1);
  return Math.round(c);
}
function fact(n: number): number {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}
function fmt(x: number): string {
  if (!isFinite(x)) return "∞";
  if (Math.abs(x) >= 1e15) return x.toExponential(3);
  return Math.round(x).toLocaleString();
}

const lineStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  alignItems: "baseline",
  padding: "9px 14px",
  border: "1px solid #3a2f44",
  borderTop: "0",
  fontFamily: "var(--font-type, monospace)",
  fontSize: 13.5,
};
const kStyle: React.CSSProperties = { color: "#a397a3" };
const valStyle: React.CSSProperties = { color: "#ece6e8", fontWeight: 700, fontVariantNumeric: "tabular-nums" };

export default function CountingCalc() {
  const [n, setN] = useState(8);
  const [r, setR] = useState(3);
  const [stages, setStages] = useState("6,4,3,7");

  const rc = Math.min(r, n);

  const parts = stages
    .split(/[,×x*\s]+/)
    .map((s) => parseFloat(s))
    .filter((x) => !isNaN(x));
  const prod = parts.reduce((a, b) => a * b, 1);

  function onN(v: number) {
    setN(v);
    if (r > v) setR(v);
  }

  const calcOut: React.CSSProperties = { marginTop: 14, borderTop: "1px solid #3a2f44" };

  return (
    <div>
      <div className="ctrls" style={{ marginBottom: 6 }}>
        <div className="ctrl">
          <label>
            n (total) <span className="v">{n}</span>
          </label>
          <input type="range" min={0} max={25} value={n} onChange={(e) => onN(+e.target.value)} />
        </div>
        <div className="ctrl">
          <label>
            r (chosen) <span className="v">{rc}</span>
          </label>
          <input type="range" min={0} max={n} value={rc} onChange={(e) => setR(+e.target.value)} />
        </div>
      </div>

      <div style={calcOut}>
        <div style={lineStyle}>
          <span style={kStyle}>n! &nbsp;(arrange all n)</span>
          <span style={valStyle}>{fmt(fact(n))}</span>
        </div>
        <div style={lineStyle}>
          <span style={kStyle}>P(n, r) = n!/(n−r)! &nbsp;(order matters)</span>
          <span style={valStyle}>{fmt(nPr(n, rc))}</span>
        </div>
        <div style={lineStyle}>
          <span style={kStyle}>C(n, r) = n!/(r!(n−r)!) &nbsp;(order doesn&apos;t)</span>
          <span style={valStyle}>{fmt(nCr(n, rc))}</span>
        </div>
        <div style={{ ...lineStyle, borderStyle: "dashed" }}>
          <span style={kStyle}>overcount removed (÷ r!)</span>
          <span style={valStyle}>{rc > 0 ? "÷ " + fmt(fact(rc)) : "÷ 1"}</span>
        </div>
      </div>

      <div className="ctrl" style={{ marginTop: 18, maxWidth: 340 }}>
        <label>Multiplication rule — stages, comma separated</label>
        <input
          value={stages}
          placeholder="e.g. 6,4,3,7"
          onChange={(e) => setStages(e.target.value)}
          style={{
            background: "#18121f",
            color: "#ece6e8",
            border: "1px solid #3a2f44",
            padding: "9px 12px",
            fontFamily: "var(--font-type, monospace)",
            fontSize: 14,
          }}
        />
      </div>
      <div style={{ ...calcOut, marginTop: 10 }}>
        <div style={lineStyle}>
          <span style={kStyle}>{parts.join(" × ") || "—"}</span>
          <span style={valStyle}>{parts.length ? fmt(prod) : "—"}</span>
        </div>
      </div>
    </div>
  );
}
