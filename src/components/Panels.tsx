"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CaseStudy } from "@/content/types";
import { Icon } from "./Icon";
import { useActiveSection } from "./motion";
import { PageLink, usePageNav } from "./PageLink";
import { plain } from "./Rich";
import { onScrollFrame } from "./scroll";
import { SoundToggle } from "./Sound";
import { ThemeToggle } from "./ThemeToggle";

type Mode = "full" | "quick";

/**
 * Full story or quick overview: one attribute on <html> that the CSS reads, kept in the address as ?view=quick.
 * Shared by everything that shows it (the side panel, the tab, the entry screen's button), so they never disagree.
 */
const views = new Set<(m: Mode) => void>();
function setMode(m: Mode) {
  const apply = () => {
    document.documentElement.dataset.mode = m;
    views.forEach((f) => f(m));
    const url = new URL(location.href);
    if (m === "quick") url.searchParams.set("view", "quick");
    else url.searchParams.delete("view");
    history.replaceState(history.state, "", url);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (document.startViewTransition && !reduce) document.startViewTransition(apply);
  else apply();
}
function useMode() {
  const [mode, setModeState] = useState<Mode>("full");
  useEffect(() => {
    const m: Mode = new URLSearchParams(location.search).get("view") === "quick" ? "quick" : "full";
    document.documentElement.dataset.mode = m;
    setModeState(m);
    views.add(setModeState);
    return () => void views.delete(setModeState);
  }, []);
  return [mode, setMode] as const;
}

/** A button anywhere on the page (the entry card's) that flips between the full story and the quick overview. */
export function ModeButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => dispatchEvent(new Event("case:mode"))}>
      {children}
    </button>
  );
}

function ModeSwitch({ mode, setMode, className = "" }: { mode: Mode; setMode: (m: Mode) => void; className?: string }) {
  return (
    <div role="group" aria-label="How much to read" className={`grid grid-cols-2 rounded-[10px] bg-card p-0.5 ${className}`}>
      {(["full", "quick"] as const).map((m) => (
        <button
          key={m}
          type="button"
          aria-pressed={mode === m}
          onClick={() => setMode(m)}
          className="h-8 rounded-[8px] text-tag text-label transition-[background-color,color,box-shadow] duration-200 aria-pressed:bg-surface aria-pressed:text-fg aria-pressed:shadow-[0_1px_2px_rgb(0_0_0/0.08),0_0_0_1px_rgb(0_0_0/0.04)]"
        >
          {m === "full" ? "Full story" : "Quick overview"}
        </button>
      ))}
    </div>
  );
}

/**
 * The contents, from 1440 px (Rachel Chen's): the sections as quiet names stuck at the middle of the left edge for the
 * whole story, the one being read in the accent with a small square beside it. They fade while a film fills the screen.
 */
