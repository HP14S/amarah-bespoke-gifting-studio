import { Feather, Gift, Heart } from "lucide-react";

const VALUES = [
  { icon: Heart, title: "Handmade with love", text: "Small batches, poured and packed by hand." },
  { icon: Feather, title: "Made personal", text: "Names, words and details shaped around them." },
  { icon: Gift, title: "Beautifully finished", text: "Ribbon, paper and little touches that linger." },
];

export function StudioIntro() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-6">
          <p className="eyebrow text-terracotta">A gifting studio, with heart</p>
          <h2 className="mt-5 text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            For the little things that say <em className="italic text-rose">so much.</em>
          </h2>
        </div>
        <div className="flex flex-col justify-end lg:col-span-5 lg:col-start-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            House of Amarah is a creative gifting studio. From a favourite fragrance to the right
            words on a special day, we bring thoughtful things together to make people feel
            remembered.
          </p>
          <a
            href="#offerings"
            className="mt-6 self-start border-b border-foreground/40 pb-1 text-sm font-medium text-foreground transition-colors hover:border-rose hover:text-rose"
          >
            Find something lovely
          </a>
        </div>

        <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:col-span-12">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="bg-secondary p-7">
              <Icon className="h-5 w-5 text-rose" strokeWidth={1.4} />
              <p className="mt-4 font-serif text-2xl text-foreground">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
