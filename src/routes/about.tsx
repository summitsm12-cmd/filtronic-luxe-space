import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import litanBarikImg from "@/assets/litan-barik.jpg";
import samiraSahooImg from "@/assets/samira-sahoo.jpg";
import studioInteriorImg from "@/assets/studio-interior.jpg";
import whyModernDesignImg from "@/assets/why-modern-design.jpg";
import whyCraftExecutionImg from "@/assets/why-craft-execution.jpg";
import whySingleDeliveryImg from "@/assets/why-single-delivery.jpg";
import {
  Quote,
  Star,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Filtronic Lifestyle Pvt Ltd" },
      {
        name: "description",
        content:
          "Filtronic Lifestyle Pvt Ltd is a leading interior design company in Bhubaneswar — residential, commercial, modular kitchens and custom furniture.",
      },
      { property: "og:title", content: "About — Filtronic Lifestyle" },
      { property: "og:description", content: "Designing spaces that inspire living." },
    ],
  }),
  component: About,
});

const leaders = [
  {
    n: "Mr. Litan Barik",
    r: "CEO / Director",
    bio: "Visionary behind Filtronic Lifestyle, leading the studio's design direction and growth across Odisha.",
  },
  {
    n: "Mr. Samira Sahoo",
    r: "Managing Director",
    bio: "Steers operations, execution and client relationships with a focus on craftsmanship and timely delivery.",
  },
];

const stats = [
  { k: "100+", v: "Projects Completed" },
  { k: "50+", v: "Happy Clients" },
  { k: "12+", v: "Years of Modern Design Expertise" },
  { k: "100%", v: "Commitment to Timely Delivery" },
];

const why = [
  {
    t: "Modern Design Expertise",
    d: "A contemporary studio language rooted in timeless interior principles — light, proportion and honest materials.",
  },
  {
    t: "Craft-led Execution",
    d: "Our in-house team and trusted craftsmen deliver finishes you can feel — joinery, stone, lighting and textiles.",
  },
  {
    t: "Single-point Delivery",
    d: "Concept, 3D, procurement and on-site execution under one roof. One team, one timeline, one accountable studio.",
  },
];

const reviews = [
  {
    n: "Priya Mohanty",
    r: "Residential client · Bhubaneswar",
    q: "Filtronic transformed our apartment beyond what we imagined. Every corner feels intentional and refined.",
  },
  {
    n: "Ankit Sharma",
    r: "Office fit-out · Cuttack",
    q: "Delivered our office on time, on budget, and with a finish that genuinely impresses every visitor.",
  },
  {
    n: "Sneha Patro",
    r: "Modular kitchen · Bhubaneswar",
    q: "The kitchen is functional, gorgeous and built like furniture. The team is detail-obsessed in the best way.",
  },
  {
    n: "Rohit Das",
    r: "Villa interiors · Puri",
    q: "From the first sketch to the final styling, the experience felt personal. The home feels truly ours.",
  },
];

const socials = [
  { i: Instagram, t: "Instagram", h: "@filtroniclifestyle", href: "#" },
  { i: Facebook, t: "Facebook", h: "/filtroniclifestyle", href: "#" },
  { i: Youtube, t: "YouTube", h: "/@filtroniclifestyle", href: "#" },
  { i: Linkedin, t: "X / LinkedIn", h: "@filtronic", href: "#" },
];

