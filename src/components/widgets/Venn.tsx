"use client";
import { useEffect, useRef, useState } from "react";
import { setupCanvas, roundRect, PAL } from "@/lib/canvas";

type Region = "aonly" | "bonly" | "both" | "outside";
type Preset = { id: string; label: string; regs: Region[] };

const presets: Preset[] = [
  { id: "A", label: "A", regs: ["aonly", "both"] },
  { id: "B", label: "B", regs: ["bonly", "both"] },
  { id: "AandB", label: "A ∩ B", regs: ["both"] },
  { id: "AorB", label: "A ∪ B", regs: ["aonly", "bonly", "both"] },
  { id: "Ac", label: "Aᶜ", regs: ["bonly", "outside"] },
  { id: "AorBc", label: "(A ∪ B)ᶜ", regs: ["outside"] },
  { id: "AnotB", label: "A ∩ Bᶜ", regs: ["aonly"] },
  { id: "sym", label: "A △ B", regs: ["aonly", "bonly"] },
];

type Geo = { r: number; cy: number; ax: number; bx: number };

export default function Venn() {
  const cv = useRef<HTMLCanvasElement>(null);
  const geo = useRef<Geo>({ r: 0, cy: 0, ax: 0, bx: 0 });
  const active = useRef<Set<Region>>(new Set<Region>(["aonly", "both"]));
  const [label, setLabel] = useState("A");

  function matchPreset(set: Set<Region>): string {
    for (const p of presets) {
      if (p.regs.length === set.size && p.regs.every((r) => set.has(r))) return p.label;
    }
    return set.size === 0 ? "∅ (nothing selected)" : "custom region";
  }

  function regionAt(mx: number, my: number): Region {
    const g = geo.current;
    const dA = Math.hypot(mx - g.ax, my - g.cy);
    const dB = Math.hypot(mx - g.bx, my - g.cy);
    const inA = dA < g.r;
    const inB = dB < g.r;
    if (inA && inB) return "both";
    if (inA) return "aonly";
    if (inB) return "bonly";
    return "outside";
  }

  function regionCanvas(W: number, H: number, region: Region): HTMLCanvasElement {
    const c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    const x = c.getContext("2d")!;
    const g = geo.current;
    const A = () => {
      x.beginPath();
      x.arc(g.ax, g.cy, g.r, 0, 7);
    };
    const B = () => {
      x.beginPath();
      x.arc(g.bx, g.cy, g.r, 0, 7);
    };
    x.fillStyle = PAL.blood;
    if (region === "both") {
      x.save();
      A();
      x.clip();
      B();
      x.clip();
      x.fillRect(0, 0, W, H);
      x.restore();
    } else if (region === "aonly") {
      x.save();
      A();
      x.clip();
      x.fillRect(0, 0, W, H);
      x.globalCompositeOperation = "destination-out";
      B();
      x.fill();
      x.restore();
    } else if (region === "bonly") {
      x.save();
      B();
      x.clip();
      x.fillRect(0, 0, W, H);
      x.globalCompositeOperation = "destination-out";
      A();
      x.fill();
      x.restore();
    } else {
      x.save();
      x.fillRect(0, 0, W, H);
      x.globalCompositeOperation = "destination-out";
      A();
      x.fill();
      B();
      x.fill();
      x.restore();
    }
    return c;
  }

  function draw() {
    const c = cv.current;
    if (!c) return;
    const { ctx, w, h } = setupCanvas(c, 300);
    const r = Math.min(h * 0.34, w * 0.26);
    geo.current = { r, cy: h / 2, ax: w / 2 - r * 0.62, bx: w / 2 + r * 0.62 };
    const g = geo.current;
    // S box
    ctx.strokeStyle = PAL.grid;
    ctx.lineWidth = 1.5;
    roundRect(ctx, 8, 8, w - 16, h - 16, 12);
    ctx.stroke();
    ctx.fillStyle = PAL.faint;
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("S", 16, 14);
    // shaded regions
    ctx.globalAlpha = 0.42;
    active.current.forEach((reg) => ctx.drawImage(regionCanvas(w, h, reg), 0, 0));
    ctx.globalAlpha = 1;
    // outlines
    ctx.lineWidth = 2;
    ctx.strokeStyle = PAL.blood;
    ctx.beginPath();
    ctx.arc(g.ax, g.cy, g.r, 0, 7);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(g.bx, g.cy, g.r, 0, 7);
    ctx.stroke();
    ctx.fillStyle = PAL.ink;
    ctx.font = '700 20px "Syne", sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("A", g.ax - g.r * 0.55, g.cy - g.r * 0.6);
    ctx.fillText("B", g.bx + g.r * 0.55, g.cy - g.r * 0.6);
    setLabel(matchPreset(active.current));
  }

  function onClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const c = cv.current;
    if (!c) return;
    const rect = c.getBoundingClientRect();
    const reg = regionAt(e.clientX - rect.left, e.clientY - rect.top);
    const set = active.current;
    if (set.has(reg)) set.delete(reg);
    else set.add(reg);
    draw();
  }

  function applyPreset(p: Preset) {
    active.current = new Set<Region>(p.regs);
    draw();
  }

  function isActivePreset(p: Preset): boolean {
    const set = active.current;
    return p.regs.length === set.size && p.regs.every((r) => set.has(r));
  }

  useEffect(() => {
    draw();
    const r = () => draw();
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
        {presets.map((p) => (
          <button
            key={p.id}
            onClick={() => applyPreset(p)}
            style={{
              padding: "7px 13px",
              fontFamily: "var(--font-type, monospace)",
              fontSize: 13,
              border: "1px solid " + (isActivePreset(p) ? "#e2132a" : "#3a2f44"),
              background: isActivePreset(p) ? "#e2132a" : "transparent",
              color: isActivePreset(p) ? "#fff" : "#ece6e8",
              cursor: "pointer",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
      <canvas ref={cv} onClick={onClick} style={{ maxWidth: 440, margin: "0 auto", cursor: "pointer", display: "block" }} />
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          fontFamily: "var(--font-type, monospace)",
          fontSize: 14,
          color: "#a397a3",
        }}
      >
        shaded: <b style={{ color: "#e2132a" }}>{label}</b>
      </div>
    </div>
  );
}
