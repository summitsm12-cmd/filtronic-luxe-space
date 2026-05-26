import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Filtronic Lifestyle" },
      { name: "description", content: "Residential, commercial, modular and turnkey interior design services." },
      { property: "og:title", content: "Services — Filtronic Lifestyle" },
      { property: "og:description", content: "Full-service interior design and turnkey execution." },
    ],
  }),
  component: Services,
});

const services = [
  {
    t: "Residential Interiors",
    d: "Full-home interiors designed around your daily life — from layout planning to final styling.",
    items: ["Space planning", "3D visualization", "Furniture & decor", "Lighting design"],
  },
  {
    t: "Modular Kitchens & Wardrobes",
    d: "Engineered modular solutions in premium materials, finishes and hardware.",
    items: ["Italian kitchens", "Walk-in wardrobes", "Storage systems", "Hardware curation"],
  },
  {
    t: "Commercial & Office",
    d: "Workspaces designed to support focus, collaboration and brand experience.",
    items: ["Workplace strategy", "Brand-led identity", "Acoustic planning", "Smart office tech"],
  },
  {
    t: "Hospitality & Retail",
    d: "Distinctive interiors for restaurants, boutique stays and retail flagships.",
    items: ["F&B interiors", "Hotel suites", "Retail experiences", "Visual merchandising"],
  },
  {
    t: "Turnkey Execution",
    d: "Single-point project delivery covering design, procurement and on-site execution.",
    items: ["Costing & BOQ", "Vendor management", "Quality control", "Handover & styling"],
  },
  {
    t: "Renovation & Restyle",
    d: "Reimagine existing spaces with refreshed materials, lighting and layout.",
    items: ["Surface refresh", "Layout rework", "Lighting upgrade", "Furniture restyle"],
  },
];

function Services() {
  return (
    <div>
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6">What we offer</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              A complete <em className="italic text-brand-indigo">design studio,</em> end to end.
            </h1>
          </div>
          <div className="lg:col-span-5 text-muted-foreground leading-relaxed">
            From the first sketch to the final cushion, we offer a fully
            integrated design and execution practice — so every detail stays
            true to the original idea.
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={s.t}
              className="group relative p-8 lg:p-10 bg-card border border-border rounded-2xl hover-lift overflow-hidden"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="font-display text-brand-indigo text-sm mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                    {s.t}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">{s.d}</p>
                </div>
                <ArrowUpRight
                  size={22}
                  className="text-brand-green shrink-0 group-hover:rotate-45 transition-transform duration-500"
                />
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-foreground/80">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-green" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="bg-surface py-24">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <ImagePlaceholder label="Material Palette" ratio="4/3" className="rounded-2xl shadow-elegant" />
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Material led</p>
            <h2 className="font-display text-4xl text-foreground mb-6">
              Curated materials, considered finishes.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We work with a tight palette of warm woods, natural stones,
              brushed metals and soft textiles — chosen to age gracefully
              and stay timeless.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-7 h-12 rounded-full bg-brand-green text-primary-foreground text-sm hover:bg-brand-indigo transition-colors duration-500"
            >
              Discuss your project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
