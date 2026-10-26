import Image from "next/image";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url: string;
  sizes: string;
};

export function BrowserFrame({ src, alt, url, sizes }: BrowserFrameProps) {
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
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover object-top-left"
        />
      </div>
    </figure>
  );
}
