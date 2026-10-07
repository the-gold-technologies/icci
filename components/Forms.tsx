"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { membershipCategories } from "@/lib/content";

const input =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-zinc-400 focus:border-saffron focus:ring-2 focus:ring-saffron/20";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel">{label}</span>
      {children}
    </label>
  );
}

// TODO: wire submissions to the backend / CMS endpoint once available.
function useSubmit() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  return { sent, setSent, onSubmit };
}

function Success({ title, onReset }: { title: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-10 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-india-green text-white">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path d="M5 12l5 5L19 7" />
        </svg>
      </div>
      <p className="mt-4 text-lg font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm text-steel">Our team will get in touch with you shortly.</p>
      <button onClick={onReset} className="mt-6 text-sm font-semibold text-saffron hover:underline">
        Submit another response
      </button>
    </div>
  );
}

export function MembershipForm() {
  const { sent, setSent, onSubmit } = useSubmit();
  if (sent) return <Success title="Thank you for your interest in ICCI" onReset={() => setSent(false)} />;
  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Full Name">
        <input required name="name" className={input} placeholder="Your name" />
      </Field>
      <Field label="Organisation / Company">
        <input required name="organisation" className={input} placeholder="Company name" />
      </Field>
      <Field label="Email">
        <input required type="email" name="email" className={input} placeholder="you@company.com" />
      </Field>
      <Field label="Phone">
        <input required type="tel" name="phone" className={input} placeholder="+91" />
      </Field>
      <Field label="Membership Category">
        <select required name="category" defaultValue="" className={input}>
          <option value="" disabled>
            Select a category
          </option>
          {membershipCategories.map((c) => (
            <option key={c.title}>{c.title}</option>
          ))}
        </select>
      </Field>
      <Field label="State">
        <input required name="state" className={input} placeholder="e.g. Uttar Pradesh" />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Tell us about your business">
          <textarea name="message" rows={3} className={input} placeholder="Nature of work, experience, areas of operation…" />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <button className="w-full rounded-full bg-saffron px-8 py-3.5 font-semibold text-white transition hover:bg-india-green sm:w-auto">
          Submit Membership Enquiry
        </button>
      </div>
    </form>
  );
}

export function SuggestionForm() {
  const { sent, setSent, onSubmit } = useSubmit();
  if (sent) return <Success title="Thank you for your suggestion" onReset={() => setSent(false)} />;
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input required name="name" className={input} placeholder="Your name" />
        </Field>
        <Field label="Organisation">
          <input name="organisation" className={input} placeholder="Company / body" />
        </Field>
      </div>
      <Field label="Contact Details">
        <input required name="contact" className={input} placeholder="Email or phone number" />
      </Field>
      <Field label="Suggestion / Feedback">
        <textarea required name="suggestion" rows={4} className={input} placeholder="Share your idea, concern or feedback…" />
      </Field>
      <button className="w-full rounded-full bg-saffron px-8 py-3.5 font-semibold text-white transition hover:bg-india-green">
        Submit Suggestion
      </button>
    </form>
  );
}

export function ContactForm() {
  const { sent, setSent, onSubmit } = useSubmit();
  if (sent) return <Success title="Your message has been sent" onReset={() => setSent(false)} />;
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input required name="name" className={input} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input required type="email" name="email" className={input} placeholder="you@company.com" />
        </Field>
      </div>
      <Field label="Subject">
        <input required name="subject" className={input} placeholder="How can we help?" />
      </Field>
      <Field label="Message">
        <textarea required name="message" rows={4} className={input} placeholder="Write your message…" />
      </Field>
      <button className="w-full rounded-full bg-saffron px-8 py-3.5 font-semibold text-white transition hover:bg-india-green">
        Send Enquiry
      </button>
    </form>
  );
}
