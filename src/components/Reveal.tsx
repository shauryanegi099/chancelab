import type { ReactNode } from "react";

/** Lightweight CSS-only reveal (always renders; fades in via the .fade-up keyframe). */
export default function Reveal({
  children, delay = 0, className,
}: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <div className={`fade-up ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
