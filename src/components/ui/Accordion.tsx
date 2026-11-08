"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/constants";

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[var(--color-border)]">
      {items.map((item, index) => (
        <div key={index} className="group">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-5 md:py-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 rounded-sm"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <span className="text-base md:text-lg font-medium text-[var(--color-dark-text)] font-[family-name:var(--font-outfit)] pr-8 leading-snug">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[var(--color-secondary-text)] shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              strokeWidth={1.5}
            />
          </button>
          <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-out ${
              openIndex === index ? "max-h-96 opacity-100 pb-5 md:pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm md:text-base text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed pr-12">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
