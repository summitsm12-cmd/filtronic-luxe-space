import { createFileRoute } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Filtronic Lifestyle" },
      { name: "description", content: "Selected interiors across residential, commercial and hospitality projects." },
      { property: "og:title", content: "Gallery — Filtronic Lifestyle" },
      { property: "og:description", content: "A visual portfolio of our work." },
    ],
  }),
  component: Gallery,
});

const categories = ["All", "Residential", "Commercial", "Hospitality", "Modular"] as const;

const items = [
  { t: "Living Room", c: "Residential", r: "4/5" },
  { t: "Master Bedroom", c: "Residential", r: "1/1" },
  { t: "Open Office", c: "Commercial", r: "4/3" },
  { t: "Cafe Interior", c: "Hospitality", r: "4/5" },
  { t: "Italian Kitchen", c: "Modular", r: "1/1" },
  { t: "Walk-in Wardrobe", c: "Modular", r: "4/3" },
  { t: "Boutique Lobby", c: "Hospitality", r: "4/5" },
  { t: "Executive Cabin", c: "Commercial", r: "1/1" },
  { t: "Dining Area", c: "Residential", r: "4/3" },
  { t: "Reading Nook", c: "Residential", r: "4/5" },
  { t: "Retail Display", c: "Commercial", r: "1/1" },
  { t: "Suite Bath", c: "Hospitality", r: "4/3" },
];

function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.c === active);

  return (
    <div>
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6">Selected work</p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground max-w-3xl">
          A portfolio of <em className="italic text-brand-indigo">quiet, considered</em> spaces.
        </h1>

        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 h-10 rounded-full text-sm tracking-wide border transition-all duration-300 ${
                active === c
                  ? "bg-brand-indigo text-secondary-foreground border-brand-indigo"
                  : "bg-background text-foreground/70 border-border hover:border-brand-green hover:text-brand-green"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {filtered.map((p) => (
            <div key={p.t} className="mb-6 break-inside-avoid group">
              <div className="overflow-hidden rounded-2xl">
                <div className="transition-transform duration-700 group-hover:scale-105">
                  <ImagePlaceholder label={p.t} ratio={p.r} />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-lg text-foreground">{p.t}</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.c}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
