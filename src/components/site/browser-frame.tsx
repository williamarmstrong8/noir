import Image from "next/image";
import { cn } from "@/lib/utils";

export const fullWidthSizes = "(min-width: 1248px) 1200px, calc(100vw - 48px)";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url: string;
  sizes: string;
  fetchPriority?: "high";
  className?: string;
};

export function BrowserFrame({
  src,
  alt,
  url,
  sizes,
  fetchPriority,
  className,
}: BrowserFrameProps) {
  return (
    <figure className="overflow-hidden rounded-lg border bg-surface">
      <div className="flex h-10 items-center gap-4 border-b px-4">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </div>
        <span className="truncate font-mono text-xs text-muted-foreground">
          {url.replace(/^https?:\/\//, "")}
        </span>
      </div>
      <div className={cn("relative aspect-[16/10]", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          fetchPriority={fetchPriority}
          loading={fetchPriority ? "eager" : undefined}
          className="object-cover object-top-left"
        />
      </div>
    </figure>
  );
}
