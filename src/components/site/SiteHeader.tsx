import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/house-of-amarah-logo.png";

import { useInquiry } from "./InquiryProvider";

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Offerings", href: "#offerings" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { openInquiry } = useInquiry();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl sm:h-20 items-center justify-between gap-6 px-5 md:px-8">
        <a href="#home" className="shrink-0" aria-label="House of Amarah — home">
          <img
            src={logo}
            alt="House of Amarah"
            width={1929}
            height={440}
            className="h-9 w-auto sm:h-11 md:h-12"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-foreground/75 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-rose after:transition-all hover:text-foreground hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openInquiry()}
            aria-haspopup="dialog"
            className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Make an inquiry
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background md:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 font-serif text-2xl text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openInquiry();
              }}
              aria-haspopup="dialog"
              className="mt-4 inline-flex justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Make an inquiry
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
