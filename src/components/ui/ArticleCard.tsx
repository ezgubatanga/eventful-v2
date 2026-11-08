import type { ArticleData } from "@/lib/constants";

interface ArticleCardProps {
  article: ArticleData;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group cursor-default">
      {/* Image placeholder */}
      <div
        className={`aspect-[16/10] rounded-xl mb-4 bg-gradient-to-br ${article.imageGradient} border border-[var(--color-border)] overflow-hidden relative`}
      >
        {/* Decorative content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-10 h-px bg-[var(--color-gold)] mx-auto mb-3" />
            <p className="font-[family-name:var(--font-bricolage)] text-sm text-[var(--color-dark-text)]/40 font-medium">
              Eventful Journal
            </p>
            <div className="w-10 h-px bg-[var(--color-gold)] mx-auto mt-3" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium text-[var(--color-gold)] uppercase tracking-wider font-[family-name:var(--font-outfit)]">
            {article.category}
          </span>
          <span className="text-xs text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)]">
            {article.readTime}
          </span>
        </div>
        <h3 className="text-base font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)] mb-2 leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-[var(--color-secondary-text)] font-[family-name:var(--font-outfit)] leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}
