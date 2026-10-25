import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="container-page section-y">
      <p className="text-label">Web design & development</p>
      <h1 className="text-display mt-6 max-w-[14ch]">{site.positioning}</h1>
      <p className="text-body mt-8">{site.promise}</p>
    </main>
  );
}
