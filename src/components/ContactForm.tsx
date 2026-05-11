"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  form: {
    name: string;
    company: string;
    email: string;
    interest: string;
    interestOptions: {
      purchasing: string;
      partnership: string;
      samples: string;
      other: string;
    };
    message: string;
    submit: string;
    sending: string;
    sent: string;
    sentSub: string;
    error: string;
  };
}

export function ContactForm({ form }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    try {
      const res = await fetch("https://formspree.io/f/xkoypbny", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        formEl.reset();
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
        <p className="text-lg font-medium text-charcoal-900">{form.sent}</p>
        <p className="mt-2 text-sm text-charcoal-500">{form.sentSub}</p>
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
          placeholder={form.name}
          className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-verde-500 transition-colors"
        />
        <input
          type="text"
          name="company"
          placeholder={form.company}
          className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-verde-500 transition-colors"
        />
      </div>
      <input
        type="email"
        name="email"
        required
        placeholder={form.email}
        className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-verde-500 transition-colors"
      />
      <select
        name="interest"
        className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 text-sm focus:outline-none focus:border-verde-500 transition-colors"
        defaultValue=""
      >
        <option value="" disabled>{form.interest}</option>
        <option value="purchasing">{form.interestOptions.purchasing}</option>
        <option value="partnership">{form.interestOptions.partnership}</option>
        <option value="samples">{form.interestOptions.samples}</option>
        <option value="other">{form.interestOptions.other}</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder={form.message}
        className="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-200 rounded text-charcoal-900 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-verde-500 transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="px-6 py-3 bg-verde-900 text-white text-sm font-medium rounded hover:bg-verde-800 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? form.sending : form.submit}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">{form.error}</p>
      )}
    </form>
  );
}
