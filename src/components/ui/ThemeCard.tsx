import type { ThemeData } from "@/lib/constants";

interface ThemeCardProps {
  theme: ThemeData;
}

export function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Theme Preview */}
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-[var(--color-border)] bg-[var(--color-secondary-bg)] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[var(--color-gold)]/5 group-hover:border-[var(--color-gold)]/30">
        {/* Decorative invitation mockup */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div
            className="w-full h-full rounded-lg border flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              borderColor: theme.accentColor + "30",
              backgroundColor: theme.palette[1] || "#FDFDFC",
            }}
          >
            {/* Decorative top line */}
            <div
              className="w-12 h-px mb-6"
              style={{ backgroundColor: theme.accentColor }}
            />

            {/* Couple names */}
            <p
              className="font-[family-name:var(--font-bricolage)] text-lg md:text-xl font-semibold mb-1"
              style={{ color: theme.accentColor }}
            >
              Sophia & Alexander
            </p>

            {/* Divider */}
            <div className="flex items-center gap-2 my-3">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: theme.accentColor + "40" }}
              />
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={theme.accentColor + "60"}
                className="shrink-0"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <div
                className="w-6 h-px"
                style={{ backgroundColor: theme.accentColor + "40" }}
              />
            </div>

            {/* Date */}
            <p
              className="text-xs tracking-[0.15em] uppercase font-[family-name:var(--font-outfit)] font-medium"
              style={{ color: theme.accentColor + "90" }}
            >
              June 15, 2027
            </p>

            {/* Venue */}
            <p
              className="text-[11px] font-[family-name:var(--font-outfit)] mt-2"
              style={{ color: theme.accentColor + "60" }}
            >
              The Garden Estate
            </p>

            {/* Bottom decorative line */}
            <div
              className="w-12 h-px mt-6"
              style={{ backgroundColor: theme.accentColor }}
            />

            {/* Pattern overlay based on theme */}
            {theme.bgPattern === "floral" && (
              <div className="absolute top-3 right-3 opacity-15">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill={theme.accentColor}
                >
                  <circle cx="20" cy="10" r="6" />
                  <circle cx="12" cy="18" r="6" />
                  <circle cx="28" cy="18" r="6" />
                  <circle cx="15" cy="27" r="6" />
                  <circle cx="25" cy="27" r="6" />
                  <circle cx="20" cy="19" r="4" />
                </svg>
              </div>
            )}

            {theme.bgPattern === "botanical" && (
              <div className="absolute bottom-3 left-3 opacity-15">
                <svg
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                  fill="none"
                  stroke={theme.accentColor}
                  strokeWidth="1.5"
                >
                  <path d="M20 50V20" />
                  <path d="M20 35C14 30 8 25 8 18C8 11 14 8 20 15" />
                  <path d="M20 28C26 23 32 18 32 11C32 4 26 1 20 8" />
                </svg>
              </div>
            )}

            {theme.bgPattern === "modern" && (
              <div className="absolute top-4 left-4 opacity-10">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  stroke={theme.accentColor}
                  strokeWidth="1"
                >
                  <rect x="2" y="2" width="14" height="14" />
                  <rect x="20" y="2" width="14" height="14" />
                  <rect x="2" y="20" width="14" height="14" />
                  <circle cx="27" cy="27" r="7" />
                </svg>
              </div>
            )}

            {theme.bgPattern === "editorial" && (
              <div className="absolute bottom-4 right-4 opacity-10">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  stroke={theme.accentColor}
                  strokeWidth="1"
                >
                  <line x1="0" y1="0" x2="30" y2="30" />
                  <line x1="10" y1="0" x2="30" y2="20" />
                  <line x1="0" y1="10" x2="20" y2="30" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Theme Info */}
      <div className="px-1">
        <h3 className="text-base font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-1">
          {theme.name}
        </h3>
        <p className="text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] mb-3 leading-relaxed">
          {theme.description}
        </p>

        {/* Color palette dots */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {theme.palette.map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-black/5"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--color-gold)] font-medium font-[family-name:var(--font-outfit)] group-hover:underline underline-offset-2">
            Explore Theme →
          </span>
        </div>
      </div>
    </div>
  );
}
