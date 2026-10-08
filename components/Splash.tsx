import type { CSSProperties } from "react";
import { LogoLockup } from "./Logo";

// CSS-only intro: the official logo settles in, tricolour bar draws, then the curtain lifts.
// Lives in the root layout; app/layout.tsx gates it to the first load in a tab or a reload.
export default function Splash() {
  return (
    <div className="splash fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white" aria-hidden="true">
      <LogoLockup priority className="enter-settle h-auto w-56 sm:w-64" />
      <span className="enter-draw tricolor mt-6 block h-1 w-40 rounded-full" style={{ "--d": "500ms" } as CSSProperties} />
      <span className="tricolor absolute inset-x-0 bottom-0 h-1" />
    </div>
  );
}
