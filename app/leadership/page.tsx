import JsonLd from "@/components/JsonLd";
import { PersonPhoto } from "@/components/sections";
import { container, delay, PageBanner } from "@/components/ui";
import { getLeaders, getPage, type Person } from "@/lib/content";
import { headingTag, pageMetadata } from "@/lib/seo";
import { ArrowRight, X } from "lucide-react";

export const generateMetadata = () => pageMetadata("leadership", "/leadership");

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
function ReadProfile({ person, readProfileLabel }: { person: Person; readProfileLabel: string }) {
  if (person.bio.length === 0) return null;
  const popId = `bio-${person.slug}`;
  return (
    <>
      <button type="button" popoverTarget={popId} className="inline-flex items-center gap-1 text-xs font-semibold text-saffron hover:text-india-green">
        {readProfileLabel} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
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
          {person.bio.map((para, i) => (
            <p key={i}>{para}</p>
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
function WideCard({ person, index = 0, featured = false, readProfileLabel }: { person: Person; index?: number; featured?: boolean; readProfileLabel: string }) {
  const bio = person.bio;
  return (
    <article
      id={person.slug}
      data-reveal
      style={delay(`${index * 100}ms`)}
      className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:flex-row"
    >
      <div className={`relative aspect-square shrink-0 overflow-hidden bg-zinc-100 sm:aspect-auto sm:min-h-52 ${featured ? "sm:w-64 lg:w-72" : "sm:w-40 lg:w-44"}`}>
        <PersonPhoto person={person} />
      </div>
      <div className={`flex min-w-0 flex-1 flex-col ${featured ? "p-6 lg:p-8" : "p-5"}`}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-saffron">{person.role}</p>
        <h3 className={`mt-1 font-semibold leading-snug text-ink ${featured ? "text-2xl" : "text-lg"}`}>{person.name}</h3>
        {person.org && <p className="mt-1 text-xs font-medium leading-snug text-ink/70">{person.org}</p>}
        {featured ? (
          <div className="mt-4 space-y-3 leading-relaxed text-steel">
            {bio.slice(0, 2).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ) : (
          bio[0] && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-steel">{bio[0]}</p>
        )}
        <div className="mt-auto pt-4">
          <ReadProfile person={person} readProfileLabel={readProfileLabel} />
        </div>
      </div>
    </article>
  );
}

/** Square compact card for the National Executive Committee (5 per row on desktop). */
function MemberCard({ person, index = 0, label, readProfileLabel }: { person: Person; index?: number; label: string; readProfileLabel: string }) {
  return (
    <article
      id={person.slug}
      data-reveal
      style={delay(`${(index % 5) * 80}ms`)}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-saffron hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <PersonPhoto person={person} className="transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-india-green">{label}</p>
          <h3 className="mt-1 text-base font-semibold leading-snug text-ink group-hover:text-saffron">{person.name}</h3>
          {person.org && <p className="mt-1 text-xs text-steel">{person.org}</p>}
        </div>
        <div className="mt-4">
          <ReadProfile person={person} readProfileLabel={readProfileLabel} />
        </div>
      </div>
    </article>
  );
}

export default async function LeadershipPage() {
  const [page, leaders] = await Promise.all([getPage("leadership"), getLeaders()]);

  const s = page.sections;
  const rosterSec = s.RosterSection;
  const presSec = s.PresidentSection;
  const vpSec = s.VicePresidentsSection;
  const secSec = s.SecretariesSection;
  const execSec = s.ExecutiveCommitteeSection;

  const bearers = leaders.officeBearers;
  const exec = leaders.executive;
  const byRole = (...roles: string[]) => bearers.filter((p) => roles.includes(p.role));
  const president = byRole("National President");
  const vicePresidents = byRole("National Vice President");
  const secretaryTreasurer = byRole("National General Secretary", "National Joint Secretary", "National Treasurer");

  const roster = rosterSec.groups.map((g: { label: string; role: string }) => ({
    label: g.label,
    people: bearers.filter((p) => p.role === g.role),
  }));

  const readProfileLabel: string = presSec.readProfileLabel;

  return (
      <main>
        <JsonLd data={page.seo?.schema} />
        <PageBanner hero={s.LeadershipHeroSection} as={headingTag(page.seo?.headingOptions)} />

        {/* ───────────── At a glance ───────────── */}
        <section className={`${section} border-b border-zinc-200 bg-cream`}>
          <div className={`${container} grid gap-8 sm:grid-cols-2 lg:grid-cols-[repeat(5,auto)_1.6fr] lg:justify-between`}>
            {roster.map((r: { label: string; people: Person[] }, i: number) => (
              <div key={r.label} data-reveal style={delay(`${i * 80}ms`)}>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-saffron">{r.label}</p>
                <ul className="mt-2 space-y-1">
                  {r.people.map((p: Person) => (
                    <li key={p.slug}>
                      <a href={`#${p.slug}`} className="text-lg font-medium text-ink hover:text-saffron">
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div data-reveal style={delay("400ms")} className="sm:col-span-2 lg:col-span-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-india-green">
                {rosterSec.executiveLabel}
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1">
                {exec.map((p) => (
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
            <TierHead
              label={presSec.tagline}
              title={presSec.headline}
            />
            <div className="mt-8">
              {president.map((p) => (
                <WideCard key={p.slug} person={p} featured readProfileLabel={readProfileLabel} />
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Vice Presidents: three across ───────────── */}
        <section className={`${section} bg-concrete`}>
          <div className={container}>
            <TierHead
              label={vpSec.tagline}
              title={vpSec.headline}
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {vicePresidents.map((p, i) => (
                <WideCard key={p.slug} person={p} index={i} readProfileLabel={readProfileLabel} />
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── General Secretary, Joint Secretary & Treasurer: three across ───────────── */}
        <section className={section}>
          <div className={container}>
            <TierHead
              label={secSec.tagline}
              title={secSec.headline}
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {secretaryTreasurer.map((p, i) => (
                <WideCard key={p.slug} person={p} index={i} readProfileLabel={readProfileLabel} />
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── National Executive Committee: 5 across ───────────── */}
        <section className={`${section} bg-concrete`}>
          <div className={container}>
            <TierHead
              label={execSec.tagline}
              title={execSec.headline}
              green
            />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
              {exec.map((p, i) => (
                <MemberCard key={p.slug} person={p} index={i} label={rosterSec.executiveLabel} readProfileLabel={readProfileLabel} />
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
