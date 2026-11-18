import JsonLd from "@/components/JsonLd";
import { ContactForm } from "@/components/Forms";
import { container, PageBanner } from "@/components/ui";
import { getPage, getSite } from "@/lib/content";
import { headingTag, pageMetadata } from "@/lib/seo";

export const generateMetadata = () => pageMetadata("contact", "/contact");

export default async function ContactPage() {
  const [page, site] = await Promise.all([getPage("contact"), getSite()]);

  const s = page.sections;
  const details = s.ContactDetailsSection;
  const formSec = s.ContactFormSection;

  // Address, phone and email are the global contact details (SEO › Global), shared with the footer
  const rows = [
    { label: details.addressLabel, value: site.address },
    { label: details.phoneLabel, value: site.phone, href: site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : undefined },
    { label: details.emailLabel, value: site.email, href: site.email ? `mailto:${site.email}` : undefined },
  ].filter((r) => r.value);

  return (
    <main>
      <JsonLd data={page.seo?.schema} />
      <PageBanner hero={s.ContactHeroSection} as={headingTag(page.seo?.headingOptions)} />

      {/* ───────────── Contact ───────────── */}
      <section id="contact" className="bg-cream py-16 text-ink lg:py-24">
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              {rows.map((r) => (
                <div key={r.label} className="border-l-2 border-saffron pl-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-steel">{r.label}</p>
                  {r.href ? (
                    <a href={r.href} className="mt-1 block text-lg hover:text-saffron">
                      {r.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg">{r.value}</p>
                  )}
                </div>
              ))}
              {details.mapEmbedUrl && (
                <div className="overflow-hidden rounded-2xl border border-zinc-200">
                  <iframe title={details.mapTitle} src={details.mapEmbedUrl} className="h-64 w-full grayscale" loading="lazy" />
                </div>
              )}
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
              <h2 className="mb-6 text-xl font-bold text-ink">{formSec.formTitle}</h2>
              <ContactForm copy={formSec} email={site.email} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
