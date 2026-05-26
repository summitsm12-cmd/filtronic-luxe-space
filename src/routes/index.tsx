import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  ChevronDown,
  Home as HomeIcon,
  Building2,
  MessageSquare,
  ChefHat,
  Box,
  Sofa,
  LayoutGrid,
  Hammer,
  Sparkles,
  Clock,
  Settings2,
  Gem,
  Ruler,
  Users,
  Star,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filtronic Lifestyle — Premium Interior Design in Bhubaneswar" },
      {
        name: "description",
        content:
          "Filtronic Lifestyle creates premium residential and commercial interiors in Bhubaneswar with modern aesthetics, functionality, and timeless craftsmanship.",
      },
      { property: "og:title", content: "Filtronic Lifestyle — Interior Design Studio" },
      {
        property: "og:description",
        content: "Absolutely transformative and stylish interior designs.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: HomeIcon, t: "Residential Design", d: "Full-home interiors crafted around how you live." },
  { icon: Building2, t: "Commercial Design", d: "Offices, retail and hospitality with brand-led identity." },
  { icon: MessageSquare, t: "Interior Consultation", d: "Expert direction on layout, palette and materials." },
  { icon: ChefHat, t: "Modular Kitchen", d: "Engineered modular kitchens in premium finishes." },
  { icon: Box, t: "3D House Design", d: "Photoreal visualizations before a single nail is driven." },
  { icon: Sofa, t: "Furniture Partner", d: "Curated furniture sourcing from trusted partners." },
  { icon: LayoutGrid, t: "Space Planning", d: "Intelligent layouts that maximize light and flow." },
  { icon: Hammer, t: "Custom Furniture", d: "Bespoke pieces built to your space and proportions." },
];

const whyUs = [
  { icon: Sparkles, t: "Modern Design Expertise", d: "Contemporary aesthetics rooted in timeless principles." },
  { icon: Clock, t: "On-Time Execution", d: "Disciplined timelines and transparent project tracking." },
  { icon: Settings2, t: "Customized Solutions", d: "Every detail tailored to your space and lifestyle." },
  { icon: Gem, t: "Premium Materials", d: "Honest materials curated to age beautifully." },
  { icon: Ruler, t: "Functional Planning", d: "Spaces planned for how you actually use them." },
  { icon: Users, t: "Trusted Local Team", d: "Bhubaneswar-based studio with skilled craftsmen." },
];

const testimonials = [
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
];

