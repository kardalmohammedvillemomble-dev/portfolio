"use client";

import { useState, FormEvent } from "react";
import Section from "@/components/Section";

const items = [
  { label: "Email", value: "kardalm132@gmail.com", href: "mailto:kardalm132@gmail.com" },
  { label: "Téléphone", value: "+33 7 69 48 31 90", href: "tel:+33769483190" },
  { label: "Localisation", value: "Villemomble, Île-de-France" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      company: data.get("company"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue."
      );
    }
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-xs text-muted">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="hover:text-accent">
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Français — courant · Anglais — technique · Arabe — natif
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Entreprise</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="name" className="font-mono text-xs text-muted">Nom</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-xs text-muted">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs text-muted">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded border border-border bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 disabled:opacity-60"
          >
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>

          {status === "success" && (
            <p className="text-sm text-accent" aria-live="polite">
              Message envoyé, merci !
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600" aria-live="polite">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}