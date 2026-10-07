import Link from "next/link";
import { LogoMark } from "./Logo";
import { container } from "./ui";
import { contact, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-concrete text-ink">
      <div className="tricolor h-1" />
      <div className={`${container} grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]`}>
        <div className="flex items-start gap-4">
          <LogoMark className="w-20 shrink-0" ink="#111" bg="#f4f3f0" />
          <div>
            <p className="text-lg font-semibold uppercase leading-tight">
              Indian Chamber of
              <br />
              Construction Industry
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-steel">Collaborate • Innovate • Build a Better India</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-steel">Quick Links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ink/80 hover:text-saffron">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-steel">Reach Us</p>
          <p className="mt-4 text-sm text-ink/80">{contact.address}</p>
          <p className="mt-2 text-sm text-ink/80">{contact.phone}</p>
          <p className="mt-2 text-sm text-ink/80">{contact.email}</p>
        </div>
      </div>
      <div className="border-t border-zinc-300">
        <p className={`${container} py-6 text-xs text-steel`}>
          © {new Date().getFullYear()} Indian Chamber of Construction Industry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
