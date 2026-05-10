"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xkoypbny", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-12 text-center">
        <p className="text-lg font-medium text-charcoal-900">Message sent.</p>
        <p className="mt-2 text-sm text-charcoal-500">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-verde-500 transition-colors"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-verde-500 transition-colors"
        />
      </div>
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-verde-500 transition-colors"
      />
      <select
        name="interest"
        className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 text-sm focus:outline-none focus:border-verde-500 transition-colors"
        defaultValue=""
      >
        <option value="" disabled>What are you looking for?</option>
        <option value="purchasing">Purchasing nanomaterials</option>
        <option value="partnership">Supply partnership</option>
        <option value="samples">Samples for evaluation</option>
        <option value="other">Something else</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Tell us more..."
        className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-verde-500 transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="px-6 py-3 bg-verde-900 text-white text-sm font-medium rounded hover:bg-verde-800 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Try emailing us directly.</p>
      )}
    </form>
  );
}
