import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { sizeOf } from "@/content";
import type { Block, Card, Picture, Wire, WireItem } from "@/content/types";
import { Icon } from "./Icon";
import { Immersive } from "./Immersive";
import { Rich, RichWords, RiseWords } from "./Rich";
import { System } from "./System";
import { Tabs } from "./Tabs";
import { Video } from "./Video";

const i = (n: number) => ({ "--i": n }) as CSSProperties;
const MAIN = "(min-width: 816px) 744px, 100vw";

function Pic({ picture, sizes = MAIN, className, priority }: { picture: Picture; sizes?: string; className?: string; priority?: boolean }) {
  return <Image quality={90} src={picture.src} alt={picture.alt} {...sizeOf(picture)} sizes={sizes} className={className} priority={priority} />;
}


function Caption({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="caption mt-4 max-w-[var(--measure)] text-small text-label">{children}</p>;
}

/** A picture on its plate (globals.css .plate): the screen inset on a soft field of the project's colour. */
function Plate({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div data-reveal="clip" className={`plate ${className}`}>
      <div className="shot">{children}</div>
    </div>
  );
}

/** One part of a wireframe. Pictures get their diagonals, copy is a bar unless it has words. */
function WirePart({ it, phone }: { it: WireItem; phone: boolean }) {
  const h = it.h ?? 0;
  const dash = { strokeDasharray: phone ? "2.4 1.8" : "1.6 1.2" };
  const ns = "non-scaling-stroke" as const;
  switch (it.k) {
    case "box":
      return <rect style={dash} x={it.x} y={it.y} width={it.w} height={h} rx={phone ? 3 : 1.6} fill="none" stroke="currentColor" vectorEffect={ns} />;
    case "img":
      return (
        <g>
          <rect x={it.x} y={it.y} width={it.w} height={h} rx={phone ? 2.4 : 1.2} fill="none" stroke="currentColor" style={dash} vectorEffect={ns} />
          <path d={`M${it.x} ${it.y}L${it.x + it.w} ${it.y + h}M${it.x + it.w} ${it.y}L${it.x} ${it.y + h}`} stroke="currentColor" strokeOpacity={0.35} vectorEffect={ns} />
        </g>
      );
    case "btn":
      return <rect style={dash} x={it.x} y={it.y} width={it.w} height={h} rx={h / 2} fill="none" stroke="currentColor" vectorEffect={ns} />;
    case "dot":
      return <circle style={dash} cx={it.x + it.w / 2} cy={it.y + it.w / 2} r={it.w / 2} fill="none" stroke="currentColor" vectorEffect={ns} />;
    case "rule":
      return <line x1={it.x} y1={it.y} x2={it.x + it.w} y2={it.y} stroke="currentColor" vectorEffect={ns} />;
    case "text":
      return it.t ? (
        <text style={{ fontFamily: "var(--font-geist)" }} x={it.x} y={it.y} fontSize={phone ? 6.2 : 3.6} fill="var(--color-wire-text)" dominantBaseline="middle">
          {it.t}
        </text>
      ) : (
        <rect x={it.x} y={it.y - (phone ? 1.4 : 0.9)} width={it.w} height={phone ? 2.8 : 1.8} rx={phone ? 1.4 : 0.9} fill="var(--color-wire-bar)" />
      );
  }
}

function WireSvg({ wire }: { wire: Wire }) {
  const phone = wire.frame === "phone";
  const [w, h] = phone ? [100, 200] : [160, 100];
  return (
    <svg viewBox={`-1 -1 ${w + 2} ${h + 2}`} className="block h-auto w-full" aria-hidden="true">
      <rect x={0} y={0} width={w} height={h} rx={phone ? 10 : 3} fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
      {phone && <rect x={36} y={4} width={28} height={6} rx={3} fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />}
      {wire.items.map((it, k) => (
        <WirePart key={k} it={it} phone={phone} />
      ))}
    </svg>
  );
}

/**
 * The device section (the "no margins" reference): the product's real screen on a device in isometric, floating over
 * its screens laid out as wireframes. The field runs past the column, so when the card opens to the full screen
 * (FullFrame) the rest of the product comes into view around the device. The notes under it say what each screen is for.
 */
function DeviceStage({ screens, over, label }: { screens: Wire[]; over?: Picture; label: string }) {
  const phone = screens[0]?.frame === "phone";
  // Sizes in cqw of the stage (the column's width).
  const g = phone
    ? { w: 31, h: 31 / 0.462, r: 5, bezel: 1.1, rIn: 3.9, yc: 27, deep: 1.8, tileW: 13, gap: 2.4, top: 40, rows: 2, height: 92 }
    : { w: 64, h: 40, r: 2, bezel: 1, rIn: 1, yc: 26, deep: 1.3, tileW: 24, gap: 2.6, top: 38, rows: 3, height: 88 };
  const cols = 13;
  const half = (cols - 1) / 2;
  const box = { width: `${g.w}cqw`, height: `${g.h}cqw`, left: `calc(50% - ${g.w / 2}cqw)`, top: `${g.yc - g.h / 2}cqw` };
  const slices = 7;
  return (
    <figure className="device-stage relative" aria-label={label} role="img">
      <div style={{ height: `${g.height}cqw` }} className="relative">
        {/* The wireframe field: rows of the product's screens, centred under the device, fading downward. */}
        {/* It runs 120cqw past the column on each side (the mask is as wide as its box, so the box has to be). */}
        <div data-field className="absolute will-change-transform" style={{ top: `${g.top}cqw`, left: "-120cqw", right: "-120cqw", maskImage: "linear-gradient(#000 35%, transparent 96%)" }}>
          <div data-reveal className="flex flex-col items-center" style={{ gap: `${g.gap}cqw` }}>
            {Array.from({ length: g.rows }, (_, row) => (
              <div key={row} className="flex justify-center" style={{ gap: `${g.gap}cqw`, marginLeft: row % 2 ? `${g.tileW + g.gap}cqw` : 0 }}>
                {Array.from({ length: cols }, (_, c) => {
                  const wire = screens[(((c - half + row * 2) % screens.length) + screens.length) % screens.length];
                  return (
                    <div
                      key={c}
                      className="wire-tile shrink-0 rounded-[0.9cqw] bg-surface text-wire ring-1 ring-fg/[0.06]"
                      style={{ width: `${g.tileW}cqw`, padding: `${g.tileW * 0.045}cqw`, "--d": Math.abs(c - half) + row } as CSSProperties}
                    >
                      <WireSvg wire={wire} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* The device: its shadow on the field, then the slab's edge (stacked outlines) and its face. */}
        {over && (
          <>
            <div data-shadow className="device-shadow absolute opacity-50" style={{ ...box, transform: `translateY(${g.h * 0.16}cqw) rotateX(54deg) rotateZ(-38deg) scale(0.94)`, background: "#000", borderRadius: `${g.r}cqw` }} />
            <div data-device className="absolute inset-0 will-change-transform">
              <div data-reveal="clip" className="iso absolute" style={{ ...box, "--r": `${g.r}cqw`, "--r-in": `${g.rIn}cqw`, "--bezel": `${g.bezel}cqw` } as CSSProperties}>
                {Array.from({ length: slices }, (_, k) => (
                  <span key={k} className="slab" style={{ "--y": `${(g.deep * (slices - k)) / slices}cqw`, "--slab": k === 0 ? "#111113" : "#1e1e21" } as CSSProperties} />
                ))}
                <span className="slab-rim" style={{ "--y": `${g.deep * 0.12}cqw` } as CSSProperties} />
                <div className="face">
                  <div className="glass">
                    <Pic picture={over} sizes={phone ? "300px" : "620px"} className="block size-full object-cover object-top" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </figure>
  );
}

export function BlockView({ block, center = false }: { block: Block; center?: boolean }) {
  switch (block.type) {
    case "section": {
      // Only the four main sections arrive with motion, and each a different way (globals.css, .entry-*);
      // the rest of the headings are simply there.
      const e = block.entry;
      return (
        <section id={block.id} className={`mx-auto w-full max-w-[var(--measure)] ${center ? "text-center" : ""}`}>
          {block.eyebrow && (
            <p data-reveal className={`eyebrow ${center ? "justify-center" : ""} ${e === "draw" ? "eyebrow-draw" : ""}`}>
              {block.eyebrow}
              <span className="eyebrow-rule" aria-hidden="true" />
            </p>
          )}
          <h2 data-reveal={e ? "" : undefined} className={`${e ? `entry-${e}` : ""} font-serif text-headline text-ink`}>
            {e === "rise" ? (
              <RiseWords text={block.title} />
            ) : e === "wipe" ? (
              // the clip sits on a child: a clipped target has no visible area, so it would never be seen arriving
              <span className="wipe-in block">
                <Rich text={block.title} />
              </span>
            ) : (
              <Rich text={block.title} />
            )}
          </h2>
          <div className={`mt-5 flex flex-col gap-4 empty:hidden ${center ? "mx-auto max-w-[560px]" : ""}`}>
            {block.body.map((p, n) => (
              <p key={n} data-reveal style={i(n + 1)} className="section-copy text-copy text-body">
                {p}
              </p>
            ))}
          </div>
        </section>
      );
    }

    case "media": {
      const { width, height } = sizeOf(block.picture);
      return (
        <figure>
          {block.video ? (
            <Plate className="zoom">
              <Video src={block.video} poster={block.picture.src} width={width} height={height} label={block.picture.alt} />
            </Plate>
          ) : block.tall ? (
            <Plate>
              <div tabIndex={0} className="pan aspect-[16/10]" style={{ "--pan": `${Math.min(14, (height / width) * 2.2)}s` } as CSSProperties}>
                <Pic picture={block.picture} className="block w-full" />
              </div>
            </Plate>
          ) : (
            <Plate className="zoom">
              <Pic picture={block.picture} className="block h-auto w-full" />
            </Plate>
          )}
          <Caption>{block.caption}</Caption>
        </figure>
      );
    }

    case "immersive": {
      const { width, height } = sizeOf(block.picture);
      return (
        <Immersive caption={block.caption} aspect={width / height}>
          {block.video ? (
            <Video src={block.video} poster={block.picture.src} width={width} height={height} label={block.picture.alt} fill />
          ) : (
            <Pic picture={block.picture} sizes="100vw" className="size-full object-cover object-top" />
          )}
        </Immersive>
      );
    }

    case "gallery": {
      const contain = block.fit === "contain";
      if (block.tabs)
        return (
          <figure data-reveal>
            <Tabs labels={block.tabs} contain={contain}>
              {block.pictures.map((p) => (
                <Pic key={p.src} picture={p} className={contain ? "h-auto max-h-full w-auto max-w-full object-contain" : "size-full object-cover object-top"} />
              ))}
            </Tabs>
            <Caption>{block.caption}</Caption>
          </figure>
        );
      const odd = block.pictures.length % 2 === 1;
      return (
        <figure>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {block.pictures.map((p, n) => (
              <div
                key={p.src}
                data-reveal
                style={i(n % 2)}
                className={`plate zoom ${contain ? "flex aspect-[16/10] items-center justify-center" : ""} ${odd && n === block.pictures.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <div className={contain ? "flex size-full items-center justify-center" : "shot"}>
                  <Pic picture={p} sizes="(min-width: 640px) 450px, 100vw" className={contain ? "h-auto max-h-full w-auto max-w-full object-contain" : "block h-auto w-full"} />
                </div>
              </div>
            ))}
          </div>
          <Caption>{block.caption}</Caption>
        </figure>
      );
    }

    case "showcase":
      return (
        <figure className="flex flex-col items-center">
          <h3 data-reveal className="text-center font-serif text-headline text-ink">
            {block.title}
          </h3>
          <Plate className="zoom mt-8 w-full sm:mt-10">
            <Pic picture={block.picture} className="block h-auto w-full" />
          </Plate>
          <figcaption data-reveal className="mt-8 max-w-[520px] text-center font-serif text-[clamp(19px,17px+0.4vw,23px)] leading-snug text-body">
            {block.caption}
          </figcaption>
        </figure>
      );

    case "image":
      return (
        <Plate>
          <Pic picture={block.picture} className="block h-auto w-full" />
        </Plate>
      );

    case "wireframes":
      return (
        <>
          <DeviceStage screens={block.screens} over={block.over} label={`${block.screens.map((w) => w.title).join(", ")}, as wireframes`} />
          <dl className={`mx-auto mt-4 grid max-w-[calc(var(--measure)+2*var(--pad-x))] gap-x-8 gap-y-6 px-[var(--pad-x)] ${block.screens.length > 3 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
            {block.screens.map((w, n) => (
              <div key={w.title} data-reveal style={i(n)}>
                <dt className="text-small font-medium text-fg">{w.title}</dt>
                <dd className="mt-1 text-small text-label">{w.note}</dd>
              </div>
            ))}
          </dl>
        </>
      );

    case "illustration":
      return (
        <figure data-reveal className="mx-auto w-full max-w-[var(--measure)]">
          <div className="diagram flex justify-center px-4 pt-10 pb-2">
            <span className="diagram-name">“{block.title}”</span>
            {/* Loaded with the page, not lazily: parsing it mid-scroll cost a dropped frame. Its loop sleeps until it's on screen. */}
            <iframe src={block.src} title={block.title} className="aspect-[5/4] w-full max-w-[520px] border-0 bg-transparent" />
          </div>
          <figcaption className="mt-3 text-small text-label">{block.note}</figcaption>
        </figure>
      );

    case "cards": {
      // The reference's grid of points: a name over its line, side by side, no boxes.
      return (
        <ul className="mx-auto grid w-full max-w-[var(--measure)] gap-x-8 gap-y-7 sm:grid-cols-2">
          {block.items.map((card, n) => (
            <li key={card.title} data-reveal style={i(n)} className="flex flex-col gap-1">
              <p className="text-copy font-medium text-ink">{card.title}</p>
              {card.text && <p className="text-copy text-body">{card.text}</p>}
            </li>
          ))}
        </ul>
      );
    }

    case "statement":
      // A line set on its own, centred, as Bill Guo's case studies pause on a question: no band, no card.
      return (
        <p id={block.id} data-reveal className="mx-auto max-w-[560px] py-[clamp(16px,3vw,40px)] text-center font-serif text-statement text-ink">
          <RichWords text={block.text} />
        </p>
      );

    case "stats":
      return (
        <div className="mx-auto flex w-full max-w-[var(--measure)] flex-col gap-10 sm:gap-12">
          {block.note && (
            <p data-reveal className="text-lead text-ink">
              {block.note}
            </p>
          )}
          <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {block.items.map((s, n) => (
              <div key={s.label} data-reveal style={i(n)} className="flex flex-col gap-2 border-t border-line pt-5">
                <dt className="text-small text-label">{s.label}</dt>
                <dd className="overflow-hidden pb-1 font-serif text-statement text-ink">
                  <span className="stat-value tabular-nums" style={i(n)}>
                    {s.value}
                  </span>
                </dd>
                {s.note && <dd className="text-small text-body">{s.note}</dd>}
              </div>
            ))}
          </dl>
        </div>
      );

    case "process": {
      // The design process: the stairs figure climbs these phases (one step each, with what the phase left behind),
      // then the phases run across in order, each with what it was for and its output.
      const q = new URLSearchParams({ p: block.steps.map((s) => s.phase).join(","), k: block.steps.map((s) => s.kind).join(",") });
      return (
        <div className="flex flex-col gap-10">
          <figure className="diagram flex justify-center px-4 pt-10 pb-2">
            <span className="diagram-name">“The process”</span>
            <iframe src={`/illustrations/stairs.html?${q}`} title="The design process, as a flight of steps" className="aspect-[5/4] w-full max-w-[400px] border-0 bg-transparent" />
          </figure>
          <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {block.steps.map((s, n) => (
              <li key={s.title} data-reveal style={i(n)} className="flex flex-col gap-1.5 border-t border-line pt-4">
                <p className="flex items-baseline gap-2 font-mono text-[11px] leading-4 tracking-[0.1em] text-label uppercase">
                  <span className="tabular-nums">{String(n + 1).padStart(2, "0")}</span>
                  <span>{s.phase}</span>
                </p>
                <p className="font-serif text-[18px] leading-[1.45] text-ink">{s.title}</p>
                <p className="text-copy text-body">{s.text}</p>
                {s.made && <p className="mt-1 text-small text-label">Output: {s.made}</p>}
              </li>
            ))}
          </ol>
        </div>
      );
    }

    case "compare": {
      // Step n of the old way and step n of the new share a row, so each change reads straight across.
      const { before, after } = block;
      const cols = "sm:grid-cols-[minmax(0,1fr)_24px_minmax(0,1fr)] sm:gap-x-6";
      const Step = ({ s, now }: { s?: { text: string; time?: string }; now: boolean }) =>
        s ? (
          <div className="flex flex-col gap-1">
            <span className={`sm:hidden text-tag ${now ? "text-fg" : "text-label"}`}>{now ? after.label : before.label}</span>
            <span className={`text-copy ${now ? "text-ink" : "text-label"}`}>{s.text}</span>
            {s.time && <span className="font-mono text-small text-label tabular-nums">{s.time}</span>}
          </div>
        ) : (
          <div />
        );
      return (
        <div>
          <div className={`hidden pb-4 sm:grid ${cols}`}>
            <p className="flex items-center gap-2 text-small font-medium text-label">
              <span className="size-2 rounded-full bg-tick" aria-hidden="true" />
              {before.label}
            </p>
            <span />
            <p className="flex items-center gap-2 text-small font-medium text-fg">
              <span className="size-2 rounded-full bg-[var(--deep)]" aria-hidden="true" />
              {after.label}
            </p>
          </div>
          <ol>
            {Array.from({ length: Math.max(before.steps.length, after.steps.length) }, (_, n) => (
              <li key={n} data-reveal style={i(n)} className={`grid gap-3 border-t border-line py-4 sm:items-start ${cols}`}>
                <Step s={before.steps[n]} now={false} />
                <Icon name="arrow-right" size={16} className="mt-1 hidden text-label sm:block" />
                <Step s={after.steps[n]} now />
              </li>
            ))}
          </ol>
          {(before.total || after.total) && (
            <div data-reveal className={`grid gap-3 border-t border-fg/25 pt-5 ${cols}`}>
              <p className="font-serif text-statement text-label">{before.total}</p>
              <Icon name="arrow-right" size={20} className="mt-3 hidden text-ink sm:block" />
              <p className="font-serif text-statement text-ink">{after.total}</p>
            </div>
          )}
        </div>
      );
    }

    case "system":
      return <System title={block.title} note={block.note} parts={block.parts} />;

    case "tradeoffs":
      return (
        <Table
          head={["The limit", "How it shaped the work", "What it cost"]}
          rows={block.items.map((t) => ({
            key: t.constraint,
            cells: [
              <>
                <span className="mb-1 block font-sans text-small text-label">{t.kind}</span>
                {t.constraint}
              </>,
              t.chose,
              t.cost,
            ],
          }))}
        />
      );

    case "decisions":
      return (
        <Table
          head={["The call", "Went with", "Passed on"]}
          rows={block.items.map((d) => ({
            key: d.title,
            cells: [
              d.title,
              <>
                <span className="text-ink">{d.chose}</span> {d.why}
              </>,
              d.considered.map((o) => (
                <span key={o.option} className="block">
                  <span className="text-fg">{o.option}.</span> {o.why}
                </span>
              )),
            ],
          }))}
        />
      );

    case "alignment":
      return (
        <Table
          head={["What the business needed", "What the design does for it", "How it shows"]}
          rows={block.items.map((a) => ({ key: a.goal, cells: [a.goal, a.design, a.signal] }))}
        />
      );
  }
}

/**
 * The business needs, the constraints and the decisions all read straight across one three-column table, one row each,
 * so a section of them stays short. Below sm the rows stack and each cell carries its column's name.
 */
function Table({ head, rows }: { head: [string, string, string]; rows: { key: string; cells: [ReactNode, ReactNode, ReactNode] }[] }) {
  const cols = "sm:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,3fr)] sm:gap-8";
  return (
    <div>
      <div className={`hidden pb-4 text-small font-medium text-fg sm:grid ${cols}`}>
        {head.map((h) => (
          <p key={h}>{h}</p>
        ))}
      </div>
      <ol>
        {rows.map((r, n) => (
          <li key={r.key} data-reveal style={i(n)} className={`grid gap-3 border-t border-line py-5 ${cols}`}>
            <div className="font-serif text-[clamp(19px,17px+0.4vw,22px)] leading-snug text-ink">{r.cells[0]}</div>
            <div className="text-copy text-body">
              <span className="font-medium text-fg sm:hidden">{head[1]}: </span>
              {r.cells[1]}
            </div>
            <div className="text-small text-label">
              <span className="font-medium text-fg sm:hidden">{head[2]}: </span>
              {r.cells[2]}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
