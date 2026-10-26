import { Logo } from "@/components/site/logo";

export function Wordmark() {
  return (
    <a href="#top" className="block w-fit rounded-lg text-foreground">
      <Logo className="h-10 w-auto -translate-y-0.5" />
    </a>
  );
}
