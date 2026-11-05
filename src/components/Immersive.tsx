"use client";

import { useEffect, useRef } from "react";
import { clamp01, onScrollFrame, setImmersive, still } from "./scroll";

/**
 * A film or picture that leaves the column: as the page scrolls it grows from the column's width to the whole screen,
 * holds there, then scrolls away at that size (it never shrinks back while pinned: Syed found the switch back weird;
 * the page returns to the column with the next section). Each frame only reads the page and writes one transform
 * (plus the radius while it moves); the stage's size is set on resize. On a portrait screen "full screen" is the full
 * width at the film's own shape, so a 16:9 film is never cropped to a strip. Under reduced motion it stays a card.
 */
export function Immersive({ children, caption, aspect }: { children: React.ReactNode; caption?: string; aspect: number }) {
  const runway = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (still()) return;
    const root = document.documentElement;
    const me = {};
    let vw = 0, vh = 0, W = 0, H = 0, radius = -1, left = 0, width = 0, top = 0, bottom = 0, p = 0;
    let target = 0, cur = -1, raf = 0, then = 0;
    const soft = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2;

    // Writes one transform from the eased amount (cur) and the latest geometry; the radius only while it moves.
    const paint = () => {
      const e = cur;
      const s = width / W + (1 - width / W) * e;
      const tx = (left + width / 2 - vw / 2) * (1 - e);
      // As a card it keeps to the flow: against the top of the stage while it grows.
      const ty = (-(vh - H * s) / 2) * (1 - e);
      media.current!.style.transform = `translate3d(${tx.toFixed(2)}px,${ty.toFixed(2)}px,0) scale(${s.toFixed(4)})`;
      const rad = Math.round(((16 * Math.min(1, (1 - e) * 2.5)) / s) * 2) / 2;
      if (rad !== radius) media.current!.style.borderRadius = `${(radius = rad)}px`;
      if (label.current) label.current.style.opacity = String(clamp01((e - 0.6) / 0.4));
      setImmersive(me, top < vh * 0.5 && bottom > vh * 0.5 && e > 0.04);
    };
    // The scroll sets the target; the film follows it over time (1 − e^(−7·dt)), so it glides and settles softly.
    const glide = (now: number) => {
      const dt = Math.min(0.05, (now - then) / 1000);
      then = now;
      cur += (target - cur) * (1 - Math.exp(-dt * 7));
      if (Math.abs(target - cur) < 0.0008) cur = target;
      paint();
      raf = cur === target ? 0 : requestAnimationFrame(glide);
    };

    const off = onScrollFrame(() => {
      const r = runway.current!.getBoundingClientRect();
      if (root.clientWidth !== vw || innerHeight !== vh) {
        vw = root.clientWidth;
        vh = innerHeight;
        // Landscape screens take the whole screen (a little crop is fine); portrait ones the full width at the film's shape.
        W = vw;
        H = vw / vh >= aspect * 0.75 ? vh : Math.round(vw / aspect);
        stage.current!.style.marginLeft = `${-r.left}px`;
        stage.current!.style.width = `${vw}px`;
        media.current!.style.width = `${W}px`;
        media.current!.style.height = `${H}px`;
      }
      ({ left, width, top, bottom } = r);
      p = clamp01(-r.top / (r.height - vh));
      // Grows over the first 60% of the runway, then holds until the stage scrolls away.
      target = p < 0.6 ? soft(p / 0.6) : 1;
      if (cur < 0) {
        cur = target;
        paint();
      } else if (!raf) {
        then = performance.now();
        raf = requestAnimationFrame(glide);
      }
    });
    return () => {
      off();
      cancelAnimationFrame(raf);
      setImmersive(me, false);
    };
  }, [aspect]);

  return (
    <div ref={runway} data-runway className="relative motion-safe:h-[190svh] motion-safe:portrait:h-[160svh]">
      <div ref={stage} className="motion-safe:sticky motion-safe:top-0 motion-safe:flex motion-safe:h-svh motion-safe:items-center motion-safe:justify-center motion-safe:overflow-hidden">
        <div
          ref={media}
          style={{ aspectRatio: aspect }}
          className="w-full shrink-0 overflow-hidden rounded-[var(--radius-sheet)] bg-black will-change-transform motion-safe:origin-center"
        >
          {children}
        </div>
        {caption && (
          <p ref={label} className="mt-3 text-small text-label motion-safe:absolute motion-safe:bottom-6 motion-safe:left-1/2 motion-safe:mt-0 motion-safe:max-w-[calc(100%-32px)] motion-safe:-translate-x-1/2 motion-safe:rounded-full motion-safe:bg-black/55 motion-safe:px-3.5 motion-safe:py-1.5 motion-safe:text-center motion-safe:text-white motion-safe:opacity-0">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
