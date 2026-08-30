import { FORM_HEADING, FORM_LEDE, HERO_CTA_LABEL } from "@/lib/content";
import { LeadForm } from "./LeadForm";
import { ViewOnce } from "./ViewOnce";

export function HeroLeadForm() {
  return (
    <ViewOnce event="hero_form_view" storageKey="bridgelands_towns_hero_form_view">
      <LeadForm
        id="hero-register-form"
        compact
        inlineSuccess
        heading={FORM_HEADING}
        lede={FORM_LEDE}
        submitLabel={HERO_CTA_LABEL}
      />
    </ViewOnce>
  );
}
