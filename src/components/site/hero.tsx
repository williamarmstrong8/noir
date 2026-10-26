import { Fragment } from "react";
import { ArrowDown } from "lucide-react";
import { BookButton } from "@/components/site/book-button";
import { CodeDemo } from "@/components/site/code-demo";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="container-page pt-20 pb-20 lg:pt-32 lg:pb-32"
    >
      <p className="text-label">Web design & development</p>
      <h1 id="hero-title" className="text-display mt-6 max-w-[14ch]">
        {site.positioning.split(" ").map((word, i) => (
          // Keep hyphenated words whole so "good-looking" never splits.
          <Fragment key={i}>
            {i > 0 && " "}
            {word.includes("-") ? (
              <span className="whitespace-nowrap">{word}</span>
            ) : (
              word
            )}
          </Fragment>
        ))}
      </h1>
      <div className="mt-10">
        <p className="text-body">{site.heroLine}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <BookButton label="Book a 15-min call" />
          <Button asChild size="cta" variant="outline">
            <a href="#work">
              See the work
              <ArrowDown
                aria-hidden
                className="transition-transform duration-200 ease-out group-hover/button:translate-y-0.5"
              />
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{site.promise}</p>
      </div>
      <div className="mt-16 lg:mt-24">
        <CodeDemo />
      </div>
    </section>
  );
}
