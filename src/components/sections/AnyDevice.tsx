import { SectionHeading } from "@/components/ui/SectionHeading";
import { Monitor, Tablet, Smartphone, Sparkles, Check } from "lucide-react";
import Image from "next/image";

export function AnyDevice() {
  return (
    <section
      id="any-device"
      className="py-20 md:py-28 bg-[var(--color-secondary-bg)] border-y border-[var(--color-border)] overflow-hidden"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <SectionHeading
          eyebrow="MADE FOR EVERY SCREEN"
          heading="Design on your phone or computer."
          description="Create your invitation wherever inspiration strikes. Your guests can open it instantly on any modern phone, tablet, or laptop without installing an app."
        />

        {/* Device Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm font-medium text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)]">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-bg)] border border-[var(--color-border)] shadow-xs">
            <Monitor className="w-4 h-4 text-[var(--color-gold)]" />
            <span>Desktop &amp; Laptop</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-bg)] border border-[var(--color-border)] shadow-xs">
            <Tablet className="w-4 h-4 text-[var(--color-gold)]" />
            <span>iPad &amp; Tablets</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-bg)] border border-[var(--color-border)] shadow-xs">
            <Smartphone className="w-4 h-4 text-[var(--color-gold)]" />
            <span>iPhone &amp; Android</span>
          </div>
        </div>

        {/* Multi-Device Visual Mockup Showcase */}
        <div className="relative max-w-5xl mx-auto pt-6 pb-4">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-64 bg-[radial-gradient(ellipse_at_center,rgba(209,172,96,0.12)_0%,transparent_70%)] pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Device Mockup Composition */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
            {/* 1. Desktop Browser Frame (Center / Background) */}
            <div className="w-full lg:w-[680px] bg-[var(--color-primary-bg)] rounded-2xl border border-[var(--color-border)] shadow-2xl shadow-stone-900/10 overflow-hidden z-10">
              {/* Browser chrome header */}
              <div className="px-4 py-3 bg-[var(--color-light-beige)]/50 border-b border-[var(--color-border)] flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5B5B0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5D7A0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B2D6AE]" />
                </div>
                <div className="flex-1 max-w-md mx-auto bg-[var(--color-primary-bg)] border border-[var(--color-border)]/80 rounded-md py-1 px-3 text-[11px] font-mono text-[var(--color-secondary-text)] text-center flex items-center justify-center gap-1.5">
                  <span className="text-[var(--color-gold)]">🔒</span>
                  <span>eventful.page/sophia-and-alexander</span>
                </div>
              </div>

              {/* Browser Page View */}
              <div className="p-8 sm:p-10 text-center bg-gradient-to-b from-[var(--color-primary-bg)] to-[var(--color-secondary-bg)]">
                <div className="max-w-md mx-auto border border-[var(--color-border)] rounded-2xl p-6 bg-[var(--color-primary-bg)] shadow-xs">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)] font-medium font-[family-name:var(--font-outfit)] block mb-2">
                    YOU ARE CORDIALLY INVITED TO THE WEDDING OF
                  </span>
                  <h4 className="text-3xl font-serif font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-2">
                    Sophia &amp; Alexander
                  </h4>
                  <div className="flex items-center justify-center gap-2 my-2 text-[var(--color-gold)]">
                    <span className="w-6 h-px bg-[var(--color-border)]" />
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="w-6 h-px bg-[var(--color-border)]" />
                  </div>
                  <p className="text-xs text-[var(--color-secondary-text)] font-medium font-[family-name:var(--font-outfit)] mb-1">
                    Saturday, June 19, 2027 • 4:30 PM
                  </p>
                  <p className="text-xs text-[var(--color-secondary-text)] font-light font-[family-name:var(--font-outfit)] mb-4">
                    Villa Cetinale • Sovicille, Tuscany, Italy
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[var(--color-gold)] text-white text-xs font-medium font-[family-name:var(--font-outfit)]">
                    <span>Respond to Invitation</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Mobile Device (Overlapping on Desktop Right) */}
            <div className="lg:-ml-20 lg:-mt-12 w-64 sm:w-72 bg-[#1C1815] rounded-[38px] p-2.5 shadow-2xl shadow-stone-900/30 border-2 border-[#3E3732] z-20">
              {/* Notch */}
              <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-2" />
              {/* Screen */}
              <div className="bg-[var(--color-primary-bg)] rounded-[30px] p-4 text-center border border-[var(--color-border)]">
                <div className="flex justify-center mb-2">
                  <Image
                    src="/images/logo.webp"
                    alt="Eventful"
                    width={56}
                    height={16}
                    className="h-3 w-auto opacity-70"
                  />
                </div>
                <div className="p-3 rounded-xl bg-[var(--color-light-beige)]/50 border border-[var(--color-border)] mb-3">
                  <p className="text-[9px] uppercase tracking-wider text-[var(--color-gold)] font-medium mb-1">
                    SAVE OUR DATE
                  </p>
                  <p className="text-base font-serif font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                    Sophia &amp; Alex
                  </p>
                  <p className="text-[10px] text-[var(--color-secondary-text)] mt-1">
                    19 . 06 . 2027
                  </p>
                </div>
                <div className="py-1.5 px-3 rounded-lg bg-[var(--color-gold)] text-white text-[11px] font-medium font-[family-name:var(--font-outfit)]">
                  RSVP Online
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Experience Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14 text-center">
          <div className="flex flex-col items-center p-4">
            <div className="w-8 h-8 rounded-full bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)] mb-3">
              <Check className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
              Zero App Friction
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
              Guests tap the link and view instantly in Safari, Chrome, or any browser.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-8 h-8 rounded-full bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)] mb-3">
              <Check className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
              Seamless Cloud Sync
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
              Start editing on your laptop at home, continue on your phone while on the go.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-8 h-8 rounded-full bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)] mb-3">
              <Check className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
              Accessible to All Ages
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
              Thoughtfully formatted buttons and text sizes so grandparents can RSVP easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

