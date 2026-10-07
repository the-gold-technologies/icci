import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/Forms";
import { container } from "@/components/ui";
import { contact, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact – ICCI",
  description: "Get in touch with the Indian Chamber of Construction Industry.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* ───────────── Banner ───────────── */}
        <section className="relative overflow-hidden text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.aboutSite} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/85 via-[#1a0f08]/55 to-[#1a0f08]/25" />
          <div className={`${container} relative pb-16 pt-40 lg:pb-20 lg:pt-48`}>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              <span className="tricolor inline-block h-1 w-8 rounded-full" />
              Contact Us
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Get in touch with <span className="text-saffron">ICCI</span>.
            </h1>
          </div>
        </section>

        {/* ───────────── Contact ───────────── */}
        <section id="contact" className="bg-cream py-16 text-ink lg:py-24">
          <div className={container}>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-6">
                {[
                  { k: "Office Address", v: contact.address },
                  { k: "Phone", v: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
                  { k: "Email", v: contact.email, href: `mailto:${contact.email}` },
                ].map((c) => (
                  <div key={c.k} className="border-l-2 border-saffron pl-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-steel">{c.k}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-lg hover:text-saffron">{c.v}</a>
                    ) : (
                      <p className="mt-1 text-lg">{c.v}</p>
                    )}
                  </div>
                ))}
                <div className="overflow-hidden rounded-2xl border border-zinc-200">
                  <iframe
                    title="ICCI office location"
                    src="https://maps.google.com/maps?q=New%20Delhi&z=12&output=embed"
                    className="h-64 w-full grayscale"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
                <h3 className="mb-6 text-xl font-bold text-ink">Send us an enquiry</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
