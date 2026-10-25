import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { Section } from "@/components/site/section";
import { sections, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <div className="container-page section-y">
          <p className="text-label animate-rise">Web design & development</p>
          <h1 className="text-display mt-6 max-w-[14ch] animate-rise">
            {site.positioning}
          </h1>
        </div>
        {Object.values(sections).map((copy) => (
          <Section key={copy.id} copy={copy}>
            <div className="h-40 rounded-lg border border-dashed" />
          </Section>
        ))}
      </main>
      <Footer />
    </>
  );
}
