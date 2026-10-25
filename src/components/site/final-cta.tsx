import { Reveal } from "@/components/motion/reveal";
import { BookButton } from "@/components/site/book-button";
import { site } from "@/data/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="border-t">
      <div className="container-page section-y">
        <Reveal>
          <h2 id="cta-title" className="text-display max-w-[12ch]">
            Let&apos;s build yours.
          </h2>
        </Reveal>
        <Reveal index={1} className="mt-10">
          <p className="text-body">{site.promise}</p>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <BookButton label="Book a 15-min call" />
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg text-muted-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground hover:decoration-signal"
            >
              Or email {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
