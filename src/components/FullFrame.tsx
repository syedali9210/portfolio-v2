"use client";

import { useEffect, useRef } from "react";
import { clamp01, onScrollFrame, setImmersive, still } from "./scroll";

/**
 * The device section, laid out the full width of the screen with no box: its colour wash (.frame-plate) feathers into
 * the page at top and bottom. Its content stays where the column is (--col-l / --col-w). Pieces inside ride the
 * page's own scroll: [data-device] rises a little faster than [data-field] under it, [data-shadow] fades as it lifts.
 */
export function FullFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frame.current!;
    const root = document.documentElement;
    const device = el.querySelector<HTMLElement>("[data-device]");
    const field = el.querySelector<HTMLElement>("[data-field]");
    const shadow = el.querySelector<HTMLElement>("[data-shadow]");
    const me = {};
    const moving = !still();
    let vw = 0, vh = 0;

    const off = onScrollFrame(() => {
      if (root.clientWidth !== vw || innerHeight !== vh) {
        vw = root.clientWidth;
        vh = innerHeight;
        el.style.marginLeft = "0px";
        const col = el.parentElement!.getBoundingClientRect();
        el.style.marginLeft = `${-col.left}px`;
        el.style.width = `${vw}px`;
        el.style.setProperty("--col-l", `${col.left}px`);
        el.style.setProperty("--col-w", `${col.width}px`);
      }
      const r = el.getBoundingClientRect();
      setImmersive(me, r.top < vh * 0.5 && r.bottom > vh * 0.5);
      if (!moving || r.bottom < 0 || r.top > vh) return;
      // Through the whole pass (0 → 1) the device rises a little faster than the field under it.
      const u = 0.5 - clamp01((vh - r.top) / (vh + r.height));
      if (device) device.style.transform = `translate3d(0,${(u * 90).toFixed(1)}px,0)`;
      if (field) field.style.transform = `translate3d(0,${(u * 28).toFixed(1)}px,0)`;
      if (shadow) shadow.style.opacity = (0.42 + u * 0.4).toFixed(3);
    });
    return () => {
      off();
      setImmersive(me, false);
    };
  }, []);

  return (
    <div ref={frame} className={`full-frame relative isolate overflow-x-clip ${className}`}>
      {children}
    </div>
  );
}
