"use client";

import Link from "next/link";
import { useState } from "react";
import { news } from "@/lib/content";
import { ArrowRight } from "lucide-react";

type Article = (typeof news)[number];

const ALL = "All";

// "October 2026" -> { month: "Oct", year: "2026" } for the date column
function splitDate(date: string) {
  const [month = "", year = ""] = date.split(" ");
  return { month: month.slice(0, 3), year };
}

export default function NewsBrowser({ items }: { items: Article[] }) {
  const [active, setActive] = useState(ALL);
  const categories = [ALL, ...Array.from(new Set(items.map((n) => n.category)))];
  const count = (c: string) => (c === ALL ? items.length : items.filter((n) => n.category === c).length);

  const filtered = active === ALL ? items : items.filter((n) => n.category === active);
  const [lead, ...rest] = filtered;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-14">
      <div className="min-w-0">
        {/* Category chips (mobile + desktop) */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter news by category">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === c
                  ? "border-saffron bg-saffron text-white"
                  : "border-zinc-200 bg-white text-ink hover:border-saffron hover:text-saffron"
              }`}
            >
              {c}
              <span className={`ml-2 text-xs ${active === c ? "text-white/80" : "text-steel"}`}>{count(c)}</span>
            </button>
          ))}
        </div>

        {/* Lead story */}
        {lead && (
          <Link
            key={`${active}-${lead.slug}`}
            href={`/news/${lead.slug}`}
            className="group mt-8 grid animate-[rise_0.5s_ease-out_both] overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:shadow-xl md:grid-cols-[1.15fr_1fr]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 md:aspect-auto md:min-h-[340px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lead.photo} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-saffron px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                {active === ALL ? "Latest" : active}
              </span>
            </div>
            <div className="flex flex-col p-7 lg:p-9">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold uppercase tracking-wide text-saffron">{lead.category}</span>
                <span className="text-steel">· {lead.date}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-ink group-hover:text-saffron lg:text-[1.75rem]">
                {lead.title}
              </h2>
              <p className="mt-3 leading-relaxed text-steel">{lead.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink">
                Read the full story
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white transition group-hover:translate-x-1 group-hover:bg-saffron">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                </span>
              </span>
            </div>
          </Link>
        )}

        {/* Remaining stories as an editorial list */}
        {rest.length > 0 && (
          <ol className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
            {rest.map((n, i) => {
              const d = splitDate(n.date);
              return (
                <li key={`${active}-${n.slug}`} className="animate-[rise_0.5s_ease-out_both]" style={{ animationDelay: `${(i + 1) * 70}ms` }}>
                  <Link href={`/news/${n.slug}`} className="group grid grid-cols-[56px_1fr] items-center gap-4 py-6 sm:grid-cols-[72px_1fr_160px] sm:gap-6">
                    <div className="text-center leading-none">
                      <span className="block text-2xl font-bold text-ink group-hover:text-saffron">{d.month}</span>
                      <span className="mt-1 block text-xs font-medium text-steel">{d.year}</span>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-saffron">{n.category}</span>
                      <h3 className="mt-1 text-lg font-semibold leading-snug text-ink group-hover:text-saffron">{n.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-steel">{n.excerpt}</p>
                    </div>
                    <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-xl bg-zinc-200 sm:col-span-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={n.photo} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        )}
      </div>

      {/* Sidebar */}
      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">Browse by topic</p>
          <ul className="mt-4 space-y-1">
            {categories.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setActive(c)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                    active === c ? "bg-saffron/10 font-semibold text-saffron" : "text-ink hover:bg-concrete"
                  }`}
                >
                  {c}
                  <span className="text-xs text-steel">{count(c)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white">
          <span className="tricolor absolute inset-x-0 top-0 h-1" />
          <h3 className="text-lg font-semibold">Have news to share?</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Members can send project milestones, event reports and industry updates for the Chamber to publish.
          </p>
          <Link href="/contact" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-saffron hover:text-white">
            Contact the secretariat
            <span className="grid h-7 w-7 place-items-center rounded-full bg-saffron text-white transition group-hover:translate-x-1 group-hover:bg-white group-hover:text-ink">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
            </span>
          </Link>
        </div>
      </aside>
    </div>
  );
}
