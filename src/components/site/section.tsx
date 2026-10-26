import { Reveal } from "@/components/motion/reveal";
import { Rule } from "@/components/motion/rule";
import { cn } from "@/lib/utils";
import type { SectionCopy } from "@/data/site";

type SectionProps = {
  copy: SectionCopy;
  children: React.ReactNode;
  tone?: "dark" | "light";
};

export function Section({ copy, children, tone = "dark" }: SectionProps) {
  const titleId = `${copy.id}-title`;

  return (
    <section
      id={copy.id}
      aria-labelledby={titleId}
      data-tone={tone}
      className={cn(
        "relative",
        tone === "light" && "theme-light bg-background text-foreground",
      )}
    >
      <Rule />
      <div className="container-page section-y">
        <Reveal>
          <h2 id={titleId} data-split className="text-heading">
            {copy.title}
          </h2>
          {copy.intro && <p className="text-body mt-6">{copy.intro}</p>}
        </Reveal>
        <div className="mt-14 lg:mt-20">{children}</div>
      </div>
    </section>
  );
}
