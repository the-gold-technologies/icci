"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds `data-in` to every [data-reveal] element as it scrolls into view (styles in globals.css).
// Re-runs on route change because the root layout persists across client navigation.
export default function Reveal() {
  const pathname = usePathname();

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
