import { ReactNode } from "react";

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <p className="gold-divider text-xs uppercase tracking-[0.3em] text-accent mb-4">
        {eyebrow}
      </p>
    )}
    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-wine leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;