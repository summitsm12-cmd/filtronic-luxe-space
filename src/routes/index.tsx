import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import heroFeaturedImg from "@/assets/hero-featured.jpg";

// Commercial / corporate photography (real uploads)
import corpBoardroomVerticalGardenImg from "@/assets/corp-boardroom-vertical-garden.jpg";
import corpBoardroomOvalImg from "@/assets/corp-boardroom-oval.jpg";
import corpBoardroomMicsImg from "@/assets/corp-boardroom-mics.jpg";
import corpBoardroomClassicImg from "@/assets/corp-boardroom-classic.jpg";
import corpBoardroomMeetingImg from "@/assets/corp-boardroom-meeting.jpg";
import corpBoardroomLinearImg from "@/assets/corp-boardroom-linear.jpg";
import corpBoardroomEmptyImg from "@/assets/corp-boardroom-empty.jpg";
import corpAuditoriumPodiumImg from "@/assets/corp-auditorium-podium.jpg";
import corpAuditoriumHallImg from "@/assets/corp-auditorium-hall.jpg";
import corpAuditoriumScreensImg from "@/assets/corp-auditorium-screens.jpg";

// Realistic renders
import serviceDataCentreImg from "@/assets/service-data-centre.jpg";
import serviceOfficeImg from "@/assets/service-office.jpg";
import serviceCorpLobbyImg from "@/assets/service-corp-lobby.jpg";
import serviceRetailImg from "@/assets/service-retail.jpg";
import service3dVizImg from "@/assets/service-3d-viz.jpg";

// Residential / lifestyle
import serviceResidentialImg from "@/assets/service-residential.jpg";
import serviceKitchenImg from "@/assets/service-kitchen.jpg";
import serviceCustomFurnitureImg from "@/assets/service-custom-furniture.jpg";
import serviceConsultationImg from "@/assets/service-consultation.jpg";
import projectQuietHouseImg from "@/assets/project-quiet-house.jpg";
import projectMaisonVerdeImg from "@/assets/project-maison-verde.jpg";
import projectMasterSuiteImg from "@/assets/project-master-suite.jpg";
import projectWalkinWardrobeImg from "@/assets/project-walkin-wardrobe.jpg";
import projectGardenLivingImg from "@/assets/project-garden-living.jpg";

import {
  ArrowRight,
  Phone,
  ChevronDown,
  Building2,
  Users,
  Presentation,
  Server,
  Box,
  LayoutGrid,
  Sparkles,
  Clock,
  Settings2,
  Gem,
  Ruler,
  ShieldCheck,
  Home as HomeIcon,
  ChefHat,
  Sofa,
  Star,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filtronic Lifestyle — Corporate & Commercial Interior Design in Bhubaneswar" },
      {
        name: "description",
        content:
          "Filtronic Lifestyle designs and delivers turnkey corporate offices, boardrooms, auditoriums, data centres and premium commercial interiors across Bhubaneswar and Odisha.",
      },
      { property: "og:title", content: "Filtronic Lifestyle — Corporate Interior Design Studio" },
      {
        property: "og:description",
        content:
          "Corporate offices, boardrooms, auditoriums and data centre fit-outs — designed, engineered and delivered turnkey.",
      },
    ],
  }),
  component: Home,
});

/* ---------------- Data ---------------- */

const commercialSolutions = [
  {
    icon: Building2,
    t: "Corporate Office Design",
    d: "Workstations, executive cabins, meeting rooms and breakout zones — planned for productivity and brand identity.",
    image: serviceOfficeImg,
    tag: "Workplace",
  },
  {
    icon: Users,
    t: "Boardroom Interiors",
    d: "Executive boardrooms with integrated conferencing, acoustic paneling, custom tables and mood lighting.",
    image: corpBoardroomVerticalGardenImg,
    tag: "Executive",
  },
  {
    icon: Presentation,
    t: "Office Auditoriums",
    d: "Purpose-built auditoriums with tiered seating, stagecraft, acoustics and AV — town-halls and conclaves.",
    image: corpAuditoriumHallImg,
    tag: "AV / Acoustics",
  },
  {
    icon: Server,
    t: "Data Centre Fit-out",
    d: "Server rooms and data halls — raised flooring, cable management, precision cooling and access control.",
    image: serviceDataCentreImg,
    tag: "Infrastructure",
  },
];

