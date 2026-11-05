import { aslWires } from "../wireframes";
import type { CaseStudy } from "../types";

const dir = "/case-studies/anime-sports-league";

export const animeSportsLeague: CaseStudy = {
  slug: "anime-sports-league",
  title: "Anime Sports League",
  tagline: "Five sports, ==five anime leagues==.",
  theme: { deep: "#042c85", mid: "#fc4b6c", light: "#f0a60f", highlight: "#ffd36b" },
  hero: { frame: "phone", picture: { src: `${dir}/hero-phone.webp`, alt: "The poster on a phone" } },
  kind: "Web",
  year: "2026",
  summary:
    "A Decathlon India campaign that turns five sports into five anime leagues, each with its own tee. I designed and built the campaign site around the illustrations.",
  meta: [
    { label: "Role", value: "Web Design, Motion, Development" },
    { label: "Client", value: "Decathlon India" },
    { label: "Timeline", value: "Aug 24 – Sep 21, 2026" },
  ],
  takeaways: [
    "Traced art breaks when half of something moves, and a broken detail reads worse than a still one. So the football stays still.",
    "Art that never moves doesn't belong in the page. Only the hero's 15 layers are live paths; inlining the cards too would have added 1.3 MB to every visit.",
    "A page's motion should be the scroll and the deck, not a flicker the phone pays for on every frame. About 80 flame tweens became 4.",
  ],
  quick: {
    problem:
      "A Decathlon campaign that turns five sports into five anime leagues needed a site, but its artwork arrived as flat traced pictures that couldn't move.",
    approach:
      "The poster cut into 15 layers that part as you scroll, a deck of league cards that deals itself, the tees and the line-up, all timed against a reference site.",
    result:
      "Built for Decathlon India in four weeks: 1,732 traced paths became 15 moving layers, and the card art went from 3 MB to 310 kB.",
  },
  status: {
    title: "Built for Decathlon India",
    live: false,
    facts: [
      { label: "Artwork", value: "Jolly Yun Shann, illustrator and NFT artist" },
      { label: "Built with", value: "Vite, React 19, GSAP ScrollTrigger, Lenis, plain CSS" },
    ],
    sections: [
      { label: "Problem", href: "#opening" },
      { label: "Process", href: "#process" },
      { label: "The site", href: "#deck" },
      { label: "Decisions", href: "#decisions" },
      { label: "Results", href: "#results" },
    ],
    links: [],
  },
  cover: { src: `${dir}/hero.webp`, alt: "The Anime Sports League poster" },
  blocks: [
    {
      type: "immersive",
      quick: true,
      picture: { src: `${dir}/hero.webp`, alt: "The framed Anime Sports League poster" },
      caption: "The framed poster, the first thing on the page.",
    },
    {
      type: "section",
      id: "opening",
      entry: "rise",
      eyebrow: "The problem",
      title: "One ==flat picture==",
      body: [
        "The campaign's art is Jolly Yun Shann's, and it arrived traced: the poster was one frame of 1,732 unnamed paths, no layers, no names. A site that only showed it would be a poster with a scroll bar.",
        "The brief wanted a world you scroll into: the scene parts, the leagues deal themselves out like cards, and every tee leads to its product.",
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/theatre.html",
      title: "A picture, cut into layers",
      note: "Move along it: the layers part as you go, the nearest one lit, the way the poster was cut into layers that move on their own.",
    },
    {
      type: "section",
      id: "business",
      title: "What Decathlon ==needed from it==",
      body: [],
    },
    {
      type: "alignment",
      items: [
        { goal: "Turn the campaign into tee and cap sales", design: "Every poster leads to its own tee, EXPLORE opens the garment's own page, and the caps got pages of their own.", signal: "Visits to the tee and cap pages from the campaign." },
        { goal: "Know the visits came from the campaign", design: "Every product link, in the tees, the catalogue and the line-up, carries the campaign's UTM tags.", signal: "Campaign-tagged visits in Decathlon's analytics." },
        { goal: "Credit the collaboration", design: "Decathlon x Jolly Yun Shann on the footer boards, and the art moves without being redrawn.", signal: "The credit sits on every footer." },
      ],
    },
    {
      type: "media",
      picture: { src: `${dir}/ground.webp`, alt: "From the first step to the final whistle, the ground is yours" },
      caption: "The ground: from the first step to the final whistle, the ground is yours.",
    },
    {
      type: "section",
      id: "constraints",
      title: "What I had to ==work within==",
      body: [],
    },
    {
      type: "tradeoffs",
      items: [
        {
          kind: "Content",
          constraint: "The art is Jolly Yun Shann's, and it arrived flat.",
          chose: "Cut it by paint order into 15 layers, and measure which paths are which before moving any.",
          cost: "What can't move cleanly stays still.",
        },
        {
          kind: "Performance",
          constraint: "Moving traced art on a mid-range phone.",
          chose: "Layers sit on the GPU only while they move; the hero had been holding 19 at once.",
          cost: "The hero's paths still weigh ~281 kB gzipped.",
        },
      ],
    },
    {
      type: "section",
      id: "process",
      entry: "draw",
      eyebrow: "Design process",
      title: "Four weeks, ==51 commits==",
      body: [],
    },
    {
      type: "process",
      steps: [
        {
          phase: "Prototype",
          kind: "phone",
          title: "Make the poster move",
          text: "Before any section, the poster had to come apart and move.",
          made: "the hero, the deck and the cursor",
        },
        {
          phase: "Build",
          kind: "screen",
          title: "Build the world around it",
          text: "The ground, the footer boards, a page-long gradient and the line-up.",
          made: "every section of the page",
        },
        {
          phase: "Refine",
          kind: "notes",
          title: "Take out what didn't hold",
          text: "The burst, the hotspots and the spinning shuttlecock came out, so the deal had room to be smooth.",
          made: "a calmer, lighter page",
        },
        {
          phase: "Connect",
          kind: "cards",
          title: "Send people to the right product",
          text: "Every tee, cap and poster links to its own garment page, tagged with the campaign's UTM parameters.",
          made: "product links, prices and web analytics",
        },
        {
          phase: "Ship",
          kind: "box",
          title: "Hand it over",
          text: "Page views and Web Vitals wired in, then handed to Decathlon's test address.",
          made: "served from Decathlon's test address on 21 September 2026",
        },
      ],
    },
    {
      type: "media",
      picture: { src: `${dir}/episodes.webp`, alt: "Welcome to the anime world: the five league cards, dealt" },
    },
    {
      type: "section",
      id: "deck",
      entry: "focus",
      eyebrow: "The site",
      title: "The ==episode deck==",
      body: [
        "The five league cards start as a pile and deal themselves into a row, each turning over to reveal its league as it lands.",
        "The section holds still while the deck deals; with reduced motion, it's simply dealt, face up.",
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/deck.html",
      title: "Five cards, one in hand",
      note: "Point at a card: it rises out of the fan and the others lean away in turn, the way the site deals its five leagues.",
    },
    {
      type: "section",
      id: "timing",
      title: "Timing, ==measured==",
      body: [
        "The scroll-out is timed off yesnowww.com, the site the frame was modelled on: it starts on the first pixel of scroll, runs linear, and plays as three overlapping beats.",
      ],
    },
    {
      type: "media",
      picture: { src: `${dir}/lineup.webp`, alt: "The line-up, stepped by scroll" },
      caption: "The line-up: the leagues and their caps, stepped by the scroll.",
    },
    {
      type: "section",
      id: "wireframes",
      title: "The poster, on a phone",
      body: [
        "On a phone the poster keeps its frame, the deck becomes a row you swipe, and the line-up stacks the league names large enough to read.",
      ],
    },
    { type: "wireframes", screens: aslWires, over: { src: `${dir}/hero-phone.webp`, alt: "The poster on a phone" } },
    {
      type: "section",
      id: "decisions",
      title: "The calls I made, and ==what I passed on==",
      body: [],
    },
    {
      type: "decisions",
      items: [
        {
          title: "What goes into the code",
          chose: "Only the art that moves, the hero's 15 layers, as live paths. The episode cards load as pictures.",
          why: "Animating a path means it has to be in the page; art that never moves doesn't.",
          considered: [
            { option: "Inlining all the art", why: "Simpler, but the cards alone would add 1.3 MB to every visit." },
          ],
        },
        {
          title: "What moves",
          chose: "Only what moves cleanly. The football stays still.",
          why: "Traced art breaks when half of something moves; a broken detail reads worse than a still one.",
          considered: [
            { option: "Moving the football with the kick", why: "Its panels are merged with the leg in the trace, so half a ball would move." },
          ],
        },
        {
          title: "The flames",
          chose: "Flames that hold still, with each prop as one tween.",
          why: "The page's motion should be the scroll and the deck, not a flicker the phone pays for on every frame.",
          considered: [
            { option: "Flickering flames on every prop", why: "About 80 tweens running at once, on every frame." },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "system",
      title: "The art is ==the architecture==",
      body: [
        "The artwork decides everything downstream: its split decides the layers, and the layers decide the bundle and the scroll.",
      ],
    },
    {
      type: "system",
      title: "How the site's parts depend on each other",
      note: "Point at a part, or tab to it: what a change to it reaches lights up.",
      parts: [
        { id: "art", label: "Traced artwork", note: "The poster as one frame of 1,732 unnamed paths, and the card art beside it.", moves: ["assets"] },
        { id: "products", label: "Prices and links", note: "Tees at 799, caps at 699; every link tagged with the campaign's UTM parameters.", moves: ["tees", "lineup"] },
        { id: "assets", label: "Asset build", note: "Splits the art by paint order and runs SVGO. Skipping that step once added ~330 kB to the bundle, twice.", moves: ["layers", "chrome"] },
        { id: "layers", label: "15 layers", note: "Stacked SVG layers on one viewBox, each with its own depth, inlined because they move.", moves: ["scroll", "bundle"] },
        { id: "chrome", label: "Card chrome", note: "One 24 kB SVG for all six cards, pruned from 780 kB of embedded photo.", moves: ["deck"] },
        { id: "scroll", label: "Scroll-out", note: "A linear relay of three overlapping beats, timed off yesnowww.com.", moves: ["runway", "ball"] },
        { id: "bundle", label: "JS bundle", note: "~281 kB gzipped, nearly all of it the hero's paths." },
        { id: "deck", label: "Episode deck", note: "Five cards that deal from a real pile and turn over as they land." },
        { id: "runway", label: "Pinned window", note: "240svh of scroll that the scroll-out is measured over." },
        { id: "ball", label: "Flaming ball", note: "The cricket ball that crosses the frame before the next section." },
        { id: "tees", label: "Tees", note: "One per league, each linking to its garment's own page." },
        { id: "lineup", label: "Line-up", note: "The leagues and caps, opening on where the reader is." },
      ],
    },
    {
      type: "section",
      id: "shift",
      title: "From the first pass to ==what shipped==",
      body: [],
    },
    {
      type: "compare",
      before: {
        label: "The first pass",
        steps: [
          { text: "The poster as one flat frame", time: "1,732 paths" },
          { text: "Card photos exported from Figma", time: "~3 MB PNG" },
          { text: "Card chrome with the photo embedded in it", time: "780 kB" },
          { text: "Flames flickering on every prop", time: "~80 tweens" },
          { text: "Hotspots on the hero", time: "31 Aug" },
        ],
        total: "Heavy, and busy",
      },
      after: {
        label: "What shipped",
        steps: [
          { text: "Fifteen layers, each with its own depth", time: "15 layers" },
          { text: "The six photos as WebP", time: "~310 kB" },
          { text: "One chrome file for all six cards", time: "24 kB" },
          { text: "Flames that hold still, one tween per prop", time: "4 tweens" },
          { text: "No hotspots: the poster is the hero", time: "same day" },
        ],
        total: "Light enough to move",
      },
    },
    {
      type: "gallery",
      pictures: [
        { src: `${dir}/tees.webp`, alt: "The tees, one per league" },
        { src: `${dir}/footer.webp`, alt: "Decathlon x Jolly Yun Shann" },
      ],
      tabs: ["Tees", "Footer"],
    },
    {
      type: "illustration",
      src: "/illustrations/rail.html",
      title: "A tee for every league",
      note: "Point at a tee: it hangs straight and lifts, and the others lean away. Each of the five leagues has its own.",
    },
    {
      type: "section",
      id: "results",
      entry: "wipe",
      eyebrow: "Results",
      title: "What it shipped",
      body: [],
    },
    {
      type: "stats",
      quick: true,
      items: [
        { label: "Traced paths, cut into layers", value: "1,732 → 15", note: "The poster, split by paint order on one viewBox." },
        { label: "Card photos", value: "3 MB → 310 kB", note: "Six photos, PNG as exported against WebP as shipped." },
        { label: "Card chrome", value: "780 kB → 24 kB", note: "The embedded photo pruned; one file now serves all six cards." },
        { label: "Flame tweens running", value: "~80 → 4", note: "One tween per flaming prop, with the flames held still." },
      ],
    },
    {
      type: "section",
      id: "outcomes",
      title: "Where it stands",
      body: [
        "The site was built for Decathlon India and, since 21 September 2026, served from Decathlon's test address with page views, Web Vitals and UTM-tagged links to every product.",
        "Next: a lighter hero before the public launch.",
      ],
    },
  ],
};
