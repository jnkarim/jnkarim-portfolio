"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle, Send } from "lucide-react";
import { profile } from "@/lib/data";

type Status = {
  type: "idle" | "sending" | "success" | "error";
  message: string;
};

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/jnkarim",
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jnkarim",
    href: profile.linkedin,
  },
];

const fieldClass =
  "mt-2 w-full min-w-0 rounded-lg border border-[#b4b5a9] bg-[#fdfbf1] px-4 py-3.5 " +
  "text-sm text-ink outline-none placeholder:text-[#8a8e81] transition-colors " +
  "focus:border-[#008fa3] focus:ring-2 focus:ring-[#00c8de]/25";

export default function Contact() {
  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus({ type: "sending", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          website: String(data.get("website") ?? ""),
        }),
      });

      const result: { ok?: boolean; error?: string } = await response
        .json()
        .catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error || "Unable to send your message. Please try again."
        );
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out!",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try again.",
      });
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Section heading follows the Hero/Skills typography. */}
      <div className="mb-8 flex flex-wrap items-baseline gap-3">
        <span className="text-mono-label text-xs font-bold uppercase text-neon-deep">
          06 / Contact
        </span>
        <h2 className="text-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          Let&apos;s connect
        </h2>
      </div>

      {/* One unified frame instead of two oversized cards. */}
      <div className="border-hard shadow-hard-lg overflow-hidden rounded-[22px] bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink bg-neon px-6 py-3.5 sm:px-8">
          <span className="text-mono-label text-[10px] font-bold uppercase tracking-widest sm:text-xs">
            A conversation is a good place to start.
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wide">
            Get in touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>

        <div className="grid lg:grid-cols-[0.83fr_1.17fr]">
          {/* Contact methods: simple text rows, not nested cards. */}
          <aside className="min-w-0 border-b border-ink bg-cream-2 p-6 sm:p-9 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full border border-ink bg-[#00c8de]"
                aria-hidden="true"
              />
              <span className="text-mono-label text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                Direct channels
              </span>
            </div>

            <h3 className="text-display mt-5 text-2xl font-black leading-tight tracking-tight sm:text-[2rem]">
              Prefer to reach<br />out directly?
            </h3>
            <p className="mt-3 max-w-[320px] text-sm leading-7 text-ink-soft">
              Email works best, but you can also find me on GitHub and LinkedIn.
            </p>

            <div className="mt-7 border-t border-ink/30">
              {contactLinks.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex min-w-0 items-center gap-3 border-b border-ink/20 py-3.5 outline-offset-4 transition-colors hover:text-[#007e91] focus-visible:outline-2 focus-visible:outline-[#008fa3]"
                >
                  <span className="min-w-0 flex-1">
                    <span className="text-mono-label block text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                      {label}
                    </span>
                    <span className="mt-1 block break-all text-sm font-semibold">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            <p className="text-mono-label mt-6 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
              Based in Dhaka, Bangladesh
            </p>
          </aside>

          {/* Message form: compact and visually primary. */}
          <form
            onSubmit={handleSubmit}
            aria-busy={status.type === "sending"}
            className="min-w-0 bg-card p-6 sm:p-9"
          >
            <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-mono-label text-[11px] font-bold uppercase tracking-wider text-[#007e91]">
                  Message form
                </span>
                <h3 className="text-display mt-2 text-2xl font-extrabold tracking-tight sm:text-[2rem]">
                  Send a note<span className="text-[#00a7be]">.</span>
                </h3>
              </div>
              <span className="rounded-full border border-ink bg-cream-2 px-3 py-1.5 font-mono text-[10px] font-bold uppercase">
                01 / 01
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="contact-name"
                  className="text-mono-label text-[11px] font-bold uppercase"
                >
                  Your name <span className="text-[#007e91]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="contact-email"
                  className="text-mono-label text-[11px] font-bold uppercase"
                >
                  Email address <span className="text-[#007e91]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="text-mono-label text-[11px] font-bold uppercase"
              >
                Your message <span className="text-[#007e91]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={4}
                placeholder="Tell me a little about your idea or question..."
                className={`${fieldClass} resize-y leading-6`}
              />
            </div>

            {/* Spam honeypot required by the existing /api/contact route. */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input
                id="contact-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-ink/25 pt-5">
              <button
                type="submit"
                disabled={status.type === "sending"}
                className="press-hard border-hard text-mono-label inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase text-white transition-colors hover:bg-neon hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008fa3] disabled:cursor-wait disabled:opacity-60"
              >
                {status.type === "sending" ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="h-4 w-4" aria-hidden="true" />
                )}
                {status.type === "sending" ? "Sending..." : "Send message"}
              </button>
              <span className="text-mono-label text-[10px] font-semibold uppercase text-ink-soft">
                * Required fields
              </span>
            </div>

            <p
              role={status.type === "error" ? "alert" : "status"}
              aria-live="polite"
              className={`mt-4 min-h-5 text-sm leading-6 ${
                status.type === "error"
                  ? "font-semibold text-red-700"
                  : status.type === "success"
                    ? "font-semibold text-green-800"
                    : "text-ink-soft"
              }`}
            >
              {status.message}
              {status.type === "error" && (
                <>
                  {" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-bold underline underline-offset-2"
                  >
                    Email me directly
                  </a>
                  .
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
