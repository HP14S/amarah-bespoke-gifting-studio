import { cn } from "@/lib/utils";

export function ImageTag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "eyebrow pointer-events-none absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] truncate whitespace-nowrap rounded-full border border-border/60 bg-background/85 px-2.5 py-1 text-[0.55rem] tracking-[0.18em] sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[0.62rem] text-foreground shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
