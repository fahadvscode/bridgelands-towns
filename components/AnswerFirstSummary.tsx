export function AnswerFirstSummary({
  heading,
  children,
}: {
  heading: string;
  children: string;
}) {
  return (
    <div className="card border-l-[3px] border-l-brand-accent p-5 md:p-7">
      <h2 className="font-display text-xl font-semibold text-brand-deep md:text-2xl">{heading}</h2>
      <p className="prose-measure mt-4 text-text-primary">{children}</p>
    </div>
  );
}
