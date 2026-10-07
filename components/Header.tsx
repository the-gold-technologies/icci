"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { nav } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white"
      }`}
    >
      <div className="tricolor h-1" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-10 w-auto lg:h-12" />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-ink">ICCI</span>
            <span className="hidden text-[11px] font-medium uppercase tracking-wide text-steel sm:block">
              Indian Chamber of Construction Industry
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-ink/80 transition hover:text-saffron">
              {n.label}
            </a>
          ))}
          <a
            href="#join"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-saffron"
          >
            Become a Member
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-zinc-200 bg-white px-4 pb-6 pt-2 lg:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-zinc-100 py-3 font-medium text-ink"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-ink py-3 text-center font-semibold text-white"
          >
            Become a Member
          </a>
        </nav>
      )}
    </header>
  );
}
