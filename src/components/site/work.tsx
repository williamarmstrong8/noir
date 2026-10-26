import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BrowserFrame } from "@/components/site/browser-frame";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { projects, sections, type Project } from "@/data/site";

export function Work() {
  return (
    <Section copy={sections.work}>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:gap-y-20">
        {projects.map((project, i) => (
          <Reveal key={project.name} as="li" index={i % 2}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-out hover:[&_img]:-translate-y-1 hover:[&_img]:scale-[1.02]"
    >
      <BrowserFrame
        src={project.image.src}
        alt={project.image.alt}
        url={project.url}
        sizes="(min-width: 1248px) 588px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 48px)"
      />
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">
              {project.name}
            </h3>
            <Badge className="text-muted-foreground">{project.kind}</Badge>
          </div>
          <p className="mt-2 max-w-[60ch] text-muted-foreground">
            {project.outcome}
          </p>
          <ul className="text-label mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <span className="mt-0.5 flex shrink-0 items-center gap-1 text-sm text-foreground transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:-translate-x-1 sm:opacity-0">
          View site
          <ArrowUpRight aria-hidden className="size-4 text-signal" />
        </span>
      </div>
    </a>
  );
}
