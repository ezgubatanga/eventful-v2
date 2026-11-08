"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/navigation";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-primary-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)] flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="shrink-0" aria-label="Eventful home">
            <Image
              src="/images/logo.webp"
              alt="Eventful"
              width={120}
              height={32}
              className="h-7 md:h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-[family-name:var(--font-outfit)] text-[var(--color-secondary-text)] hover:text-[var(--color-dark-text)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm">
              Start Designing Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 text-[var(--color-dark-text)] cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
