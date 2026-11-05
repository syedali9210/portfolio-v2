"use client";

import { useEffect, useRef } from "react";
import { clamp01, onScrollFrame, still } from "./scroll";

/**
 * The colour passage into the work, after Abhijit Rout's "to-black transition": a bell of colour (lavender, pink, coral,
 * orange, then white at its core; on the dark theme his ember and ink) that unrolls down from its top edge as you scroll. His is an image turned
 * with rotateX from edge-on (89°) to flat with no perspective, which is a vertical scale by cos θ; measured on his page
 * the bell is 0.48, 0.68 and 0.94 of its height after 0.5, 0.75 and 1.3 screens, so the scale here eases out the same
 * way. `after` is the same bell upside down, leading back out to the page, and only scrolls.
 *
 * The bell is drawn once (nested blurred bells in an SVG, his colours sampled down the middle of his image) and only its
 * transform changes, so scrolling never repaints it.
 */
// Where each colour starts down the middle of his image (of 1280), as sampled: lavender 3%, pink 30%, coral 35%,
// orange 40%, ember 45%, rust 50%, then the deep red into the core by 70%.
const BANDS: [peak: number, colour: string][] = [
  [40, "var(--dome-1)"],
  [290, "var(--dome-2)"],
  [380, "var(--dome-3)"],
  [445, "var(--dome-4)"],
  [510, "var(--dome-5)"],
  [575, "var(--dome-6)"],
  [640, "var(--dome-7)"],
  [710, "var(--dome-8)"],
  [800, "var(--dome-9)"],
];

// One bell: a Gaussian across the width (σ 670 of 1000, measured from where his bands meet the edges), its top at `peak`.
// It runs on past both sides and the foot, so the blur never thins it at the frame's edges (the SVG clips it there).
function bell(peak: number) {
  let d = "M-300 1600";
  for (let x = -300; x <= 1300; x += 20) d += ` L${x} ${(1280 - (1280 - peak) * Math.exp(-(((x - 500) / 670) ** 2))).toFixed(1)}`;
  return d + " L1300 1600 Z";
}
const PATHS = BANDS.map(([peak, colour]) => ({ d: bell(peak), colour }));

export function Dome({ after = false }: { after?: boolean }) {
  const band = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const foot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (after || still()) return;
    let last = -1;
    return onScrollFrame(() => {
      const r = band.current!.getBoundingClientRect();
      const vh = innerHeight;
      if (r.top > vh || r.bottom < -vh) return;
      const p = clamp01((vh - r.top - 0.2 * vh) / (1.4 * vh));
      const s = Math.max(0.012, 1 - (1 - p) ** 2.2);
      const k = Math.round(s * 1000) / 1000;
      if (k === last) return;
      last = k;
      body.current!.style.transform = k >= 1 ? "none" : `scaleY(${k})`;
      body.current!.style.visibility = k <= 0.012 ? "hidden" : ""; // not yet unrolling: edge-on it would only be a thin line sitting on the page
      // Its foot fades into the page while it's still unrolling. By 70% it's over the band's own colour and has no edge. (A mask on the bell did this too, but made its first frame on screen slow.)
      foot.current!.style.transform = `translate3d(0, ${(k * r.height).toFixed(1)}px, 0)`;
      foot.current!.style.visibility = k > 0.012 && k < 0.7 ? "visible" : "hidden";
    });
  }, [after]);

  return (
    <div ref={band} aria-hidden="true" className={`dome ${after ? "dome-after" : ""}`}>
      <div ref={body} className="dome-body">
        <svg viewBox="0 0 1000 1280" preserveAspectRatio="none" className="size-full">
          <filter id={after ? "dome-soft-b" : "dome-soft"} filterUnits="userSpaceOnUse" x="-400" y="-100" width="1800" height="1800" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <g filter={`url(#${after ? "dome-soft-b" : "dome-soft"})`}>
            {PATHS.map((p) => (
              <path key={p.d} d={p.d} style={{ fill: p.colour }} />
            ))}
          </g>
        </svg>
      </div>
      {!after && <div ref={foot} className="dome-foot" />}
    </div>
  );
}
