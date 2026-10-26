import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BrowserFrame } from "@/components/site/browser-frame";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { projects, sections, type Project } from "@/data/site";

export function Work() {
  return (
    <Section copy={sections.work} tone="light">
      <div className="relative">
        {/* Soft monochrome shapes behind the grid so the glass has something to blur. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
        >
          <span className="absolute -top-20 left-[8%] size-96 rounded-full bg-black/15 blur-3xl" />
          <span className="absolute top-1/3 right-[4%] size-[28rem] rounded-full bg-black/10 blur-3xl" />
          <span className="absolute bottom-0 left-1/3 size-80 rounded-full bg-black/15 blur-3xl" />
        </div>
        <ul className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} as="li" index={i % 2}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-white/80 to-white/30 p-3 pb-6 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(255,255,255,0.4),inset_0_0_24px_rgba(255,255,255,0.6),0_24px_60px_-24px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 transition-shadow duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(255,255,255,0.5),inset_0_0_30px_rgba(255,255,255,0.8),0_30px_70px_-24px_rgba(0,0,0,0.45)] [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-out hover:[&_img]:-translate-y-1 hover:[&_img]:scale-[1.02]"
    >
      <BrowserFrame
        src={project.image.src}
        alt={project.image.alt}
        url={project.url}
        sizes="(min-width: 1248px) 588px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 48px)"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
      />
      <div className="mt-6 flex items-start justify-between gap-6 px-3">
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
