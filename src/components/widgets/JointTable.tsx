"use client";
import { useState } from "react";

const Xs = [1, 2, 3];
const Ys = [1, 2, 3];
const DEFAULT: number[][] = [
  [0.2, 0.2, 0],
  [0, 0.1, 0.2],
  [0.1, 0, 0.2],
]; // rows = Y, cols = X

const cellStyle: React.CSSProperties = {
  border: "1px solid #3a2f44",
  padding: 0,
  textAlign: "center",
  fontFamily: "var(--font-type, monospace)",
};
const thStyle: React.CSSProperties = {
  ...cellStyle,
  padding: "8px 10px",
  color: "#a397a3",
  background: "#18121f",
  fontSize: 12.5,
  fontWeight: 700,
};
const margStyle: React.CSSProperties = {
  ...cellStyle,
  padding: "8px 10px",
  color: "#e2132a",
  background: "#1f1420",
  fontSize: 13,
  fontWeight: 700,
};

export default function JointTable() {
  // store raw text per cell so editing feels natural; parse to number for math
  const [cells, setCells] = useState<string[][]>(DEFAULT.map((row) => row.map((v) => String(v))));
  const [qx, setQx] = useState(1);
  const [qy, setQy] = useState(1);

  const data: number[][] = cells.map((row) => row.map((s) => parseFloat(s) || 0));

  const mY = Ys.map((_, r) => data[r].reduce((a, b) => a + b, 0));
  const mX = Xs.map((_, c) => Ys.reduce((a, _v, r) => a + data[r][c], 0));
  const tot = mX.reduce((a, b) => a + b, 0);

  const ci = Xs.indexOf(qx);
  const ri = Ys.indexOf(qy);
  const cond = mY[ri] > 0 ? data[ri][ci] / mY[ri] : NaN;

  let indep = Math.abs(tot - 1) < 0.02;
  if (indep) {
    for (let r = 0; r < Ys.length; r++)
      for (let c = 0; c < Xs.length; c++) {
        if (Math.abs(data[r][c] - mX[c] * mY[r]) > 0.005) indep = false;
      }
  }
  const needNorm = Math.abs(tot - 1) >= 0.02;
  const indText = needNorm ? "normalise first" : indep ? "✓ independent" : "✗ dependent";
  const indColor = needNorm ? "#cba24c" : indep ? "#46e6a0" : "#e2132a";

  function setCell(r: number, c: number, v: string) {
    setCells((prev) => prev.map((row, ri2) => row.map((x, ci2) => (ri2 === r && ci2 === c ? v : x))));
  }
  function normalise() {
    const t = data.reduce((a, row) => a + row.reduce((x, y) => x + y, 0), 0) || 1;
    setCells(data.map((row) => row.map((v) => String(+(v / t).toFixed(4)))));
  }

  const selStyle: React.CSSProperties = {
    background: "#18121f",
    color: "#ece6e8",
    border: "1px solid #3a2f44",
    padding: "8px 10px",
    fontFamily: "var(--font-type, monospace)",
    fontSize: 14,
  };
  const inputStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    background: "#100b16",
    color: "#ece6e8",
    border: "0",
    padding: "9px 6px",
    textAlign: "center",
    fontFamily: "var(--font-type, monospace)",
    fontSize: 14,
  };

  return (
    <div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 360 }}>
          <tbody>
            <tr>
              <th style={thStyle}>P(x,y)</th>
              {Xs.map((x) => (
                <th key={x} style={thStyle}>
                  X={x}
                </th>
              ))}
              <th style={margStyle}>P(Y)</th>
            </tr>
            {Ys.map((y, r) => (
              <tr key={y}>
                <th style={thStyle}>Y={y}</th>
                {Xs.map((x, c) => (
                  <td key={x} style={cellStyle}>
                    <input
                      value={cells[r][c]}
                      onChange={(e) => setCell(r, c, e.target.value)}
                      style={inputStyle}
                      inputMode="decimal"
                    />
                  </td>
                ))}
                <td style={margStyle}>{mY[r].toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <th style={margStyle}>P(X)</th>
              {Xs.map((x, c) => (
                <td key={x} style={margStyle}>
                  {mX[c].toFixed(2)}
                </td>
              ))}
              <td style={margStyle}>{tot.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="ctrls" style={{ marginTop: 14, alignItems: "center" }}>
        <div className="ctrl" style={{ minWidth: 120 }}>
          <label>
            P( X = <span className="v">{qx}</span> | Y = <span className="v">{qy}</span> )
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <select value={qx} onChange={(e) => setQx(+e.target.value)} style={selStyle}>
              {Xs.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
            <select value={qy} onChange={(e) => setQy(+e.target.value)} style={selStyle}>
              {Ys.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="wbtn ghost" onClick={normalise}>
          Normalise to 1
        </button>
      </div>

      <div className="readout">
        <div className="ro">
          <div className="rv">{tot.toFixed(2)}</div>
          <div className="rl">Σ total</div>
        </div>
        <div className="ro">
          <div className="rv">{isNaN(cond) ? "—" : cond.toFixed(3)}</div>
          <div className="rl">conditional</div>
        </div>
        <div className="ro" style={{ minWidth: 170 }}>
          <div className="rv" style={{ fontSize: 18, color: indColor }}>
            {indText}
          </div>
          <div className="rl">independent?</div>
        </div>
      </div>
    </div>
  );
}
