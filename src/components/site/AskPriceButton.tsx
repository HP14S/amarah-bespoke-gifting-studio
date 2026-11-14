import { MessageCircle } from "lucide-react";

import { askPriceLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function AskPriceButton({
  product,
  className,
  variant = "solid",
}: {
  product: string;
  className?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={askPriceLink(product)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ask for the price of ${product} on WhatsApp`}
      className={cn(
        "group inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-all duration-300",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]"
          : "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
      Ask for Price
    </a>
  );
}
