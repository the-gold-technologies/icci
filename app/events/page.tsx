import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { container, delay, PageBanner, SectionHead } from "@/components/ui";
import { events, heroSlides } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Events – ICCI",
  description: "Upcoming and past ICCI conferences, meetings and workshops.",
};

type Event = (typeof events)[number];

function EventList({ items, empty }: { items: Event[]; empty: string }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center" data-reveal>
        <p className="text-steel">{empty}</p>
        <Link href="/contact" className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:text-india-green">
          Contact the secretariat <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} aria-hidden />
        </Link>
      </div>
    );
  }
  return (
    <div className="grid gap-4">
      {items.map((e, i) => (
        <article key={e.title} data-reveal style={delay(`${i * 80}ms`)} className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 sm:grid-cols-[160px_1fr]">
          <div>
            <p className="font-semibold text-saffron">{e.date}</p>
            <p className="text-sm text-steel">{e.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">{e.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-steel">{e.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner photo={heroSlides[4].photo} eyebrow="Events">
          Conferences, meetings and <span className="text-saffron">workshops</span>.
        </PageBanner>

        <section id="upcoming" className="py-20 lg:py-24">
          <div className={container}>
            <SectionHead eyebrow="Upcoming" title="Upcoming events" />
            <div className="mt-8">
              <EventList items={events.filter((e) => !e.past)} empty="New events will be announced here soon." />
            </div>
          </div>
        </section>

        <section id="past" className="bg-concrete py-20 lg:py-24">
          <div className={container}>
            <SectionHead eyebrow="Past" title="Past events" />
            <div className="mt-8">
              <EventList items={events.filter((e) => e.past)} empty="Reports and photos from past events will appear here." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
