import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

import hero from "@/assets/photos/house-of-amarah-hero.webp.asset.json";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow flex items-center gap-2 text-foreground/70">
            <Sparkles className="h-3.5 w-3.5 text-rose" strokeWidth={1.5} />
            The art of giving, thoughtfully
          </p>
          <h1 className="mt-6 text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Make the moment <em className="block italic text-rose">mean a little more.</em>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Thoughtful scented candles, gift hampers, books and personalised occasion gifts — chosen
            and arranged with care to celebrate the people and moments that matter.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#offerings"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]"
            >
              Explore our offerings
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              A little about us <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px w-8 bg-rose" />
            Handmade with love
            <span aria-hidden>·</span>
            Made personal for you
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:pl-8">
          <div className="relative ml-auto max-w-xl">
            <div className="absolute -top-6 left-3 z-10 flex h-24 w-24 -rotate-12 items-center justify-center rounded-full border border-border bg-background text-center font-serif text-base italic leading-tight text-foreground shadow-sm md:-left-10 md:h-28 md:w-28 md:text-lg">
              A little
              <br />
              more meaning
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-stone shadow-[var(--shadow-soft)]">
              <img
                src={hero.url}
                alt="Hand-poured candles among flowers and lavender at the House of Amarah studio"
                width={1600}
                height={892}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-0 bg-background px-7 py-5 shadow-sm md:right-[-2rem]">
              <p className="font-serif text-xl text-foreground">Chosen with care.</p>
              <p className="font-serif text-base italic text-muted-foreground">
                Made for the moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
