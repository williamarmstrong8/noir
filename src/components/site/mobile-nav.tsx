"use client";

import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { BookButton } from "@/components/site/book-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, site } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  // The sheet locks scrolling while open, so jump to the section after it closes.
  const target = useRef<string | null>(null);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="md:hidden">
          <Menu aria-hidden className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-background px-6 pt-5 pb-8"
        onCloseAutoFocus={(event) => {
          const id = target.current;
          if (!id) return;
          event.preventDefault();
          target.current = null;
          history.replaceState(null, "", `#${id}`);
          setTimeout(() => document.getElementById(id)?.scrollIntoView());
        }}
      >
        <SheetTitle className="text-[15px] font-semibold tracking-[-0.02em]">
          {site.name}
        </SheetTitle>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>
        <nav aria-label="Mobile">
          <ul className="mt-4 flex flex-col">
            {navItems.map((item) => (
              <li key={item.id} className="border-b">
                <a
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    target.current = item.id;
                    setOpen(false);
                  }}
                  className="flex items-baseline justify-between py-4 text-2xl font-semibold tracking-[-0.03em]"
                >
                  {item.label}
                  <span className="text-label">{item.number}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <BookButton className="mt-6 w-full" />
      </SheetContent>
    </Sheet>
  );
}
