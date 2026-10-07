import type { CSSProperties } from "react";
import { LogoMark } from "./Logo";

// CSS-only intro: logo settles in, name rises, tricolour bar draws, then the curtain lifts.
// Lives in the root layout, so it plays once per full page load (not on client navigation).
export default function Splash() {
  return (
    <div className="splash fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white" aria-hidden="true">
      <LogoMark className="enter-settle w-28 sm:w-32" />
      <p
        className="enter mt-5 text-center text-sm font-semibold uppercase leading-tight tracking-[0.12em] text-ink sm:text-base"
        style={{ "--d": "350ms" } as CSSProperties}
      >
        Indian Chamber of
        <br />
        Construction Industry
      </p>
      <span className="enter-draw tricolor mt-5 block h-1 w-40 rounded-full" style={{ "--d": "600ms" } as CSSProperties} />
      <span className="tricolor absolute inset-x-0 bottom-0 h-1" />
    </div>
  );
}
