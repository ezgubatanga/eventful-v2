import { SectionHeading } from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/constants";
import { Sparkles, Sliders, Share2, Check, Copy } from "lucide-react";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-[var(--color-primary-bg)]"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          heading="From your first idea to their first RSVP."
          description="Creating your wedding invitation is effortless and enjoyable. Three thoughtful steps to a celebration your guests will never forget."
        />

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {/* Step 01 */}
          <div className="flex flex-col bg-[var(--color-secondary-bg)] rounded-2xl border border-[var(--color-border)] p-6 md:p-8 relative overflow-hidden group hover:border-[var(--color-gold)]/50 transition-all duration-300">
            {/* Step Number in Gold */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl md:text-5xl font-extrabold text-[var(--color-gold)] font-[family-name:var(--font-bricolage)]">
                01
              </span>
              <div className="w-9 h-9 rounded-full bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)]">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Visual Mockup for Step 1: Theme Selector */}
            <div className="h-44 w-full bg-[var(--color-primary-bg)] rounded-xl border border-[var(--color-border)] p-4 flex flex-col justify-center mb-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]/60 mb-3">
                <span className="text-xs font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                  Select Design Style
                </span>
                <span className="text-[10px] text-[var(--color-gold)] font-medium bg-[var(--color-light-beige)] px-2 py-0.5 rounded">
                  4 Options
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="border-2 border-[var(--color-gold)] rounded-lg p-2 bg-[#FBF9F5] text-center">
                  <div className="w-full h-8 bg-[#302B27] rounded mb-1.5 flex items-center justify-center text-[9px] text-[#FDFDFC] font-serif">
                    Aa
                  </div>
                  <span className="text-[10px] font-medium text-[var(--color-dark-text)] block truncate">Editorial</span>
                </div>
                <div className="border border-[var(--color-border)] rounded-lg p-2 bg-[#FBF9F5] text-center opacity-70">
                  <div className="w-full h-8 bg-[#C4A882] rounded mb-1.5 flex items-center justify-center text-[9px] text-white font-serif">
                    🌸
                  </div>
                  <span className="text-[10px] font-medium text-[var(--color-dark-text)] block truncate">Floral</span>
                </div>
                <div className="border border-[var(--color-border)] rounded-lg p-2 bg-[#FBF9F5] text-center opacity-70">
                  <div className="w-full h-8 bg-[#6B7F5E] rounded mb-1.5 flex items-center justify-center text-[9px] text-white font-serif">
                    🌿
                  </div>
                  <span className="text-[10px] font-medium text-[var(--color-dark-text)] block truncate">Botanical</span>
                </div>
                <div className="border border-[var(--color-border)] rounded-lg p-2 bg-[#FBF9F5] text-center opacity-70">
                  <div className="w-full h-8 bg-[#1A1A2E] rounded mb-1.5 flex items-center justify-center text-[9px] text-white font-serif">
                    Modern
                  </div>
                  <span className="text-[10px] font-medium text-[var(--color-dark-text)] block truncate">Modern</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-3">
              {STEPS[0].title}
            </h3>
            <p className="text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
              {STEPS[0].description}
            </p>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col bg-[var(--color-secondary-bg)] rounded-2xl border border-[var(--color-border)] p-6 md:p-8 relative overflow-hidden group hover:border-[var(--color-gold)]/50 transition-all duration-300">
            {/* Step Number in Gold */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl md:text-5xl font-extrabold text-[var(--color-gold)] font-[family-name:var(--font-bricolage)]">
                02
              </span>
              <div className="w-9 h-9 rounded-full bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)]">
                <Sliders className="w-4 h-4" />
              </div>
            </div>

            {/* Visual Mockup for Step 2: Editor preview */}
            <div className="h-44 w-full bg-[var(--color-primary-bg)] rounded-xl border border-[var(--color-border)] p-4 flex flex-col justify-center mb-6 shadow-sm">
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] text-[var(--color-secondary-text)] mb-1">
                    <span>Couple Names</span>
                    <span className="text-[var(--color-gold)]">Saved</span>
                  </div>
                  <div className="h-7 bg-[var(--color-secondary-bg)] border border-[var(--color-border)] rounded px-2.5 flex items-center text-xs font-serif text-[var(--color-dark-text)]">
                    Sophia &amp; Alexander
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-[var(--color-secondary-text)] mb-1">
                    <span>Wedding Date &amp; Location</span>
                  </div>
                  <div className="h-7 bg-[var(--color-secondary-bg)] border border-[var(--color-border)] rounded px-2.5 flex items-center text-[11px] text-[var(--color-secondary-text)]">
                    June 19, 2027 • Tuscany, Italy
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pt-1 text-[10px] text-[var(--color-gold)]">
                  <Check className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Real-time instant preview enabled</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-3">
              {STEPS[1].title}
            </h3>
            <p className="text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
              {STEPS[1].description}
            </p>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col bg-[var(--color-secondary-bg)] rounded-2xl border border-[var(--color-border)] p-6 md:p-8 relative overflow-hidden group hover:border-[var(--color-gold)]/50 transition-all duration-300">
            {/* Step Number in Gold */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl md:text-5xl font-extrabold text-[var(--color-gold)] font-[family-name:var(--font-bricolage)]">
                03
              </span>
              <div className="w-9 h-9 rounded-full bg-[var(--color-light-beige)] flex items-center justify-center text-[var(--color-gold)]">
                <Share2 className="w-4 h-4" />
              </div>
            </div>

            {/* Visual Mockup for Step 3: Share Link & RSVP */}
            <div className="h-44 w-full bg-[var(--color-primary-bg)] rounded-xl border border-[var(--color-border)] p-4 flex flex-col justify-center mb-6 shadow-sm">
              <div className="rounded-lg bg-[var(--color-light-beige)]/60 border border-[var(--color-border)] p-2.5 mb-3 flex items-center justify-between">
                <span className="text-xs text-[var(--color-dark-text)] font-mono truncate mr-2">
                  eventful.page/sophia-alexander
                </span>
                <span className="p-1 rounded bg-white text-[var(--color-gold)] shadow-xs shrink-0">
                  <Copy className="w-3 h-3" />
                </span>
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-[var(--color-dark-text)] font-medium">Collecting RSVPs</span>
                </div>
                <span className="text-xs font-bold text-[var(--color-gold)] font-[family-name:var(--font-bricolage)]">
                  96 Confirmed
                </span>
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-3">
              {STEPS[2].title}
            </h3>
            <p className="text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed">
              {STEPS[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

