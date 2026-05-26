import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Award, Heart, Leaf, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Filtronic Lifestyle" },
      { name: "description", content: "A modern interior design studio rooted in craft, restraint and meaningful spaces." },
      { property: "og:title", content: "About — Filtronic Lifestyle" },
      { property: "og:description", content: "Our story, our studio, our way of working." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      {/* Hero */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-6">About the studio</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground reveal">
            Designing with <em className="italic text-brand-indigo">intention,</em> not excess.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Filtronic Lifestyle Pvt Ltd is an interior design and turnkey
            studio. We believe great interiors aren't about more — they're
            about what to leave out, what to repeat, and what to let breathe.
          </p>
        </div>
      </section>

      {/* Two image storytelling */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="md:col-span-7">
            <ImagePlaceholder label="Our Studio" ratio="16/10" className="rounded-2xl shadow-elegant" />
          </div>
          <div className="md:col-span-5 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">A studio rooted in craft.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a love for honest materials and quiet detailing,
              our team brings together architects, interior designers and
              skilled craftsmen under one roof.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every project we take on is treated as a singular object —
              specific to its people, its city and its light.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">What we value</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Principles that shape every project.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: Heart, t: "People first", d: "Design that begins and ends with how you live." },
              { i: Award, t: "Quiet luxury", d: "Material honesty over decoration." },
              { i: Leaf, t: "Sustainable", d: "Mindful sourcing and lasting craftsmanship." },
              { i: Users, t: "One team", d: "Designers and makers, working as one." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="p-8 bg-card border border-border rounded-2xl hover-lift">
                <div className="w-12 h-12 rounded-full bg-accent text-brand-green flex items-center justify-center mb-6">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">The team</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">People behind the work.</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "Founder", r: "Principal Designer" },
            { n: "Design Lead", r: "Interiors" },
            { n: "Architect", r: "Spatial Planning" },
            { n: "Project Lead", r: "Execution" },
          ].map((m) => (
            <div key={m.n} className="group">
              <div className="overflow-hidden rounded-2xl">
                <div className="transition-transform duration-700 group-hover:scale-105">
                  <ImagePlaceholder label={m.n} ratio="3/4" />
                </div>
              </div>
              <h3 className="font-display text-xl text-foreground mt-5">{m.n}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{m.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="border-t border-border pt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl max-w-xl text-foreground">
            Curious about working with us?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 h-12 rounded-full bg-brand-green text-primary-foreground text-sm hover:bg-brand-indigo transition-colors duration-500"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
