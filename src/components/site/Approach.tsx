import { Gift, MessageCircleHeart, PenLine, Sparkles } from "lucide-react";

import giftDetail from "@/assets/photos/house-of-amarah-gift-detail.webp.asset.json";
import { GENERAL_ENQUIRY_MESSAGE, whatsappLink } from "@/lib/whatsapp";

const STEPS = [
  {
    icon: MessageCircleHeart,
    title: "Tell us the moment",
    text: "Who it is for, the occasion, and the feeling you want them to carry.",
  },
  {
    icon: Sparkles,
    title: "We curate with care",
    text: "Scents, stories and keepsakes chosen to suit them — and your budget.",
  },
  {
    icon: PenLine,
    title: "Made personal",
    text: "Names, notes and little details added by hand, in your own words.",
  },
  {
    icon: Gift,
    title: "Ready to give",
    text: "Wrapped, ribboned and finished so it feels special from the first glance.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 bg-card">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
        <div className="relative lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-stone lg:sticky lg:top-28">
            <img
              src={giftDetail.url}
              alt="A bouquet finished with a soft ribbon"
              width={1600}
              height={892}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow text-terracotta">Our bespoke gifting approach</p>
          <h2 className="mt-5 text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            It starts with <em className="italic text-rose">what matters to you.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The person. The occasion. The feeling you want them to carry. We start there, and take
            care of all the lovely little details together.
          </p>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {STEPS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-6 py-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="font-serif text-2xl text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tell us what you have in mind
          </a>
        </div>
      </div>
    </section>
  );
}
