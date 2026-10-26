import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { sections, steps } from "@/data/site";

export function Process() {
  return (
    <Section copy={sections.process}>
      <ol className="border-b">
        {steps.map((step, i) => (
          <Reveal
            key={step.title}
            as="li"
            index={i}
            className="grid-page gap-y-3 border-t py-10 lg:items-baseline lg:py-12"
          >
            <span
              data-split
              className="text-heading col-span-12 font-mono font-normal text-signal lg:col-span-3"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="col-span-12 text-2xl font-semibold tracking-[-0.03em] lg:col-span-3">
              {step.title}
            </h3>
            <p className="col-span-12 text-muted-foreground lg:col-span-6">
              {step.detail}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
