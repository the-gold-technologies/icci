import Image from "next/image";

// Official ICCI artwork, derived from public/ICCI LOGO PNG-01.png into public/logo/.
const MARK = { width: 480, height: 358 };
const LOCKUP = { width: 720, height: 660 };

type MarkProps = {
  className?: string;
  /** Ink colour: "#ffffff" (or "white") picks the white-ink variant for dark/photo backgrounds */
  ink?: string;
  /** Kept for call-site compatibility; the artwork has a transparent background */
  bg?: string;
  priority?: boolean;
};

/** ICCI emblem – house roof, pillars, tricolour bars and interlocked CC */
export function LogoMark({ className, ink = "#111111", priority = false }: MarkProps) {
  const white = ink.toLowerCase() === "#ffffff" || ink.toLowerCase() === "#fff" || ink === "white";
  return (
    <Image
      src={white ? "/logo/icci-mark-white.png" : "/logo/icci-mark.png"}
      alt="ICCI emblem"
      {...MARK}
      loading={priority ? "eager" : undefined}
      fetchPriority={priority ? "high" : undefined}
      className={className}
    />
  );
}

/** Full logo: emblem, name and tagline */
export function LogoLockup({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/logo/icci-logo.png"
      alt="Indian Chamber of Construction Industry – Collaborate • Innovate • Build a Better India"
      {...LOCKUP}
      loading={priority ? "eager" : undefined}
      fetchPriority={priority ? "high" : undefined}
      className={className}
    />
  );
}
