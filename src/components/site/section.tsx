import { Reveal } from "@/components/motion/reveal";
import type { SectionCopy } from "@/data/site";

type SectionProps = {
  copy: SectionCopy;
  children: React.ReactNode;
};

export function Section({ copy, children }: SectionProps) {
  const titleId = `${copy.id}-title`;

  return (
    <section id={copy.id} aria-labelledby={titleId} className="border-t">
      <div className="container-page section-y">
        <div className="grid-page gap-y-6">
          <Reveal className="col-span-12 lg:col-span-3">
            <p className="text-label pt-3">
              {copy.number} / {copy.label}
            </p>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-9" index={1}>
            <h2 id={titleId} className="text-heading">
              {copy.title}
            </h2>
            {copy.intro && <p className="text-body mt-6">{copy.intro}</p>}
          </Reveal>
        </div>
        <div className="mt-14 lg:mt-20">{children}</div>
      </div>
    </section>
  );
}
