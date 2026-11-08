import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThemeCard } from "@/components/ui/ThemeCard";
import { THEMES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function Themes() {
  return (
    <section
      id="themes"
      className="py-20 md:py-28 bg-[var(--color-secondary-bg)] border-y border-[var(--color-border)]"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <SectionHeading
          eyebrow="FIND YOUR STYLE"
          heading="An invitation that feels like you."
          description="Choose a beautiful starting point and make every detail your own. From minimalist typography to lush watercolor florals."
        />

        {/* 4 Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {THEMES.map((theme) => (
            <ThemeCard key={theme.name} theme={theme} />
          ))}
        </div>

        {/* Browse All Themes Placeholder CTA */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-hover)] font-[family-name:var(--font-outfit)] transition-colors duration-200 cursor-pointer group">
            <span>Browse All Themes</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
          <p className="text-xs text-[var(--color-secondary-text)] mt-2 font-[family-name:var(--font-outfit)]">
            More bespoke designs launching regularly
          </p>
        </div>
      </div>
    </section>
  );
}

