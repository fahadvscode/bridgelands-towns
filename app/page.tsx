import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import {
  CtaBlock,
  PageFootForm,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { QuickFacts } from "@/components/QuickFacts";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import {
  DETACHED_URL,
  HOME_ANSWER,
  HOME_BUYER_NOTES,
  HOME_OVERVIEW,
  HOME_WHAT_IS_ANSWER,
  HOME_WHY_TOWNS,
  HUB_URL,
  PAGE_META,
} from "@/lib/content";
import {
  breadcrumbSchema,
  imageObjectSchema,
  placeSchema,
  residenceSchema,
  webPageSchema,
} from "@/lib/schema";
import { metadataByKey } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata = metadataByKey.home();

export default function HomePage() {
  const meta = PAGE_META.home;
  return (
    <>
      <JsonLd data={residenceSchema()} />
      <JsonLd data={placeSchema()} />
      <JsonLd data={imageObjectSchema()} />
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <Section labelledBy="answer">
        <AnswerFirstSummary heading="Will Bridgelands have townhomes?">
          {HOME_ANSWER}
        </AnswerFirstSummary>
        <div className="mt-8">
          <AnswerFirstSummary heading="What is Bridgelands and who is building it?">
            {HOME_WHAT_IS_ANSWER}
          </AnswerFirstSummary>
        </div>
      </Section>
      <Section alt labelledBy="facts">
        <SectionHeading id="facts">Bridgelands townhomes at a glance</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          Figures that have not been published by Arista Homes, Deco Homes, or Opus Homes are
          listed as to be announced. A townhome collection is expected, not confirmed.
        </p>
        <div className="mt-8">
          <QuickFacts />
        </div>
        <SpecsDisclaimer className="mt-6" />
      </Section>
      <Section labelledBy="overview">
        <SectionHeading id="overview">Townhome-focused project overview</SectionHeading>
        <div className="mt-6">
          <Prose>
            {HOME_OVERVIEW.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
        <p className="mt-8 max-w-[62ch] text-text-primary">
          <TextLink href="/collections">View the expected collection</TextLink>
          {" · "}
          <TextLink href="/pricing">See townhome pricing status</TextLink>
          {" · "}
          <TextLink href="/register">Register for VIP access</TextLink>
        </p>
      </Section>
      <Section alt labelledBy="why">
        <SectionHeading id="why">Why a townhome-specific resource</SectionHeading>
        <div className="mt-6">
          <Prose>
            {HOME_WHY_TOWNS.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="notes">
        <SectionHeading id="notes">What a townhome buyer can know today</SectionHeading>
        <div className="mt-6">
          <Prose>
            {HOME_BUYER_NOTES.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Detached product, if confirmed, is covered in depth at{" "}
              <TextLink href={DETACHED_URL} external>
                bridgelandsdetached.com
              </TextLink>
              . Builder backgrounds, schools, and the full area guide live on the hub at{" "}
              <TextLink href={HUB_URL} external>
                bridgelands-woodbridge.ca
              </TextLink>
              .
            </p>
          </Prose>
        </div>
      </Section>
      <CtaBlock
        heading="Join the Bridgelands townhome VIP list"
        body="Registration is free and creates no purchase obligation. You will be notified if and when a townhome collection, floor plans, and pricing are released."
        href="/register"
        label="Register for VIP access"
        location="home_mid"
      />
      <PageFootForm formId="home-footer-register" />
    </>
  );
}
