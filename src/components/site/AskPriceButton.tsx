import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useInquiry, type InquiryKind } from "./InquiryProvider";

export function AskPriceButton({
  product,
  kind = "product",
  className,
  variant = "solid",
  size = "md",
}: {
  product: string;
  kind?: Exclude<InquiryKind, "general">;
  className?: string;
  variant?: "solid" | "outline";
  size?: "sm" | "md";
}) {
  const { openInquiry } = useInquiry();
  return (
    <Button
      type="button"
      onClick={() => openInquiry({ item: product, kind })}
      aria-haspopup="dialog"
      aria-label={`Order ${product}`}
      className={cn(
        "studio-hover group inline-flex h-auto w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium transition-all duration-300",
        size === "sm"
          ? "gap-1.5 px-3 py-2.5 text-xs sm:text-[0.8rem]"
          : "px-5 py-3 text-sm sm:w-auto",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]"
          : "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        className,
      )}
    >
      <ShoppingBag className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={1.5} />
      Order Now
    </Button>
  );
}
