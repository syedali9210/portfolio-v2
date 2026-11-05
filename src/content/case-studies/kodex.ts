import { kodexWires } from "../wireframes";
import type { CaseStudy } from "../types";

// Copy from portfolio v2 (src/data/projects.ts), the source of truth for this project's words.
const dir = "/case-studies/kodex";

export const kodex: CaseStudy = {
  slug: "kodex",
  title: "Kodex",
  tagline: "A compliance site that feels as ==trustworthy== as the product.",
  theme: { deep: "#3550c8", mid: "#87abff", light: "#bcd38a", highlight: "#d3e6a2" },
  hero: { frame: "screen", picture: { src: `${dir}/kodex-screenshot.png`, alt: "The redesigned Kodex website" } },
  kind: "Web",
  year: "2026",
  summary:
    "Redesigned Kodex's marketing site so a mature B2B compliance platform finally feels as trustworthy and easy to evaluate as the product actually is.",
  meta: [
    { label: "Role", value: "Web Design" },
    { label: "Studio", value: "Basenine, 2026" },
  ],
  takeaways: [
    "A mature product can still look unready. Kodex's maturity had to come through the site alone: its hierarchy, its proof and its paths.",
    "Products, industries and integrations were three ways in. They became one navigation built around what a visitor came for.",
    "Every journey needs an end. Here there are two: a demo for the buyer, the documentation for the evaluator.",
  ],
  quick: {
    problem:
      "A mature B2B compliance platform had a website that buried its value in technical text and an unstructured menu.",
    approach:
      "A redesign around clarity: a hero that says what Kodex does, navigation by intent, product pages in modules, and proof placed before the call to action.",
    result:
      "One navigation path instead of three, and a site that reads as enterprise-ready.",
  },
  status: {
    title: "Kodex at Basenine",
    live: false,
    facts: [
      { label: "Client", value: "Kodex, a B2B compliance platform" },
      { label: "Scope", value: "Marketing website redesign" },
    ],
    sections: [
      { label: "Problem", href: "#challenge" },
      { label: "Process", href: "#process" },
      { label: "Redesign", href: "#hero-experience" },
      { label: "Before & after", href: "#shift" },
      { label: "Results", href: "#outcomes" },
    ],
    links: [],
  },
  cover: { src: `${dir}/kodex-screenshot.png`, alt: "The redesigned Kodex website" },
  blocks: [
    {
      type: "section",
      id: "challenge",
      entry: "rise",
      eyebrow: "The problem",
      title: "What got in the way",
      body: [
        "Reviewing the old site page by page, I found five places where visitors lost the thread. Each one became a goal for the redesign.",
      ],
    },
    {
      type: "cards",
      quick: true,
      items: [
        { title: "The message wasn't clear", text: "Goal: help visitors understand what Kodex does within the first few seconds." },
        { title: "Content had no hierarchy", text: "Goal: make the important information the easiest to see." },
        { title: "Navigation was hard to explore", text: "Goal: reduce friction so finding products, industries and integrations feels obvious." },
        { title: "Trust didn't come through", text: "Goal: a premium, consistent visual language that reflects the platform's maturity." },
        { title: "The next step was unclear", text: "Goal: journeys that end on booking a demo or the documentation." },
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/cabinet.html",
      title: "Records, kept in order",
      note: "Run the pointer down the cabinet: the drawer at its height slides out and the ones beside it follow less far, the way the redesign opens one topic at a time.",
    },
    {
      type: "section",
      id: "business",
      title: "What Kodex ==needed from it==",
      body: [],
    },
    {
      type: "alignment",
      items: [
        { goal: "Win enterprise buyers evaluating vendors", design: "A hero that says what Kodex does within seconds, with clear primary actions.", signal: "Fewer visitors leaving from the first screen." },
        { goal: "More demo bookings", design: "Every journey ends on booking a demo, after the proof.", signal: "Demo requests from the site." },
        { goal: "Look as mature as the product", design: "One visual language, customer logos and compliance badges on every page.", signal: "Demo requests from product pages, not just the home page." },
      ],
    },
    {
      type: "statement",
      text: "Kodex was ready for enterprise buyers. Its site had to ==look it==.",
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
          kind: "Scope",
          constraint: "The marketing site only, not the product.",
          chose: "The product's maturity had to come through the site alone: its hierarchy, its proof and its paths.",
          cost: "None of the product's own screens could change to help the story.",
        },
        {
          kind: "Audience",
          constraint: "Two readers at once: the enterprise buyer and the technical evaluator.",
          chose: "Two ends to every journey: a demo for the buyer, the documentation for the evaluator.",
          cost: "Every page carries two next steps instead of one.",
        },
      ],
    },
    {
      type: "section",
      id: "process",
      entry: "draw",
      eyebrow: "Design process",
      title: "From five frictions to ==one path==",
      body: [],
    },
    {
      type: "process",
      steps: [
        {
          phase: "Audit",
          kind: "notes",
          title: "Review the site page by page",
          text: "I read the old site as a buyer would and marked each place the thread broke.",
          made: "five frictions",
        },
        {
          phase: "Define",
          kind: "cards",
          title: "Turn each friction into a goal",
          text: "Each friction became a goal the redesign could be checked against.",
          made: "five goals, one per friction",
        },
        {
          phase: "Wireframe",
          kind: "screen",
          title: "Map one buyer's path",
          text: "One page per question a buyer asks, in the order they ask it.",
          made: "four wireframes",
        },
        {
          phase: "Design",
          kind: "box",
          title: "Redesign in that order, and review it",
          text: "Hero, navigation, product modules, then trust cues, weighed against stakeholder feedback and what could be built.",
          made: "the redesigned site",
        },
      ],
    },
    {
      type: "section",
      id: "wireframes",
      title: "Four pages, one buyer's path",
      body: [
        "Four pages carry the redesign. Each starts with the one thing an enterprise buyer needs at that point: what it is, where to go, how it works, and why to trust it.",
      ],
    },
    { type: "wireframes", screens: kodexWires, over: { src: `${dir}/kodex-screenshot.png`, alt: "The redesigned Kodex site" } },
    {
      type: "section",
      id: "hero-experience",
      entry: "focus",
      eyebrow: "The redesign",
      title: "A hero that explains the platform",
      body: [
        "Sharper messaging, supporting visuals and clear primary actions: what Kodex does within seconds, and where to go next.",
      ],
    },
    { type: "media", picture: { src: `${dir}/kx-hero-image.png`, alt: "Kodex hero redesign" } },
    {
      type: "section",
      id: "navigation",
      title: "Navigation built around intent",
      body: [
        "One menu, organised by what a visitor came to do: products, industries, integrations. Visitors arrive with a question, not a sitemap.",
      ],
    },
    {
      type: "gallery",
      fit: "contain",
      pictures: [
        { src: `${dir}/kx-nav-frame2.png`, alt: "Navigation menu, products" },
        { src: `${dir}/kx-nav-frame1.png`, alt: "Navigation menu, industries" },
        { src: `${dir}/kx-nav-image9.png`, alt: "The navigation bar" },
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/signpost.html",
      title: "Three ways, one post",
      note: "Point at an arm: it turns to point where you are. The menus were rebuilt the same way, around products, industries and integrations.",
    },
    {
      type: "section",
      id: "storytelling",
      title: "Product pages in modules",
      body: [
        "Product pages built from modules with a clear hierarchy, so a long compliance workflow reads one piece at a time.",
      ],
    },
    {
      type: "gallery",
      fit: "contain",
      pictures: [
        { src: `${dir}/kx-story-image10.png`, alt: "A product page section" },
        { src: `${dir}/kx-story-image11.png`, alt: "A modular product layout" },
      ],
      tabs: ["Product section", "Modular layout"],
    },
    {
      type: "illustration",
      src: "/illustrations/modules.html",
      title: "A page, rebuilt in modules",
      note: "Point at the plate: the modules near the pointer rise towards it, the one under it most, so one piece can be read at a time.",
    },
    {
      type: "section",
      id: "trust",
      title: "Enterprise ==trust==",
      body: [
        "Customer logos, compliance badges, stronger type and steady spacing on every page, before the call to action. A buyer decides to trust a vendor before deciding to talk to it.",
      ],
    },
    {
      type: "gallery",
      fit: "contain",
      pictures: [
        { src: `${dir}/kx-trust-chart.png`, alt: "A compliance chart" },
        { src: `${dir}/kx-trust-frame1.png`, alt: "A trust badge row" },
        { src: `${dir}/kx-trust-frame3.png`, alt: "A trust badge row" },
        { src: `${dir}/kx-trust-frame2.png`, alt: "A trust badge" },
      ],
    },
    {
      type: "section",
      id: "shift",
      title: "The site, ==before and after==",
      body: [],
    },
    {
      type: "compare",
      before: {
        label: "The old site",
        steps: [
          { text: "A hero that didn't say what Kodex does" },
          { text: "Products, industries and integrations in an unstructured menu", time: "3 paths" },
          { text: "Compliance workflows in long, text-heavy sections" },
          { text: "Little that showed it was built for enterprise" },
          { text: "No clear next step" },
        ],
        total: "A mature product, undersold",
      },
      after: {
        label: "The redesign",
        steps: [
          { text: "A hero that says what it does, with clear actions" },
          { text: "One navigation, organised by what a visitor came to do", time: "1 path" },
          { text: "Product pages in modules, read one piece at a time" },
          { text: "Customer logos and one visual language on every page" },
          { text: "Every journey ends on a demo or the documentation" },
        ],
        total: "Reads as enterprise-ready",
      },
    },
    {
      type: "section",
      id: "system",
      title: "Where every page ==leads==",
      body: [
        "The navigation decides which pages a buyer reaches, and every page hands them to the same next step.",
      ],
    },
    {
      type: "system",
      title: "How the redesigned site fits together",
      note: "Point at a part, or tab to it: what a change to it reaches lights up.",
      parts: [
        { id: "type", label: "Type and spacing", note: "One scale and one spacing system on every page.", moves: ["hero", "modules", "trust"] },
        { id: "nav", label: "Navigation", note: "Grouped by what a visitor came to do.", moves: ["products", "industries", "integrations"] },
        { id: "hero", label: "Hero", note: "What Kodex does, in a line, with the primary actions.", moves: ["demo"] },
        { id: "products", label: "Products", note: "The platform's products, reached from one menu.", moves: ["modules"] },
        { id: "industries", label: "Industries", note: "The sectors Kodex serves, in the same menu.", moves: ["modules"] },
        { id: "integrations", label: "Integrations", note: "The systems it plugs into, for the technical evaluator.", moves: ["docs"] },
        { id: "modules", label: "Modules", note: "Product content in blocks that can be read one at a time.", moves: ["demo", "docs"] },
        { id: "trust", label: "Trust cues", note: "Customer logos, compliance badges and enterprise layouts.", moves: ["demo"] },
        { id: "docs", label: "Documentation", note: "Where the technical evaluator goes next." },
        { id: "demo", label: "Book a demo", note: "Where every buyer's journey ends." },
      ],
    },
    {
      type: "section",
      id: "outcomes",
      entry: "wipe",
      eyebrow: "Results",
      title: "What changed",
      body: [],
    },
    {
      type: "stats",
      quick: true,
      items: [
        { label: "Ways into the products", value: "3 → 1", note: "Products, industries and integrations, from one navigation." },
        { label: "Frictions, each made a goal", value: "5", note: "Found by reviewing the old site page by page." },
        { label: "Pages in the buyer's path", value: "4", note: "What it is, where to go, how it works, why to trust it." },
        { label: "Where every journey ends", value: "2", note: "Booking a demo, or the documentation." },
      ],
    },
  ],
};
