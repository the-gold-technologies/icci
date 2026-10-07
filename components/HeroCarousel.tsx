"use client";

import { useEffect, useState, type ReactNode } from "react";
import { fields, heroSlides } from "@/lib/content";

const INTERVAL = 6000;
const FIELD_INTERVAL = 3000;

const trustPoints = ["Representing the sector before Government", "Members across 7 states", "Built by 30 founding members"];

// Full-bleed photo slider. The hero copy is passed in and sits bottom-left;
// the side panel (trust points, members card, sliding "we represent" card) sits bottom-right.
export default function HeroCarousel({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const count = heroSlides.length;
  const [field, setField] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setActive((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(id);
  }, [active, count]);

  useEffect(() => {
    const id = setTimeout(() => setField((i) => (i + 1) % fields.length), FIELD_INTERVAL);
    return () => clearTimeout(id);
  }, [field]);

  return (
    <div
      className="relative flex min-h-[680px] overflow-hidden bg-zinc-300 text-white lg:min-h-svh"
      aria-roledescription="carousel"
      aria-label="Construction across India"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== active}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.photo}
            alt={s.title}
            loading={i === 0 ? "eager" : "lazy"}
            className={`h-full w-full object-cover transition-transform ease-out ${i === active ? "scale-110 duration-[7000ms]" : "scale-100 duration-0"}`}
          />
        </div>
      ))}

      {/* Shade only where the copy sits (left + bottom); the rest of the photo stays clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/80 via-[#1a0f08]/35 to-transparent" />
      {/* Top fade so the transparent navbar stays legible on any photo */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a0f08]/70 via-[#1a0f08]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1a0f08]/85 via-[#1a0f08]/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-[#1a0f08]/60 via-[#1a0f08]/25 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_left,black_35%,transparent)] lg:block" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end gap-10 px-4 pb-10 pt-32 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:pb-14">
        <div className="max-w-2xl [text-shadow:0_2px_16px_rgba(0,0,0,0.35)]">{children}</div>

        <div className="relative flex w-full flex-col gap-5 lg:w-auto lg:items-end">
          <ul className="hidden space-y-1.5 text-right text-sm font-medium text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] lg:block">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center justify-end gap-2">
                {t}
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-saffron" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12l5 5L19 7" />
                </svg>
              </li>
            ))}
          </ul>

          <div className="hidden items-stretch gap-4 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md lg:flex">
            <div className="flex flex-col justify-between py-1 pl-2 pr-2">
              <div>
                <p className="text-3xl font-bold leading-none">30+</p>
                <p className="mt-1.5 text-xs text-white/75">Founding members</p>
                <span className="tricolor mt-3 block h-1 w-12 rounded-full" />
              </div>
              <a href="#join" className="group mt-4 flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-saffron">
                Join them
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="relative h-32 w-48 overflow-hidden rounded-xl" aria-label="Who we represent">
              {fields.map((f, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={f.label}
                  src={f.photo}
                  alt={f.label}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === field ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <button
                onClick={() => setField((i) => (i + 1) % fields.length)}
                aria-label="Next field"
                className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-saffron text-white transition hover:scale-110"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
              <span className="absolute inset-x-3 bottom-2.5">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">We represent</span>
                <span key={field} className="block animate-[rise_0.5s_ease-out_both] truncate text-sm font-semibold">
                  {fields[field].label}
                </span>
              </span>
              <span className="absolute left-3 top-3 flex gap-1">
                {fields.map((f, i) => (
                  <span key={f.label} className={`h-1 rounded-full transition-all ${i === field ? "w-4 bg-white" : "w-1.5 bg-white/50"}`} />
                ))}
              </span>
            </div>
          </div>

          <div className="flex gap-2 lg:absolute lg:-bottom-7 lg:right-0">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-saffron" : "w-4 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
