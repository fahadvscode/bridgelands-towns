import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/Disclaimer";
import {
  PageFootForm,
  PageHeader,
  Section,
  TextLink,
} from "@/components/LayoutBits";
import { FAQ_INTRO, FAQS, HUB_URL, PAGE_META } from "@/lib/content";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import { metadataByKey } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata = metadataByKey.faq();

export default function FaqPage() {
  const meta = PAGE_META.faq;
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={faqPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={FAQ_INTRO} />
      <Section labelledBy="faq-list">
        <LastUpdated />
        <p className="mt-4 max-w-[62ch] text-text-muted">
          For the full project overview, including builders and detached homes, see{" "}
          <TextLink href={HUB_URL} external>
            bridgelands-woodbridge.ca
          </TextLink>
          .
        </p>
        <h2 id="faq-list" className="sr-only">
          Questions and answers
        </h2>
        <div className="mt-10">
          <FaqAccordion items={FAQS} />
        </div>
      </Section>
      <PageFootForm formId="faq-register" />
    </>
  );
}
