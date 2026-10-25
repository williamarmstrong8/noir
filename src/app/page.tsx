import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Nav } from "@/components/site/nav";
import { Section } from "@/components/site/section";
import { Work } from "@/components/site/work";
import { sections } from "@/data/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        {[
          sections.services,
          sections.pricing,
          sections.process,
          sections.faq,
        ].map((copy) => (
          <Section key={copy.id} copy={copy}>
            <div className="h-40 rounded-lg border border-dashed" />
          </Section>
        ))}
      </main>
      <Footer />
    </>
  );
}
