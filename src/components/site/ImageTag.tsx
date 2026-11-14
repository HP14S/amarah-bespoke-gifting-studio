import { cn } from "@/lib/utils";

export function ImageTag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "eyebrow pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-border/60 bg-background/85 px-3 py-1.5 text-[0.62rem] text-foreground shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
