const R = 58;
const SW = 22;

// "C" open towards the right, ends cut at ±40°
function cArc(cx: number, cy: number) {
  const a = (40 * Math.PI) / 180;
  const x = cx + R * Math.cos(a);
  return `M ${x} ${cy - R * Math.sin(a)} A ${R} ${R} 0 1 0 ${x} ${cy + R * Math.sin(a)}`;
}

function Pillar({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x={0} y={107} width={50} height={8} />
      <rect x={7} y={118} width={36} height={6} />
      <rect x={10} y={127} width={30} height={112} />
      <rect x={5} y={242} width={40} height={6} />
      <rect x={-1} y={251} width={52} height={8} />
    </g>
  );
}

type MarkProps = {
  className?: string;
  /** Colour of the structure (roof, pillars, letters) */
  ink?: string;
  /** Background colour used for the interlocking gaps between the two Cs */
  bg?: string;
};

/** ICCI emblem – house roof, pillars, tricolour bars and interlocked CC */
export function LogoMark({ className, ink = "#111111", bg = "#ffffff" }: MarkProps) {
  const left = cArc(152, 186);
  const right = cArc(226, 186);
  // lower part of the left C, redrawn on top to create the interlock
  const a = (40 * Math.PI) / 180;
  const lowerLeft = `M 152 ${186 + R} A ${R} ${R} 0 0 0 ${152 + R * Math.cos(a)} ${186 + R * Math.sin(a)}`;

  return (
    <svg viewBox="0 0 374 272" className={className} role="img" aria-label="ICCI emblem">
      <g fill={ink}>
        <polygon points="0,92 187,0 374,92 374,106 187,15 0,106" />
        <Pillar x={20} />
        <Pillar x={304} />
        <rect x={0} y={264} width={374} height={8} />
      </g>
      <rect x={151} y={42} width={16} height={64} fill="#EE6A2C" />
      <rect x={179} y={42} width={16} height={64} fill="#6E6E6E" />
      <rect x={207} y={42} width={16} height={64} fill="#16703C" />
      <g fill="none" strokeLinecap="butt">
        <path d={left} stroke={ink} strokeWidth={SW} />
        <path d={right} stroke={bg} strokeWidth={SW + 8} />
        <path d={right} stroke={ink} strokeWidth={SW} />
        <path d={lowerLeft} stroke={bg} strokeWidth={SW + 8} />
        <path d={lowerLeft} stroke={ink} strokeWidth={SW} />
      </g>
    </svg>
  );
}

/** Full stacked lockup: emblem + name + tagline */
export function LogoLockup({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const ink = dark ? "#ffffff" : "#111111";
  return (
    <div className={`flex flex-col items-center text-center ${className}`} style={{ color: ink }}>
      <LogoMark className="w-3/5" ink={ink} bg={dark ? "#0f1115" : "#ffffff"} />
      <p className="mt-4 text-[1.35em] font-semibold uppercase leading-tight tracking-tight">
        Indian Chamber of
        <br />
        Construction Industry
      </p>
      <div className="mt-2 w-full border-t-2" style={{ borderColor: ink }} />
      <p className="mt-2 flex w-full justify-between gap-2 text-[0.6em] uppercase tracking-wide">
        <span>Collaborate</span>
        <span aria-hidden>•</span>
        <span>Innovate</span>
        <span aria-hidden>•</span>
        <span>Build a Better India</span>
      </p>
    </div>
  );
}
