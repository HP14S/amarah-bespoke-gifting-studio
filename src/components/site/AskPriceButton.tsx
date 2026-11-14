import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import { useInquiry, type InquiryKind } from "./InquiryProvider";

export function AskPriceButton({
  product,
  kind = "product",
  className,
  variant = "solid",
}: {
  product: string;
  kind?: Exclude<InquiryKind, "general">;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const { openInquiry } = useInquiry();
  return (
    <button
      type="button"
      onClick={() => openInquiry({ item: product, kind })}
      aria-haspopup="dialog"
      aria-label={`Ask for the price of ${product}`}
      className={cn(
        "group inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-all duration-300 sm:w-auto",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]"
          : "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
      Ask for Price
    </button>
  );
}
