export default function SpiderMark({ size = 240, className = "" }: { size?: number; className?: string }) {
  const c = size / 2;
  const legs: string[] = [];
  for (let i = 0; i < 4; i++) {
    for (const s of [-1, 1]) {
      const x1 = c + s * 12;
      const y1 = c - 14 + i * 9;
      const mx = c + s * (44 + i * 20);
      const my = c - 36 + i * 30;
      const x2 = c + s * (66 + i * 26);
      const y2 = c + 36 + i * 22;
      legs.push(`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`);
    }
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} fill="none" aria-hidden>
      {legs.map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth={4.5} strokeLinecap="round" />
      ))}
      {/* abdomen */}
      <ellipse cx={c} cy={c + 18} rx={20} ry={28} fill="currentColor" />
      {/* thorax */}
      <ellipse cx={c} cy={c - 14} rx={13} ry={15} fill="currentColor" />
      {/* head */}
      <circle cx={c} cy={c - 32} r={8} fill="currentColor" />
      {/* the four-pointed star (fate) on the abdomen */}
      <path
        d={`M ${c} ${c + 4} L ${c + 4} ${c + 18} L ${c} ${c + 32} L ${c - 4} ${c + 18} Z`}
        fill="#cf1620"
      />
    </svg>
  );
}
