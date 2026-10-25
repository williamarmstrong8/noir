import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Nav } from "@/components/site/nav";
import { Pricing } from "@/components/site/pricing";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Work } from "@/components/site/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Services />
        <Pricing />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
