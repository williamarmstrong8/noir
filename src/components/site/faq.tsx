import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, sections } from "@/data/site";

export function Faq() {
  return (
    <Section copy={sections.faq}>
      <div className="grid-page">
        <Reveal className="col-span-12 lg:col-span-9 lg:col-start-4">
          <Accordion type="single" collapsible className="border-y">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="items-center py-6 text-lg font-medium hover:no-underline hover:text-signal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
