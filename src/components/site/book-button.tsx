import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

type BookButtonProps = {
  label?: string;
  size?: "default" | "cta";
  className?: string;
};

export function BookButton({
  label = "Book a call",
  size = "cta",
  className,
}: BookButtonProps) {
  return (
    <Button asChild size={size} className={className}>
      <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowUpRight
          aria-hidden
          className="transition-transform duration-200 ease-out group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
        />
      </a>
    </Button>
  );
}
