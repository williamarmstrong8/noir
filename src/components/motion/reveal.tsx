"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "li";
};

const STAGGER = 0.06;

export function Reveal({
  children,
  className,
  index = 0,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.5, ease: "easeOut", delay: index * STAGGER }
      }
    >
      {children}
    </Component>
  );
}
