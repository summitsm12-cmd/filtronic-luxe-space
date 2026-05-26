import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { ArrowRight, Sparkles, Compass, Ruler, Lamp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filtronic Lifestyle — Premium Interior Design Studio" },
      {
        name: "description",
        content:
          "Modern luxury interior design studio crafting timeless homes, offices and hospitality spaces across India.",
      },
      { property: "og:title", content: "Filtronic Lifestyle — Interior Design Studio" },
      { property: "og:description", content: "Refined interiors. Crafted experiences." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Compass, title: "Residential Design", desc: "End-to-end home interiors crafted around how you live." },
  { icon: Ruler, title: "Modular Solutions", desc: "Tailored kitchens, wardrobes & storage in premium finishes." },
  { icon: Lamp, title: "Commercial Spaces", desc: "Offices, retail and hospitality with brand-led identity." },
  { icon: Sparkles, title: "Turnkey Execution", desc: "From concept and 3D visualization to flawless handover." },
];

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 py-20 lg:py-28 items-center">
          <div className="lg:col-span-6 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6">
              Interior Design Studio
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Spaces that feel <em className="italic text-brand-indigo">considered.</em>
            </h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Filtronic Lifestyle is a design studio crafting modern,
              light-filled interiors where every detail — material, light,
              proportion — is thoughtfully placed.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 h-12 rounded-full bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo transition-colors duration-500 shadow-soft"
              >
                Start a project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center px-7 h-12 rounded-full border border-border text-foreground text-sm tracking-wide hover:border-brand-green hover:text-brand-green transition-colors duration-500"
              >
                View our work
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
              {[
                { k: "250+", v: "Projects" },
                { k: "12+", v: "Years" },
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

          <div className="lg:col-span-6 relative reveal">
            <ImagePlaceholder
              label="Hero Interior"
              ratio="4/5"
              className="rounded-2xl shadow-elegant"
            />
            <div className="absolute -bottom-8 -left-8 w-44 hidden md:block">
              <ImagePlaceholder
                label="Detail"
                ratio="1/1"
                className="rounded-xl shadow-elegant border-4 border-background"
              />
            </div>
            <div className="absolute -top-6 -right-6 px-5 py-3 rounded-full bg-background shadow-elegant text-xs uppercase tracking-[0.2em] text-brand-green hidden md:block">
              Est. Bhubaneswar
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / BRANDS strip */}
      <section className="border-y border-border bg-surface">
        <div className="container-px mx-auto max-w-7xl py-8 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>Residential</span><span>·</span>
          <span>Commercial</span><span>·</span>
          <span>Hospitality</span><span>·</span>
          <span>Retail</span><span>·</span>
          <span>Turnkey</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">What we do</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              A studio built for <em className="italic text-brand-indigo">every detail.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-relaxed">
            From the first conversation to the final styling, we treat each
            project as a singular work — calm, intentional, and rooted in how
            you actually want to live or work.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-8 bg-card border border-border rounded-2xl hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-primary-foreground transition-colors duration-500">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Selected work</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Recent projects
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-sm tracking-wide text-brand-indigo hover:text-brand-green transition-colors inline-flex items-center gap-2 group"
            >
              View gallery
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { t: "The Quiet House", c: "Residential · Bhubaneswar", r: "4/5" },
              { t: "Studio Lumen", c: "Commercial · Cuttack", r: "4/5" },
              { t: "Brass & Linen", c: "Hospitality · Puri", r: "4/5" },
              { t: "Atelier 22", c: "Retail · Bhubaneswar", r: "4/5" },
            ].map((p, i) => (
              <div key={p.t} className={`group ${i % 2 === 1 ? "md:mt-16" : ""}`}>
                <div className="overflow-hidden rounded-2xl">
                  <div className="transition-transform duration-700 group-hover:scale-105">
                    <ImagePlaceholder label={p.t} ratio={p.r} />
                  </div>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl text-foreground">{p.t}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {p.c}
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-brand-indigo group-hover:translate-x-1 transition-transform" />
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
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Clarity, then craft.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            { n: "01", t: "Discover", d: "We listen, walk the space and understand how you live." },
            { n: "02", t: "Design", d: "Concept, layouts, 3D visualization and material palette." },
            { n: "03", t: "Develop", d: "Detailed drawings, costing and curated procurement." },
            { n: "04", t: "Deliver", d: "On-site execution, finishing and styled handover." },
          ].map((s) => (
            <div key={s.n} className="border-t border-border pt-6">
              <div className="font-display text-brand-indigo text-2xl mb-3">{s.n}</div>
              <h3 className="font-display text-xl text-foreground mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-brand-indigo text-secondary-foreground p-12 md:p-20">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-green/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Have a space in mind? <em className="italic text-white/90">Let's design it.</em>
            </h2>
            <p className="mt-5 opacity-80 max-w-lg">
              Book a complimentary consultation with our design team. We'll
              walk you through ideas, timelines and how we work.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 h-12 rounded-full bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-white hover:text-brand-indigo transition-colors duration-500"
            >
              Book consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
