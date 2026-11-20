import { useState } from "react";

import { PHOTOS, type Photo } from "@/lib/photos";
import { formatPrice, GIFTS_STARTING_PRICE, startingPriceLabel } from "@/lib/pricing";
import { cn } from "@/lib/utils";

import { AskPriceButton } from "./AskPriceButton";
import { PhotoFigure } from "./PhotoFigure";

type Category = "bouquets" | "frames" | "personalised";

type Keepsake = {
  name: string;
  category: Category;
  tag: string;
  text: string;
  photo: Photo;
  alt: string;
  fromPrice: number;
};

const KEEPSAKES: Keepsake[] = [
  {
    name: "Candle Bouquet",
    category: "bouquets",
    tag: "Hand-poured",
    text: "Rose-shaped candle blooms gathered in a gift bag and tied with ribbon — flowers that glow.",
    photo: PHOTOS.candleBouquet,
    alt: "A basket of hand-poured blue, white and peach rose candles tied with a ribbon",
    fromPrice: GIFTS_STARTING_PRICE,
  },
  {
    name: "Chocolate Bouquet",
    category: "bouquets",
    tag: "Sweet treat",
    text: "Chocolates and dried flowers wrapped together for the sweetest kind of hello.",
    photo: PHOTOS.chocolateBouquet,
    alt: "A bouquet of foil-wrapped chocolates with dried flowers and a satin ribbon",
    fromPrice: GIFTS_STARTING_PRICE,
  },
  {
    name: "Photo Frames",
    category: "frames",
    tag: "Personalised",
    text: "Your favourite photograph, framed in warm wood and ready to keep.",
    photo: PHOTOS.photoFrames,
    alt: "Two wooden photo frames with family photographs on a linen shelf",
    fromPrice: GIFTS_STARTING_PRICE,
  },
  {
    name: "Miniature Frames",
    category: "frames",
    tag: "Palm-sized",
    text: "Tiny frames for tiny moments — lovely as keepsakes, favours or little surprises.",
    photo: PHOTOS.miniatureFrames,
    alt: "Palm-sized brass and wooden miniature photo frames held in a hand",
    fromPrice: GIFTS_STARTING_PRICE,
  },
  {
    name: "LED Frames",
    category: "frames",
    tag: "Softly lit",
    text: "Your favourite photos, softly lit — made for anniversaries, birthdays and cosy evenings.",
    photo: PHOTOS.ledFrames,
    alt: "A personalised Happy Anniversary photo collage in a glowing LED frame",
    fromPrice: GIFTS_STARTING_PRICE,
  },
  {
    name: "Photo Mugs",
    category: "personalised",
    tag: "Everyday keepsake",
    text: "A favourite face on a morning mug — for coffee, tea and smiles.",
    photo: PHOTOS.photoMugs,
    alt: "A ceramic mug printed with a family photograph beside a gift box",
    fromPrice: GIFTS_STARTING_PRICE,
  },
  {
    name: "Customised Cards",
    category: "personalised",
    tag: "Handmade",
    text: "Handmade cards with your words, names and little details, finished by hand.",
    photo: PHOTOS.customCards,
    alt: "A personalised Happy Birthday name card with a candle flower gift bag",
    fromPrice: GIFTS_STARTING_PRICE,
  },
  {
    name: "Customised Perfumes",
    category: "personalised",
    tag: "Made personal",
    text: "A fragrance finished with their name and a ribbon — a gift that lingers.",
    photo: PHOTOS.customPerfumes,
    alt: "A glass perfume bottle with a blank label and a blush ribbon among rose petals",
    fromPrice: GIFTS_STARTING_PRICE,
  },
];

const FILTERS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bouquets", label: "Bouquets" },
  { id: "frames", label: "Frames" },
  { id: "personalised", label: "Personalised" },
];

export function Keepsakes() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const items = filter === "all" ? KEEPSAKES : KEEPSAKES.filter((k) => k.category === filter);

  return (
    <div className="pt-24 lg:pt-28">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <p className="eyebrow text-terracotta">Bouquets, frames &amp; personalised gifts</p>
          <h3 className="mt-4 text-4xl text-foreground md:text-5xl">
            Little keepsakes, <em className="italic text-rose">made personal</em>
          </h3>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Thoughtful gifts starting from{" "}
            <span className="font-medium text-foreground">{formatPrice(GIFTS_STARTING_PRICE)}</span> —
            each one finished around your person and your moment.
          </p>
        </div>
        <div
          role="group"
          aria-label="Filter keepsakes"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:px-0"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors",
                filter === f.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground/80 hover:border-foreground/50",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 lg:mt-12 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
        {items.map((k) => (
          <li key={k.name} className="flex min-w-0 flex-col">
            <PhotoFigure
              photo={k.photo}
              alt={k.alt}
              tag={k.tag}
              sizes="(min-width: 1280px) 300px, (min-width: 1024px) 23vw, (min-width: 768px) 31vw, 50vw"
              className="aspect-[4/5]"
            />
            <div className="flex flex-1 flex-col pt-4">
              <h4 className="font-serif text-xl leading-tight text-foreground sm:text-2xl">
                {k.name}
              </h4>
              <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-terracotta">
                {startingPriceLabel(k.fromPrice)}
              </p>
              <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {k.text}
              </p>
              <div className="mt-4">
                <AskPriceButton product={k.name} variant="outline" size="sm" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