const process = [
  { n: "01", t: "Consultation", d: "We listen, walk the space and understand how you live or work." },
  { n: "02", t: "Concept Design", d: "Layouts, mood boards and 3D visualization." },
  { n: "03", t: "Material Selection", d: "Curated palette of finishes, fabrics and hardware." },
  { n: "04", t: "Execution", d: "Disciplined on-site work with quality at every stage." },
  { n: "05", t: "Final Handover", d: "Styled, snag-free handover ready to live in." },
];

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* Background canvas */}
        <div className="absolute inset-0 -z-10">
          <div className="image-placeholder absolute inset-0 opacity-40" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
        </div>

        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 pt-12 lg:pt-20 pb-32 items-center">
          {/* Left */}
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 px-4 h-9 rounded-md border border-border bg-background/70 backdrop-blur text-xs uppercase tracking-[0.25em] text-brand-green mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              Interior Design Studio · Bhubaneswar
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.25rem] leading-[1.02] text-brand-green tracking-tight">
              Absolutely Transformative
              <br />
              And <em className="italic text-brand-indigo">Stylish</em> Designs
            </h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Filtronic Lifestyle creates premium residential and commercial
              interiors in Bhubaneswar with modern aesthetics, functionality,
              and timeless craftsmanship.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-2 px-7 h-12 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo transition-colors duration-500 shadow-soft"
              >
                Explore Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 h-12 rounded-md border border-border bg-background/70 backdrop-blur text-foreground text-sm tracking-wide hover:border-brand-green hover:text-brand-green transition-colors duration-500"
              >
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Right — layered featured project card */}
          <div className="lg:col-span-5 relative reveal">
            <ImagePlaceholder
              label="Featured Project"
              ratio="4/5"
              className="rounded-2xl shadow-elegant"
            />
            <div className="absolute -bottom-10 -left-10 w-52 hidden md:block">
              <div className="rounded-2xl shadow-elegant border-4 border-background overflow-hidden bg-background">
                <ImagePlaceholder label="Detail" ratio="1/1" />
                <div className="p-4">
                  <div className="font-display text-base text-foreground">The Quiet House</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    Residential · 2024
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-4 px-5 py-3 rounded-md bg-background shadow-elegant text-xs uppercase tracking-[0.2em] text-brand-green hidden md:flex items-center gap-2">
              <Star size={12} className="fill-brand-green text-brand-green" />
              250+ Projects Delivered
            </div>
          </div>
        </div>

        {/* Floating contact strip */}
        <a
          href="tel:+918658326019"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10 hidden md:inline-flex items-center gap-4 px-6 h-14 rounded-md bg-background/90 backdrop-blur border border-border shadow-elegant hover:shadow-soft transition-all duration-500 group"
        >
          <span className="w-9 h-9 rounded-full bg-brand-green text-primary-foreground flex items-center justify-center">
            <Phone size={14} />
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Talk to a designer
          </span>
          <span className="text-sm font-medium text-foreground group-hover:text-brand-green transition-colors">
            +91 8658326019
          </span>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-6 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
            Scroll
          </span>
          <ChevronDown size={16} className="animate-bounce text-brand-green" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-surface">
        <div className="container-px mx-auto max-w-7xl py-8 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>Residential</span><span className="opacity-40">/</span>
          <span>Commercial</span><span className="opacity-40">/</span>
          <span>Modular Kitchen</span><span className="opacity-40">/</span>
          <span>3D Visualization</span><span className="opacity-40">/</span>
          <span>Turnkey</span>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Featured services</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green leading-tight">
              A studio built for <em className="italic text-brand-indigo">every detail.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-relaxed self-end">
            From concept to handover, we offer a fully integrated design and
            execution practice — so every detail stays true to the original idea.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="group relative p-8 bg-card border border-border rounded-2xl hover-lift overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-primary-foreground transition-colors duration-500">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-xl text-brand-green mb-3">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              <ArrowUpRight
                size={18}
                className="absolute top-6 right-6 text-brand-indigo opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Why choose us</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green">
              Built on craft, <em className="italic text-brand-indigo">trusted</em> for delivery.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="group p-8 bg-card border border-border rounded-2xl hover-lift flex gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-brand-indigo/10 text-brand-indigo flex items-center justify-center shrink-0 group-hover:bg-brand-indigo group-hover:text-secondary-foreground transition-colors duration-500">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-brand-green mb-2">{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Featured projects</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green">
              Recent work.
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-sm tracking-wide text-brand-indigo hover:text-brand-green transition-colors inline-flex items-center gap-2 group"
          >
            View full gallery
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[180px]">
          <FeaturedTile className="md:col-span-4 md:row-span-2" label="The Quiet House" cat="Residential · Bhubaneswar" />
          <FeaturedTile className="md:col-span-2 md:row-span-1" label="Studio Lumen" cat="Commercial" />
          <FeaturedTile className="md:col-span-2 md:row-span-1" label="Brass & Linen" cat="Hospitality" />
          <FeaturedTile className="md:col-span-3 md:row-span-2" label="Atelier 22" cat="Retail · Bhubaneswar" />
          <FeaturedTile className="md:col-span-3 md:row-span-2" label="Maison Verde" cat="Residential" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Client stories</p>
              <h2 className="font-display text-4xl md:text-5xl text-brand-green max-w-xl">
                Reviewed by the people who live in our work.
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-green text-brand-green" />
                ))}
              </div>
              <span>4.9 average on Google Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.n}
                className="relative p-8 bg-card border border-border rounded-2xl hover-lift"
              >
                <Quote size={28} className="text-brand-green/30" />
                <div className="flex mt-4 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-green text-brand-green" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed">"{t.q}"</p>
                <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface text-foreground flex items-center justify-center font-display">
                    {t.n.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Our process</p>
          <h2 className="font-display text-4xl md:text-5xl text-brand-green">
            Clarity, then <em className="italic text-brand-indigo">craft.</em>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-5 gap-8">
          <div className="hidden md:block absolute top-3 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {process.map((s) => (
            <div key={s.n} className="text-center group">
              <div className="mx-auto w-7 h-7 rounded-full bg-background border-2 border-brand-green flex items-center justify-center text-[10px] text-brand-green relative z-10 group-hover:bg-brand-green group-hover:text-primary-foreground transition-colors duration-500">
                ●
              </div>
              <div className="font-display text-brand-indigo text-sm mt-6">{s.n}</div>
              <h3 className="font-display text-xl text-brand-green mt-2 mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-surface text-foreground p-12 md:p-20">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-green/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Ready when you are
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                Let's Design Your <em className="italic text-brand-indigo">Dream Space.</em>
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-wrap md:justify-end gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo hover:text-white transition-colors duration-500 shadow-soft"
              >
                Book Consultation
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+918658326019"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-md border border-border text-secondary-foreground text-sm tracking-wide hover:bg-brand-green hover:border-brand-green transition-colors duration-500"
              >
                <Phone size={14} />
                Call now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedTile({
  className="",
  label,
  cat,
}: {
  className?: string;
  label: string;
  cat: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <ImagePlaceholder label={label} ratio="auto" className="!h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-background">
        <div className="font-display text-2xl">{label}</div>
        <div className="text-[10px] uppercase tracking-[0.2em] mt-1 opacity-80">{cat}</div>
      </div>
    </div>
  );
}
