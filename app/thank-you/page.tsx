import { JsonLd } from "@/components/JsonLd";
import { ThankYouEvents } from "@/components/ThankYouEvents";
import { CtaLink } from "@/components/CtaLink";
import { PageHeader, Section } from "@/components/LayoutBits";
import { PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.thankYou();

export default function ThankYouPage() {
  const meta = PAGE_META.thankYou;
  return (
    <>
      <ThankYouEvents />
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Thank you", path: "/thank-you" },
        ])}
      />
      <PageHeader
        h1={meta.h1}
        lede="You will be notified when Bridgelands townhome floor plans and pricing are released. There is no purchase obligation."
      />
      <Section labelledBy="next">
        <h2 id="next" className="font-display text-2xl font-semibold text-brand-deep">
          While you wait
        </h2>
        <p className="mt-4 max-w-[62ch] text-text-primary">
          The collection, location, and FAQ pages collect the sourced facts available today,
          including how a potential Bridgelands townhome compares with SouthCal and The Castle
          Mile.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href="/faq" location="thank_you">
            Read the FAQ
          </CtaLink>
          <CtaLink href="/collections" location="thank_you_collections">
            View the collection
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
