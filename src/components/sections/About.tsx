import artist from "@/assets/artist.jpg";
import { whatsappLink } from "@/lib/whatsapp";

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-gradient-blush overflow-hidden">
    <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="relative animate-fade-in-up">
        <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl bg-gradient-gold opacity-60 blur-sm" />
        <img
          src={artist}
          alt="Lead bridal makeup artist at Radiance Bridal Studio"
          loading="lazy"
          width={1024}
          height={1280}
          className="relative rounded-3xl shadow-luxe aspect-[4/5] object-cover w-full"
        />
      </div>

      <div className="animate-fade-in-up [animation-delay:150ms]">
        <p className="gold-divider text-xs uppercase tracking-[0.3em] text-accent mb-4">
          Meet the Artist
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-wine leading-tight">
          Where artistry meets <em className="text-gold-gradient not-italic">your story</em>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          With over <strong className="text-wine">5 years</strong> of dedicated bridal experience and
          500+ brides styled across India, our founder believes every bride carries a story worth
          celebrating. Trained internationally and obsessed with detail, she specialises in HD and
          airbrush bridal looks that feel weightless and last from haldi to vidaai.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
          <div>
            <p className="font-serif text-3xl text-wine">5+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Years</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-wine">500+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Brides</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-wine">15+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Cities</p>
          </div>
        </div>

        <a
          href={whatsappLink("Hi! I'd love to book a consultation with the artist")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-full bg-wine text-ivory px-7 py-3.5 font-medium hover:bg-wine/90 transition-colors"
        >
          Chat with the Artist
        </a>
      </div>
    </div>
  </section>
);

export default About;