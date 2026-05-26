import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-indigo text-secondary-foreground mt-32">
      <div className="container-px mx-auto max-w-7xl py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center font-display text-lg">
              F
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg">Filtronic Lifestyle</div>
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">
                Pvt Ltd
              </div>
            </div>
          </div>
          <p className="text-sm opacity-75 leading-relaxed max-w-xs">
            Crafting refined interiors where architecture, light and
            craftsmanship meet to shape modern living.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] mb-5 opacity-90">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="opacity-75 hover:opacity-100 hover:text-white transition-opacity"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] mb-5 opacity-90">
            Contact
          </h4>
          <ul className="space-y-4 text-sm opacity-85">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                Filtronic Lifestyle Pvt Ltd,
                <br />
                Bhubaneswar, Odisha, India
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="shrink-0" />
              <a href="tel:+918658326019" className="hover:text-white">
                +91 8658326019
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="shrink-0" />
              <a href="mailto:info@filtroniclifestyle.com" className="hover:text-white">
                info@filtroniclifestyle.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] mb-5 opacity-90">
            Follow
          </h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors duration-500"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-xs opacity-60 mt-8 leading-relaxed">
            Subscribe to our journal for design stories and project unveilings.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Filtronic Lifestyle Pvt Ltd. All rights reserved.</p>
          <p>Designed with restraint. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
