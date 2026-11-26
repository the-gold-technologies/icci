/** Structured data from the CMS (a JSON string or object). `<` is escaped so it can't close the tag. */
export default function JsonLd({ data }: { data: string | object | null | undefined }) {
  if (!data) return null;
  const json = (typeof data === "string" ? data : JSON.stringify(data)).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
