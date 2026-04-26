import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, label: "Traditional Red Bride", span: "row-span-2" },
  { src: g3, label: "HD Eye Detail", span: "" },
  { src: g2, label: "Modern Glam", span: "" },
  { src: g6, label: "Royal Kundan Bride", span: "row-span-2" },
  { src: g4, label: "South Indian Classic", span: "" },
  { src: g5, label: "Engagement Glow", span: "" },
];

const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-blush">
      <div className="container">
        <SectionHeading
          eyebrow="Signature Work"
          title={<>A glimpse of our <em className="text-gold-gradient not-italic">brides</em></>}
          subtitle="Real brides. Real transformations. Each look is a one-of-a-kind story."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item.src)}
              style={{ animationDelay: `${i * 80}ms` }}
              className={`group relative overflow-hidden rounded-xl shadow-soft animate-scale-in ${item.span}`}
            >
              <img
                src={item.src}
                alt={`${item.label} — bridal makeup by Radiance`}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-serif text-ivory text-base md:text-lg">{item.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-wine/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 text-ivory p-2 rounded-full bg-ivory/10 hover:bg-ivory/20"
          >
            <X />
          </button>
          <img
            src={active}
            alt="Bridal portrait"
            className="max-h-[90vh] max-w-full rounded-xl shadow-luxe animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;