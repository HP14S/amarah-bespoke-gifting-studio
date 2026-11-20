import { ArrowUpRight, Check, Instagram } from "lucide-react";

import { INSTAGRAM_URL } from "@/lib/whatsapp";

import { PHOTOS } from "@/lib/photos";
import { formatPrice, GIFTS_STARTING_PRICE } from "@/lib/pricing";

import { AskPriceButton } from "./AskPriceButton";
import { Keepsakes } from "./Keepsakes";
import { PhotoFigure as Figure } from "./PhotoFigure";

const HAMPERS = [
  {
    name: "Return Gifts",
    eyebrow: "A thank-you to take home",
    text: "Sweet little favours for birthdays, naming ceremonies and gatherings — packed with care for every guest.",
    tag: "Made for sharing",
    photo: PHOTOS.returnGifts,
    alt: "A little teddy bear keepsake in a glass globe, wrapped with tulle and ribbon",
  },
  {
    name: "Custom Hampers",
    eyebrow: "Made for them",
    text: "Personalised collections put together around your person, your occasion and your budget.",
    tag: "Bespoke",
    photo: PHOTOS.customHamper,
    alt: "A custom gift box filled with soft toys, a diary and little treats",
  },
  {
    name: "Festival Hampers",
    eyebrow: "For the celebration",
    text: "Festive keepsakes and cheerful seasonal surprises, made to share a little joy with family and friends.",
    tag: "Festive edit",
    photo: PHOTOS.festivalHamper,
    alt: "A festive hamper with a candle, brass diya and marigolds",
  },
];

