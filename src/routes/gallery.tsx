import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { ArrowRight, X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import projectQuietHouseImg from "@/assets/project-quiet-house.jpg";
import projectMaisonVerdeImg from "@/assets/project-maison-verde.jpg";
import projectStudioLumenImg from "@/assets/project-studio-lumen.jpg";
import projectAtelier22Img from "@/assets/project-atelier-22.jpg";
import projectBrassLinenImg from "@/assets/project-brass-linen.jpg";
import serviceKitchenImg from "@/assets/service-kitchen.jpg";
import projectGardenSuiteImg from "@/assets/project-garden-suite.jpg";
import projectMasterSuiteImg from "@/assets/project-master-suite.jpg";
import projectWalkinWardrobeImg from "@/assets/project-walkin-wardrobe.jpg";
import projectGardenLivingImg from "@/assets/project-garden-living.jpg";
import projectExecutiveCabinImg from "@/assets/project-executive-cabin.jpg";

const projectImages: Record<string, string> = {
  "The Quiet House": projectQuietHouseImg,
  "Maison Verde": projectMaisonVerdeImg,
  "Studio Lumen": projectStudioLumenImg,
  "Atelier 22": projectAtelier22Img,
  "Brass & Linen": projectBrassLinenImg,
  "Italian Kitchen": serviceKitchenImg,
  "Garden Suite": projectGardenSuiteImg,
  "Master Suite": projectMasterSuiteImg,
  "Walk-in Wardrobe": projectWalkinWardrobeImg,
  "Garden Living": projectGardenLivingImg,
  "Executive Cabin": projectExecutiveCabinImg,
};

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Projects | Filtronic Lifestyle" },
      {
        name: "description",
        content:
          "Explore beautifully crafted residential and commercial interiors by Filtronic Lifestyle — kitchens, bedrooms, living rooms, offices and more.",
      },
      { property: "og:title", content: "Our Projects — Filtronic Lifestyle" },
      {
        property: "og:description",
        content: "A portfolio of premium interiors across Odisha.",
      },
    ],
  }),
  component: Gallery,
});

type Category =
  | "All"
  | "Residential"
  | "Commercial"
  | "Kitchen"
  | "Bedroom"
  | "Living Room"
  | "Office";

const categories: Category[] = [
  "All",
  "Residential",
  "Commercial",
  "Kitchen",
  "Bedroom",
  "Living Room",
  "Office",
];

type Project = {
  t: string;
  c: Exclude<Category, "All">;
  r: string; // aspect ratio
  loc: string;
  year: string;
  d: string;
};

const projects: Project[] = [
  {
    t: "The Quiet House",
    c: "Living Room",
    r: "4/5",
    loc: "Bhubaneswar",
    year: "2025",
    d: "A serene living space anchored by warm oak, travertine and curated lighting.",
  },
  {
    t: "Maison Verde",
    c: "Residential",
    r: "1/1",
    loc: "Bhubaneswar",
    year: "2025",
    d: "A modern home with garden views, soft palette and quietly luxurious detailing.",
  },
  {
    t: "Studio Lumen",
    c: "Office",
    r: "4/3",
    loc: "Cuttack",
    year: "2026",
    d: "An open-plan workspace built for focus and collaboration.",
  },
  {
    t: "Atelier 22",
    c: "Commercial",
    r: "4/5",
    loc: "Bhubaneswar",
    year: "2025",
    d: "A flagship retail experience with sculpted joinery and gallery-grade lighting.",
  },
  {
    t: "Italian Kitchen",
    c: "Kitchen",
    r: "1/1",
    loc: "Bhubaneswar",
    year: "2025",
    d: "Modular kitchen in matte lacquer and natural stone with hidden appliances.",
  },
  {
    t: "Brass & Linen",
    c: "Commercial",
    r: "4/3",
    loc: "Puri",
    year: "2026",
    d: "A hospitality interior layering brass, linen and hand-finished plaster.",
  },
  {
    t: "Master Suite",
    c: "Bedroom",
    r: "4/5",
    loc: "Bhubaneswar",
    year: "2025",
    d: "Soft-textured master bedroom with bespoke headboard and reading nook.",
  },
  {
    t: "Garden Living",
    c: "Living Room",
    r: "4/3",
    loc: "Cuttack",
    year: "2026",
    d: "A double-height living room opening to the garden through pivot doors.",
  },
  {
    t: "Walk-in Wardrobe",
    c: "Bedroom",
    r: "1/1",
    loc: "Bhubaneswar",
    year: "2025",
    d: "A wardrobe room engineered as furniture — fluted wood, leather pulls, gallery lighting.",
  },
  {
    t: "Executive Cabin",
    c: "Office",
    r: "4/5",
    loc: "Bhubaneswar",
    year: "2026",
    d: "A refined executive cabin with custom desk and acoustic paneling.",
  },
  {
    t: "Garden Suite",
    c: "Residential",
    r: "1/1",
    loc: "Bhubaneswar",
    year: "2025",
    d: "A guest suite that opens to a private courtyard.",
  },
];

