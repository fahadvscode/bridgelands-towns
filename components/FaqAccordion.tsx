import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <article key={`${index}-${item.q}`} className="card p-5 md:p-6">
          <h2 className="font-display text-xl font-semibold text-brand-deep md:text-2xl">
            {item.q}
          </h2>
          <p className="prose-measure mt-4 text-text-primary">{item.a}</p>
        </article>
      ))}
    </div>
  );
}
