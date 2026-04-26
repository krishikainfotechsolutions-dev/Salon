import SectionHeading from "./SectionHeading";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ananya R.",
    city: "Mumbai Bride",
    text: "I felt like the most beautiful version of myself on my wedding day. The airbrush makeup lasted through 12 hours of dancing and tears — not a smudge!",
  },
  {
    name: "Priya S.",
    city: "Delhi Bride",
    text: "From trial to wedding morning, every detail was thoughtful. They understood exactly the soft, traditional look I wanted. My family couldn't stop crying.",
  },
  {
    name: "Meera K.",
    city: "Bengaluru Bride",
    text: "Worth every rupee. The skin felt light, the photos came out stunning, and the team was so calming on a stressful morning. Forever grateful!",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-ivory">
    <div className="container">
      <SectionHeading
        eyebrow="Bride Stories"
        title={<>Loved by <em className="text-gold-gradient not-italic">500+</em> brides</>}
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            style={{ animationDelay: `${i * 120}ms` }}
            className="relative rounded-2xl bg-gradient-blush p-7 shadow-soft animate-fade-in-up"
          >
            <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/40" />
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 font-display text-xl text-wine leading-snug">
              "{r.text}"
            </blockquote>
            <figcaption className="mt-5 pt-4 border-t border-accent/30">
              <p className="font-serif text-wine">{r.name}</p>
              <p className="text-xs uppercase tracking-wider text-gold-deep">{r.city}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;