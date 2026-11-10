import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PersonPhoto } from "@/components/sections";
import { container, delay, PageBanner } from "@/components/ui";
import { heroSlides, nationalExecutive, officeBearers, type Person } from "@/lib/content";
import { ArrowRight, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership – ICCI",
  description: "The national office bearers and National Executive Committee of the Indian Chamber of Construction Industry.",
};

const byRole = (...roles: string[]) => officeBearers.filter((p) => roles.includes(p.role));
const president = byRole("National President");
const vicePresidents = byRole("National Vice President");
const secretaryTreasurer = byRole("National General Secretary", "National Treasurer");

// Letterhead-style roster at the top of the page: the hierarchy at a glance, each name jumps to its profile.
const roster = [
  { label: "National President", people: president },
  { label: "National Vice Presidents", people: vicePresidents },
  { label: "National General Secretary", people: byRole("National General Secretary") },
  { label: "National Treasurer", people: byRole("National Treasurer") },
];

const section = "py-16 lg:py-20";

function TierHead({ label, title, green = false }: { label: string; title: string; green?: boolean }) {
  return (
    <div data-reveal>
      <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${green ? "text-india-green" : "text-saffron"}`}>
        <span className={`inline-block h-1 w-8 rounded-full ${green ? "bg-india-green" : "bg-saffron"}`} />
        {label}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
    </div>
  );
}

/** "Read profile" button + the full bio in a native popover (no client JS). */
function ReadProfile({ person }: { person: Person }) {
  if (!person.bio) return null;
  const popId = `bio-${person.slug}`;
  return (
    <>
      <button type="button" popoverTarget={popId} className="inline-flex items-center gap-1 text-xs font-semibold text-saffron hover:text-india-green">
        Read profile <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      </button>
      <div
        id={popId}
        popover="auto"
        className="m-auto max-h-[85vh] w-[min(40rem,calc(100%-2rem))] overflow-y-auto rounded-3xl bg-white p-0 shadow-2xl backdrop:bg-[rgba(26,15,8,0.6)] backdrop:backdrop-blur-[2px]"
      >
        <div className="flex items-center gap-4 border-b border-zinc-200 p-6">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-zinc-100">
            <PersonPhoto person={person} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-saffron">{person.role}</p>
            <h3 className="text-xl font-semibold text-ink">{person.name}</h3>
            {person.org && <p className="text-sm text-steel">{person.org}</p>}
          </div>
          <button
            type="button"
            popoverTarget={popId}
            popoverTargetAction="hide"
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink/60 hover:bg-zinc-100 hover:text-ink"
          >
            <X className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
        <div className="space-y-4 p-6 leading-relaxed text-steel">
          {person.bio.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Side-by-side card (photo left, text right) for sections with only 1–3 people,
 * so the row is filled by readable text instead of empty space.
 * `featured` = a single card spanning the full row (the President).
 */
function WideCard({ person, index = 0, featured = false }: { person: Person; index?: number; featured?: boolean }) {
  const bio = person.bio ?? [];
  return (
    <article
      id={person.slug}
      data-reveal
      style={delay(`${index * 100}ms`)}
      className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:flex-row"
    >
      {/* Square on phones (a 4:3 strip was too short to fit a whole face); beside the text it stretches to the card's height. */}
      <div className={`relative aspect-square shrink-0 overflow-hidden bg-zinc-100 sm:aspect-auto sm:min-h-52 ${featured ? "sm:w-64 lg:w-72" : "sm:w-40 lg:w-44"}`}>
        <PersonPhoto person={person} />
      </div>
      <div className={`flex min-w-0 flex-1 flex-col ${featured ? "p-6 lg:p-8" : "p-5"}`}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-saffron">{person.role}</p>
        <h3 className={`mt-1 font-semibold leading-snug text-ink ${featured ? "text-2xl" : "text-lg"}`}>{person.name}</h3>
        {person.org && <p className="mt-1 text-xs font-medium leading-snug text-ink/70">{person.org}</p>}
        {featured ? (
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-steel">
            {bio.slice(0, 2).map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        ) : (
          bio[0] && <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-steel">{bio[0]}</p>
        )}
        <div className="mt-auto pt-4">
          <ReadProfile person={person} />
        </div>
      </div>
    </article>
  );
}

/** Compact photo-on-top card for the National Executive Committee (5 per row = two full rows). */
function MemberCard({ person, index }: { person: Person; index: number }) {
  return (
    <article id={person.slug} data-reveal style={delay(`${(index % 5) * 80}ms`)} className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <PersonPhoto person={person} />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="truncate font-semibold text-ink">{person.name}</h3>
        <p className="mt-1 line-clamp-2 min-h-[2lh] text-xs leading-snug text-steel">{person.org}</p>
        <div className="mt-3 h-5">
          <ReadProfile person={person} />
        </div>
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner photo={heroSlides[3].photo} eyebrow="Leadership">
          The people building the <span className="text-saffron">Chamber</span>.
        </PageBanner>

        {/* ───────────── At a glance ───────────── */}
        <section className={`${section} border-b border-zinc-200 bg-cream`}>
          <div className={`${container} grid gap-8 sm:grid-cols-2 lg:grid-cols-[repeat(4,auto)_1.6fr] lg:justify-between`}>
            {roster.map((r, i) => (
              <div key={r.label} data-reveal style={delay(`${i * 80}ms`)}>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-saffron">{r.label}</p>
                <ul className="mt-2 space-y-1">
                  {r.people.map((p) => (
                    <li key={p.slug}>
                      <a href={`#${p.slug}`} className="text-lg font-medium text-ink hover:text-saffron">
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div data-reveal style={delay("320ms")} className="sm:col-span-2 lg:col-span-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-india-green">National Executive Committee</p>
              <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1">
                {nationalExecutive.map((p) => (
                  <li key={p.slug}>
                    <a href={`#${p.slug}`} className="text-sm text-ink/80 hover:text-india-green">
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────── National President: one card, full row ───────────── */}
        <section className={section}>
          <div className={container}>
            <TierHead label="National President" title="Leading the Chamber" />
            <div className="mt-8">
              {president.map((p) => (
                <WideCard key={p.slug} person={p} featured />
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Vice Presidents: three across ───────────── */}
        <section className={`${section} bg-concrete`}>
          <div className={container}>
            <TierHead label="National Vice Presidents" title="Steering the national agenda" />
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {vicePresidents.map((p, i) => (
                <WideCard key={p.slug} person={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── General Secretary & Treasurer: two across ───────────── */}
        <section className={section}>
          <div className={container}>
            <TierHead label="General Secretary & Treasurer" title="Running the Chamber day to day" />
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {secretaryTreasurer.map((p, i) => (
                <WideCard key={p.slug} person={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── National Executive Committee: 5 across, two full rows ───────────── */}
        <section className={`${section} bg-concrete`}>
          <div className={container}>
            <TierHead label="National Executive Committee" title="Industry leaders from across the sector" green />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
              {nationalExecutive.map((p, i) => (
                <MemberCard key={p.slug} person={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
