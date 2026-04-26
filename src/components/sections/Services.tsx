import SectionHeading from "./SectionHeading";
import { Sparkles, Wind, Heart, PartyPopper } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const services = [
  {
    icon: Sparkles,
    name: "HD Makeup",
    desc: "Flawless, photo-ready finish using premium HD products for crystal-clear bridal portraits.",
    price: "₹₹₹",
  },
  {
    icon: Wind,
    name: "Airbrush Makeup",
    desc: "Featherlight, long-lasting coverage with a luminous, second-skin finish.",
    price: "₹₹₹₹",
  },
  {
    icon: Heart,
    name: "Engagement Makeup",
    desc: "Soft glam tailored to your outfit and venue lighting for a romantic ring ceremony.",
    price: "₹₹",
  },
  {
    icon: PartyPopper,
    name: "Party Makeup",
    desc: "Statement looks for sangeet, mehendi, reception and pre-wedding shoots.",
    price: "₹₹",
  },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-ivory">
    <div className="container">
      <SectionHeading
        eyebrow="Bridal Services"
        title={<>Crafted for every <em className="text-gold-gradient not-italic">moment</em></>}
        subtitle="From intimate engagements to grand wedding mornings — every look is designed around you."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div
            key={s.name}
            style={{ animationDelay: `${i * 100}ms` }}
            className="group relative rounded-2xl bg-card border border-border/70 p-6 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all duration-500 animate-fade-in-up"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-blush text-wine ring-1 ring-accent/30 group-hover:bg-gradient-gold group-hover:text-wine transition-colors">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-wine">{s.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="font-serif text-lg text-gold-deep">{s.price}</span>
              <span className="rounded-full bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1">
                Trial Available
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={whatsappLink("Hi, I'd like to know about your bridal services & pricing")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-wine text-ivory px-7 py-3.5 font-medium hover:bg-wine/90 transition-colors"
        >
          Get Personalised Pricing
        </a>
      </div>
    </div>
  </section>
);

export default Services;