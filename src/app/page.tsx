import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Themes } from "@/components/sections/Themes";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { GuestManagement } from "@/components/sections/GuestManagement";
import { AnyDevice } from "@/components/sections/AnyDevice";
import { Pricing } from "@/components/sections/Pricing";
import { Articles } from "@/components/sections/Articles";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-primary-bg)] text-[var(--color-dark-text)] antialiased selection:bg-[var(--color-gold)]/20 selection:text-[var(--color-dark-text)]">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Themes Section */}
        <Themes />

        {/* 4. How It Works Section */}
        <HowItWorks />

        {/* 5. Features Section */}
        <Features />

        {/* 6. Guest Management Section */}
        <GuestManagement />

        {/* 7. Any Device Section */}
        <AnyDevice />

        {/* 8. Pricing Section */}
        <Pricing />

        {/* 9. Articles / Inspiration Section */}
        <Articles />

        {/* 10. Frequently Asked Questions Section */}
        <FAQ />

        {/* 11. Final Call To Action Section */}
        <FinalCTA />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
