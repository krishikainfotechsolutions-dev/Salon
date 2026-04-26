import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const Footer = () => (
  <footer className="bg-wine text-ivory">
    <div className="container py-14 grid gap-10 md:grid-cols-3">
      <div>
        <p className="font-serif text-2xl">
          Radiance <span className="text-gold-gradient italic">Bridal</span>
        </p>
        <p className="mt-3 text-ivory/70 text-sm leading-relaxed">
          Premium bridal makeup artistry for the modern Indian bride. HD &amp; Airbrush specialists.
        </p>
      </div>
      <div>
        <p className="font-serif text-lg text-accent">Explore</p>
        <ul className="mt-3 space-y-2 text-sm text-ivory/80">
          <li><a href="#services" className="hover:text-accent">Services</a></li>
          <li><a href="#packages" className="hover:text-accent">Packages</a></li>
          <li><a href="#gallery" className="hover:text-accent">Gallery</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </div>
      <div>
        <p className="font-serif text-lg text-accent">Connect</p>
        <div className="mt-3 flex gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ivory/10 hover:bg-accent hover:text-wine p-2.5 transition-colors" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-ivory/10 hover:bg-accent hover:text-wine p-2.5 transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-ivory/10 hover:bg-accent hover:text-wine p-2.5 transition-colors" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/60">
      © {new Date().getFullYear()} Radiance Bridal Studio · Crafted with love for Indian brides
    </div>
  </footer>
);

export default Footer;