import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BenefitsList, CategoriesGrid, MembershipEnquiry } from "@/components/sections";
import { container, delay, PageBanner, SectionHead } from "@/components/ui";
import { heroSlides, joinSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Membership – ICCI",
  description: "Why join ICCI, membership categories, eligibility and how to apply.",
};

export default function MembershipPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner photo={heroSlides[1].photo} eyebrow="Membership">
          Join the chamber that represents <span className="text-saffron">your business</span>.
        </PageBanner>

        {/* ───────────── Why join ───────────── */}
        <section id="why-join" className="py-20 lg:py-24">
          <div className={container}>
            <SectionHead
              eyebrow="Why Join"
              title="What ICCI membership gives you"
              intro="ICCI membership is open to businesses, professionals and organisations across the construction and allied industries."
            />
            <div className="mt-10">
              <BenefitsList />
            </div>
          </div>
        </section>

        {/* ───────────── Categories ───────────── */}
        <section id="categories" className="bg-concrete py-20 lg:py-24">
          <div className={container}>
            <SectionHead eyebrow="Membership Categories" title="Find the category that fits you" />
            <div className="mt-10">
              <CategoriesGrid />
            </div>
          </div>
        </section>

        {/* ───────────── How to join ───────────── */}
        <section id="how-to-join" className="py-20 lg:py-24">
          <div className={container}>
            <SectionHead eyebrow="How to Join" title="Four steps to membership" />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {joinSteps.map((s, i) => (
                <li key={s.title} data-reveal style={delay(`${i * 100}ms`)} className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-saffron text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── Apply ───────────── */}
        <section className="bg-cream py-20 lg:py-24">
          <div className={container}>
            <MembershipEnquiry />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
