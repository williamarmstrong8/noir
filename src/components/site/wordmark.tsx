import { site } from "@/data/site";

export function Wordmark() {
  return (
    <a
      href="#top"
      className="rounded-lg text-[15px] font-semibold tracking-[-0.02em] text-foreground"
    >
      {site.name}
    </a>
  );
}
