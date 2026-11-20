"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { afterSplash } from "./ui";
import type { NavLink } from "@/lib/content";

// Rendered once in the root layout. Links, dropdown items, action buttons, emblem and brand lines
// all come from the CMS (Navigation › Menu Links, Navigation › Social Media & Footer, SEO › Global).
export default function Header({
  links,
  actions,
  logoMark,
  logoMarkWhite,
  logoMarkAlt,
  brandLine1,
  brandLine2,
}: {
  links: NavLink[];
  actions: NavLink[];
  logoMark: string | null;
  logoMarkWhite: string | null;
  logoMarkAlt: string;
  brandLine1: string;
  brandLine2: string;
}) {
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
  const close = () => setOpen(false);

  return (
    <header
      className={`enter-drop fixed inset-x-0 top-0 z-50 mx-auto transition-all duration-300 ${
        scrolled ? "max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 lg:pt-2" : "max-w-full pt-2"
      }`}
      style={afterSplash()}
    >
      <div
        className={`transition-all duration-300 ${
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
          <Link href="/#top" className="flex shrink-0 items-end gap-3" onClick={close}>
            <LogoMark
              src={logoMark}
              srcWhite={logoMarkWhite}
              white={overHero}
              alt={logoMarkAlt}
              priority
              className="h-11 w-auto shrink-0 lg:h-14"
            />
            <span
              className={`text-xs font-medium uppercase leading-[1.16] tracking-normal transition-colors sm:text-sm ${
                overHero ? "text-white" : "font-semibold text-ink"
              }`}
            >
              {brandLine1}
              <br />
              {brandLine2}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((n) =>
              n.children.length > 0 ? (
                <div key={n.id} className="group relative py-2">
                  <Link
                    href={n.href}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition hover:text-saffron ${
                      overHero ? "text-white/90" : "text-ink/80"
                    }`}
                  >
                    {n.label}
                    <svg className="h-3.5 w-3.5 transition group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full z-50 hidden pt-2 group-hover:block group-focus-within:block">
                    <div className="w-72 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl shadow-black/10">
                      {n.children.map((child) => (
                        <Link key={child.id} href={child.href} className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-zinc-50">
                          {child.image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={child.image} alt="" loading="lazy" className="h-10 w-10 shrink-0 rounded-lg object-cover" />
                          )}
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-ink">{child.label}</p>
                            {child.description && <p className="line-clamp-1 text-xs text-steel">{child.description}</p>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={n.id}
                  href={n.href}
                  className={`text-sm font-medium transition hover:text-saffron ${overHero ? "text-white/90" : "text-ink/80"}`}
                >
                  {n.label}
                </Link>
              ),
            )}
            {actions.map((a) => (
              <Link
                key={a.id}
                href={a.href}
                className="ml-10 whitespace-nowrap rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-india-green"
              >
                {a.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={`flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${overHero ? "text-white" : "text-ink"}`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-zinc-200 px-4 pb-6 pt-2 sm:px-6 lg:hidden">
            {links.map((n) => (
              <div key={n.id} className="border-b border-zinc-100 py-3">
                <Link href={n.href} onClick={close} className="block font-medium text-ink">
                  {n.label}
                </Link>
                {n.children.length > 0 && (
                  <div className="mt-2 space-y-2 pl-3">
                    {n.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        onClick={close}
                        className="flex items-center gap-3 rounded-lg p-1.5 text-sm text-steel hover:text-saffron"
                      >
                        {child.image && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={child.image} alt="" loading="lazy" className="h-8 w-8 shrink-0 rounded-md object-cover" />
                        )}
                        <div>
                          <p className="font-medium text-ink">{child.label}</p>
                          {child.description && <p className="text-xs text-steel">{child.description}</p>}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {actions.map((a) => (
              <Link
                key={a.id}
                href={a.href}
                onClick={close}
                className="mt-4 block rounded-full bg-saffron py-3 text-center font-semibold text-white"
              >
                {a.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
