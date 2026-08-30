import Link from "next/link";
import {
  CTA_LABEL,
  FOOTER_BLURB,
  HUB_URL,
  INDEPENDENCE_DISCLAIMER,
  NAV,
  SIBLING_SITES,
} from "@/lib/content";
import { LastUpdated } from "./Disclaimer";
import { Wordmark } from "./Wordmark";
import { CtaLink } from "./CtaLink";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-surface pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark inverted />
            <p className="mt-5 max-w-[36ch] text-sm text-surface/75">{FOOTER_BLURB}</p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow !text-brand-accent">Explore</p>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-surface/90 hover:text-surface">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CtaLink
                  href="/register"
                  location="footer"
                  variant="text"
                  className="text-surface/90 hover:text-surface"
                >
                  Register for VIP Access
                </CtaLink>
              </li>
              <li>
                <a
                  href={HUB_URL}
                  className="text-surface/90 hover:text-surface"
                >
                  Full Bridgelands hub
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <p className="eyebrow !text-brand-accent">VIP registration</p>
            <p className="mt-4 text-sm text-surface/80">
              The registration form is the sole contact mechanism on this site. There is no phone
              number and no named representative. Registration is free and creates no purchase
              obligation.
            </p>
            <p className="mt-6">
              <CtaLink
                href="/register"
                location="footer"
                variant="text"
                className="text-brand-accent hover:underline"
              >
                {CTA_LABEL}
              </CtaLink>
            </p>
            <LastUpdated className="mt-6 !text-surface/70" />
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="eyebrow !text-brand-accent">Related independent sites</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {SIBLING_SITES.map((site) => (
              <li key={site.domain}>
                <a href={site.url} className="text-surface/80 hover:text-surface hover:underline">
                  {site.domain}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 space-y-4">
          <p className="max-w-[78ch] text-sm text-surface/80">{INDEPENDENCE_DISCLAIMER}</p>
          <p className="text-sm text-surface/60">E.&O.E.</p>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/privacy" className="text-surface/80 hover:text-surface hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-surface/80 hover:text-surface hover:underline">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
