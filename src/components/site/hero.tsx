import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { HeroIntro } from "@/components/motion/hero-intro";
import { BookButton } from "@/components/site/book-button";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="container-page pt-16 pb-20 lg:pt-24 lg:pb-32"
    >
      <HeroIntro className="text-center">
        <div data-intro="pill" className="relative mx-auto mb-8 w-fit">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/badge relative flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-gradient-to-b from-white/25 to-white/5 py-2.5 pr-4 pl-4 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.08),inset_0_0_14px_rgba(255,255,255,0.12),0_8px_30px_-8px_rgba(0,0,0,0.6)] backdrop-blur-xl backdrop-saturate-200 transition-all duration-300 hover:from-white/30 hover:to-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_18px_rgba(255,255,255,0.18),0_10px_40px_-8px_rgba(0,0,0,0.7)]"
          >
            {/* Specular sheen */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-3 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-70"
            />
            <span className="relative flex items-center gap-2.5">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-white" />
              </span>
              Available for new projects
            </span>
            <span aria-hidden className="relative h-4 w-px bg-white/30" />
            <span className="relative flex items-center gap-1 text-white/80">
              Book a call
              <ArrowRight
                aria-hidden
                className="size-3.5 transition-transform duration-200 group-hover/badge:translate-x-0.5"
              />
            </span>
          </a>
        </div>
        <h1
          id="hero-title"
          data-intro="title"
          className="mx-auto max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(3.25rem,10vw+0.5rem,9.5rem)] leading-[0.95] font-medium tracking-[-0.01em] text-balance uppercase"
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
        <div className="mt-10">
          <p data-intro="line" className="mx-auto text-body text-balance">
            {site.heroLine}
          </p>
          <div
            data-intro="cta"
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <BookButton label="Book a 15-min call" className="rounded-full px-6" />
            <Button asChild size="cta" variant="outline" className="rounded-full px-6">
              <a href="#work">
                See the work
                <ArrowDown
                  aria-hidden
                  className="transition-transform duration-200 ease-out group-hover/button:translate-y-0.5"
                />
              </a>
            </Button>
          </div>
        </div>
      </HeroIntro>
    </section>
  );
}
