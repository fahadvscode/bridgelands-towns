import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PageHeader, Section } from "@/components/LayoutBits";
import { PAGE_META, REGISTER_PAGE_ANSWER } from "@/lib/content";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { metadataByKey } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata = metadataByKey.register();

export default function RegisterPage() {
  const meta = PAGE_META.register;
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
          { name: "Register", path: "/register" },
        ])}
      />
      <PageHeader h1={meta.h1} />
      <Section labelledBy="answer">
        <AnswerFirstSummary heading="How do I register for VIP access to Bridgelands townhomes?">
          {REGISTER_PAGE_ANSWER}
        </AnswerFirstSummary>
        <div className="mt-10 max-w-xl">
          <LeadForm id="register-page-form" heading="VIP registration" />
        </div>
      </Section>
    </>
  );
}
