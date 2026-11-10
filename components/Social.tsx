// Social media links: a fixed brand-coloured rail on the left edge (desktop) and round icons in the footer.
import type { ReactNode } from "react";
import { social } from "@/lib/content";

// Every network we have a mark for; `social` in content.ts decides which are actually shown.
type Key = "facebook" | "instagram" | "linkedin" | "x" | "youtube";

// Brand marks drawn inline (lucide has no brand icons). All on a 24×24 grid.
const icons: Record<Key, ReactNode> = {
  facebook: (
    <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V14h2.7v8h3.1Z" />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </g>
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M6.94 8.5H3.56v12h3.38v-12ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.5v-6.9c0-3.23-1.72-4.73-4.02-4.73-1.85 0-2.68 1.02-3.14 1.73V8.5H9.9c.04.98 0 12 0 12h3.38v-6.7c0-.36.03-.72.13-.98.29-.72.95-1.46 2.05-1.46 1.45 0 2.03 1.1 2.03 2.72v6.42h2.95Z"
    />
  ),
  x: (
    <path fill="currentColor" d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.73H5.58l11.09 14.44Z" />
  ),
  youtube: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
    />
  ),
};

const brandBg: Record<Key, string> = {
  facebook: "bg-[#1877F2]",
  instagram: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  linkedin: "bg-[#0A66C2]",
  x: "bg-black",
  youtube: "bg-[#FF0000]",
};

function Icon({ name, className = "h-5 w-5" }: { name: Key; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {icons[name]}
    </svg>
  );
}

// Placeholder "#" links stay in the same tab; real profile URLs open in a new one.
const external = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

/** Fixed brand-coloured tabs on the left edge of every page (hidden on small screens, where they'd cover text). */
export function SocialRail() {
  return (
    <nav aria-label="Social media" className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 md:flex">
      {social.map((s) => (
        <a
          key={s.key}
          href={s.href}
          aria-label={s.label}
          title={s.label}
          {...external(s.href)}
          className={`flex h-11 w-11 items-center justify-end rounded-r-xl pr-3 text-white shadow-md transition-all duration-200 hover:w-14 ${brandBg[s.key]}`}
        >
          <Icon name={s.key} />
        </a>
      ))}
    </nav>
  );
}

/** Round icon buttons for the footer. */
export function SocialRow() {
  return (
    <ul className="flex flex-wrap gap-3">
      {social.map((s) => (
        <li key={s.key}>
          <a
            href={s.href}
            aria-label={s.label}
            title={s.label}
            {...external(s.href)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink/70 ring-1 ring-zinc-300 transition hover:bg-saffron hover:text-white hover:ring-saffron"
          >
            <Icon name={s.key} className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
