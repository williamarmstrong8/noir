"use client";

import { useRef } from "react";
import { ENTER, gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

// A hairline that draws itself left to right as its section scrolls in.
export function Rule() {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => {
      gsap.from(ref.current, {
        scaleX: 0,
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: { trigger: ref.current, start: ENTER, once: true },
      });
    });
  });

  return (
    <span
      ref={ref}
      aria-hidden
      className="absolute inset-x-0 top-0 h-px origin-left bg-border"
    />
  );
}
