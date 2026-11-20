import Link from "next/link";
import { LogoLockup } from "./Logo";
import { SocialRow } from "./Social";
import { container } from "./ui";
import type { FooterContent, NavLink, SiteConfig } from "@/lib/content";

// Rendered once in the root layout. Everything comes from the CMS: quick links (Navigation › Menu Links),
// logo, contact and social links (SEO › Global, Navigation › Social Media & Footer) and the footer copy.
export default function Footer({ links, site, copy }: { links: NavLink[]; site: SiteConfig; copy: FooterContent }) {
  return (
    <footer className="bg-concrete text-ink">
      <div className="tricolor h-1" />
      <div className={`${container} grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]`}>
        <div>
          <LogoLockup src={site.logo} alt={copy.logoAlt} className="h-auto w-52" />
          <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-steel">{copy.followUsLabel}</p>
          <div className="mt-3">
            <SocialRow items={site.socialLinks ?? []} />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-steel">{copy.quickLinksTitle}</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((n) => (
              <li key={n.id}>
                <Link href={n.href} className="text-ink/80 hover:text-saffron">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-steel">{copy.reachUsTitle}</p>
          {site.address && <p className="mt-4 text-sm text-ink/80">{site.address}</p>}
          {site.phone && (
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 block text-sm text-ink/80 hover:text-saffron">
              {site.phone}
            </a>
          )}
          {site.email && (
            <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-ink/80 hover:text-saffron">
              {site.email}
            </a>
          )}
        </div>
      </div>
      <div className="border-t border-zinc-300">
        <p className={`${container} py-6 text-xs text-steel`}>
          © {new Date().getFullYear()} {copy.copyrightText}
        </p>
      </div>
    </footer>
  );
}
