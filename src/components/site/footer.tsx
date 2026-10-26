import { cacheLife } from "next/cache";
import { Reveal } from "@/components/motion/reveal";
import { Logo } from "@/components/site/logo";
import { site } from "@/data/site";

async function copyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  return (
    <footer className="border-t">
      <div className="container-page pt-10 pb-6 lg:pb-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
        <Reveal className="mt-16 lg:mt-24">
          <Logo className="h-auto w-full text-foreground" />
        </Reveal>
      </div>
    </footer>
  );
}
