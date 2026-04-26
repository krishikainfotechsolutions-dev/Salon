import SectionHeading from "./SectionHeading";
import { Award, Gem, ShieldCheck, Palette } from "lucide-react";

const items = [
  { icon: Award, title: "Certified Artists", desc: "Internationally trained, bridal-specialised team." },
  { icon: Gem, title: "Premium Brands", desc: "MAC, Huda Beauty, Kryolan, Bobbi Brown only." },
  { icon: ShieldCheck, title: "Hygiene First", desc: "Sanitised tools, single-use applicators, skin-safe products." },
  { icon: Palette, title: "Custom Looks", desc: "Tailored to your skin tone, outfit and venue lighting." },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-ivory">
    <div className="container">
      <SectionHeading
        eyebrow="Why Choose Us"
        title={<>The Radiance <em className="text-gold-gradient not-italic">promise</em></>}
      />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.title}
            style={{ animationDelay: `${i * 100}ms` }}
            className="text-center animate-fade-in-up"
          >
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-wine shadow-gold">
              <it.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-serif text-xl text-wine">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;