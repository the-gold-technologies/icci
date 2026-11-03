import type { CSSProperties, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

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

/** Photo banner at the top of inner pages (sits under the transparent navbar). */
export function PageBanner({ photo, eyebrow, children }: { photo: string; eyebrow: string; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo} alt="" className="enter-settle absolute inset-0 h-full w-full object-cover" style={delay("calc(var(--after-splash) * 0.8)")} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/85 via-[#1a0f08]/55 to-[#1a0f08]/25" />
      <div className={`${container} relative pb-16 pt-40 lg:pb-20 lg:pt-48`}>
        <p className="enter flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85" style={afterSplash(150)}>
          <span className="enter-draw tricolor inline-block h-1 w-8 rounded-full" style={afterSplash(300)} />
          {eyebrow}
        </p>
        <h1 className="enter mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl" style={afterSplash(300)}>
          {children}
        </h1>
      </div>
    </section>
  );
}

/** Native <details> "Read more" toggle: no client JS needed. */
export function ReadMore({ paragraphs, light = false, children }: { paragraphs: string[]; light?: boolean; children?: ReactNode }) {
  return (
    <details className="group mt-5">
      <summary
        className={`inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold transition [&::-webkit-details-marker]:hidden ${
          light ? "text-white hover:text-white/80" : "text-saffron hover:text-india-green"
        }`}
      >
        <span className="group-open:hidden">Read more</span>
        <span className="hidden group-open:inline">Read less</span>
        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" strokeWidth={2.25} aria-hidden />
      </summary>
      <div className={`mt-4 space-y-4 leading-relaxed ${light ? "text-white/85" : "text-steel"}`}>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
        {children}
      </div>
    </details>
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
