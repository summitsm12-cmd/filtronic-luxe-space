import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { ArrowRight, ArrowUpRight, Minus, Plus, Phone } from "lucide-react";
import { useState } from "react";
import serviceResidentialImg from "@/assets/service-residential.jpg";
import serviceCommercialImg from "@/assets/service-commercial.jpg";
import serviceConsultationImg from "@/assets/service-consultation.jpg";
import serviceKitchenImg from "@/assets/service-kitchen.jpg";
import service3dHouseImg from "@/assets/service-3d-house.jpg";
import serviceFurniturePartnerImg from "@/assets/service-furniture-partner.jpg";
import serviceSpacePlanningImg from "@/assets/service-space-planning.jpg";
import serviceCustomFurnitureImg from "@/assets/service-custom-furniture.jpg";

const serviceImages = [
  serviceResidentialImg,
  serviceCommercialImg,
  serviceConsultationImg,
  serviceKitchenImg,
  service3dHouseImg,
  serviceFurniturePartnerImg,
  serviceSpacePlanningImg,
  serviceCustomFurnitureImg,
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Filtronic Lifestyle" },
      {
        name: "description",
        content:
          "Residential, commercial, modular, 3D design, custom furniture and turnkey interior services by Filtronic Lifestyle, Bhubaneswar.",
      },
      { property: "og:title", content: "Our Interior Services — Filtronic Lifestyle" },
      {
        property: "og:description",
        content: "Premium interior design services from concept to handover.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    t: "Residential Interior Design",
    d: "Full-home interiors crafted around how you live — layouts, finishes, lighting and styling.",
  },
  {
    t: "Commercial Interior Design",
    d: "Offices, retail and hospitality spaces with brand-led identity and functional planning.",
  },
  {
    t: "Interior Consultation",
    d: "Expert direction on layout, palette, materials and budget — a clear plan before you build.",
  },
  {
    t: "Modular Kitchen Design",
    d: "Engineered modular kitchens in premium finishes, hardware and intelligent storage.",
  },
  {
    t: "3D House Design",
    d: "Photorealistic 3D visualizations so you can experience your space before construction.",
  },
  {
    t: "Furniture Partner Solutions",
    d: "Curated furniture sourcing from our trusted partners — quality assured, delivered on time.",
  },
  {
    t: "Space Planning & Optimization",
    d: "Intelligent space planning that maximizes natural light, storage and flow.",
  },
  {
    t: "Custom Furniture Design",
    d: "Bespoke pieces designed and built for your space, proportions and aesthetic.",
  },
];

const pillars = [
  {
    t: "Design Approach",
    d: "We begin with how you live or work, not with a style. Our process is restrained, considered and rooted in proportion, light and material honesty — never decoration for its own sake.",
  },
  {
    t: "Material Selection",
    d: "A curated palette of warm woods, natural stones, brushed metals and soft textiles — chosen to age gracefully. We source and sample before specifying so every surface is right.",
  },
  {
    t: "Space Optimization",
    d: "Intelligent space planning is the quiet hero of every project. We maximize light, storage and circulation so each room performs effortlessly without ever feeling tight.",
  },
  {
    t: "Turnkey Execution",
    d: "Single-point project delivery covering design, procurement, on-site execution and styled handover. One team, one timeline, one accountable studio — start to keys.",
  },
];

const faqs = [
  {
    q: "How long does an interior project take?",
    a: "Most residential projects take 10–16 weeks from design sign-off to handover. Commercial fit-outs vary by scope and are scheduled into clear milestones.",
  },
  {
    q: "Do you offer 3D visualization before execution?",
    a: "Yes. Every project includes photorealistic 3D visualizations so you can experience and approve the design before any execution begins.",
  },
  {
    q: "What is included in turnkey execution?",
    a: "Design, BOQ and costing, procurement, vendor management, on-site execution, quality control, finishing, and styled handover — all under one studio.",
  },
  {
    q: "Do you work outside Bhubaneswar?",
    a: "Yes. While we're based in Bhubaneswar, we take on projects across Odisha and selectively in nearby states.",
  },
  {
    q: "How is pricing structured?",
    a: "We provide a transparent BOQ tailored to your scope and material choices. Consultation is complimentary and there are no surprises after sign-off.",
  },
];

function Services() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="container-px mx-auto max-w-7xl pt-12 lg:pt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6">What we do</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-green">
              Our Interior <em className="italic text-brand-indigo">Services.</em>
            </h1>
          </div>
          <div className="lg:col-span-4 text-muted-foreground leading-relaxed">
            A complete interior design studio — from the first sketch to the
            final cushion. Residential, commercial, modular and bespoke,
            delivered with restraint and care.
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="container-px mx-auto max-w-7xl pb-24 lg:pb-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <article
              key={s.t}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover-lift"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src={serviceImages[i]}
                  alt={s.t}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-background/90 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-brand-indigo">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-xl text-brand-green mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.d}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-brand-green tracking-wide group/cta self-start"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-brand-green group-hover/cta:w-full transition-all duration-500" />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover/cta:rotate-45 transition-transform duration-500"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PILLARS — alternating */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">How we work</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green leading-tight">
              Four pillars behind <em className="italic text-brand-indigo">every project.</em>
            </h2>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {pillars.map((row, i) => (
              <div
                key={row.t}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ImagePlaceholder
                    label={row.t}
                    ratio="16/10"
                    className="rounded-2xl shadow-elegant"
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
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-green leading-tight">
              Questions, <em className="italic text-brand-indigo">answered.</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
              Still curious? Reach out — our team is happy to walk you
              through anything specific to your project.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm text-brand-indigo hover:text-brand-green transition-colors group"
            >
              Talk to a designer
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-surface text-foreground p-12 md:p-20">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-green/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Let's begin
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                Ready To Transform <em className="italic text-brand-indigo">Your Space?</em>
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-wrap md:justify-end gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo hover:text-white transition-colors duration-500 shadow-soft"
              >
                Book Free Consultation
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

function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-border">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <span className="font-display text-lg md:text-xl text-foreground group-hover:text-brand-green transition-colors">
                {item.q}
              </span>
              <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-brand-green shrink-0 group-hover:border-brand-green transition-colors">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-muted-foreground leading-relaxed pr-12">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
