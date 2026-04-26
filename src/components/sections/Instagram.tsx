import SectionHeading from "./SectionHeading";
import { Instagram as IgIcon } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const posts = [g3, g1, g4, g6, g2, g5];

const Instagram = () => (
  <section className="py-20 md:py-28 bg-ivory">
    <div className="container">
      <SectionHeading
        eyebrow="@radiancebridalstudio"
        title={<>Follow our daily <em className="text-gold-gradient not-italic">muse</em></>}
        subtitle="Behind-the-scenes, fresh bridal looks and beauty tips — every single day."
      />

      <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {posts.map((p, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${i * 60}ms` }}
            className="group relative aspect-square overflow-hidden rounded-lg shadow-soft animate-scale-in"
          >
            <img
              src={p}
              alt="Instagram bridal post"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-wine/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <IgIcon className="h-7 w-7 text-ivory" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-wine hover:text-accent transition-colors"
        >
          <IgIcon className="h-5 w-5" /> @radiancebridalstudio
        </a>
      </div>
    </div>
  </section>
);

export default Instagram;