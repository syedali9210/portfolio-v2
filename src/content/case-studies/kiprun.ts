import { kiprunWires } from "../wireframes";
import type { CaseStudy } from "../types";

const dir = "/case-studies/kiprun";
const live = "https://www.decathlon.in/page/kiprun-series/";

export const kiprun: CaseStudy = {
  slug: "kiprun",
  title: "KIPRUN",
  tagline: "The KIPRUN campaign page, ==live on decathlon.in==.",
  theme: { deep: "#3643ba", mid: "#7d88ff", light: "#d6e78b", highlight: "#d6e78b" },
  hero: { frame: "phone", picture: { src: `${dir}/hero-phone.webp`, alt: "The KIPRUN hero on a phone" } },
  kind: "Web",
  year: "2026",
  summary:
    "The campaign page for KIPRUN, Decathlon's running brand, live on decathlon.in: five shoe series, a range for men and women, a film, and the kit around them.",
  meta: [
    { label: "Role", value: "Web Design, Motion, Development" },
    { label: "Client", value: "Decathlon India" },
    { label: "Timeline", value: "Sep 22 – Oct 21, 2026" },
  ],
  takeaways: [
    "A campaign page has seconds per section: one shoe, big, with the motion coming from the scroll. The floating-shoe stage was gone the day it was built.",
    "Runners buy the shoe they see. A colour choice that shows the shoe itself beat plain squares of colour.",
    "Layers that move apart keep the shoe in one piece on screen. The crossfade I built first made it jump between states.",
    "Logs show where the weight really goes: three colour films were requested about 2.5 million times, more than the page itself.",
  ],
  quick: {
    problem:
      "KIPRUN's five shoe series needed a campaign page inside decathlon.in itself, working under Decathlon's address on every screen shape.",
    approach:
      "A page that runs from the series to the range, a film on the road, a shoe taken apart layer by layer and the kit, with every price and weight from decathlon.in.",
    result:
      "Live on decathlon.in four days after the first commit, on 25 September 2026, and loaded about 970,000 times in its last month.",
  },
  status: {
    title: "KIPRUN Live",
    live: true,
    facts: [
      { label: "Recent Updates", value: "The range gets a women's row: men and women, five cards each" },
      { label: "Lives at", value: "decathlon.in/page/kiprun-series" },
    ],
    sections: [
      { label: "Problem", href: "#opening" },
      { label: "Process", href: "#process" },
      { label: "The page", href: "#range" },
      { label: "Decisions", href: "#decisions" },
      { label: "Results", href: "#results" },
    ],
    links: [{ label: "Live on decathlon.in", href: "https://www.decathlon.in/page/kiprun-series/" }],
  },
  cover: { src: `${dir}/hero.webp`, alt: "The KIPRUN page's hero" },
  card: { video: `${dir}/card.mp4`, poster: `${dir}/card-poster.webp` },
  blocks: [
    {
      type: "immersive",
      quick: true,
      picture: { src: `${dir}/site-film-poster.webp`, alt: "The page's launch film" },
      video: `${dir}/site-film.mp4`,
      caption: "The 48-second launch film made for the page.",
    },
    {
      type: "section",
      id: "opening",
      entry: "rise",
      eyebrow: "The problem",
      title: "A page inside ==someone else's site==",
      body: [
        "The page doesn't live on a site of its own. decathlon.in serves it through its own proxy, from a build I deploy elsewhere, so it had to work under Decathlon's address, survive their redirects, and send people to real products at real prices.",
        "The shoes made it harder. Five series, each with its own job, and a women's fit that is a separate product on decathlon.in.",
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/shoeboxes.html",
      title: "Five series, one shelf",
      note: "Point at a box: that series slides out and its lid lifts. The page opens the same way, with all five series in reach.",
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
        { goal: "Sell the five series on decathlon.in", design: "Every card's button opens the exact product and fit, and View on Decathlon is the hero's own button.", signal: "Visits to each product page, on decathlon.in's side." },
        { goal: "Keep KIPRUN a Decathlon brand", design: "KIPRUN always locked up with BY DECATHLON, in the official marks, never typed.", signal: "The lockup holds on every screen shape." },
        { goal: "Prices people can trust", design: "Every price, weight and rating read from decathlon.in, with the date it was read.", signal: "No number on the page that the store doesn't show." },
      ],
    },
    {
      type: "statement",
      text: "Every price, weight and rating on the page comes from ==decathlon.in==.",
    },
    {
      type: "media",
      picture: { src: `${dir}/essentials.webp`, alt: "Made to Move: socks, apparel and accessories with prices and ratings" },
      caption: "Made to Move: everything around the shoes, priced from decathlon.in on 24 September 2026.",
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
          kind: "Time",
          constraint: "Four days from the first commit to launch.",
          chose: "One job a day, and anything that didn't hold was cut the same day.",
          cost: "The photos and the film shipped at full weight.",
        },
        {
          kind: "Platform",
          constraint: "The page lives inside decathlon.in, served through its proxy.",
          chose: "A static page on one base path, with a small script that puts the trailing slash back.",
          cost: "Every move of the address meant re-checking every photo and link.",
        },
      ],
    },
    {
      type: "section",
      id: "process",
      entry: "draw",
      eyebrow: "Design process",
      title: "Four days to ==live==, then a women's row",
      body: [],
    },
    {
      type: "process",
      steps: [
        {
          phase: "Structure",
          kind: "notes",
          title: "Day 1: the shoes",
          text: "The hero, the five series as a catalog, the Kipride Max film and the Kipstorm Elite coming apart layer by layer.",
          made: "the page's structure, and its first rule: one focal point per section",
        },
        {
          phase: "Data",
          kind: "cards",
          title: "Day 2: the truth",
          text: "Prices moved from pounds to decathlon.in's rupees, and a type and UI audit ran across nine widths.",
          made: "real prices, shared scales, analytics and speed insights",
        },
        {
          phase: "Detail",
          kind: "phone",
          title: "Day 3: the details that send people right",
          text: "The colour picker shows the shoe, not a square.",
          made: "a range you can trust to open the right product",
        },
        {
          phase: "Launch",
          kind: "box",
          title: "Day 4: Decathlon's address",
          text: "The base path moved twice more before decathlon.in served it, each move re-checking every asset and link.",
          made: "live on decathlon.in, 25 September 2026",
        },
        {
          phase: "Iterate",
          kind: "screen",
          title: "A month later: the women's row",
          text: "The range got a women's row of five cards, with each colour linking to its own product, and a cleaner render of the Kipride.",
          made: "men and women, five cards each",
        },
      ],
    },
    {
      type: "media",
      picture: { src: `${dir}/film.webp`, alt: "Kipride Max, filmed on the road" },
    },
    {
      type: "section",
      id: "range",
      entry: "focus",
      eyebrow: "The page",
      title: "Pick a colour, ==see the shoe==",
      body: [
        "This is the part of the page that has to be right. Five series, a men's row and a women's row of five cards each.",
        "The women's colourways are separate products on decathlon.in, with their own pages and prices. So the buy link follows the colour you picked: a women's colour never opens the men's shoe.",
      ],
    },
    {
      type: "gallery",
      pictures: [
        { src: `${dir}/range.webp`, alt: "The range: Kipcore, with its colours and features" },
        { src: `${dir}/range-rows.webp`, alt: "The range's men's and women's rows" },
      ],
      tabs: ["Kipcore", "Men and women"],
    },
    {
      type: "section",
      id: "layers",
      title: "Film, then ==layer by layer==",
      body: [
        "The Kipride Max, filmed on the road, plays as its own section. Then the Kipstorm Elite comes apart as you scroll, each layer labelled with what it does.",
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/layers.html",
      title: "A sole, taken apart",
      note: "Move along it: the layers part as you go right, and the one you're at lights up, the way the page takes a shoe apart as you scroll.",
    },
    {
      type: "media",
      picture: { src: `${dir}/layers.webp`, alt: "The Kipstorm Elite, taken apart into its layers" },
    },
    {
      type: "section",
      id: "wireframes",
      title: "Shaped for a thumb",
      body: [
        "Most of the page was shaped for the phone: the series as pills within a thumb's reach, a range you pick by colour, a shoe that comes apart as you scroll, and the kit in a row.",
      ],
    },
    { type: "wireframes", screens: kiprunWires, over: { src: `${dir}/hero-phone.webp`, alt: "The KIPRUN hero on a phone" } },
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
          title: "What leads each section",
          chose: "One shoe, big, per section, with the motion coming from the scroll.",
          why: "A campaign page has seconds per section.",
          considered: [
            { option: "A filled stage with a floating shoe", why: "Built on day one and taken out the same day, leaving the shoe alone on the page." },
          ],
        },
        {
          title: "How you pick a colour",
          chose: "The shoe itself, in the colour you picked.",
          why: "Runners buy the shoe they see.",
          considered: [
            { option: "Plain squares of colour", why: "Built on day three and replaced the same day." },
          ],
        },
        {
          title: "How the shoe comes apart",
          chose: "Real layers that move apart as you scroll, each with what it does.",
          why: "Moving layers keep the shoe in one piece on screen, so it never jumps between states.",
          considered: [
            { option: "Layers that crossfade", why: "The day-one version; it only turned smooth once the layers moved instead." },
          ],
        },
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/treadmill.html",
      title: "A belt that keeps running",
      note: "The belt never stops. Hover and it slows down so one stride can be read, the way each section lets one shoe hold the screen.",
    },
    {
      type: "section",
      id: "shift",
      title: "From the first build to ==what shipped==",
      body: [],
    },
    {
      type: "compare",
      before: {
        label: "The first day's build",
        steps: [
          { text: "The series on a filled stage, with a floating shoe", time: "22 Sep" },
          { text: "Layers that crossfade into each other", time: "22 Sep" },
          { text: "The essentials priced in pounds, from decathlon.co.uk", time: "23 Sep" },
          { text: "A colour picker of plain squares", time: "24 Sep" },
          { text: "Served from a test address", time: "/shop/Hyd-test-1" },
        ],
        total: "Busy, and not yet true to the store",
      },
      after: {
        label: "What shipped",
        steps: [
          { text: "No fill, no floating shoe: one thing big per section", time: "same day" },
          { text: "Layers that move apart, so the shoe never jumps", time: "same day" },
          { text: "Every price in rupees, read from decathlon.in", time: "same day" },
          { text: "Picking a colour shows that shoe", time: "same day" },
          { text: "Served at decathlon.in, under Decathlon's address", time: "/page/kiprun-series" },
        ],
        total: "Live in four days",
      },
    },
    {
      type: "section",
      id: "system",
      title: "One address, ==everything hangs from it==",
      body: [
        "Inside someone else's site, the address is the system. Every photo, link and count resolves from one base path, so when it moved, everything had to move with it.",
      ],
    },
    {
      type: "system",
      title: "How the page's parts depend on each other",
      note: "Point at a part, or tab to it: what a change to it reaches lights up.",
      parts: [
        { id: "proxy", label: "decathlon.in's proxy", note: "decathlon.in serves the page through its own Cloudflare, from the Vercel build.", moves: ["base", "redirects"] },
        { id: "data", label: "decathlon.in data", note: "Prices, weights and ratings, read from the store and dated on the page.", moves: ["range", "essentials"] },
        { id: "variants", label: "Colourways", note: "A women's colour is its own product on decathlon.in, with its own page.", moves: ["range"] },
        { id: "base", label: "Base path", note: "One base address that every photo, link and script resolves from.", moves: ["slash", "assets", "analytics"] },
        { id: "redirects", label: "Redirects", note: "The bare address goes to decathlon.in unless the request came through its proxy." },
        { id: "slash", label: "Slash script", note: "Puts the trailing slash back in the browser: a server redirect would loop against decathlon.in.", moves: ["assets"] },
        { id: "assets", label: "Photos and film", note: "The hero photos, the road film and the layer renders.", moves: ["hero", "range", "layers"] },
        { id: "analytics", label: "Analytics", note: "Vercel Analytics and Speed Insights, counted under decathlon.in's address." },
        { id: "hero", label: "Hero", note: "The five series and the lockup, holding on every screen shape." },
        { id: "range", label: "The range", note: "Ten cards; the colour picked decides the photo and the product the button opens.", moves: ["buy"] },
        { id: "layers", label: "Layer by layer", note: "The Kipstorm Elite, taken apart as you scroll." },
        { id: "essentials", label: "Made to Move", note: "Socks, apparel and accessories, priced from decathlon.in." },
        { id: "buy", label: "Buy links", note: "Each one opens the exact product and fit on decathlon.in." },
      ],
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
        { label: "Page loads in a month", value: "~970K", note: "Requests for the page itself, 3 October to 2 November 2026, 99.9% served from the CDN's cache." },
        { label: "Fresh visits, roughly", value: "~680K", note: "Loads that fetched the page's script anew; a returning browser keeps it." },
        { label: "Requests served", value: "42M", note: "Every photo, film, font and file the page asked for in the same month." },
        { label: "First commit to live", value: "4 days", note: "22 to 25 September 2026, in 47 commits." },
        { label: "Largest paint on a phone", value: "2.4 s", note: "The live page, one headless load at 390 px on 2 November 2026; 1.0 s on a laptop." },
        { label: "Widths in one audit", value: "9", note: "Type, layout and UI checked across nine screen widths before launch." },
      ],
    },
    {
      type: "section",
      id: "outcomes",
      title: "Where it stands",
      body: [
        "Live on decathlon.in since 25 September 2026, under Decathlon's own address; the women's row came a month later without touching the rest.",
        "The logs show where the weight goes: the three Kipride colour films were requested about 2.5 million times, more than the page itself. At 7.2 MB a load, they're the next thing to cut.",
      ],
    },
  ],
};
