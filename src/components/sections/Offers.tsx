import { whatsappLink } from "@/lib/whatsapp";
import { Gift, Sparkles } from "lucide-react";

const Offers = () => (
  <section className="py-16 md:py-20 bg-gradient-wine relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gradient-gold blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blush blur-3xl" />
    </div>

    <div className="container relative grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl bg-ivory/10 backdrop-blur-sm border border-accent/30 p-8 text-ivory animate-fade-in-up">
        <Sparkles className="h-8 w-8 text-accent" />
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">Limited Time</p>
        <h3 className="mt-2 font-serif text-3xl md:text-4xl">
          Flat <span className="text-gold-gradient">15% Off</span> on Bridal Bookings
        </h3>
        <p className="mt-3 text-ivory/80">Lock your wedding date this season and save big on any bridal package.</p>
        <a
          href={whatsappLink("Hi! I want to claim the 15% bridal offer")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-full bg-gradient-gold px-6 py-3 font-semibold text-wine shadow-gold hover:scale-[1.03] transition-transform"
        >
          Claim 15% Off
        </a>
      </div>

      <div className="rounded-3xl bg-ivory/10 backdrop-blur-sm border border-accent/30 p-8 text-ivory animate-fade-in-up [animation-delay:120ms]">
        <Gift className="h-8 w-8 text-accent" />
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">Bonus</p>
        <h3 className="mt-2 font-serif text-3xl md:text-4xl">
          <span className="text-gold-gradient">Free Trial</span> with Every Booking
        </h3>
        <p className="mt-3 text-ivory/80">Try your wedding look before the big day — entirely on us.</p>
        <a
          href={whatsappLink("Hi! I'd like to book a free bridal trial")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-full bg-gradient-gold px-6 py-3 font-semibold text-wine shadow-gold hover:scale-[1.03] transition-transform"
        >
          Book Free Trial
        </a>
      </div>
    </div>
  </section>
);

export default Offers;