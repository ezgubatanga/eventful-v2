import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-secondary-bg)] border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(209,172,96,0.12)_0%,transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)] text-center">
        {/* Subtle Brand Watermark or Sparkle */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[var(--color-light-beige)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-gold)] shadow-xs">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        {/* Closing Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] max-w-2xl mx-auto leading-tight mb-5">
          Your beautiful invitation starts here.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Bring your wedding details together in one beautiful place. Design, preview, and share when you&apos;re ready.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button variant="primary" size="lg" className="shadow-lg shadow-[var(--color-gold)]/20 px-10">
            Start Designing Free
          </Button>
        </div>

        {/* Micro Reassurance */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
          <span>✦ Free to customize &amp; preview</span>
          <span>•</span>
          <span>✦ One-time payment of $49.99 only when publishing</span>
          <span>•</span>
          <span>✦ Unlimited guests always included</span>
        </div>
      </div>
    </section>
  );
}
