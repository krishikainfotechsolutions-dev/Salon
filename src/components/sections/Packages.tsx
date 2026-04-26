import SectionHeading from "./SectionHeading";
import { Check, Crown } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const tiers = [
  {
    name: "Silver",
    price: "₹15,000",
    tagline: "Intimate Wedding",
    features: ["HD Bridal Makeup", "Basic Hairstyling", "Saree / Lehenga Draping", "Touch-up Kit"],
    featured: false,
  },
  {
    name: "Gold",
    price: "₹25,000",
    tagline: "Most Loved",
    features: ["Airbrush Bridal Makeup", "Advanced Hairstyling", "Full Draping & Jewelry Setting", "Free Trial Session", "On-day Touch-ups"],
    featured: true,
  },
  {
    name: "Platinum",
    price: "₹45,000",
    tagline: "Signature Bridal",
    features: ["Airbrush + HD Combo", "2 Pre-Wedding Looks Included", "Premium Hairstyling & Extensions", "Dedicated Artist On-site", "Skin Prep Facial", "Trial + Touch-ups"],
    featured: false,
  },
];

const Packages = () => (
  <section id="packages" className="py-20 md:py-28 bg-gradient-blush">
    <div className="container">
      <SectionHeading
        eyebrow="Bridal Packages"
        title={<>Curated <em className="text-gold-gradient not-italic">bridal</em> experiences</>}
        subtitle="Transparent pricing. No hidden costs. Every package can be customised to your wedding."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <div
            key={t.name}
            style={{ animationDelay: `${i * 120}ms` }}
            className={`relative rounded-3xl p-8 animate-fade-in-up transition-transform hover:-translate-y-1 ${
              t.featured
                ? "bg-gradient-wine text-ivory shadow-luxe ring-2 ring-accent"
                : "bg-card text-wine shadow-soft border border-border"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-4 py-1 text-xs font-semibold text-wine shadow-gold">
                <Crown className="h-3.5 w-3.5" /> Most Popular
              </span>
            )}
            <p className={`text-xs uppercase tracking-[0.25em] ${t.featured ? "text-accent" : "text-gold-deep"}`}>
              {t.tagline}
            </p>
            <h3 className="mt-3 font-serif text-3xl">{t.name}</h3>
            <p className="mt-3 font-serif text-4xl">
              {t.price}
              <span className={`text-sm font-sans ${t.featured ? "text-ivory/70" : "text-muted-foreground"}`}> /onwards</span>
            </p>

            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.featured ? "text-accent" : "text-gold-deep"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(`Hi, I'm interested in the ${t.name} bridal package`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3 font-semibold transition-all ${
                t.featured
                  ? "bg-gradient-gold text-wine hover:scale-[1.02] shadow-gold"
                  : "bg-wine text-ivory hover:bg-wine/90"
              }`}
            >
              Book {t.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;