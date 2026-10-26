"use client";

import { useRef } from "react";
import { ENTER, gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "li";
  variant?: "rise" | "clip";
};

const STAGGER = 0.08;

// Fades and lifts its contents in once on scroll. Inside it, [data-split] text
// rises line by line and [data-reveal-media] settles from a slight zoom.
export function Reveal({
  children,
  className,
  index = 0,
  as: Component = "div",
  variant = "rise",
}: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add(MOTION_OK, () => {
        const delay = index * STAGGER;
        const scrollTrigger = { trigger: el, start: ENTER, once: true };

        if (variant === "clip") {
          gsap.fromTo(
            el,
            { autoAlpha: 0, clipPath: "inset(0% 0% 100% 0%)", y: 60 },
            {
              autoAlpha: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              y: 0,
              duration: 1.6,
              ease: "expo.out",
              delay,
              scrollTrigger,
            },
          );
          return;
        }

        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay,
            scrollTrigger,
          },
        );

        el.querySelectorAll<HTMLElement>("[data-split]").forEach((text) => {
          SplitText.create(text, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 100,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.08,
                delay,
                scrollTrigger,
              }),
          });
        });

        gsap.from(el.querySelectorAll("[data-reveal-media]"), {
          scale: 1.12,
          duration: 1.6,
          ease: "power3.out",
          delay,
          scrollTrigger,
        });
      });
    },
    { scope: ref },
  );

  return (
    <Component ref={ref} data-reveal className={className}>
      {children}
    </Component>
  );
}
