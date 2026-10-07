import type { CSSProperties, ReactNode } from "react";

export const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

/** Inline `--d` animation delay for .enter / [data-reveal] elements, e.g. style={delay("120ms")}. */
export const delay = (d: string) => ({ "--d": d }) as CSSProperties;

/** Entrance delay counted from when the intro splash lifts (`--after-splash` drops to 0 after first load). */
export const afterSplash = (ms = 0) => delay(`calc(var(--after-splash) + ${ms}ms)`);

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
      <span className="tricolor inline-block h-1 w-8 rounded-full" />
      {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl" data-reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-steel">{intro}</p>}
    </div>
  );
}