export function Rails({ study }: { study: CaseStudy }) {
  const s = study.status;
  const active = useActiveSection(s.sections.map((l) => l.href.slice(1)));
  return (
    <div className="pointer-events-none absolute inset-y-0 left-6 z-30 hidden w-[200px] min-[1440px]:block">
      <nav aria-label="On this page" className="toc pointer-events-auto sticky top-1/2 mt-[var(--part)] flex -translate-y-1/2 flex-col">
        {s.sections.map((l) => (
          <a key={l.href} href={l.href} aria-current={active === l.href.slice(1)} className="nav-link flex h-[27px] items-center text-[15px]">
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

/**
 * Below 1440 px, one slim bar along the top in place of the old floating pill, which covered the content and was easy
 * to hit by accident. On small screens a table of contents works best as in-page links in a list that opens on demand,
 * with the current section shown (NN/g, "Tables of Contents on Mobile"). So the bar names the section you're in, draws
 * how far you've read as a hairline, and opens "On this page" under itself. Clear over the entry sky, solid once the
 * page moves.
 */
function LocalNav({ study, mode }: { study: CaseStudy; mode: Mode }) {
  const sections = useMemo(() => study.blocks.flatMap((b) => (b.type === "section" ? [{ id: b.id, title: plain(b.title) }] : [])), [study]);
  const active = useActiveSection(sections.map((s) => s.id));
  const [open, setOpen] = useState(false);
  const [inStory, setInStory] = useState(false);
  const bar = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(
    () =>
      onScrollFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.current!.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0})`;
        bar.current!.toggleAttribute("data-solid", scrollY > 8);
        setInStory(scrollY > innerHeight * 0.6);
      }),
    [],
  );

  // An open list closes on a tap outside it or on Esc (which then doesn't also close the case study).
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => !bar.current!.contains(e.target as Node) && setOpen(false);
    const key = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.stopPropagation();
      setOpen(false);
      button.current?.focus();
    };
    document.addEventListener("pointerdown", away);
    window.addEventListener("keydown", key, true);
    return () => {
      document.removeEventListener("pointerdown", away);
      window.removeEventListener("keydown", key, true);
    };
  }, [open]);

  const current = sections.find((s) => s.id === active);
  const iconButton = "grid size-11 shrink-0 place-items-center rounded-full text-fg transition-[background-color,scale] duration-200 hover:bg-card active:scale-95";
  return (
    <header ref={bar} data-open={open || undefined} className="localnav fixed inset-x-0 top-0 z-40 min-[1440px]:hidden">
      <div className="mx-auto flex h-14 max-w-[calc(var(--wide)+2*var(--gutter))] items-center gap-1 px-[max(6px,calc(var(--gutter)-12px))]">
        <button
          ref={button}
          type="button"
          aria-expanded={open}
          aria-controls="on-this-page"
          onClick={() => setOpen(!open)}
          className="flex h-11 min-w-0 flex-1 items-center gap-1.5 rounded-full px-3 text-left transition-colors hover:bg-card"
        >
          <span className="min-w-0 truncate text-small">
            <span className="font-medium text-fg">{study.title}</span>
            {inStory && current && <span className="text-label"> · {current.title}</span>}
          </span>
          <Icon name="caret-down" size={14} className={`shrink-0 text-label transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
        <SoundToggle className={iconButton} />
        <ThemeToggle plain className={iconButton} />
        <PageLink href="/" aria-label="Close the case study" className={iconButton}>
          <Icon name="close" size={18} />
        </PageLink>
      </div>
      <div className="localnav-line h-px bg-line">
        <div ref={progress} className="h-full origin-left bg-[var(--deep)]" style={{ transform: "scaleX(0)" }} />
      </div>
      {open && (
        <div id="on-this-page" className="max-h-[calc(100svh-57px)] overflow-y-auto border-b border-line bg-surface shadow-[0_24px_40px_-24px_rgb(0_0_0/0.35)]">
          <div className="mx-auto grid max-w-[calc(var(--wide)+2*var(--gutter))] gap-6 px-[var(--gutter)] pt-4 pb-6 sm:grid-cols-[minmax(0,1fr)_240px] sm:gap-10">
            <nav aria-label="On this page">
              <p className="text-tag text-label">On this page</p>
              <ol className="mt-2 flex flex-col">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === s.id ? "location" : undefined}
                      className="toc-link flex h-11 items-center gap-3 rounded-[10px] px-2 text-small text-body transition-colors hover:bg-card aria-[current]:font-medium aria-[current]:text-fg"
                    >
                      <span className="toc-dot size-1.5 shrink-0 rounded-full bg-tick" aria-hidden="true" />
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="flex flex-col gap-5 border-t border-line pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
              <ModeSwitch
                mode={mode}
                setMode={(m) => {
                  setOpen(false);
                  setMode(m);
                }}
              />
              {study.status.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener" className="out-link inline-flex h-9 items-center gap-1.5 text-small font-medium text-fg">
                  {l.label}
                  <Icon name="arrow-up-right" size={14} className="out-arrow text-label" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Panels({ study }: { study: CaseStudy }) {
  const [mode] = useMode();
  const nav = usePageNav();

  // The entry screen's button flips the mode; leaving the page clears it.
  useEffect(() => {
    const flip = () => setMode(document.documentElement.dataset.mode === "quick" ? "full" : "quick");
    addEventListener("case:mode", flip);
    return () => {
      removeEventListener("case:mode", flip);
      delete document.documentElement.dataset.mode;
    };
  }, []);

  // Esc closes the case study, unless something open takes it first.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.querySelector("dialog[open], [role='dialog']")) nav("/");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- nav reads what it needs when it's called
  }, []);

  return (
    <>
      <LocalNav study={study} mode={mode} />

      {/* From 1440 px: the way back as a breadcrumb at the top left (Rachel Chen's), the theme switch at the top right. */}
      <nav aria-label="Breadcrumb" className="fixed top-6 left-6 z-40 hidden items-center gap-2 text-[15px] min-[1440px]:flex">
        <PageLink href="/" className="group inline-flex items-center gap-1.5 text-label transition-colors hover:text-ink">
          <Icon name="arrow-right" size={13} className="rotate-180 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Work
        </PageLink>
        <span className="text-ink/25">/</span>
        <span className="text-ink">{study.title}</span>
      </nav>
      <SoundToggle className="fixed top-4 right-16 z-40 hidden size-10 place-items-center text-label transition-colors hover:text-ink min-[1440px]:grid" />
      <ThemeToggle plain className="fixed top-4 right-5 z-40 hidden size-10 place-items-center text-label transition-colors hover:text-ink min-[1440px]:grid" />
    </>
  );
}
