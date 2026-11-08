import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-[var(--color-secondary-bg)] border-y border-[var(--color-border)]"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <SectionHeading
          eyebrow="EVERYTHING IN ONE PLACE"
          heading="All your wedding details, beautifully organized."
          description="From romantic opening moments to practical guest essentials, give your loved ones every piece of information they need in a cohesive, elegant experience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

