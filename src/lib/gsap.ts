"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrambleTextPlugin);

// Every animation is created inside this query, so reduced-motion users get static content.
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

export const ENTER = "top 85%";

export { gsap, ScrollTrigger, SplitText, useGSAP };
