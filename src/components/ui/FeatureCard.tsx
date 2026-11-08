import type { FeatureData } from "@/lib/constants";

interface FeatureCardProps {
  feature: FeatureData;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-primary-bg)] hover:border-[var(--color-gold)]/40 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-[var(--color-light-beige)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold)]/10 transition-colors duration-300">
        <Icon className="w-5 h-5 text-[var(--color-gold)]" strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