const commercialExtras = [
  {
    icon: LayoutGrid,
    t: "Corporate Lobbies & Receptions",
    d: "Brand-forward arrival experiences with backlit signage, stone and warm wood detailing.",
    image: serviceCorpLobbyImg,
  },
  {
    icon: Sparkles,
    t: "Retail & Showroom Interiors",
    d: "Flagship showrooms with sculpted joinery, gallery-grade lighting and premium finishes.",
    image: serviceRetailImg,
  },
  {
    icon: Box,
    t: "3D Visualization & Renders",
    d: "Photoreal walkthroughs and BOQ-ready drawings so you approve every detail before execution.",
    image: service3dVizImg,
  },
];

const residentialServices = [
  { icon: HomeIcon, t: "Residential Interiors", d: "Full-home interiors crafted around how you live.", image: serviceResidentialImg },
  { icon: ChefHat, t: "Modular Kitchen", d: "Engineered modular kitchens in premium finishes and hardware.", image: serviceKitchenImg },
  { icon: Sofa, t: "Custom Furniture", d: "Bespoke pieces built to your space and proportions.", image: serviceCustomFurnitureImg },
  { icon: Ruler, t: "Interior Consultation", d: "Expert direction on layout, palette, materials and budget.", image: serviceConsultationImg },
];

const whyUs = [
  { icon: ShieldCheck, t: "Turnkey Delivery", d: "Single-point accountability — design, procurement, execution and handover." },
  { icon: Clock, t: "On-Time Execution", d: "Disciplined timelines with transparent milestone tracking." },
  { icon: Sparkles, t: "Corporate Expertise", d: "Boardrooms, auditoriums and data centres delivered for enterprises." },
  { icon: Gem, t: "Premium Materials", d: "Honest materials curated to age beautifully." },
  { icon: Settings2, t: "Engineered Systems", d: "AV, acoustics, HVAC and access — integrated from day one." },
  { icon: Users, t: "Trusted Local Team", d: "Bhubaneswar-based studio with skilled craftsmen and vendors." },
];

const process = [
  { n: "01", t: "Discovery", d: "We walk the site, brief with stakeholders and map operational needs." },
  { n: "02", t: "Concept & 3D", d: "Layouts, mood boards and photoreal 3D visualization." },
  { n: "03", t: "BOQ & Materials", d: "Curated finishes with a transparent, itemised BOQ." },
  { n: "04", t: "Execution", d: "On-site fit-out with quality control at every stage." },
  { n: "05", t: "Handover", d: "Styled, snag-free handover ready to occupy." },
];

const testimonials = [
  {
    n: "Ankit Sharma",
    r: "Office fit-out · Cuttack",
    q: "Delivered our office on time, on budget, and with a finish that genuinely impresses every visitor.",
  },
  {
    n: "S. Mohapatra",
    r: "Corporate Boardroom · Talcher",
    q: "The boardroom is world-class — AV, acoustics and the living-wall backdrop are exactly what we imagined.",
  },
  {
    n: "R. Behera",
    r: "Auditorium · Bhubaneswar",
    q: "Our auditorium fit-out was seamless. Podium, screens and acoustics all landed together, cleanly.",
  },
  {
    n: "Priya Mohanty",
    r: "Residence · Bhubaneswar",
    q: "Filtronic transformed our home beyond what we imagined. Every corner feels intentional and refined.",
  },
];

const clients = [
  "Basundhara Area",
  "Talcher Coalfields",
  "MCL",
  "Enterprise IT",
  "Retail Groups",
  "Hospitality",
];

/* ---------------- Component ---------------- */

