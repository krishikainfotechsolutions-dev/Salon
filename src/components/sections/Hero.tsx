import heroImg from "@/assets/hero-bride.jpg";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle, Sparkles } from "lucide-react";

const Hero = () => (
  <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
    <img
      src={heroImg}
      alt="Indian bride with HD bridal makeup, gold jewelry and red lehenga"
      width={1080}
      height={1920}
      className="absolute inset-0 h-full w-full object-cover object-center scale-105 animate-[fade-in_1.4s_ease-out]"
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-wine/20 to-transparent" />

    <div className="relative z-10 container flex min-h-[100svh] flex-col justify-end pb-20 pt-28 md:justify-center md:pb-0">
      <div className="max-w-2xl">
        <p className="gold-divider text-xs md:text-sm uppercase tracking-[0.3em] text-accent animate-fade-in mb-5">
          <Sparkles className="h-3.5 w-3.5" /> Radiance Bridal Studio
        </p>
        <h1 className="font-serif text-ivory text-4xl sm:text-5xl md:text-7xl leading-[1.05] animate-fade-in-up">
          Your Dream <em className="text-gold-gradient not-italic font-medium">Bridal Look</em>,
          <br className="hidden sm:block" /> Perfectly Crafted
        </h1>
        <p className="mt-5 text-base md:text-lg text-ivory/90 max-w-xl animate-fade-in-up [animation-delay:120ms]">
          HD &amp; Airbrush Makeup by certified experts. Curated for the modern Indian bride who
          deserves nothing less than radiant.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up [animation-delay:240ms]">
          <a
            href={whatsappLink("Hi, I want to book a bridal consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 font-semibold shadow-luxe hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="h-5 w-5" />
            Book Bridal Consultation
          </a>
          <a
            href="#packages"
            className="inline-flex items-center justify-center rounded-full border border-ivory/50 bg-ivory/10 backdrop-blur-sm px-7 py-4 font-medium text-ivory hover:bg-ivory hover:text-wine transition-colors"
          >
            View Bridal Packages
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-ivory/85 text-sm animate-fade-in-up [animation-delay:360ms]">
          <span>★ 500+ Brides</span>
          <span>★ 5+ Years Experience</span>
          <span>★ MAC · Huda · Kryolan</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;