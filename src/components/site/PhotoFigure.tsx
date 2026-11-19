import type { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

import { ImageTag } from "./ImageTag";

export function PhotoFigure({
  photo,
  alt,
  sizes,
  tag,
  caption,
  className,
  priority = false,
}: {
  photo: Photo;
  alt: string;
  sizes: string;
  tag?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("group relative overflow-hidden bg-stone", className)}>
      {tag && <ImageTag>{tag}</ImageTag>}
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={sizes}
        alt={alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/60 to-transparent px-3 pb-2.5 pt-10 font-serif text-base italic leading-tight text-ink-foreground sm:px-4 sm:pb-3 sm:text-lg">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
