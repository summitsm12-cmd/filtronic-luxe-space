import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Filtronic Lifestyle Pvt Ltd" },
      {
        name: "description",
        content:
          "Get in touch with Filtronic Lifestyle, Bhubaneswar — phone, email, studio address and a complimentary design consultation.",
      },
      { property: "og:title", content: "Contact — Filtronic Lifestyle" },
      {
        property: "og:description",
        content: "Let's design something beautiful together.",
      },
    ],
  }),
  component: Contact,
});

const ADDRESS_LINES = [
  "Plot No-198, Prachi Enclave",
  "Phase 2, Chandrasekharpur",
  "Bhubaneswar, Odisha",
];
const ADDRESS_QUERY = encodeURIComponent(
  "Plot No 198 Prachi Enclave Phase 2 Chandrasekharpur Bhubaneswar Odisha",
);

const services = [
  "Residential Interior Design",
  "Commercial Interior Design",
  "Interior Consultation",
  "Modular Kitchen Design",
  "3D House Design",
  "Furniture Partner Solutions",
  "Space Planning & Optimization",
  "Custom Furniture Design",
  "Other",
];

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "message", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (fd: FormData): Errors => {
    const e: Errors = {};
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const service = String(fd.get("service") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name) e.name = "Please enter your name";
    else if (name.length > 100) e.name = "Name is too long";

    if (!phone) e.phone = "Please enter your phone number";
    else if (!/^[+\d][\d\s-]{6,18}$/.test(phone)) e.phone = "Enter a valid phone number";

    if (!email) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      e.email = "Enter a valid email";

    if (!service) e.service = "Please select a service";

    if (!message) e.message = "Please add a short message";
    else if (message.length > 1000) e.message = "Message is too long (max 1000)";
    return e;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = validate(fd);
    setErrors(result);
    if (Object.keys(result).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  };

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="container-px mx-auto max-w-7xl pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6">
            Get in touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Let's Design Something <em className="italic text-brand-indigo">Beautiful</em> Together.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Tell us a little about your project. Our team will respond within
            one working day to schedule a complimentary design consultation.
          </p>
        </div>
      </section>

      {/* SECTION 1 — CONTACT CARDS */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <ContactCard
            icon={Phone}
            t="Phone"
            lines={["+91 8658326019"]}
            href="tel:+918658326019"
            cta="Call now"
          />
          <ContactCard
            icon={Mail}
            t="Email"
            lines={["info@filtroicslifestyle.com"]}
            href="mailto:info@filtroicslifestyle.com"
            cta="Send email"
          />
          <ContactCard icon={MapPin} t="Studio" lines={ADDRESS_LINES} />
        </div>
      </section>

      {/* SECTION 2 — FORM + INFO */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Enquiry form</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              Start a project.
            </h2>
            <form noValidate onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Phone" name="phone" type="tel" maxLength={20} error={errors.phone} />
              <div className="sm:col-span-2">
                <Field label="Email" name="email" type="email" maxLength={255} error={errors.email} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Service required
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className={`w-full bg-background border rounded-xl px-4 h-12 text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition ${
                    errors.service ? "border-destructive" : "border-input"
                  }`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-xs text-destructive mt-2">{errors.service}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Type of space, size, timelines, references…"
                  className={`w-full bg-background border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition ${
                    errors.message ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-2">{errors.message}</p>
                )}
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by our team.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo transition-colors duration-500 shadow-soft"
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

          {/* Business hours + WhatsApp short card */}
          <aside className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 bg-surface border border-border rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full bg-background text-brand-green flex items-center justify-center">
                  <Clock size={18} />
                </span>
                <h3 className="font-display text-xl text-foreground">Studio Hours</h3>
              </div>
              <ul className="text-sm divide-y divide-border">
                <li className="flex justify-between py-3">
                  <span className="text-muted-foreground">Monday — Friday</span>
                  <span className="text-foreground">10:00 — 19:00</span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">10:00 — 17:00</span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">By appointment</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/918658326019"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 bg-surface text-foreground rounded-2xl overflow-hidden hover-lift block"
            >
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-brand-green/40 blur-2xl" />
              <div className="relative">
                <span className="w-12 h-12 rounded-full bg-brand-green text-primary-foreground flex items-center justify-center mb-5">
                  <MessageCircle size={20} />
                </span>
                <h3 className="font-display text-2xl mb-2">Prefer WhatsApp?</h3>
                <p className="text-sm opacity-80 mb-6">
                  Get a quick reply from our team — Monday to Saturday.
                </p>
                <span className="inline-flex items-center gap-2 text-sm">
                  +91 8658326019
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          </aside>
        </div>
      </section>

      {/* SECTION 3 — MAP */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Visit the studio</p>
            <h2 className="font-display text-4xl text-foreground leading-tight mb-6">
              Find us in <em className="italic text-brand-indigo">Chandrasekharpur.</em>
            </h2>
            <address className="not-italic text-muted-foreground leading-relaxed">
              {ADDRESS_LINES.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-brand-green hover:text-brand-indigo transition-colors group"
            >
              Get directions
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-border shadow-soft min-h-[360px]">
            <iframe
              title="Filtronic Lifestyle Studio Location"
              src={`https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[360px] block"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHATSAPP CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-surface text-foreground p-12 md:p-20">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-green/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Quick chat
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                A faster way to <em className="italic text-brand-indigo">talk to us.</em>
              </h2>
              <p className="mt-5 max-w-xl opacity-80">
                Send us a message on WhatsApp — share a photo of your space,
                a reference image, or just say hello.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <a
                href="https://wa.me/918658326019"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo hover:text-white transition-colors duration-500 shadow-soft"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  t,
  lines,
  href,
  cta,
}: {
  icon: typeof Phone;
  t: string;
  lines: string[];
  href?: string;
  cta?: string;
}) {
  const body = (
    <>
      <div className="w-12 h-12 rounded-full bg-accent text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-primary-foreground transition-colors duration-500">
        <Icon size={20} />
      </div>
      <h3 className="font-display text-xl text-foreground mb-3">{t}</h3>
      <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
      {cta && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm text-brand-indigo group-hover:text-brand-green transition-colors">
          {cta}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      )}
    </>
  );
  return href ? (
    <a href={href} className="group p-8 bg-card border border-border rounded-2xl hover-lift block">
      {body}
    </a>
  ) : (
    <div className="group p-8 bg-card border border-border rounded-2xl hover-lift">{body}</div>
  );
}

function Field({
  label,
  name,
  type = "text",
  maxLength,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  maxLength?: number;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        maxLength={maxLength}
        className={`w-full bg-background border rounded-xl px-4 h-12 text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition ${
          error ? "border-destructive" : "border-input"
        }`}
      />
      {error && <p className="text-xs text-destructive mt-2">{error}</p>}
    </div>
  );
}