function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.c === active);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="container-px mx-auto max-w-7xl pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6">
            Portfolio
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-green">
            Our <em className="italic text-brand-indigo">Projects.</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Explore beautifully crafted residential and commercial interiors —
            kitchens, bedrooms, living rooms, offices and more.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative px-5 h-10 rounded-md text-sm tracking-wide border transition-all duration-500 ${
                  isActive
                    ? "bg-surface text-foreground border-brand-indigo shadow-soft"
                    : "bg-background text-foreground/70 border-border hover:border-brand-green hover:text-brand-green"
                }`}
              >
                {c}
                {isActive && (
                  <span className="ml-2 text-[10px] opacity-70">
                    {c === "All" ? projects.length : projects.filter((p) => p.c === c).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div
          key={active}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
        >
          {filtered.map((p) => {
            const realIdx = projects.indexOf(p);
            return (
              <button
                key={p.t}
                onClick={() => setOpenIdx(realIdx)}
                className="mb-6 break-inside-avoid group block w-full text-left reveal"
                style={{ animationDelay: `${(realIdx % 6) * 60}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="transition-transform duration-700 group-hover:scale-110">
                    {projectImages[p.t] ? (
                      <img
                        src={projectImages[p.t]}
                        alt={p.t}
                        loading="lazy"
                        className="w-full h-auto block object-cover"
                        style={{ aspectRatio: p.r }}
                      />
                    ) : (
                      <ImagePlaceholder label={p.t} ratio={p.r} />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-background">
                    <div className="font-display text-xl">{p.t}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] mt-1 opacity-80">
                      {p.c} · {p.loc}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-background/90 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-brand-indigo">
                    {p.c}
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg text-brand-green group-hover:text-brand-green transition-colors">
                    {p.t}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.year}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No projects in this category yet.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-surface text-foreground p-12 md:p-20">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-green/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Inspired?
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                Let's Create Your <em className="italic text-brand-indigo">Dream Interior.</em>
              </h2>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo hover:text-white transition-colors duration-500 shadow-soft"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {openIdx !== null && (
        <Lightbox
          projects={projects}
          index={openIdx}
          onClose={() => setOpenIdx(null)}
          onIndex={setOpenIdx}
        />
      )}
    </div>
  );
}

function Lightbox({
  projects,
  index,
  onClose,
  onIndex,
}: {
  projects: Project[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const p = projects[index];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % projects.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + projects.length) % projects.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, projects.length, onClose, onIndex]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-foreground/85 backdrop-blur-md fade-in">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-background/10 text-background border border-background/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors"
      >
        <X size={18} />
      </button>

      <button
        onClick={() => onIndex((index - 1 + projects.length) % projects.length)}
        aria-label="Previous"
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/10 text-background border border-background/20 items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => onIndex((index + 1) % projects.length)}
        aria-label="Next"
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/10 text-background border border-background/20 items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      <div
        className="relative w-full max-w-6xl bg-background rounded-2xl overflow-hidden shadow-elegant grid lg:grid-cols-12 fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lg:col-span-8">
          {projectImages[p.t] ? (
            <img
              src={projectImages[p.t]}
              alt={p.t}
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          ) : (
            <ImagePlaceholder label={p.t} ratio="4/3" />
          )}
        </div>
        <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-green mb-3">
            {p.c}
          </div>
          <h3 className="font-display text-3xl text-brand-green leading-tight">
            {p.t}
          </h3>
          <div className="mt-4 flex items-center gap-5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} /> {p.loc}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} /> {p.year}
            </span>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">{p.d}</p>

          <div className="mt-auto pt-8 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              {index + 1} / {projects.length}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 h-10 rounded-md bg-brand-green text-primary-foreground text-sm hover:bg-brand-indigo transition-colors duration-500"
            >
              Enquire
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        aria-label="Close backdrop"
        className="absolute inset-0 -z-10"
      />
    </div>
  );
}

// Add a tiny scale-in helper if not already present
// (relies on src/styles.css `.fade-in`; we add scale-in via tw-animate-css class fallback)
