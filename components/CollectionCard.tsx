"use client";

import { CtaLink } from "./CtaLink";
import { ViewOnce } from "./ViewOnce";

export function CollectionCard({
  slug,
  name,
  status,
  body,
}: {
  slug: string;
  name: string;
  status: string;
  body: string;
}) {
  return (
    <ViewOnce
      event="collection_card_view"
      params={{ collection: slug }}
      storageKey={`bridgelands_towns_collection_${slug}`}
    >
      <article className="card p-5 md:p-7">
        <p className="eyebrow">Expected collection</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-brand-deep">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-brand-accent">{status}</p>
        <p className="mt-4 text-text-primary">{body}</p>
        <CtaLink href="/register" location={`collection_${slug}`} className="mt-6">
          Register for release notification
        </CtaLink>
      </article>
    </ViewOnce>
  );
}
