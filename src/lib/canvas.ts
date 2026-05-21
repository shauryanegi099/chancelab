export const PAL = {
  ink: "#ece6e8",
  blood: "#e2132a",
  bloodBright: "#ff2c3e",
  faint: "#a397a3",
  grid: "rgba(236,230,232,.12)",
  paper: "#18121f",
  gold: "#cba24c",
};

export function setupCanvas(canvas: HTMLCanvasElement, cssHeight: number) {
  const dpr = window.devicePixelRatio || 1;
  const w = Math.max(260, canvas.clientWidth || canvas.parentElement?.clientWidth || 600);
  canvas.width = w * dpr;
  canvas.height = cssHeight * dpr;
  canvas.style.height = cssHeight + "px";
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, cssHeight);
  return { ctx, w, h: cssHeight };
}

export function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  r = Math.min(r, w / 2, h / 2);
  if (h <= 0) return;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

type Bar = { label: string; value: number; theo?: number | null };
export function barChart(
  ctx: CanvasRenderingContext2D, w: number, h: number, items: Bar[],
  opts: { color: string; max?: number; dp?: number }
) {
  const padL = 40, padR = 12, padT = 14, padB = 30;
  const cw = w - padL - padR, ch = h - padT - padB;
  const maxV = opts.max || Math.max(0.0001, ...items.map((d) => Math.max(d.value, d.theo || 0)));
  const n = items.length;
  const gap = Math.min(10, (cw / n) * 0.25);
  const bw = (cw - gap * (n - 1)) / n;
  ctx.strokeStyle = PAL.grid; ctx.fillStyle = PAL.faint;
  ctx.font = '10px "JetBrains Mono", monospace'; ctx.textAlign = "right"; ctx.textBaseline = "middle";
  for (let i = 0; i <= 4; i++) {
    const y = padT + ch - (ch * i) / 4;
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke();
    ctx.fillText((maxV * i / 4).toFixed(opts.dp ?? 2), padL - 6, y);
  }
  items.forEach((d, i) => {
    const x = padL + i * (bw + gap);
    const bh = Math.max(0, (d.value / maxV) * ch);
    const y = padT + ch - bh;
    const grad = ctx.createLinearGradient(0, y, 0, padT + ch);
    grad.addColorStop(0, opts.color); grad.addColorStop(1, opts.color + "44");
    ctx.fillStyle = grad;
    roundRect(ctx, x, y, bw, bh, Math.min(4, bw / 2)); ctx.fill();
    if (d.theo != null) {
      const ty = padT + ch - (d.theo / maxV) * ch;
      ctx.fillStyle = PAL.ink; ctx.fillRect(x - 1, ty - 1.5, bw + 2, 3);
    }
    ctx.fillStyle = PAL.faint; ctx.textAlign = "center"; ctx.textBaseline = "top";
    if (n <= 22 || i % 2 === 0) ctx.fillText(d.label, x + bw / 2, padT + ch + 7);
  });
}
