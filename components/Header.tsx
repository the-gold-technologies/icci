"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { nav } from "@/lib/content";

// The footer keeps the full list; the header stays lean.
const headerNav = nav.filter((n) => n.href !== "/#initiatives" && n.href !== "/#leadership");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the hero photo (white content); detaches into a floating white card once scrolled.
  const overHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 mx-auto transition-all duration-300 ${
        scrolled ? "max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 lg:pt-2" : "max-w-full pt-2"
      }`}
    >
      <div
        className={`overflow-hidden transition-all duration-300 ${
          scrolled
            ? "rounded-2xl border border-zinc-200 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-md"
            : open
              ? "border border-transparent bg-white shadow-lg"
              : "border border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex h-16 items-center justify-between gap-6 lg:h-[72px] ${
            scrolled ? "px-4 sm:px-6" : "max-w-7xl px-4 sm:px-6 lg:px-8"
          }`}
        >
          {/* "#top" makes Next scroll to the page start instead of keeping the previous scroll position */}
          <Link href="/#top" className="flex shrink-0 items-end gap-3" onClick={() => setOpen(false)}>
            <LogoMark className="h-10 w-auto shrink-0 lg:h-12" ink={overHero ? "#ffffff" : undefined} bg={overHero ? "transparent" : undefined} />
            <span className={`text-xs font-medium uppercase leading-[1.16] tracking-normal transition-colors sm:text-sm ${overHero ? "text-white" : "text-ink"}`}>
              Indian Chamber of
              <br />
              Construction Industry
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {headerNav.map((n) => (
              <Link key={n.href} href={n.href} className={`text-sm font-medium transition hover:text-saffron ${overHero ? "text-white/90" : "text-ink/80"}`}>
                {n.label}
              </Link>
            ))}
            <Link
              href="/#join"
              className="whitespace-nowrap rounded-full bg-saffron px-5 py-2.5 ml-10 text-sm font-semibold text-white transition hover:bg-india-green"
            >
              Become a Member
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={`flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${overHero ? "text-white" : "text-ink"}`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-zinc-200 px-4 pb-6 pt-2 sm:px-6 lg:hidden">
            {headerNav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-zinc-100 py-3 font-medium text-ink"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/#join"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-saffron py-3 text-center font-semibold text-white"
            >
              Become a Member
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
