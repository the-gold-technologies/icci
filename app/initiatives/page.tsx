import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InitiativesGrid, ObjectivesGrid } from "@/components/sections";
import { container, delay, PageBanner, SectionHead } from "@/components/ui";
import { heroSlides, stakeholders } from "@/lib/content";

export const metadata: Metadata = {
  title: "Initiatives – ICCI",
  description: "ICCI's key initiatives, objectives and the stakeholders it represents.",
};

export default function InitiativesPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner photo={heroSlides[0].photo} eyebrow="Initiatives">
          How ICCI works for the <span className="text-saffron">construction</span> industry.
        </PageBanner>

        {/* ───────────── Key initiatives ───────────── */}
        <section id="key-initiatives" className="py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="Key Initiatives"
              title="Four pillars that make ICCI work for its members"
              intro="A practical framework designed to position ICCI as the central platform for contractors, subcontractors, workers and departmental stakeholders."
            />
            <div className="mt-12">
              <InitiativesGrid />
            </div>
          </div>
        </section>

        {/* ───────────── Objectives ───────────── */}
        <section id="objectives" className="bg-concrete py-20 lg:py-24">
          <div className={container}>
            <SectionHead eyebrow="Objectives" title="What the Chamber sets out to achieve" />
            <div className="mt-10">
              <ObjectivesGrid />
            </div>
          </div>
        </section>

        {/* ───────────── Who we represent ───────────── */}
        <section id="who-we-represent" className="py-20 lg:py-24">
          <div className={`${container} grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]`}>
            <div>
              <SectionHead
                eyebrow="Who We Represent"
                title="One chamber. Every stakeholder in construction."
                intro="ICCI engages with Government departments, public bodies and policy makers on behalf of the full value chain of the construction and allied industries."
              />
              <Link href="/membership" className="mt-8 inline-flex rounded-full bg-saffron px-6 py-3 font-semibold text-white transition hover:bg-india-green">
                Become a Member
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {stakeholders.map((s, i) => (
                <li key={s} data-reveal style={delay(`${i * 60}ms`)} className="flex items-center gap-4 rounded-xl border border-zinc-200 px-5 py-4 font-medium text-ink">
                  <span className={`h-8 w-1.5 rounded-full ${["bg-saffron", "bg-zinc-500", "bg-india-green"][i % 3]}`} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
