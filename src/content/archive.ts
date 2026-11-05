import { caseStudies } from ".";
import type { Picture } from "./types";

export type ArchiveKind = "animation" | "motion" | "web" | "product" | "photos";

/** One thing in the archive: what's drawn on its node, and what opens on the stage (a live figure, a film, a picture). */
export type ArchiveItem = {
  id: string;
  kind: ArchiveKind;
  title: string;
  note: string;
  year: string;
  picture: Picture;
  video?: string;
  figure?: string;
  href?: string;
};

const fig = (id: string, title: string, note: string): ArchiveItem => ({
  id, kind: "animation", title, note, year: "2026", picture: { src: `/archive/${id}.webp`, alt: title }, figure: `/illustrations/${id}.html`,
});
const film = (id: string, title: string, note: string, dir: string, name: string, href: string): ArchiveItem => ({
  id, kind: "motion", title, note, year: "2026", picture: { src: `/case-studies/${dir}/${name}-poster.webp`, alt: title }, video: `/case-studies/${dir}/${name}.mp4`, href,
});

/** The branches, in the order they hang from the root. Photos has nothing in it yet, and says so. */
export const ARCHIVE_KINDS: { kind: ArchiveKind; label: string }[] = [
  { kind: "animation", label: "Animation" },
  { kind: "motion", label: "Motion" },
  { kind: "web", label: "Web" },
  { kind: "product", label: "Product" },
  { kind: "photos", label: "Photos" },
];

export const archive: ArchiveItem[] = [
  fig("memory", "A project, taken apart", "Trace's timeline, diffs, canvas and case study, layered over one memory."),
  fig("devices", "Four devices on a plinth", "Every animation in the engine runs on one of these."),
  fig("shoeboxes", "Five series, one shelf", "KIPRUN's five shoe series, a box each."),
  fig("vault", "A scan across the keys", "Uniqkey's breach monitoring, drawn as a sweep."),
  fig("deck", "Five cards, one in hand", "The five leagues of Anime Sports League."),
  fig("stairs", "The design process", "A flight of steps, one per phase, climbed on a loop."),
  film("trace-launch", "Trace launch film", "Directed by the engine's Artist.", "trace", "launch", "/work/trace"),
  film("engine-launch", "Animation Engine launch film", "Exported from its own Studio.", "animation-engine", "engine-launch", "/work/animation-engine"),
  film("kiprun-film", "KIPRUN launch film", "48 seconds, made for the page.", "kiprun", "site-film", "/work/kiprun"),
  film("trace-ui", "Trace, recorded", "A project's timeline, its screens and its checks.", "trace", "trace-ui", "/work/trace"),
  ...caseStudies.map((c) => ({
    id: c.slug,
    kind: (c.kind === "Product" ? "product" : "web") as ArchiveKind,
    title: c.title,
    note: c.tagline.replace(/==/g, ""),
    year: c.year,
    picture: c.cover,
    href: `/work/${c.slug}`,
  })),
];