function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO — commercial-first */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
        </div>

        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-14 pt-6 sm:pt-10 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 h-8 sm:h-9 rounded-md border border-border bg-background/70 backdrop-blur text-[10px] sm:text-xs uppercase tracking-[0.25em] text-brand-green mb-5 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              Corporate Interior Design Studio
            </div>
            <h1 className="font-display text-[2.1rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.75rem] lg:leading-[1.02] text-brand-green tracking-tight">
              Corporate spaces,
              <br />
              <em className="italic text-brand-indigo">engineered</em> beautifully.
            </h1>
            <p className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We design and deliver turnkey <strong className="text-foreground font-medium">corporate offices, boardrooms, auditoriums and data centres</strong> — with the same craft we bring to premium homes.
            </p>

            <div className="mt-6 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-5 sm:px-7 h-11 sm:h-12 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo transition-colors duration-500 shadow-soft"
              >
                Explore Solutions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 sm:px-7 h-11 sm:h-12 rounded-md border border-border bg-background/70 backdrop-blur text-foreground text-sm tracking-wide hover:border-brand-green hover:text-brand-green transition-colors duration-500"
              >
                Book Consultation
              </Link>
            </div>

            {/* Hero stats */}
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              {[
                { k: "250+", v: "Projects delivered" },
                { k: "12+", v: "Enterprise clients" },
                { k: "100%", v: "Turnkey delivery" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl sm:text-3xl text-brand-green">{s.k}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — real boardroom photo */}
          <div className="lg:col-span-6 relative reveal mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={corpBoardroomVerticalGardenImg}
                alt="Corporate boardroom interior with living wall backdrop"
                className="w-full object-cover"
                style={{ aspectRatio: "4/5" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-background">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">Corporate Boardroom</div>
                <div className="font-display text-xl sm:text-2xl mt-1">Basundhara Area</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-6 w-40 sm:w-48 hidden md:block">
              <div className="rounded-xl shadow-elegant border-4 border-background overflow-hidden bg-background">
                <img
                  src={serviceDataCentreImg}
                  alt="Data centre server room"
                  className="w-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-3 px-4 py-2.5 rounded-md bg-background shadow-elegant text-[10px] uppercase tracking-[0.2em] text-brand-green hidden md:flex items-center gap-2">
              <Star size={12} className="fill-brand-green text-brand-green" />
              Turnkey · AV · Acoustics
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-6 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</span>
          <ChevronDown size={16} className="animate-bounce text-brand-green" />
        </div>
      </section>

      {/* CLIENT / SECTORS MARQUEE */}
      <section className="border-y border-border bg-surface">
        <div className="container-px mx-auto max-w-7xl py-5 sm:py-8 flex flex-wrap items-center justify-center md:justify-between gap-x-5 gap-y-2 sm:gap-6 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {clients.map((c, i) => (
            <span key={c} className="flex items-center gap-5">
              {c}
              {i < clients.length - 1 && <span className="opacity-40">/</span>}
            </span>
          ))}
        </div>
      </section>

      {/* COMMERCIAL SOLUTIONS — PRIORITY */}
      <section className="container-px mx-auto max-w-7xl py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-14">
          <Reveal className="lg:col-span-6">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-green mb-3 sm:mb-4">Commercial solutions</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green leading-tight">
              Built for enterprises. <em className="italic text-brand-indigo">Delivered turnkey.</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 text-sm sm:text-base text-muted-foreground leading-relaxed self-end">
            From boardrooms and auditoriums to data centres and full corporate fit-outs — a single studio for design, engineering, procurement and execution.
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {commercialSolutions.map(({ icon: Icon, t, d, image, tag }, i) => (
            <Reveal key={t} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={image}
                    alt={t}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 h-8 rounded-md bg-background/95 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-brand-indigo">
                    {tag}
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-background/95 backdrop-blur flex items-center justify-center text-brand-green shadow-soft">
                    <Icon size={18} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-background">
                    <h3 className="font-display text-2xl sm:text-3xl">{t}</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{d}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-brand-green group/cta"
                  >
                    <span className="relative">
                      Learn more
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-brand-green group-hover/cta:w-full transition-all duration-500" />
                    </span>
                    <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Additional commercial capabilities */}
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mt-6 sm:mt-8">
          {commercialExtras.map(({ icon: Icon, t, d, image }, i) => (
            <Reveal key={t} delay={i * 80}>
              <article className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-card border border-border hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] transition-all duration-500">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={image} alt={t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-background/95 backdrop-blur flex items-center justify-center text-brand-green shadow-soft">
                    <Icon size={16} />
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex-1">
                  <h3 className="font-display text-lg sm:text-xl text-brand-green mb-2">{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CORPORATE PROJECT SHOWCASE */}
      <section className="bg-surface py-16 sm:py-20 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
            <Reveal>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-green mb-3 sm:mb-4">Corporate portfolio</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green">
                Boardrooms & <em className="italic text-brand-indigo">Auditoriums</em>.
              </h2>
            </Reveal>
            <Link
              to="/gallery"
              className="text-sm tracking-wide text-brand-indigo hover:text-brand-green transition-colors inline-flex items-center gap-2 group self-start md:self-auto"
            >
              View full gallery
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Editorial mosaic — real photos */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5 auto-rows-[200px] sm:auto-rows-[180px]">
            <FeaturedTile className="md:col-span-4 md:row-span-2" image={corpBoardroomOvalImg} label="Oval Conference Room" cat="Boardroom · Talcher" />
            <FeaturedTile className="md:col-span-2 md:row-span-1" image={corpAuditoriumPodiumImg} label="Motorised Podium" cat="Auditorium AV" />
            <FeaturedTile className="md:col-span-2 md:row-span-1" image={corpBoardroomMicsImg} label="Council Chamber" cat="Boardroom" />
            <FeaturedTile className="md:col-span-3 md:row-span-2" image={corpAuditoriumScreensImg} label="Presentation Hall" cat="Auditorium" />
            <FeaturedTile className="md:col-span-3 md:row-span-2" image={corpBoardroomMeetingImg} label="Directors' Meeting" cat="Corporate" />
            <FeaturedTile className="md:col-span-3 md:row-span-2" image={corpBoardroomLinearImg} label="Linear Boardroom" cat="Boardroom" />
            <FeaturedTile className="md:col-span-3 md:row-span-2" image={corpBoardroomClassicImg} label="Directors' Boardroom" cat="Corporate" />
          </div>
        </div>
      </section>

      {/* DATA CENTRE FEATURE */}
      <section className="container-px mx-auto max-w-7xl py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-green mb-3 sm:mb-4">Data centre & infrastructure</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green leading-tight">
              Mission-critical spaces, <em className="italic text-brand-indigo">purpose-built.</em>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              From server rooms to enterprise data halls — we handle raised access flooring, hot/cold aisle containment, structured cabling, precision cooling, fire suppression readiness and access control interiors. Engineered with your IT and facilities teams.
            </p>
            <ul className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-foreground/90">
              {[
                "Raised access flooring",
                "Cable containment & trays",
                "Precision cooling routing",
                "Rack layouts & aisle design",
                "Server room fit-out",
                "BMS-ready interiors",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 px-6 h-11 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo transition-colors duration-500 shadow-soft"
            >
              Discuss your data centre
              <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={serviceDataCentreImg}
                alt="Enterprise data centre with server racks"
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3D VISUALIZATION */}
      <section className="bg-surface py-16 sm:py-20 lg:py-32">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={service3dVizImg}
                alt="Photoreal 3D visualization of a corporate cabin"
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute top-4 left-4 px-3 h-8 inline-flex items-center rounded-md bg-background/95 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-brand-indigo">
                3D Render
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-green mb-3 sm:mb-4">3D visualization</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green leading-tight">
              See it before we <em className="italic text-brand-indigo">build it.</em>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every project includes photoreal 3D walkthroughs, elevations and material boards — so stakeholders sign off with confidence and site execution stays true to the design intent.
            </p>
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "Photoreal", v: "Ray-traced renders" },
                { k: "Walkthroughs", v: "First-person flythroughs" },
                { k: "BOQ Ready", v: "Itemised costing" },
                { k: "Approvals", v: "Stakeholder sign-off" },
              ].map((s) => (
                <div key={s.k} className="p-4 rounded-xl border border-border bg-background">
                  <div className="font-display text-brand-green">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-px mx-auto max-w-7xl py-16 sm:py-20 lg:py-32">
        <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-green mb-3 sm:mb-4">Why choose us</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green">
            Built on craft, <em className="italic text-brand-indigo">trusted</em> for delivery.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {whyUs.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="group h-full p-6 sm:p-8 bg-brand-green hover:bg-brand-indigo rounded-2xl flex gap-4 sm:gap-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-white mb-1.5 sm:mb-2">{t}</h3>
                  <p className="text-sm text-white/85 leading-relaxed">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface py-16 sm:py-20 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-green mb-3 sm:mb-4">Our process</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green">
              Clarity, then <em className="italic text-brand-indigo">craft.</em>
            </h2>
          </Reveal>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-6">
            <div className="hidden md:block absolute top-3 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            {process.map((s, i) => (
              <Reveal key={s.n} delay={i * 80} className="text-center">
                <div className="group">
                  <div className="mx-auto w-7 h-7 rounded-full bg-background border-2 border-brand-green flex items-center justify-center text-[10px] text-brand-green relative z-10 group-hover:bg-brand-green group-hover:text-primary-foreground transition-colors duration-500">
                    ●
                  </div>
                  <div className="font-display text-brand-indigo text-sm mt-4 sm:mt-6">{s.n}</div>
                  <h3 className="font-display text-lg sm:text-xl text-brand-green mt-2 mb-2 sm:mb-3">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL & LIFESTYLE — pushed towards end */}
      <section className="container-px mx-auto max-w-7xl py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-14">
          <Reveal className="lg:col-span-6">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-green mb-3 sm:mb-4">Also for homes</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green leading-tight">
              Residential, kitchens & <em className="italic text-brand-indigo">bespoke furniture.</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 text-sm sm:text-base text-muted-foreground leading-relaxed self-end">
            The same studio designs and delivers premium homes, modular kitchens and custom furniture — with the craft you've come to expect.
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {residentialServices.map(({ icon: Icon, t, d, image }, i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="group h-full bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img src={image} alt={t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-brand-green shadow-soft">
                    <Icon size={16} />
                  </div>
                </div>
                <div className="p-5 sm:p-6 text-center">
                  <h3 className="font-display text-lg sm:text-xl text-brand-green mb-2">{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Residential mini-gallery */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5 mt-10 sm:mt-14">
          {[
            { img: projectQuietHouseImg, t: "The Quiet House" },
            { img: projectMaisonVerdeImg, t: "Maison Verde" },
            { img: projectMasterSuiteImg, t: "Master Suite" },
            { img: projectWalkinWardrobeImg, t: "Walk-in Wardrobe" },
            { img: projectGardenLivingImg, t: "Garden Living" },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <Link to="/gallery" className="group block relative overflow-hidden rounded-xl">
                <img src={p.img} alt={p.t} loading="lazy" className="w-full h-40 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 right-3 text-background text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {p.t}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-16 sm:py-20 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
            <Reveal>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-green mb-3 sm:mb-4">Client stories</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-green max-w-xl">
                Reviewed by the people who work in our spaces.
              </h2>
            </Reveal>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-green text-brand-green" />
                ))}
              </div>
              <span>4.9 average on Google Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.n} delay={i * 90}>
                <div className="relative h-full p-6 sm:p-7 bg-card border border-border rounded-2xl hover-lift">
                  <Quote size={24} className="text-brand-green/30" />
                  <div className="flex mt-3 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="fill-brand-green text-brand-green" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed text-sm">"{t.q}"</p>
                  <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface text-foreground flex items-center justify-center font-display text-sm">
                      {t.n.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">{t.n}</div>
                      <div className="text-xs text-muted-foreground truncate">{t.r}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container-px mx-auto max-w-7xl py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-green text-white p-8 sm:p-12 md:p-20">
            <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-indigo/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="md:col-span-8">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/70 mb-3 sm:mb-4">
                  Enterprise · Boardroom · Auditorium · Data Centre
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
                  Ready to plan your <em className="italic text-white/80">next fit-out?</em>
                </h2>
              </div>
              <div className="md:col-span-4 flex flex-wrap md:justify-end gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 h-11 sm:h-12 rounded-md bg-white text-brand-green text-sm tracking-wide hover:bg-brand-indigo hover:text-white transition-colors duration-500 shadow-soft"
                >
                  Book Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+918658326019"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 h-11 sm:h-12 rounded-md border border-white/50 text-white text-sm tracking-wide hover:bg-white hover:text-brand-green transition-colors duration-500"
                >
                  <Phone size={14} />
                  Call now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function FeaturedTile({
  className = "",
  image,
  label,
  cat,
}: {
  className?: string;
  image: string;
  label: string;
  cat?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={image}
        alt={label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 right-4 text-background">
        {cat && <div className="text-[10px] uppercase tracking-[0.25em] opacity-80 mb-1">{cat}</div>}
        <div className="font-display text-lg sm:text-xl leading-tight">{label}</div>
      </div>
    </div>
  );
}
