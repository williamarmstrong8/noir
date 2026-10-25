"use client";

import { useEffect, useState } from "react";
import { BookButton } from "@/components/site/book-button";
import { MobileNav } from "@/components/site/mobile-nav";
import { Wordmark } from "@/components/site/wordmark";
import { navItems } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="sticky top-0 z-40 border-b border-transparent transition-colors duration-300 data-[scrolled=true]:border-border data-[scrolled=true]:bg-background/70 data-[scrolled=true]:backdrop-blur-md"
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Wordmark />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
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
          <BookButton size="default" className="h-9 px-3.5" />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
