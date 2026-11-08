import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[var(--color-primary-bg)]"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          heading="A few details before you get started."
          description="Everything you need to know about designing, publishing, and managing your digital wedding invitation with Eventful."
        />

        <div className="max-w-3xl mx-auto bg-[var(--color-secondary-bg)] rounded-2xl border border-[var(--color-border)] p-6 sm:p-10 shadow-sm">
          <Accordion items={FAQ_ITEMS} />
        </div>

        {/* Support Note */}
        <div className="text-center mt-10">
          <p className="text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
            Have a question not answered here?{" "}
            <span className="text-[var(--color-gold)] font-medium">
              We are here to help make your wedding planning seamless.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

