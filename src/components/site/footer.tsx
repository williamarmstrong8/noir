import { Wordmark } from "@/components/site/wordmark";
import { site } from "@/data/site";

async function copyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  return (
    <footer className="border-t">
      <div className="container-page flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Wordmark />
        <a
          href={`mailto:${site.email}`}
          className="rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {site.email}
        </a>
        <p className="text-sm text-muted-foreground">
          © {await copyrightYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
