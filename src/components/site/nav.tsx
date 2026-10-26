"use client";

import { useEffect, useRef, useState } from "react";
import { BookButton } from "@/components/site/book-button";
import { MobileNav } from "@/components/site/mobile-nav";
import { Wordmark } from "@/components/site/wordmark";
import { navItems } from "@/data/site";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [inverted, setInverted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // Invert while the nav overlaps a light section.
      const mid = 32;
      setInverted(
        Array.from(
          document.querySelectorAll<HTMLElement>('[data-tone="light"]'),
        ).some((el) => {
          const r = el.getBoundingClientRect();
          return r.top <= mid && r.bottom >= mid;
        }),
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, yPercent: -100 },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.1,
        },
      );
    });
  });

  return (
    <header
      ref={ref}
      data-intro
      data-scrolled={scrolled}
      data-inverted={inverted}
      className={`${inverted ? "theme-light " : ""}sticky top-0 z-40 border-b border-transparent bg-background text-foreground transition-colors duration-300 data-[scrolled=true]:border-border`}
    >
      <div className="container-page grid h-16 grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <Wordmark />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-end">
          <BookButton
            size="default"
            className="hidden h-9 px-3.5 md:inline-flex"
          />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
