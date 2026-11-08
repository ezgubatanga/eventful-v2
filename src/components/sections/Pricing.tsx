import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PRICING_FEATURES } from "@/lib/constants";
import { Check, ShieldCheck, RefreshCw, Users2, Sparkles } from "lucide-react";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-[var(--color-primary-bg)]"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <SectionHeading
          eyebrow="SIMPLE, ONE-TIME PRICING"
          heading="Design for free. Pay once to invite everyone."
          description="No subscriptions. No per-guest charges. Customize and preview your entire wedding invitation with zero commitment, and pay only when you're ready to share."
        />

        {/* The "When You Pay" Progression Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--color-gold)] font-[family-name:var(--font-outfit)]">
              TRANSPARENT FROM DAY ONE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
            <div className="p-4 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)] text-center">
              <span className="text-xs text-[var(--color-secondary-text)] block mb-1">01. Pick Theme</span>
              <span className="text-sm font-bold text-[#52793E] block">Free</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)] text-center">
              <span className="text-xs text-[var(--color-secondary-text)] block mb-1">02. Customize &amp; Preview</span>
              <span className="text-sm font-bold text-[#52793E] block">Free</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--color-light-beige)] border-2 border-[var(--color-gold)] text-center relative shadow-sm">
              <span className="text-xs text-[var(--color-dark-text)] font-medium block mb-1">03. Publish &amp; Share</span>
              <span className="text-sm font-extrabold text-[var(--color-gold)] block">$49.99 Once</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)] text-center">
              <span className="text-xs text-[var(--color-secondary-text)] block mb-1">04. Guests &amp; Future Edits</span>
              <span className="text-sm font-bold text-[#52793E] block">Included</span>
            </div>
          </div>
        </div>

        {/* Central Pricing Card */}
        <div className="max-w-xl mx-auto rounded-3xl border-2 border-[var(--color-border)] bg-[var(--color-secondary-bg)] p-8 sm:p-12 shadow-xl shadow-stone-800/5 relative overflow-hidden">
          {/* Subtle gold ribbon top-right */}
          <div className="absolute top-0 right-0 bg-[var(--color-gold)] text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-1 rounded-bl-xl font-[family-name:var(--font-outfit)]">
            Complete Package
          </div>

          {/* Pricing Header */}
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)] font-[family-name:var(--font-outfit)] mb-2">
              LIFETIME INVITATION ACCESS
            </p>
            <div className="flex items-baseline justify-center gap-1 my-3">
              <span className="text-5xl sm:text-6xl font-extrabold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                $49.99
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
                / one-time
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] max-w-sm mx-auto">
              You can design and preview your invitation for free. Pay only when you are ready to publish and share it.
            </p>
          </div>

          {/* Feature List */}
          <div className="py-6 border-y border-[var(--color-border)] mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] mb-4">
              Everything included for your big day:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRICING_FEATURES.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-light-beige)] flex items-center justify-center shrink-0 mt-0.5 text-[var(--color-gold)]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button variant="primary" size="lg" className="w-full shadow-md shadow-[var(--color-gold)]/20">
              Start Designing Free
            </Button>
            <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] mt-3">
              No credit card required to start designing
            </p>
          </div>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          <div className="p-5 rounded-2xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)] mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
              See It Before You Pay
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
              Design your full invitation, test animations, and preview every screen before spending a cent.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
              Private Access Code
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
              Keep personal details safe. Add an optional password so only invited guests can open your link.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)] mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
              Plans Can Change
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
              Need to adjust a bus time or ceremony detail? Edit anytime for free without changing your link.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)] mb-3">
              <Users2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
              Every Guest Included
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
              Whether you are hosting 40 close family members or 400 friends, your price remains exactly $49.99.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
