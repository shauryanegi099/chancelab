export default function FallingAngel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 470" className={className} aria-hidden preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="ag-wing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe9de" />
          <stop offset="1" stopColor="#cdc6ba" />
        </linearGradient>
        <linearGradient id="ag-robe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ded7cb" />
          <stop offset="1" stopColor="#b7b0a3" />
        </linearGradient>
        {/* one wing, mirrored for the other */}
        <g id="ag-wing-shape">
          <path d="M 196 184 C 240 158 292 122 340 66 C 314 102 282 138 250 172 C 232 190 214 192 196 186 Z" fill="url(#ag-wing)" />
          <g stroke="#b3ac9e" strokeWidth="1.4" fill="none" opacity="0.7" strokeLinecap="round">
            <path d="M 206 184 C 244 158 290 126 330 80" />
            <path d="M 210 190 C 242 166 282 138 318 98" />
            <path d="M 215 196 C 244 176 278 150 306 118" />
            <path d="M 221 202 C 246 184 274 162 296 136" />
          </g>
        </g>
        {/* a single drifting feather */}
        <path id="ag-feather" d="M0 0 C 7 -9 7 -22 0 -33 C -7 -22 -7 -9 0 0 Z" fill="#cfc8bb" />
      </defs>

      <g transform="rotate(-6 180 235)">
        {/* wings (behind body) */}
        <use href="#ag-wing-shape" />
        <use href="#ag-wing-shape" transform="translate(360,0) scale(-1,1)" />

        {/* broken halo */}
        <g transform="rotate(-14 180 126)">
          <ellipse cx="180" cy="126" rx="47" ry="13" fill="none" stroke="var(--red)" strokeWidth="5"
            strokeLinecap="round" strokeDasharray="86 26 52 240" opacity="0.95" />
        </g>

        {/* head */}
        <circle cx="180" cy="150" r="16" fill="url(#ag-robe)" />
        <path d="M 168 142 C 172 134 188 134 192 142 C 190 150 170 150 168 142 Z" fill="#b7b0a3" opacity="0.6" />

        {/* robed figure */}
        <path d="M 166 164 C 150 177 146 214 150 262 C 152 312 158 350 166 388
                 C 170 400 176 408 180 410 C 184 408 190 400 194 388
                 C 202 350 208 312 210 262 C 214 214 210 177 194 164
                 C 186 158 174 158 166 164 Z" fill="url(#ag-robe)" />
        {/* robe fold lines */}
        <g stroke="#9b9486" strokeWidth="1.2" fill="none" opacity="0.55" strokeLinecap="round">
          <path d="M 180 176 L 180 396" />
          <path d="M 168 196 C 166 260 170 330 174 384" />
          <path d="M 192 196 C 194 260 190 330 186 384" />
        </g>

        {/* drifting feathers (the fall) */}
        <use href="#ag-feather" transform="translate(116 414) rotate(24) scale(0.9)" opacity="0.85" />
        <use href="#ag-feather" transform="translate(250 396) rotate(-32) scale(0.75)" opacity="0.7" />
        <use href="#ag-feather" transform="translate(196 446) rotate(10) scale(0.6)" opacity="0.6" />
        <use href="#ag-feather" transform="translate(70 372) rotate(-14) scale(0.55)" opacity="0.5" />
      </g>
    </svg>
  );
}
