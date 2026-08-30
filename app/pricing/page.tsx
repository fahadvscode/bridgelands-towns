import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { JsonLd } from "@/components/JsonLd";
import {
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { PricingTable } from "@/components/PricingTable";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import {
  PAGE_META,
  PRICING_ANSWER,
  PRICING_BODY,
  PRICING_DEPOSIT_ANSWER,
  PRICING_HOW_TO_READ,
  UNVERIFIED_NOTE,
} from "@/lib/content";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { metadataByKey } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata = metadataByKey.pricing();

export default function PricingPage() {
  const meta = PAGE_META.pricing;
  return (
    <>
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
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHeader h1={meta.h1} />
      <Section labelledBy="answer">
        <AnswerFirstSummary heading="How much do Bridgelands townhomes cost?">
          {PRICING_ANSWER}
        </AnswerFirstSummary>
        <div className="mt-8">
          <AnswerFirstSummary heading="Is there a deposit structure for Bridgelands townhomes?">
            {PRICING_DEPOSIT_ANSWER}
          </AnswerFirstSummary>
        </div>
      </Section>
      <Section alt labelledBy="status">
        <SectionHeading id="status">Pricing status table</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          Every commercial field below is unpublished as of August 29, 2026. This table exists so
          townhome buyers can see the current status in one place rather than a gated sheet.
        </p>
        <div className="mt-8">
          <PricingTable />
        </div>
        <SpecsDisclaimer className="mt-6" />
      </Section>
      <Section labelledBy="context">
        <SectionHeading id="context">How to read townhome pricing before a launch</SectionHeading>
        <div className="mt-6">
          <Prose>
            {PRICING_BODY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>{UNVERIFIED_NOTE} Dollar amounts, deposit months, occupancy, and any assignment or parking credits should be treated as unconfirmed until they appear in a builder price list or an Agreement of Purchase and Sale.</p>
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="read">
        <SectionHeading id="read">What “to be announced” means for a townhome buyer</SectionHeading>
        <div className="mt-6">
          <Prose>
            {PRICING_HOW_TO_READ.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              <TextLink href="/register">
                Register to be notified when townhome pricing is released
              </TextLink>
              . Registration does not lock a price and does not collect a deposit through this
              site.
            </p>
          </Prose>
        </div>
      </Section>
      <PageFootForm formId="pricing-register" />
    </>
  );
}