function About() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="image-placeholder absolute inset-0 opacity-30" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>

        <div className="container-px mx-auto max-w-7xl pt-12 lg:pt-20 pb-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6 reveal">
            About the studio
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-green max-w-4xl mx-auto reveal">
            Designing Spaces That <em className="italic text-brand-indigo">Inspire Living.</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A modern interior design studio rooted in craft, restraint and
            meaningful spaces — based in Bhubaneswar, working across Odisha.
          </p>
        </div>
      </section>

      {/* SECTION 1 — INTRODUCTION */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <img src={studioInteriorImg} alt="Studio Interior" className="w-full rounded-2xl shadow-elegant object-cover" style={{ aspectRatio: "4/5" }} />
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Who we are</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green leading-tight mb-8">
              A studio for <em className="italic text-brand-indigo">considered</em> interiors.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Filtronic Lifestyle Pvt Ltd is a leading interior design company
              in Bhubaneswar specializing in residential interiors, commercial
              spaces, modular kitchens, and customized furniture solutions.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We combine creativity, functionality, and precision craftsmanship
              to create timeless interiors — spaces that age beautifully and
              feel personal from day one.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "12+", v: "Years" },
                { k: "100+", v: "Projects" },
                { k: "8", v: "Cities" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-brand-indigo">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LEADERSHIP */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Leadership</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green">
              The people behind <em className="italic text-brand-indigo">Filtronic.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((l) => (
              <div
                key={l.n}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 group-hover:scale-105">
                    {l.n === "Mr. Litan Barik" ? (
                      <img
                        src={litanBarikImg}
                        alt={l.n}
                        className="w-full h-full object-cover"
                        style={{ aspectRatio: "4/3" }}
                      />
                    ) : l.n === "Mr. Samira Sahoo" ? (
                      <img
                        src={samiraSahooImg}
                        alt={l.n}
                        className="w-full h-full object-cover"
                        style={{ aspectRatio: "4/3" }}
                      />
                    ) : (
                      <ImagePlaceholder label={l.n} ratio="4/3" />
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-brand-green">{l.n}</h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-brand-green mt-2">
                    {l.r}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-5">
                    {l.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — MISSION & VISION */}
      <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="relative p-10 lg:p-14 bg-card border border-border rounded-2xl hover-lift overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-green/5 blur-2xl" />
            <p className="font-display text-brand-green text-sm tracking-[0.3em] uppercase mb-6">
              Our Mission
            </p>
            <p className="font-display text-3xl md:text-4xl text-foreground leading-snug">
              "To transform <em className="italic text-brand-indigo">everyday spaces</em> into inspiring lifestyle experiences."
            </p>
          </div>
          <div className="relative p-10 lg:p-14 bg-surface text-foreground rounded-2xl hover-lift overflow-hidden">
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-brand-green/30 blur-2xl" />
            <p className="font-display text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
              Our Vision
            </p>
            <p className="font-display text-3xl md:text-4xl leading-snug">
              "To become one of <em className="italic text-brand-indigo">Odisha's most trusted</em> and innovative interior design brands."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STATISTICS */}
      <section className="bg-surface py-20">
        <div className="container-px mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`text-center md:text-left md:px-8 ${
                i !== 0 ? "lg:border-l border-border" : ""
              }`}
            >
              <div className="font-display text-5xl md:text-6xl text-brand-indigo">
                {s.k}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3 max-w-[14ch] mx-auto md:mx-0">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — WHY FILTRONIC */}
      <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Why Filtronic Lifestyle</p>
          <h2 className="font-display text-4xl md:text-5xl text-brand-green leading-tight">
            Designed with <em className="italic text-brand-indigo">intention.</em> Built with care.
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {why.map((row, i) => (
            <div
              key={row.t}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={[whyModernDesignImg, whyCraftExecutionImg, whySingleDeliveryImg][i]}
                  alt={row.t}
                  className="w-full rounded-2xl shadow-elegant object-cover"
                  style={{ aspectRatio: "16/10" }}
                />
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="font-display text-brand-indigo text-sm mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-brand-green mb-5">
                  {row.t}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{row.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — GOOGLE REVIEWS */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">
                Google Reviews
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-brand-green max-w-xl">
                Loved by our clients.
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-green text-brand-green" />
                ))}
              </div>
              <span>4.9 average · 80+ reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((t) => (
              <div
                key={t.n}
                className="relative p-7 bg-card border border-border rounded-2xl hover-lift"
              >
                <Quote size={22} className="text-brand-green/30" />
                <div className="flex mt-3 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-brand-green text-brand-green" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed text-sm">"{t.q}"</p>
                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-surface text-foreground flex items-center justify-center font-display text-sm">
                    {t.n.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.n}</div>
                    <div className="text-[11px] text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — SOCIAL MEDIA */}
      <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Follow the studio</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green leading-tight">
              Step inside our <em className="italic text-brand-indigo">design diary.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 text-muted-foreground leading-relaxed">
            Behind-the-scenes, project unveilings and material inspiration —
            shared across our social channels.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socials.map(({ i: Icon, t, h, href }) => (
            <a
              key={t}
              href={href}
              className="group p-7 bg-card border border-border rounded-2xl hover-lift flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-primary-foreground transition-colors duration-500">
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg text-foreground">{t}</div>
                <div className="text-xs text-muted-foreground truncate">{h}</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 border-t border-border pt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h3 className="font-display text-3xl md:text-4xl max-w-xl text-brand-green">
            Curious about working with us?
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 h-12 rounded-md bg-brand-green text-primary-foreground text-sm hover:bg-brand-indigo transition-colors duration-500"
            >
              <Mail size={14} />
              Get in touch
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+918658326019"
              className="inline-flex items-center gap-2 px-7 h-12 rounded-md border border-border text-foreground text-sm hover:border-brand-green hover:text-brand-green transition-colors duration-500"
            >
              <Phone size={14} />
              +91 8658326019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
