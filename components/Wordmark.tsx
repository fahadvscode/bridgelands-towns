import Link from "next/link";
import { WORDMARK, WORDMARK_LOCATOR } from "@/lib/content";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex flex-col">
      <span
        className={`font-display text-[1.25rem] font-semibold leading-none tracking-tight md:text-[1.45rem] ${
          inverted ? "text-surface" : "text-brand-deep"
        }`}
      >
        {WORDMARK}
      </span>
      <span className="mt-1.5 block h-px w-12 bg-brand-accent" aria-hidden="true" />
      <span
        className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
          inverted ? "text-surface/70" : "text-text-muted"
        }`}
      >
        {WORDMARK_LOCATOR}
      </span>
    </span>
  );
}

export function WordmarkLink({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" aria-label={`${WORDMARK} home`}>
      <Wordmark inverted={inverted} />
    </Link>
  );
}