export function Offerings() {
  return (
    <section id="offerings" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 border-b border-border pb-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow text-terracotta">Made to mean something</p>
            <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
              Our <em className="italic text-rose">offerings</em>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:justify-self-end md:text-right">
            Each offering has its own little story — candles, books, bouquets, frames and
            personalised keepsakes, with gifts starting from {formatPrice(GIFTS_STARTING_PRICE)}.
          </p>
        </div>

        {/* Candles — editorial collage */}
        <article className="grid gap-5 pt-16 lg:grid-cols-12 lg:gap-8">
          <Figure
            photo={PHOTOS.candlePeony}
            sizes="(min-width: 1280px) 700px, (min-width: 1024px) 56vw, 100vw"
            alt="A hand-poured pink peony candle in a glass, held in hand"
            tag="Hand-poured"
            caption="Peony Bloom"
            className="aspect-[4/5] lg:col-span-7 lg:aspect-auto lg:min-h-[44rem]"
          />
          <div className="flex flex-col gap-5 lg:col-span-5 lg:gap-8">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <Figure
                photo={PHOTOS.candleOrangeBloom}
            sizes="(min-width: 1280px) 240px, (min-width: 1024px) 20vw, 50vw"
                alt="An orange bloom candle on a scalloped base"
                tag="Small batch"
                caption="Orange Bloom"
                className="aspect-[3/4]"
              />
              <Figure
                photo={PHOTOS.candleTeddy}
            sizes="(min-width: 1280px) 240px, (min-width: 1024px) 20vw, 50vw"
                alt="A pink teddy bear candle covered in roses, on a glass dish"
                tag="Signature scent"
                caption="Rose Teddy"
                className="aspect-[3/4]"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center bg-card p-6 sm:p-8 md:p-10">
              <p className="eyebrow text-terracotta">A little atmosphere</p>
              <h3 className="mt-3 text-4xl text-foreground md:text-[2.75rem]">
                Scented &amp; Wellness Candles
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Hand-poured in small batches, with soft, evocative fragrances to make an everyday
                moment feel like yours. From peony blooms to little rose teddies, each one is poured by hand.
              </p>
              <div className="mt-7">
                <AskPriceButton product="Scented & Wellness Candles" />
              </div>
            </div>
          </div>
        </article>

        {/* Books — large image with text beside */}
        <article className="grid items-center gap-10 pt-24 lg:grid-cols-12 lg:gap-14">
          <Figure
            photo={PHOTOS.bookGift}
            sizes="(min-width: 1280px) 700px, (min-width: 1024px) 56vw, 100vw"
            alt="A book-themed gift with a reader in a cosy library"
            tag="Curated Keepsake"
            className="aspect-[4/3] lg:col-span-7"
          />
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta">For the devoted reader</p>
            <h3 className="mt-3 text-4xl text-foreground md:text-5xl">Books &amp; Literary Gifts</h3>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A thoughtful book, a little reading ritual, a literary pairing picked just for them. A
              quiet, lasting kind of gift for people who always have one more chapter in them.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              {["Hand-picked titles to suit the reader", "Bookmarks, notes & reading rituals", "Wrapped like a keepsake"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-rose" strokeWidth={1.5} /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <AskPriceButton product="Books & Literary Gifts" />
            </div>
          </div>
        </article>

        {/* Invitations — tall portrait with details */}
        <article className="grid items-center gap-10 pt-24 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-6 lg:col-start-1">
            <p className="eyebrow text-terracotta">Words worth keeping</p>
            <h3 className="mt-3 text-4xl text-foreground md:text-5xl">
              Custom Invitations &amp; Occasion Gifts
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Personalised invitation letters and keepsakes made for weddings, birthdays,
              ceremonies and all the beautiful in-between moments. Made around your occasion, in
              your own words.
            </p>
            <dl className="mt-8 grid gap-px sm:grid-cols-2 overflow-hidden border border-border bg-border">
              {[
                ["Occasions", "Weddings, birthdays, baptisms, housewarmings"],
                ["Personal touches", "Names, dates, your own words"],
                ["Finishing", "Fine paper, ribbon & wax seals"],
                ["Made for", "Guests, families & keepsake boxes"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-4 sm:p-5">
                  <dt className="eyebrow text-[0.62rem] text-muted-foreground">{k}</dt>
                  <dd className="mt-2 font-serif text-lg leading-snug text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <AskPriceButton product="Custom Invitations & Occasion Gifts" />
            </div>
          </div>
          <Figure
            photo={PHOTOS.occasionLetter}
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw"
            alt="Handmade invitation papers and a letterpress in a garden"
            tag="Personalised"
            className="order-1 aspect-[3/4] w-full lg:order-2 lg:col-span-5 lg:col-start-8 lg:aspect-[2/3]"
          />
        </article>

        {/* Bouquets, frames & personalised gifts — filterable grid */}
        <Keepsakes />

        {/* Hampers — side-by-side cards */}
        <div className="pt-28">
          <div className="text-center">
            <p className="eyebrow text-terracotta">Return gifts &amp; gift hampers</p>
            <h3 className="mt-4 text-4xl text-foreground md:text-5xl">
              Made for <em className="italic text-rose">sharing</em>
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From a personal thank-you to a festive celebration, each hamper is put together with
              care.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {HAMPERS.map((h, i) => (
              <article
                key={h.name}
                className={
                  i === HAMPERS.length - 1
                    ? "flex flex-col bg-card sm:col-span-2 sm:grid sm:grid-cols-2 lg:col-span-1 lg:flex"
                    : "flex flex-col bg-card"
                }
              >
                <Figure
                  photo={h.photo}
                  sizes="(min-width: 1280px) 400px, (min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
                  alt={h.alt}
                  tag={h.tag}
                  className="aspect-[4/5]"
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="eyebrow text-[0.62rem] text-terracotta">{h.eyebrow}</p>
                  <h4 className="mt-2 font-serif text-3xl text-foreground">{h.name}</h4>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {h.text}
                  </p>
                  <div className="mt-6">
                    <AskPriceButton product={h.name} kind="hamper" variant="outline" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-3 border-t border-border pt-12 text-center">
          <p className="font-serif text-2xl italic text-muted-foreground">
            There is always a little more in the studio.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-sm font-medium text-foreground transition-colors hover:border-rose hover:text-rose"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            View more on Instagram
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
