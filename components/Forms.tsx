"use client";

import { useState, type FormEvent } from "react";

// Enquiry forms. Labels, placeholders, field order, button and success copy all come from the CMS
// (Contact › Contact Form, Membership › Membership Enquiry); only each field's input type is fixed here,
// because it decides validation and what /api/submissions stores.

export type FormField = { name: string; label: string; placeholder: string };
export type FormCopy = {
  fields: FormField[];
  submitLabel: string;
  successTitle: string;
  successText: string;
  resetLabel: string;
};

type InputKind = "text" | "email" | "tel" | "select" | "textarea";
const INPUT: Record<string, { kind: InputKind; required: boolean; wide?: boolean }> = {
  name: { kind: "text", required: true },
  organisation: { kind: "text", required: true },
  email: { kind: "email", required: true },
  phone: { kind: "tel", required: true },
  category: { kind: "select", required: true },
  state: { kind: "text", required: true },
  subject: { kind: "text", required: true, wide: true },
  message: { kind: "textarea", required: false, wide: true },
};

const input =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-zinc-400 focus:border-saffron focus:ring-2 focus:ring-saffron/20";

function useSubmit(formType: "membership" | "contact") {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFailed(false);

    const form = e.currentTarget;
    const data: Record<string, string> = { formType };
    new FormData(form).forEach((val, key) => {
      if (typeof val === "string") data[key] = val.trim();
    });

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSent(true);
      form.reset();
    } catch {
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  return { sent, setSent, submitting, failed, onSubmit };
}

function Success({ copy, onReset }: { copy: FormCopy; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-10 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-india-green text-white">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
          <path d="M5 12l5 5L19 7" />
        </svg>
      </div>
      <p className="mt-4 text-lg font-semibold text-ink">{copy.successTitle}</p>
      <p className="mt-1 text-sm text-steel">{copy.successText}</p>
      <button onClick={onReset} className="mt-6 text-sm font-semibold text-saffron hover:underline">
        {copy.resetLabel}
      </button>
    </div>
  );
}

function EnquiryForm({
  formType,
  copy,
  options,
  email,
}: {
  formType: "membership" | "contact";
  copy: FormCopy;
  options: string[];
  email: string | null;
}) {
  const { sent, setSent, submitting, failed, onSubmit } = useSubmit(formType);
  if (sent) return <Success copy={copy} onReset={() => setSent(false)} />;

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {copy.fields.map((f) => {
        const spec = INPUT[f.name];
        if (!spec) return null;
        return (
          <label key={f.name} className={`block ${spec.wide ? "sm:col-span-2" : ""}`}>
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel">{f.label}</span>
            {spec.kind === "select" ? (
              <select required={spec.required} name={f.name} defaultValue="" className={input}>
                <option value="" disabled>
                  {f.placeholder}
                </option>
                {options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : spec.kind === "textarea" ? (
              <textarea required={spec.required} name={f.name} rows={4} className={input} placeholder={f.placeholder} />
            ) : (
              <input required={spec.required} type={spec.kind} name={f.name} className={input} placeholder={f.placeholder} />
            )}
          </label>
        );
      })}
      {failed && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700 sm:col-span-2">
          Unable to submit right now. Please try again{email ? ` or reach us at ${email}` : ""}.
        </p>
      )}
      <div className="sm:col-span-2">
        <button
          disabled={submitting}
          className="w-full rounded-full bg-saffron px-8 py-3.5 font-semibold text-white transition hover:bg-india-green disabled:opacity-50 sm:w-auto"
        >
          {submitting ? "Sending…" : copy.submitLabel}
        </button>
      </div>
    </form>
  );
}

/** Membership enquiry; `categories` = Membership › Categories titles. */
export function MembershipForm({ copy, categories, email }: { copy: FormCopy; categories: string[]; email: string | null }) {
  return <EnquiryForm formType="membership" copy={copy} options={categories} email={email} />;
}

export function ContactForm({ copy, email }: { copy: FormCopy; email: string | null }) {
  return <EnquiryForm formType="contact" copy={copy} options={[]} email={email} />;
}
