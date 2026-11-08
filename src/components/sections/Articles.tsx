import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { ARTICLES } from "@/lib/constants";

export function Articles() {
  return (
    <section
      id="articles"
      className="py-20 md:py-28 bg-[var(--color-secondary-bg)] border-y border-[var(--color-border)]"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <SectionHeading
          eyebrow="THE EVENTFUL JOURNAL"
          heading="Ideas for your beautiful beginning."
          description="Guides, etiquette advice, and design inspiration curated by wedding professionals to help you create unforgettable invitations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

