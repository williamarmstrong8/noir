import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BookButton } from "@/components/site/book-button";
import { Section } from "@/components/site/section";
import { cn } from "@/lib/utils";
import { carePlan, sections, site, tiers } from "@/data/site";

export function Pricing() {
  return (
    <Section copy={sections.pricing}>
      <div className="grid gap-6 lg:grid-cols-2">
        {tiers.map((tier, i) => (
          <Reveal
            key={tier.name}
            index={i}
            className={cn(
              "flex flex-col rounded-lg border bg-surface p-8 lg:p-10",
              tier.featured && "border-signal",
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-label text-foreground">{tier.name}</h3>
              {tier.featured && (
                <span className="text-label text-signal">Recommended</span>
              )}
            </div>
            <p className="text-heading mt-8">{tier.price}</p>
            <p className="mt-4 text-muted-foreground">{tier.summary}</p>
            <ul className="mt-8 flex-1 space-y-3 border-t pt-8">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-signal"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <BookButton
              variant={tier.featured ? "default" : "outline"}
              className="mt-10 w-full"
            />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 grid gap-6 rounded-lg border p-8 md:grid-cols-12 md:items-center lg:px-10">
        <div className="md:col-span-4">
          <h3 className="text-label text-foreground">{carePlan.name}</h3>
          <p className="mt-2 text-muted-foreground">{carePlan.summary}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-6">
          {carePlan.includes.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check aria-hidden className="size-4 text-signal" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-3xl font-bold tracking-[-0.04em] md:col-span-2 md:text-right">
          {carePlan.price}
          <span className="text-base font-normal tracking-normal text-muted-foreground">
            {carePlan.cadence}
          </span>
        </p>
      </Reveal>

      <p className="mt-10 text-muted-foreground">
        Not sure which?{" "}
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg text-foreground underline decoration-signal underline-offset-4 hover:text-signal"
        >
          Book a call and I&apos;ll tell you.
        </a>
      </p>
    </Section>
  );
}
