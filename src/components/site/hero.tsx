import { Fragment } from "react";
import { ArrowDown } from "lucide-react";
import { BookButton } from "@/components/site/book-button";
import { BrowserFrame } from "@/components/site/browser-frame";
import { Button } from "@/components/ui/button";
import { projects, site } from "@/data/site";

export function Hero() {
  const featured = projects[0];

  return (
    <section
      aria-labelledby="hero-title"
      className="container-page pt-20 pb-20 lg:pt-32 lg:pb-32"
    >
      <p className="text-label animate-rise">Web design & development</p>
      <h1
        id="hero-title"
        className="text-display mt-6 max-w-[14ch] animate-rise"
      >
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
      <div className="mt-10 animate-rise [animation-delay:120ms]">
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
      <div className="mt-16 animate-rise [animation-delay:240ms] lg:mt-24">
        <BrowserFrame
          src={featured.image.src}
          alt={featured.image.alt}
          url={featured.url}
          sizes="(min-width: 1248px) 1200px, calc(100vw - 48px)"
          preload
          className="aspect-[4/3] sm:aspect-[16/9]"
        />
      </div>
    </section>
  );
}
