import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Sparkles, Calendar, MapPin, Heart, Eye } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--color-primary-bg)]"
    >
      {/* Background subtle glowing radial gradient */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(209,172,96,0.08)_0%,transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-light-beige)] border border-[var(--color-border)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] font-[family-name:var(--font-outfit)]">
                YOUR WEDDING, BEAUTIFULLY INVITED
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] leading-[1.12] tracking-tight mb-6">
              Your love story deserves an invitation as beautiful as the day.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
              Create a beautiful digital wedding invitation, share it with everyone you love, and keep every RSVP organized in one place.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-5">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-sm shadow-[var(--color-gold)]/20">
                Start Designing Free
              </Button>
              <Button variant="outline" size="lg" href="#themes" className="w-full sm:w-auto">
                Explore Themes
              </Button>
            </div>

            {/* Micro reassurance & Disabled Demo Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
              <span>✦ Free to design and preview</span>
              <span className="hidden sm:inline">•</span>
              <span>✦ No credit card required</span>
              <span className="hidden sm:inline">•</span>
              {/* TODO: Implement /demo route in Phase 2 */}
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--color-secondary-bg)] border border-[var(--color-border)] text-[var(--color-secondary-text)] cursor-not-allowed select-none opacity-80"
                title="Live invitation demo coming soon in Phase 2"
              >
                <Eye className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                Live Demo (Coming Soon)
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Demonstration */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Floating Pill: Attendance Tracker */}
            <div className="hidden sm:flex absolute -left-6 top-16 z-20 items-center gap-3 bg-[var(--color-primary-bg)]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[var(--color-border)] shadow-lg shadow-black/5">
              <div className="w-8 h-8 rounded-full bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                  Instant RSVP
                </p>
                <p className="text-[11px] text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
                  96 attending • 0 stress
                </p>
              </div>
            </div>

            {/* Floating Pill: Theme Customization */}
            <div className="hidden sm:flex absolute -right-4 bottom-20 z-20 items-center gap-3 bg-[var(--color-primary-bg)]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[var(--color-border)] shadow-lg shadow-black/5">
              <div className="w-8 h-8 rounded-full bg-[#EBF3E7] flex items-center justify-center text-[#557245]">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                  Plus-One & Dietary
                </p>
                <p className="text-[11px] text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
                  Custom guest questions
                </p>
              </div>
            </div>

            {/* Phone Silhouette Frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[44px] p-3 bg-gradient-to-b from-[#2E2824] to-[#1C1815] shadow-2xl shadow-stone-900/25 border-4 border-[#3E3732]">
              {/* Speaker & Sensor Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1C1815] rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black/60 mr-2" />
                <div className="w-10 h-1.5 rounded-full bg-black/40" />
              </div>

              {/* Phone Screen Container */}
              <div className="relative rounded-[36px] overflow-hidden bg-[var(--color-primary-bg)] border border-[var(--color-border)]/60 pt-9 pb-6 px-5 flex flex-col items-center text-center">
                {/* Mini Top Brand Mark */}
                <div className="mb-4">
                  <Image
                    src="/images/logo.webp"
                    alt="Eventful"
                    width={72}
                    height={20}
                    className="h-4 w-auto opacity-70"
                  />
                </div>

                {/* Romantic Card Header */}
                <div className="w-full rounded-2xl bg-[#FCFBF8] border border-[var(--color-border)] p-5 mb-4 shadow-sm relative overflow-hidden">
                  {/* Decorative Corner Ornaments */}
                  <div className="absolute top-2 left-2 text-[var(--color-gold)] opacity-40 text-xs">✦</div>
                  <div className="absolute top-2 right-2 text-[var(--color-gold)] opacity-40 text-xs">✦</div>
                  <div className="absolute bottom-2 left-2 text-[var(--color-gold)] opacity-40 text-xs">✦</div>
                  <div className="absolute bottom-2 right-2 text-[var(--color-gold)] opacity-40 text-xs">✦</div>

                  <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)] font-medium font-[family-name:var(--font-outfit)] mb-2">
                    WE ARE GETTING MARRIED
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] leading-none mb-1">
                    Sophia &amp; Alexander
                  </h3>

                  <div className="flex items-center justify-center gap-2 my-2.5">
                    <span className="w-8 h-px bg-[var(--color-border)]" />
                    <span className="text-[var(--color-gold)] text-xs">❦</span>
                    <span className="w-8 h-px bg-[var(--color-border)]" />
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
                    <Calendar className="w-3 h-3 text-[var(--color-gold)]" />
                    <span>Saturday, June 19, 2027</span>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] mt-1">
                    <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                    <span>Villa Cetinale • Tuscany, Italy</span>
                  </div>
                </div>

                {/* Countdown Timer Demo */}
                <div className="w-full bg-[var(--color-light-beige)]/70 rounded-xl p-2.5 border border-[var(--color-border)]/70 mb-3">
                  <p className="text-[9px] uppercase tracking-wider text-[var(--color-secondary-text)] font-medium mb-1.5">
                    Countdown to the Big Day
                  </p>
                  <div className="grid grid-cols-4 gap-1 text-center">
                    <div className="bg-[var(--color-primary-bg)] rounded py-1 px-0.5 border border-[var(--color-border)]/50">
                      <span className="block text-xs font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                        284
                      </span>
                      <span className="text-[8px] text-[var(--color-secondary-text)] uppercase">Days</span>
                    </div>
                    <div className="bg-[var(--color-primary-bg)] rounded py-1 px-0.5 border border-[var(--color-border)]/50">
                      <span className="block text-xs font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                        14
                      </span>
                      <span className="text-[8px] text-[var(--color-secondary-text)] uppercase">Hrs</span>
                    </div>
                    <div className="bg-[var(--color-primary-bg)] rounded py-1 px-0.5 border border-[var(--color-border)]/50">
                      <span className="block text-xs font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                        22
                      </span>
                      <span className="text-[8px] text-[var(--color-secondary-text)] uppercase">Mins</span>
                    </div>
                    <div className="bg-[var(--color-primary-bg)] rounded py-1 px-0.5 border border-[var(--color-border)]/50">
                      <span className="block text-xs font-bold text-[var(--color-gold)] font-[family-name:var(--font-bricolage)]">
                        58
                      </span>
                      <span className="text-[8px] text-[var(--color-secondary-text)] uppercase">Secs</span>
                    </div>
                  </div>
                </div>

                {/* Mockup RSVP Button */}
                <div className="w-full py-2.5 px-4 rounded-xl bg-[var(--color-gold)] text-white text-xs font-medium font-[family-name:var(--font-outfit)] shadow-sm flex items-center justify-center gap-1.5">
                  <span>RSVP for Sophia & Alexander</span>
                  <span className="text-[10px]">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust & Capability Highlights */}
        <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
                Free
              </span>
              <span className="text-xs md:text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
                To design &amp; preview
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
                4 Curated
              </span>
              <span className="text-xs md:text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
                Timeless styles
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
                Unlimited
              </span>
              <span className="text-xs md:text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
                Guests &amp; RSVPs
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
                Any Screen
              </span>
              <span className="text-xs md:text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
                No app install needed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

