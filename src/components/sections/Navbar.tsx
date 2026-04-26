import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#packages", label: "Packages" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-ivory/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className={`font-serif text-xl md:text-2xl tracking-tight ${scrolled ? "text-wine" : "text-ivory"}`}>
            Maheshwari
          </span>
          <span className="text-gold-gradient font-serif italic text-base md:text-lg">Makeover</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  scrolled ? "text-wine" : "text-ivory"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-wine shadow-gold hover:scale-[1.03] transition-transform"
        >
          Book on WhatsApp
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden rounded-full p-2 ${scrolled ? "text-wine" : "text-ivory"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ivory/98 backdrop-blur-md border-t border-border animate-fade-in">
          <ul className="container flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-3 text-wine font-medium border-b border-border/50"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-wine shadow-gold"
            >
              Book on WhatsApp
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;