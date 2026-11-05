"use client";

import { useEffect, useState } from "react";

/* The site's sounds, made on the spot with Web Audio (no files): a small metal tick for every tap, a detent for the archive's
   tabs, the dust lifting and settling for the stage, and a hammer on the hero's rocks. Quiet by design, and one switch turns
   them all off (remembered). Nothing plays before the reader's first press. */
export type Cue = "tick" | "switch" | "open" | "close" | "case" | "bronze";

let ctx: AudioContext | null = null;
let out: GainNode;
let grain: AudioBuffer;

const muted = () => {
  try {
    return localStorage.getItem("sound") === "off";
  } catch {
    return false;
  }
};

function make() {
  if (ctx) return ctx;
  ctx = new AudioContext();
  out = ctx.createGain();
  out.gain.value = 0.7;
  out.connect(ctx.destination);
  grain = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const d = grain.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return ctx;
}

function audio() {
  const a = make();
  if (a.state === "suspended") void a.resume();
  return a;
}

/** Noise through a band-pass whose centre glides from f0 to f1: a click's contact, or the dust's hiss. */
function hiss(a: AudioContext, t: number, len: number, rise: number, peak: number, f0: number, f1: number, q: number) {
  const src = a.createBufferSource();
  src.buffer = grain;
  const band = a.createBiquadFilter();
  band.type = "bandpass";
  band.Q.value = q;
  band.frequency.setValueAtTime(f0, t);
  band.frequency.exponentialRampToValueAtTime(f1, t + len);
  const g = a.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + rise);
  g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  src.connect(band).connect(g).connect(out);
  src.start(t, Math.random() * 0.4);
  src.stop(t + len + 0.02);
}

/** A sine that sinks a little as it dies: a click's body, or one partial of struck metal. */
function tone(a: AudioContext, t: number, len: number, peak: number, f0: number, f1: number) {
  const o = a.createOscillator();
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(f1, t + len);
  const g = a.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.002);
  g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  o.connect(g).connect(out);
  o.start(t);
  o.stop(t + len + 0.02);
}

export function sound(cue: Cue) {
  if (typeof AudioContext === "undefined" || muted()) return;
  const a = audio();
  const t = a.currentTime + 0.004;
  if (cue === "tick") {
    hiss(a, t, 0.02, 0.002, 0.16, 4200, 2600, 1.4);
    tone(a, t, 0.03, 0.045, 1450, 700);
  } else if (cue === "switch") {
    hiss(a, t, 0.016, 0.002, 0.12, 3400, 2200, 1.6);
    hiss(a, t + 0.028, 0.016, 0.002, 0.08, 2600, 1800, 1.6);
    tone(a, t, 0.03, 0.035, 1100, 600);
  } else if (cue === "open") {
    hiss(a, t, 0.75, 0.2, 0.1, 700, 3200, 0.9);
  } else if (cue === "close") {
    hiss(a, t, 0.85, 0.12, 0.09, 3000, 600, 0.9);
  } else if (cue === "bronze") {
    // A small hammer on a bronze plaque: a dull knock and a short ring of partials that don't make a chord.
    // Never quite the same pitch twice, so three blows in a row don't sound like one sample.
    const pitch = 1120 * (0.95 + Math.random() * 0.1);
    hiss(a, t, 0.03, 0.001, 0.16, 2400, 1500, 2.4);
    for (const [r, p, len] of [[1, 0.05, 0.32], [2.43, 0.022, 0.2], [3.91, 0.012, 0.12]]) tone(a, t, len, p, pitch * r, pitch * r * 0.996);
  } else {
    // A jewel case: the hollow knock of the plastic, then the hinge's click.
    hiss(a, t, 0.035, 0.001, 0.2, 1700, 1100, 3.5);
    tone(a, t, 0.05, 0.045, 820, 460);
    hiss(a, t + 0.032, 0.02, 0.001, 0.13, 3300, 2500, 2.5);
  }
}

