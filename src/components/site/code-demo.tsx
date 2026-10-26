"use client";

import { useCallback, useEffect, useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Kind = "kw" | "tag" | "attr" | "str" | "punc";
type Line = [string, Kind][];

// Each preview element appears once the line that declares it is typed.
const LINES: Line[] = [
  [
    ["export default function ", "kw"],
    ["Site", "tag"],
    ["() {", "punc"],
  ],
  [["  return (", "kw"]],
  [
    ["    <", "punc"],
    ["Page ", "tag"],
    ["brand=", "attr"],
    ['"Your business"', "str"],
    [">", "punc"],
  ],
  [
    ["      <", "punc"],
    ["Hero", "tag"],
  ],
  [
    ["        title=", "attr"],
    ['"Booked solid, online."', "str"],
  ],
  [
    ["        cta=", "attr"],
    ['"Book now"', "str"],
  ],
  [["      />", "punc"]],
  [
    ["      <", "punc"],
    ["Booking ", "tag"],
    ["with=", "attr"],
    ['"cal.com"', "str"],
    [" />", "punc"],
  ],
  [
    ["      <", "punc"],
    ["Seo ", "tag"],
    ["sitemap schema ", "attr"],
    ["/>", "punc"],
  ],
  [
    ["    </", "punc"],
    ["Page", "tag"],
    [">", "punc"],
  ],
  [["  );", "kw"]],
  [["}", "punc"]],
];

const LINE_LENGTHS = LINES.map((line) =>
  line.reduce((sum, [text]) => sum + text.length, 0),
);
const LINE_STARTS = LINE_LENGTHS.map((_, i) =>
  LINE_LENGTHS.slice(0, i).reduce((a, b) => a + b, 0),
);
const lineEnd = (index: number) => LINE_STARTS[index] + LINE_LENGTHS[index];
const TOTAL = lineEnd(LINES.length - 1);

const SHOWS = {
  brand: lineEnd(2),
  title: lineEnd(4),
  cta: lineEnd(5),
  booking: lineEnd(7),
  seo: lineEnd(8),
};

const CHARS_PER_MS = 0.11;
const START_DELAY_MS = 500;

const kindClass: Record<Kind, string> = {
  kw: "text-muted-foreground",
  tag: "text-foreground",
  attr: "text-[#c8c8c8]",
  str: "text-signal",
  punc: "text-white/40",
};

function useTyping() {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const start = performance.now() + START_DELAY_MS;
    const tick = (now: number) => {
      const next = Math.min(
        TOTAL,
        Math.max(0, Math.floor((now - start) * CHARS_PER_MS)),
      );
      setTyped(next);
      if (next < TOTAL) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced, run]);

  const replay = useCallback(() => {
    setTyped(0);
    setRun((n) => n + 1);
  }, []);

  return { typed: reduced ? TOTAL : typed, replay };
}

export function CodeDemo() {
  const { typed, replay } = useTyping();
  const done = typed >= TOTAL;
  const shown = (key: keyof typeof SHOWS) => typed >= SHOWS[key];

  const caretLine = LINES.findIndex((_, i) => typed < lineEnd(i));

  return (
    <div className="overflow-hidden rounded-lg border bg-surface">
      <div className="flex h-10 items-center gap-4 border-b px-4">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </div>
        <span className="font-mono text-xs text-foreground">page.tsx</span>
        <button
          type="button"
          onClick={replay}
          disabled={!done}
          className="ml-auto flex items-center gap-1.5 rounded-lg font-mono text-xs text-muted-foreground transition-opacity hover:text-foreground disabled:opacity-0"
        >
          <RotateCcw aria-hidden className="size-3" />
          Replay
        </button>
      </div>

      <div className="grid lg:grid-cols-12">
        <pre
          aria-label="Example page code"
          className="overflow-x-auto border-b px-4 py-5 font-mono text-[12px] leading-6 sm:text-[13px] lg:col-span-5 lg:border-r lg:border-b-0"
        >
          <code>
            {LINES.map((line, i) => {
              return (
                <div key={i} className="flex">
                  <span
                    aria-hidden
                    className="mr-4 w-5 shrink-0 text-right text-white/20 select-none"
                  >
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">
                    {renderLine(line, typed - LINE_STARTS[i], caretLine === i)}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>

        <div
          aria-hidden
          className="relative min-h-[320px] bg-[#f4f1ec] p-6 text-[#111] sm:p-8 lg:col-span-7"
        >
          <div
            data-pending={!shown("brand")}
            className="demo-in flex items-center justify-between"
          >
            <span className="text-sm font-semibold tracking-[-0.02em]">
              Your business
            </span>
            <span className="flex gap-4 text-xs text-black/50">
              <span>Services</span>
              <span>Hours</span>
              <span>Contact</span>
            </span>
          </div>

          <p
            data-pending={!shown("title")}
            className="demo-in mt-10 max-w-[12ch] text-4xl leading-none font-bold tracking-[-0.04em] sm:text-5xl"
          >
            Booked solid, online.
          </p>

          <span
            data-pending={!shown("cta")}
            className="demo-in mt-6 inline-flex h-10 items-center rounded-lg bg-signal px-4 text-sm font-medium text-black"
          >
            Book now
          </span>

          <div data-pending={!shown("booking")} className="demo-in mt-8">
            <p className="font-mono text-[11px] tracking-[0.08em] text-black/50 uppercase">
              Pick a time
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["9:00", "10:30", "1:00", "3:30"].map((slot, i) => (
                <span
                  key={slot}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 font-mono text-xs",
                    i === 1
                      ? "border-black bg-black text-white"
                      : "border-black/15",
                  )}
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>

          <div
            data-pending={!shown("seo")}
            className="demo-in mt-8 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-black/60"
          >
            {["Meta tags", "Sitemap", "Schema"].map((item) => (
              <span key={item} className="flex items-center gap-1">
                <Check className="size-3 text-signal" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const caret = (
  <span
    aria-hidden
    className="-mr-[2px] inline-block h-4 w-[2px] translate-y-[3px] animate-pulse bg-signal"
  />
);

function renderLine(line: Line, visible: number, withCaret: boolean) {
  let remaining = Math.max(0, visible);
  let caretPlaced = !withCaret;
  return line.map(([text, kind], i) => {
    const shownText = text.slice(0, remaining);
    remaining -= shownText.length;
    const hiddenText = text.slice(shownText.length);
    const placeCaret = !caretPlaced && hiddenText.length > 0;
    if (placeCaret) caretPlaced = true;
    return (
      <span key={i} className={kindClass[kind]}>
        {shownText}
        {placeCaret && caret}
        {hiddenText && (
          <span data-untyped className="invisible">
            {hiddenText}
          </span>
        )}
      </span>
    );
  });
}
