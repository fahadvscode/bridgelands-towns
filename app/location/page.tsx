import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { ComparisonTable } from "@/components/ComparisonTable";
import { JsonLd } from "@/components/JsonLd";
import {
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { LocationMap } from "@/components/LocationMap";
import {
  COMPARISON_INTRO,
  HUB_LOCATION_URL,
  LOCATION_ANSWER,
  LOCATION_AREA_BODY,
  LOCATION_COMPARE_ANSWER,
  LOCATION_RECREATION,
  LOCATION_SCHOOLS,
  LOCATION_SHOPPING,
  LOCATION_TRANSIT,
  LOCATION_TRANSIT_BODY,
  PAGE_META,
} from "@/lib/content";
import { breadcrumbSchema, placeSchema, webPageSchema } from "@/lib/schema";
import { metadataByKey } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata = metadataByKey.location();

export default function LocationPage() {
  const meta = PAGE_META.location;
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={placeSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Location", path: "/location" },
        ])}
      />
      <PageHeader h1={meta.h1} />
      <Section labelledBy="answer">
        <AnswerFirstSummary heading="Where are Bridgelands townhomes located?">
          {LOCATION_ANSWER}
        </AnswerFirstSummary>
        <div className="mt-8">
          <AnswerFirstSummary heading="How do Bridgelands townhomes compare to SouthCal's townhomes?">
            {LOCATION_COMPARE_ANSWER}
          </AnswerFirstSummary>
        </div>
      </Section>
      <Section alt labelledBy="map">
        <SectionHeading id="map">Map — Weston Road & Teston Road</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          The map is centered on the intersection cited for Bridgelands. An exact civic address
          and legal description have not been independently confirmed.
        </p>
        <div className="mt-8">
          <LocationMap />
        </div>
      </Section>
      <Section labelledBy="transit">
        <SectionHeading id="transit">Transit and highways</SectionHeading>
        <div className="mt-6">
          <Prose>
            <p>{LOCATION_TRANSIT}</p>
            {LOCATION_TRANSIT_BODY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="shopping">
        <SectionHeading id="shopping">Shopping and healthcare</SectionHeading>
        <div className="mt-6">
          <Prose>
            <p>{LOCATION_SHOPPING}</p>
            {LOCATION_AREA_BODY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="schools">
        <SectionHeading id="schools">Schools near Bridgelands townhomes</SectionHeading>
        <div className="mt-6">
          <Prose>
            <p>{LOCATION_SCHOOLS}</p>
            <p>
              <TextLink href={HUB_LOCATION_URL} external>
                Full location breakdown on the Bridgelands hub
              </TextLink>
              , including parks, recreation, and the complete school and healthcare context.
            </p>
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="recreation">
        <SectionHeading id="recreation">Recreation nearby</SectionHeading>
        <div className="mt-6">
          <Prose>
            <p>{LOCATION_RECREATION}</p>
          </Prose>
        </div>
      </Section>
      <Section labelledBy="compare">
        <SectionHeading id="compare">
          Bridgelands townhomes vs. the trio&apos;s other townhome communities
        </SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">{COMPARISON_INTRO}</p>
        <div className="mt-8">
          <ComparisonTable />
        </div>
        <p className="mt-8 max-w-[62ch] text-text-primary">
          <TextLink href="/collections">Read the expected collection</TextLink>
          {" · "}
          <TextLink href="/register">Register for VIP access</TextLink>
        </p>
      </Section>
      <PageFootForm formId="location-register" />
    </>
  );
}
