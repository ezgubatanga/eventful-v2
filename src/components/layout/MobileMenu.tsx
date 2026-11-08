"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[var(--color-primary-bg)] z-50 transition-all duration-300 ease-out lg:hidden shadow-xl ${
          isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-border)]">
            <span className="font-[family-name:var(--font-bricolage)] text-lg font-semibold text-[var(--color-dark-text)]">
              Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-[var(--color-secondary-text)] hover:text-[var(--color-dark-text)] cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 px-6 py-6">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 text-base font-[family-name:var(--font-outfit)] text-[var(--color-dark-text)] hover:text-[var(--color-gold)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="px-6 py-6 border-t border-[var(--color-border)]">
            <Button variant="primary" size="lg" className="w-full">
              Start Designing Free
            </Button>
            <p className="text-xs text-center text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] mt-3">
              Design and preview for free. No card needed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
