// ICCI artwork uploaded in the CMS (SEO › Global): emblem (dark + white ink) and full lockup.

type LogoProps = { src: string | null; alt: string; className?: string; priority?: boolean };

/** Full logo (emblem, name and tagline), or any single logo image. */
export function LogoLockup({ src, alt, className, priority = false }: LogoProps) {
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}

/** ICCI emblem: `white` picks the white-ink variant for photo backgrounds. */
export function LogoMark({
  src,
  srcWhite,
  white = false,
  ...rest
}: LogoProps & { srcWhite: string | null; white?: boolean }) {
  return <LogoLockup src={white ? srcWhite : src} {...rest} />;
}
