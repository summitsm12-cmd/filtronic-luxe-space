import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-foreground mt-32 border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="Filtronic Lifestyle Pvt Ltd"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">

            Crafting refined interiors where architecture, light and
            craftsmanship meet to shape modern living.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] mb-5 text-brand-green font-medium">
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
                  className="text-muted-foreground hover:text-brand-green transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] mb-5 text-brand-green font-medium">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-green" />
              <span>
                Plot No-198, Prachi Enclave, Phase 2,
                <br />
                Chandrasekharpur, Bhubaneswar, Odisha
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="shrink-0 text-brand-green" />
              <a href="tel:+918658326019" className="hover:text-brand-green transition-colors">
                +91 8658326019
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="shrink-0 text-brand-green" />
              <a href="mailto:info@filtroniclifestyle.com" className="hover:text-brand-green transition-colors">
                info@filtroniclifestyle.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] mb-5 text-brand-green font-medium">
            Follow
          </h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 rounded-md bg-brand-green text-white flex items-center justify-center hover:bg-brand-indigo transition-colors duration-500"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-8 leading-relaxed">
            Subscribe to our journal for design stories and project unveilings.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Filtronic Lifestyle Pvt Ltd. All rights reserved.</p>
          <p>
            Made with love by{" "}
            <a
              href="https://hexmontechnology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:text-brand-indigo transition-colors font-medium"
            >
              Hexmon Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
