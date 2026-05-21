export default function Spikes({ className = "" }: { className?: string }) {
  const rays: string[] = [];
  const N = 30;
  const cx = 200, cy = 200, r0 = 54;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2;
    const long = i % 2 === 0;
    const r1 = long ? 196 : 116;
    const w = long ? 0.020 : 0.014;
    const x0 = cx + Math.cos(a - w) * r0, y0 = cy + Math.sin(a - w) * r0;
    const x1 = cx + Math.cos(a) * r1, y1 = cy + Math.sin(a) * r1;
    const x2 = cx + Math.cos(a + w) * r0, y2 = cy + Math.sin(a + w) * r0;
    rays.push(`M${x0.toFixed(1)} ${y0.toFixed(1)} L${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} Z`);
  }
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden preserveAspectRatio="xMidYMid meet">
      {rays.map((d, i) => (
        <path key={i} d={d} fill="var(--red)" opacity={i % 2 === 0 ? 0.95 : 0.6} />
      ))}
    </svg>
  );
}
