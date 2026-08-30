import Image from "next/image";
import {
  HERO_EYEBROW,
  HERO_IMAGE,
  HERO_SUBHEAD,
  PAGE_META,
  STATUS_BADGE,
} from "@/lib/content";
import { CtaLink } from "./CtaLink";
import { HeroLeadForm } from "./HeroLeadForm";

export function Hero() {
  const meta = PAGE_META.home;
  return (
    <section className="relative overflow-hidden bg-brand-deep">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HERO_IMAGE.src}
          alt=""
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/92 to-brand-primary/55" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(ellipse_at_right,_rgba(217,96,59,0.22),_transparent_60%)] lg:block" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-start gap-6 px-4 pb-8 pt-6 sm:px-5 md:gap-8 md:pb-14 md:pt-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-20 lg:pt-16">
        <div>
          <p className="eyebrow !text-brand-accent">{HERO_EYEBROW}</p>
          <p className="badge-status mt-3">{STATUS_BADGE}</p>
          <h1 className="mt-4 max-w-[18ch] font-display font-semibold text-surface text-[clamp(1.75rem,5.5vw,3.5rem)] leading-[1.12]">
            {meta.h1}
          </h1>
          <p className="mt-3 max-w-[46ch] text-[15px] text-surface/90 md:mt-5 md:text-lg">
            {HERO_SUBHEAD}
          </p>
          <div className="mt-6 hidden lg:block">
            <CtaLink href="/collections" location="hero_secondary" variant="ghost">
              View the Collection
            </CtaLink>
          </div>
        </div>
        <div id="hero-register" className="scroll-mt-28 min-w-0 w-full lg:max-w-lg lg:justify-self-end">
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}
