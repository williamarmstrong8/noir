import { ArrowUpRight } from "lucide-react";
import { banner, site } from "@/data/site";

export function Banner() {
  return (
    <div className="bg-signal text-signal-foreground">
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="container-page group/banner flex min-h-10 items-center justify-center gap-2 py-2 text-center text-sm font-medium"
      >
        <span>
          <strong className="font-semibold">{banner.offer}</strong>{" "}
          {banner.detail}
        </span>
        <span className="flex shrink-0 items-center gap-0.5 underline underline-offset-4">
          {banner.cta}
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover/banner:translate-x-0.5 group-hover/banner:-translate-y-0.5"
          />
        </span>
      </a>
    </div>
  );
}
