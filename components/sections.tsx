// Content blocks shared by the home page (short versions) and the full inner pages.
// Every block renders exactly the CMS data it is given; there are no built-in lists.
import Link from "next/link";
import type { CSSProperties } from "react";
import { MembershipForm, type FormCopy } from "./Forms";
import { delay, SectionHead } from "./ui";
import type { Person } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export type Card = { title: string; text: string };

/** Small "go to the full page" link placed beside a section heading on the home page. */
export function MoreLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:text-india-green">
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} aria-hidden />
    </Link>
  );
}

export function ObjectivesGrid({ items }: { items: Card[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((o, i) => (
        <div key={i} data-reveal style={delay(`${i * 80}ms`)} className="bg-white p-8">
          <span className="text-sm font-bold text-saffron">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-lg font-semibold text-ink">{o.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-steel">{o.text}</p>
        </div>
      ))}
    </div>
  );
}

export function InitiativesGrid({ items }: { items: (Card & { tag: string })[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((p, i) => (
        <div key={i} data-reveal style={delay(`${i * 100}ms`)} className="group rounded-2xl border border-zinc-200 bg-white p-8 transition hover:border-saffron hover:shadow-lg">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <span className="text-4xl font-bold text-zinc-200 transition group-hover:text-saffron">{p.tag}</span>
          </div>
          <p className="mt-4 leading-relaxed text-steel">{p.text}</p>
        </div>
      ))}
    </div>
  );
}

/** "Who we represent" list (home + Initiatives; edited under Initiatives › Who We Represent). */
export function StakeholderList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((s, i) => (
        <li key={i} data-reveal style={delay(`${i * 60}ms`)} className="flex items-center gap-4 rounded-xl border border-zinc-200 px-5 py-4 font-medium text-ink">
          <span className={`h-8 w-1.5 rounded-full ${["bg-saffron", "bg-zinc-500", "bg-india-green"][i % 3]}`} />
          {s}
        </li>
      ))}
    </ul>
  );
}

/**
 * Portrait, or the person's initials when the CMS has no photo. Fills its (relative) parent.
 * Whatever the frame's shape, the face is centred in it using the CMS face position (.face-photo in globals.css).
 */
export function PersonPhoto({ person, className = "" }: { person: Person; className?: string }) {
  if (person.photo) {
    return (
      <div className={`face-frame absolute inset-0 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.photo}
          alt={person.photoAlt || person.name}
          loading="lazy"
          className="face-photo h-full w-full"
          style={{ "--fx": person.faceX, "--fy": person.faceY } as CSSProperties}
        />
      </div>
    );
  }
  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className={`absolute inset-0 grid place-items-center bg-gradient-to-b from-concrete to-zinc-200 ${className}`} aria-hidden>
      <span className="text-4xl font-bold tracking-wide text-zinc-400">{initials}</span>
    </div>
  );
}

/** National office bearers (home + About). Each card opens that person's full profile on /leadership. */
export function LeadersGrid({ leaders }: { leaders: Person[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7 lg:gap-5">
      {leaders.map((p, i) => (
        <Link
          key={p.slug}
          href={`/leadership#${p.slug}`}
          data-reveal
          style={delay(`${i * 80}ms`)}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-saffron hover:shadow-xl"
        >
          <div className="relative aspect-square overflow-hidden bg-zinc-100">
            <PersonPhoto person={p} className="transition duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center px-3 py-4 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-saffron">{p.role.replace(/^National /, "")}</p>
            <h3 className="mt-1 text-[15px] font-semibold leading-snug text-ink group-hover:text-saffron">{p.name}</h3>
          </div>
          <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-saffron transition duration-300 group-hover:scale-x-100" />
        </Link>
      ))}
    </div>
  );
}

export function ChaptersGrid({ items }: { items: { state: string; head: string; contact: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((c, i) => (
        <div key={i} data-reveal style={delay(`${(i % 4) * 80}ms`)} className="rounded-2xl border border-zinc-200 bg-white p-6">
          <span className={`block h-1 w-10 rounded-full ${["bg-saffron", "bg-zinc-500", "bg-india-green"][i % 3]}`} />
          <h3 className="mt-4 text-lg font-semibold text-ink">{c.state}</h3>
          <p className="mt-1 text-sm text-steel">{c.head}</p>
          <p className="text-sm text-steel">{c.contact}</p>
        </div>
      ))}
    </div>
  );
}

/** Membership › Categories section as saved in the CMS (also shown on the home page). */
export type CategoriesCopy = {
  categories: Card[];
  fallbackTitle: string;
  fallbackCtaLabel: string;
  fallbackCtaLink: string;
};

export function CategoriesGrid({ copy }: { copy: CategoriesCopy }) {
  const items = copy.categories;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((c, i) => (
        <div
          key={i}
          data-reveal
          style={delay(`${i * 80}ms`)}
          className={`rounded-2xl bg-white p-6 text-ink transition hover:-translate-y-1 hover:shadow-lg ${i === 0 ? "ring-2 ring-saffron" : ""}`}
        >
          <h3 className="font-semibold">{c.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-steel">{c.text}</p>
        </div>
      ))}
      <a
        href={copy.fallbackCtaLink}
        data-reveal
        style={delay(`${items.length * 80}ms`)}
        className="flex flex-col justify-between rounded-2xl bg-saffron p-6 text-white transition hover:bg-india-green"
      >
        <h3 className="font-semibold">{copy.fallbackTitle}</h3>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
          {copy.fallbackCtaLabel} <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
        </span>
      </a>
    </div>
  );
}

export function BenefitsList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((b, i) => (
        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-steel">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-india-green" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
            <path d="M5 12l5 5L19 7" />
          </svg>
          {b}
        </li>
      ))}
    </ul>
  );
}

/** Membership › Membership Enquiry section as saved in the CMS (also shown on the home page). */
export type EnquiryCopy = FormCopy & {
  tagline: string;
  headline: string;
  intro: string;
  eligibilityTitle: string;
  eligibilityText: string;
  formTitle: string;
};

/** Eligibility + enquiry form. Anchor `#join` is what every "Become a Member" button targets. */
export function MembershipEnquiry({ copy, categories, email }: { copy: EnquiryCopy; categories: Card[]; email: string | null }) {
  return (
    <div id="join" className="grid scroll-mt-28 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
      <div>
        <SectionHead eyebrow={copy.tagline} title={copy.headline} intro={copy.intro} />
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-concrete p-6" data-reveal style={delay("120ms")}>
          <h3 className="font-semibold text-ink">{copy.eligibilityTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-steel">{copy.eligibilityText}</p>
        </div>
      </div>
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm lg:p-10" data-reveal style={delay("200ms")}>
        <h3 className="mb-8 text-2xl font-bold text-ink">{copy.formTitle}</h3>
        <MembershipForm copy={copy} categories={categories.map((c) => c.title)} email={email} />
      </div>
    </div>
  );
}
