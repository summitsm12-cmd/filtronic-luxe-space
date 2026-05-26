import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-primary-foreground font-display text-lg">
            F
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-foreground tracking-tight">
              Filtronic
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Lifestyle
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-sm tracking-wide text-foreground/80 hover:text-brand-green transition-colors data-[status=active]:text-brand-green
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-brand-green after:w-0 hover:after:w-full after:transition-all after:duration-500
                data-[status=active]:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 h-11 rounded-md bg-brand-green text-primary-foreground text-sm tracking-wide hover:bg-brand-indigo transition-colors duration-500 shadow-soft"
          >
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-background border-b border-border ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-px mx-auto py-6 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-foreground/90 border-b border-border/60 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center items-center h-12 rounded-md bg-brand-green text-primary-foreground text-sm hover:bg-brand-indigo transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
