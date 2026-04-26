import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import { whatsappLink, INSTAGRAM_URL, PHONE_DISPLAY, WHATSAPP_NUMBER, STUDIO_ADDRESS_LINES } from "@/lib/whatsapp";

const Footer = () => (
  <footer className="bg-wine text-ivory">
    <div className="container py-14 grid gap-10 md:grid-cols-3">
      <div>
        <p className="font-serif text-2xl">
          Maheshwari <span className="text-gold-gradient italic">Makeover</span>
        </p>
        <p className="mt-3 text-ivory/70 text-sm leading-relaxed">
          Premium bridal makeup artistry in Kanpur for the modern Indian bride. HD &amp; Airbrush specialists.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-ivory/80">
          <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /><span>{STUDIO_ADDRESS_LINES.join(" ")}</span></li>
          <li className="flex gap-2"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /><a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-accent">{PHONE_DISPLAY}</a></li>
        </ul>
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
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ivory/10 hover:bg-accent hover:text-wine p-2.5 transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-4 text-xs text-ivory/60">DM us on Instagram for behind-the-scenes & latest bridal looks.</p>
      </div>
    </div>
    <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/60">
      © {new Date().getFullYear()} Maheshwari Makeover · Kanpur · Crafted with love for Indian brides
    </div>
  </footer>
);

export default Footer;