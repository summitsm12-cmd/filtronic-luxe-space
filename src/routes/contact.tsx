import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Filtronic Lifestyle" },
      { name: "description", content: "Book a consultation with Filtronic Lifestyle. Reach us via phone, email or visit the studio." },
      { property: "og:title", content: "Contact — Filtronic Lifestyle" },
      { property: "og:description", content: "Start a conversation with our design team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6">Get in touch</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground reveal">
            Let's shape <em className="italic text-brand-indigo">your space</em> together.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Tell us a little about your project. Our team will respond within
            one working day to schedule a complimentary design consultation.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-soft">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid sm:grid-cols-2 gap-6"
            >
              <Field label="Full name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <Field label="Email" name="email" type="email" />
              </div>
              <div className="sm:col-span-2">
                <Field label="Project location" name="city" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Tell us about your project
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition"
                  placeholder="Type of space, size, timelines, references…"
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by our team.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 h-12 rounded-full bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo transition-colors duration-500 shadow-soft"
                >
                  Send enquiry
                  <Send size={16} />
                </button>
              </div>
              {sent && (
                <p className="sm:col-span-2 text-sm text-brand-green fade-in">
                  Thank you — we'll be in touch shortly.
                </p>
              )}
            </form>
          </div>

          {/* Info */}
          <aside className="lg:col-span-5 space-y-6">
            {[
              {
                i: MapPin,
                t: "Studio",
                d: "Filtronic Lifestyle Pvt Ltd\nBhubaneswar, Odisha, India",
              },
              {
                i: Phone,
                t: "Call / WhatsApp",
                d: "+91 8658326019",
                href: "tel:+918658326019",
              },
              {
                i: Mail,
                t: "Email",
                d: "info@filtroniclifestyle.com",
                href: "mailto:info@filtroniclifestyle.com",
              },
            ].map(({ i: Icon, t, d, href }) => (
              <div
                key={t}
                className="p-8 bg-surface border border-border rounded-2xl flex gap-5 hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-background text-brand-green flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t}</h3>
                  {href ? (
                    <a href={href} className="text-muted-foreground hover:text-brand-green whitespace-pre-line">
                      {d}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line">{d}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-8 bg-brand-indigo text-secondary-foreground rounded-2xl">
              <h3 className="font-display text-xl mb-2">Studio Hours</h3>
              <p className="opacity-80 text-sm leading-relaxed">
                Mon — Sat &nbsp;·&nbsp; 10:00 — 19:00
                <br />
                Sunday &nbsp;·&nbsp; By appointment
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="w-full bg-background border border-input rounded-xl px-4 h-12 text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition"
      />
    </div>
  );
}
