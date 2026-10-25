import { carePlan, services, site, tiers } from "@/data/site";

const price = (value: string) => value.replace(/[^0-9.]/g, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  // TODO: add areaServed (your city or region) once confirmed.
  knowsAbout: services.map((service) => service.title),
  makesOffer: [...tiers, carePlan].map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    description: tier.summary,
    price: price(tier.price),
    priceCurrency: "USD",
  })),
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
