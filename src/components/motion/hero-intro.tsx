"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";

// Plays the hero entrance once on load. Targets are marked with data-intro in the hero markup.
export function HeroIntro({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const q = gsap.utils.selector(ref);
        const [title] = q("[data-intro='title']");
        const [line] = q("[data-intro='line']");
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        SplitText.create(title, {
          type: "lines,words",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => {
            const words = gsap.from(self.words, {
              yPercent: 110,
              rotate: 4,
              duration: 1.4,
              stagger: 0.07,
              ease: "expo.out",
            });
            tl.add(words, 0.15);
            return words;
          },
        });

        SplitText.create(line, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => {
            const lines = gsap.from(self.lines, {
              yPercent: 100,
              duration: 1.1,
              stagger: 0.08,
              ease: "expo.out",
            });
            tl.add(lines, 0.65);
            return lines;
          },
        });

        gsap.set(q("[data-intro]"), { autoAlpha: 1 });

        tl.fromTo(
          q("[data-intro='pill']"),
          { y: -12, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9 },
          0,
        );

        tl.fromTo(
          q("[data-intro='cta'] > *"),
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1, stagger: 0.08 },
          0.85,
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
