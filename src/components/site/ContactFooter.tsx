import { ArrowUp, Instagram, MessageCircle, Phone } from "lucide-react";

import logoLight from "@/assets/house-of-amarah-logo-light.png";
import { Button } from "@/components/ui/button";
import {
  CONTACT_NUMBERS,
  GENERAL_ENQUIRY_MESSAGE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  whatsappLink,
} from "@/lib/whatsapp";

import { NAV_ITEMS } from "./SiteHeader";

export function ContactFooter() {
  const wa = whatsappLink(GENERAL_ENQUIRY_MESSAGE);
  return (
    <footer id="contact" className="scroll-mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-ink-muted">A lovely thing starts with hello</p>
            <h2 className="mt-5 text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Have a moment <em className="italic text-accent">in mind?</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              Message us on WhatsApp with the occasion and who it is for — we will reply with ideas,
              details and prices. We deliver across the UK.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
            <div className="mb-2 flex flex-col items-start gap-3">
              {CONTACT_NUMBERS.map((number) => (
                <a
                  key={number.digits}
                  href={`tel:+${number.digits}`}
                  className="contact-number inline-flex min-h-11 items-center gap-3 text-base text-ink-foreground underline-offset-4 hover:underline"
                >
                  <Phone className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.5} />
                  {number.label}
                </a>
              ))}
            </div>
            <Button asChild className="studio-hover h-auto rounded-sm bg-accent px-6 py-4 text-sm font-medium text-accent-foreground hover:bg-accent/90">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Enquire on WhatsApp
            </a>
            </Button>
            <Button asChild variant="outline" className="studio-hover h-auto rounded-sm border-ink-foreground/25 bg-transparent px-6 py-4 text-sm font-medium text-ink-foreground hover:border-ink-foreground hover:bg-ink-foreground/5 hover:text-ink-foreground">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              {INSTAGRAM_HANDLE}
            </a>
            </Button>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-10 border-t border-ink-foreground/15 pt-10 md:flex-row md:items-center md:justify-between">
          <img
            src={logoLight}
            alt="House of Amarah"
            width={1929}
            height={440}
            loading="lazy"
            className="h-10 w-auto"
          />
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-muted" aria-label="Footer">
            {NAV_ITEMS.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-ink-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="House of Amarah on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/25 transition-colors hover:border-ink-foreground"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message House of Amarah on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/25 transition-colors hover:border-ink-foreground"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} House of Amarah. Thoughtfully made, with love. Delivering across the UK.</p>
          <a href="#home" className="inline-flex items-center gap-1 hover:text-ink-foreground">
            Back to the beginning <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
