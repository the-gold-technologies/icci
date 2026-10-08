"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Adds `data-in` to every [data-reveal] element as it scrolls into view (styles in globals.css).
// Re-runs on route change because the root layout persists across client navigation.
// Also opens each newly visited page at the top: Next's <Link> otherwise keeps the old scroll offset.
export default function Reveal() {
  const pathname = usePathname();
  const first = useRef(true);
  const fromHistory = useRef(false);

  useEffect(() => {
    // Back/forward should restore the previous position, not jump to the top
    const onPop = () => (fromHistory.current = true);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (fromHistory.current) {
      fromHistory.current = false;
      return;
    }
    // Links with a #section are scrolled to that section by Next itself
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Once the intro splash has played, later page entrances shouldn't wait for it.
  useEffect(() => {
    const id = setTimeout(() => document.documentElement.style.setProperty("--after-splash", "0s"), 2600);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in])");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
