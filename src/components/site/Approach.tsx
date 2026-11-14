import { ArrowRight, Gift, MessageCircle, MessageCircleHeart, PenLine, Sparkles } from "lucide-react";

import giftDetail from "@/assets/photos/house-of-amarah-gift-detail.webp.asset.json";

import { useInquiry } from "./InquiryProvider";

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
  const { openInquiry } = useInquiry();
  return (
    <section id="approach" className="scroll-mt-20 bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12 lg:gap-14 lg:py-28">
        <div className="relative lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="aspect-[4/3] overflow-hidden bg-stone sm:aspect-[16/10] lg:aspect-[4/5]">
              <img
                src={giftDetail.url}
                alt="A bouquet finished with a soft ribbon"
                width={1600}
                height={892}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 font-serif text-lg italic text-muted-foreground">
              A little care goes a long way.
            </p>
          </div>
        </div>
        <div className="min-w-0 lg:col-span-6 lg:col-start-7">
          <p className="eyebrow text-terracotta">Our bespoke gifting approach</p>
          <h2 className="mt-5 text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            It starts with <em className="italic text-rose">what matters to you.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            The person. The occasion. The feeling you want them to carry. We start there, and take
            care of all the lovely little details together.
          </p>

          <ul className="mt-10 grid border-y border-border sm:grid-cols-2 sm:gap-x-8 lg:mt-12 lg:grid-cols-1">
            {STEPS.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-4 border-b border-border py-5 last:border-b-0 sm:gap-5 sm:py-6 sm:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-last-child(2)]:border-b"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground sm:h-11 sm:w-11">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <div className="min-w-0">
                  <p className="font-serif text-xl text-foreground sm:text-2xl">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 bg-background p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <p className="eyebrow text-[0.65rem] text-terracotta">Bespoke gifting</p>
            <p className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Let&rsquo;s make it <em className="italic text-rose">meaningful.</em>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell us a little about the person and the occasion. We will reply on WhatsApp with
              ideas, details and prices.
            </p>
            <button
              type="button"
              onClick={() => openInquiry()}
              aria-haspopup="dialog"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[var(--shadow-soft)] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Tell us what you have in mind
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
