import { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} mb-12 md:mb-16`}>
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] font-[family-name:var(--font-outfit)] mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] leading-tight mb-4">
        {heading}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
