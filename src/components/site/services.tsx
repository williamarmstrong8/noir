import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { builtWith, sections, services } from "@/data/site";

export function Services() {
  return (
    <Section copy={sections.services}>
      <ul className="grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-2">
        {services.map((service, i) => (
          <li key={service.title} className="bg-background p-8 lg:p-12">
            <Reveal index={i}>
              <p className="text-label">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{service.summary}</p>
              <ul className="mt-8 space-y-2.5 border-t pt-6">
                {service.specifics.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-3 bg-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="text-label mt-8">
        Built with{" "}
        <span className="text-foreground">{builtWith.join(" · ")}</span>
      </p>
    </Section>
  );
}