/**
 * A hammer blow on a rock, which comes from a hover. A browser holds all sound back until the reader's first press, and a blow played
 * into a sleeping context would wait there and land with all the others on that press, so before then a blow is silent.
 */
export function hammer() {
  if (ctx?.state === "running") sound("bronze");
}

/**
 * Every tap anywhere sounds, not only on links and buttons: a mouse on the press, like a real switch; a finger on the lift, so
 * a scroll, which cancels the touch, stays quiet; a key on the click it makes. data-sound picks another cue, or "none".
 */
export function Sound() {
  useEffect(() => {
    let finger: { id: number; x: number; y: number; t: number } | null = null;
    const play = (t: EventTarget | null) => {
      const el = t instanceof Element ? t.closest<HTMLElement>("a[href], button, [data-sound]") : null;
      if (el?.matches(":disabled") || el?.dataset.sound === "none") return;
      sound((el?.dataset.sound as Cue | undefined) ?? "tick");
    };
    const down = (e: PointerEvent) => {
      if (!e.isPrimary) return;
      if (e.pointerType !== "mouse") finger = { id: e.pointerId, x: e.clientX, y: e.clientY, t: e.timeStamp };
      // Not on the page's own scrollbar, which is outside this box.
      else if (e.button === 0 && e.clientX < document.documentElement.clientWidth && e.clientY < document.documentElement.clientHeight) play(e.target);
    };
    const up = (e: PointerEvent) => {
      if (e.pointerId !== finger?.id) return;
      const tap = Math.hypot(e.clientX - finger.x, e.clientY - finger.y) < 10 && e.timeStamp - finger.t < 700;
      finger = null;
      if (tap) play(e.target);
    };
    const cancel = () => (finger = null);
    // A pointer's click has already sounded; a key's has a detail of 0.
    const click = (e: MouseEvent) => {
      if (e.detail === 0) play(e.target);
    };
    // iOS only lets audio wake on the touch's own end.
    const wake = () => {
      if (ctx?.state === "suspended" && !muted()) void ctx.resume();
    };
    addEventListener("pointerdown", down, true);
    addEventListener("pointerup", up, true);
    addEventListener("pointercancel", cancel, true);
    addEventListener("click", click, true);
    addEventListener("touchend", wake, { capture: true, passive: true });
    // Making the context opens the audio device, which holds the page for 0.2 to 0.75 s on Windows; made on the first
    // press, that was the stall before anything opened. So it's made just after the fonts are in (on the home page the
    // preloader's lines are drawing then, off the page's thread), asleep, and a press only wakes it (about 3 ms).
    if (typeof AudioContext !== "undefined") document.fonts.ready.then(() => setTimeout(() => muted() || make(), 150));
    return () => {
      removeEventListener("pointerdown", down, true);
      removeEventListener("pointerup", up, true);
      removeEventListener("pointercancel", cancel, true);
      removeEventListener("click", click, true);
      removeEventListener("touchend", wake, true);
    };
  }, []);
  return null;
}

/** The one switch for all of it, beside the theme switch. Turning it on answers with a press. */
export function SoundToggle({ className = "" }: { className?: string }) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const sync = () => setOn(!muted());
    sync();
    addEventListener("soundchange", sync);
    return () => removeEventListener("soundchange", sync);
  }, []);
  const flip = () => {
    try {
      localStorage.setItem("sound", on ? "off" : "on");
    } catch {}
    setOn(!on);
    dispatchEvent(new Event("soundchange"));
    if (!on) sound("tick");
  };
  return (
    <button type="button" role="switch" aria-checked={on} aria-label="Sound" data-sound="none" onClick={flip} className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
        <path d="M3.5 9.5h3L11 6v12l-4.5-3.5h-3z" />
        {on ? <path d="M15 9.5a3.5 3.5 0 0 1 0 5M17.6 7a7 7 0 0 1 0 10" /> : <path d="m15.5 9.5 5 5m0-5-5 5" />}
      </svg>
    </button>
  );
}
