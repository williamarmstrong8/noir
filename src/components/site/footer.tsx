import { cacheLife } from "next/cache";
import { Reveal } from "@/components/motion/reveal";
import { Rule } from "@/components/motion/rule";
import { Logo } from "@/components/site/logo";
import { site } from "@/data/site";

async function copyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  return (
    <footer className="relative">
      <Rule />
      <div className="container-page pt-16 pb-6 lg:pb-10">
        <div className="grid-page items-end gap-y-10">
          <Reveal variant="clip" className="col-span-12 lg:col-span-8">
            <Logo className="h-auto w-full text-foreground" />
          </Reveal>
          <div className="col-span-12 flex flex-col gap-2 lg:col-span-4 lg:items-end lg:text-right">
            <a
              href={`mailto:${site.email}`}
              className="w-fit rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <p className="text-sm text-muted-foreground">
              © {await copyrightYear()} {site.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
