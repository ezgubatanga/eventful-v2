import Image from "next/image";
import {
  FOOTER_PRODUCT_LINKS,
  FOOTER_THEME_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/lib/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[var(--color-secondary-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)] py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo.webp"
              alt="Eventful"
              width={120}
              height={32}
              className="h-7 w-auto mb-4"
            />
            <p className="text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed max-w-xs">
              Create beautiful digital wedding invitations with online RSVPs.
              Design, share, and celebrate — all in one place.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Themes */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] mb-4">
              Themes
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_THEME_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] transition-colors duration-200"
                  >
                    {/* Placeholder links */}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
            © {currentYear} Eventful. All rights reserved.
          </p>
          <a
            href="#"
            className="text-xs text-[var(--color-secondary-text)] hover:text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] transition-colors duration-200"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
