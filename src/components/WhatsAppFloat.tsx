import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const WhatsAppFloat = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Book on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-luxe animate-float-pulse hover:scale-105 transition-transform sm:px-5 sm:py-4"
  >
    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
    <span className="font-semibold text-sm sm:text-base hidden xs:inline sm:inline">Book Now</span>
  </a>
);

export default WhatsAppFloat;