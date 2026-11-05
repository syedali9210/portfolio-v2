import { uniqkeyWires } from "../wireframes";
import type { CaseStudy } from "../types";

// Copy from portfolio v2 (src/data/projects.ts), the source of truth for this project's words.
const dir = "/case-studies/uniqkey";

export const uniqkey: CaseStudy = {
  slug: "uniqkey",
  title: "Uniqkey",
  tagline: "Breach risk that ==feels real== enough to act on.",
  theme: { deep: "#0c3a3f", mid: "#56c79a", light: "#9ce9c3", highlight: "#a8eccb" },
  hero: { frame: "screen", picture: { src: `${dir}/uniqkey-screenshot.png`, alt: "The Uniqkey Data Breach Monitoring page" } },
  kind: "Web",
  year: "2026",
  summary:
    "Designed a landing page that makes data breach risk feel real enough for businesses to actually act on, instead of more jargon to tune out.",
  meta: [
    { label: "Role", value: "Web Design" },
    { label: "Studio", value: "Basenine, 2026" },
  ],
  takeaways: [
    "People who decide don't need every technical detail upfront. They need a clear reason the product matters.",
    "Say why a breach matters before how the feature works. The page answers in order: why care, what it costs, what it does, who trusts it.",
    "Plain words up top. The technical detail stays in the feature cards, short and specific.",
  ],
  quick: {
    problem:
      "Data breach monitoring is technical, and the page explaining it overwhelmed the people who decide whether to buy it.",
    approach:
      "One focused landing page: why a breach matters, what it costs, what the feature does in cards, and proof before the call to action.",
    result:
      "One clear journey from the problem to booking a demo.",
  },
  status: {
    title: "Uniqkey at Basenine",
    live: false,
    facts: [
      { label: "Client", value: "Uniqkey, a European password and access management platform" },
      { label: "Scope", value: "Data Breach Monitoring landing page" },
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
  cover: { src: `${dir}/uniqkey-screenshot.png`, alt: "The Uniqkey Data Breach Monitoring page" },
  blocks: [
    {
      type: "section",
      id: "challenge",
      entry: "rise",
      eyebrow: "The problem",
      title: "A topic that overwhelms",
      body: [
        "Breach monitoring is technical, and it easily overwhelms. Following a visitor down the old page, I found five issues; each became a goal.",
      ],
    },
    {
      type: "cards",
      quick: true,
      items: [
        { title: "The technical messaging overwhelmed", text: "Goal: make security make sense to non-technical decision makers." },
        { title: "The value wasn't obvious", text: "Goal: say why breach monitoring matters before explaining how it works." },
        { title: "The page had no narrative", text: "Goal: a logical flow that explains the problem first, then the solution." },
        { title: "The benefits were easy to miss", text: "Goal: visual hierarchy and credibility cues that reinforce confidence." },
        { title: "The calls to action were weak", text: "Goal: a clearer path to trying the feature or booking a demo." },
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/vault.html",
      title: "A scan across the keys",
      note: "A sweep runs across the key plate on its own; move the pointer and you scan it yourself, each key lighting and fading behind you, the way monitoring checks every credential.",
    },
    {
      type: "section",
      id: "business",
      title: "What Uniqkey ==needed from it==",
      body: [
        "The page sells one feature, Data Breach Monitoring, to the person who signs for it rather than the one who configures it.",
      ],
    },
    {
      type: "alignment",
      items: [
        { goal: "Sell to decision makers, not specialists", design: "Why it matters comes first, in plain words, before how it works.", signal: "Visitors who read on past the hero." },
        { goal: "Urgency without fear", design: "The cost of a breach as structured content and visuals.", signal: "Visitors who reach the features after the risk." },
        { goal: "Trust for a security vendor", design: "Testimonials and certifications before the call to action.", signal: "Demo requests after the proof." },
      ],
    },
    {
      type: "statement",
      text: "Users don't need every technical detail upfront. They need ==clarity, confidence==, and a clear reason the product matters.",
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
          constraint: "One landing page, for one feature.",
          chose: "Everything had to land in one scroll: the problem, the cost, the features, the proof and the action.",
          cost: "Detail that didn't answer one of the four questions was left out.",
        },
        {
          kind: "Credibility",
          constraint: "Simplify a technical topic without losing technical credibility.",
          chose: "Plain words up top; the technical detail kept in the feature cards, short and specific.",
          cost: "A specialist has to reach the cards before the detail they came for.",
        },
      ],
    },
    {
      type: "section",
      id: "process",
      entry: "draw",
      eyebrow: "Design process",
      title: "Ordered by ==the buyer's questions==",
      body: [],
    },
    {
      type: "process",
      steps: [
        {
          phase: "Audit",
          kind: "notes",
          title: "Follow a visitor down the page",
          text: "I followed a visitor down the old page and marked where a non-technical buyer would stop reading.",
          made: "five issues",
        },
        {
          phase: "Define",
          kind: "cards",
          title: "Turn each issue into a goal",
          text: "Each issue became a goal the page could be checked against.",
          made: "five goals",
        },
        {
          phase: "Wireframe",
          kind: "screen",
          title: "Order the page as four questions",
          text: "One section per question, in the order a buyer asks.",
          made: "four wireframes",
        },
        {
          phase: "Design",
          kind: "box",
          title: "Rebuild each section around its answer",
          text: "Each section rebuilt around its answer, with proof before the ask.",
          made: "the landing page",
        },
      ],
    },
    {
      type: "section",
      id: "wireframes",
      title: "One page, four questions",
      body: [
        "The page in four steps, each answering the next question a security buyer asks: why should I care, what could it cost, what does it do, and who else trusts it.",
      ],
    },
    { type: "wireframes", screens: uniqkeyWires, over: { src: `${dir}/uniqkey-screenshot.png`, alt: "The Uniqkey landing page" } },
    {
      type: "section",
      id: "hero-experience",
      entry: "focus",
      eyebrow: "The redesign",
      title: "Why should I care",
      body: [
        "The hero leads with why a breach matters, not how monitoring works: the person who signs needs a reason before a mechanism.",
      ],
    },
    { type: "media", picture: { src: `${dir}/uk-hero-image.png`, alt: "Uniqkey hero redesign" } },
    {
      type: "section",
      id: "risk",
      title: "What could it cost",
      body: [
        "What a breach could cost the business, as structured content and visuals. Cost makes the risk real without turning it into fear.",
      ],
    },
    {
      type: "gallery",
      fit: "contain",
      pictures: [
        { src: `${dir}/uk-risk-frame2.png`, alt: "A breach risk card" },
        { src: `${dir}/uk-risk-frame3.png`, alt: "A breach risk card" },
        { src: `${dir}/uk-risk-frame1.png`, alt: "The risk section" },
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/dominoes.html",
      title: "One push, then the rest",
      note: "Point at a domino: it and every one after it fall in turn, the way one exposed credential can lead to the next.",
    },
    {
      type: "section",
      id: "features",
      title: "What does it do",
      body: [
        "Modular cards with icons and short lines, so the features can be scanned and compared instead of dug out of copy.",
      ],
    },
    {
      type: "gallery",
      fit: "contain",
      pictures: [
        { src: `${dir}/uk-feature-frame4.png`, alt: "A feature card" },
        { src: `${dir}/uk-feature-frame2.png`, alt: "A feature card" },
        { src: `${dir}/uk-feature-frame1.png`, alt: "The feature section" },
        { src: `${dir}/uk-feature-frame3.png`, alt: "The full feature breakdown" },
      ],
    },
    {
      type: "section",
      id: "trust",
      title: "Who else ==trusts== it",
      body: [
        "Testimonials and certifications come before the call to action, so the proof lands before the ask.",
      ],
    },
    {
      type: "gallery",
      fit: "contain",
      pictures: [
        { src: `${dir}/uk-trust-image1.png`, alt: "A certification badge" },
        { src: `${dir}/uk-trust-image2.png`, alt: "A testimonial card" },
      ],
      tabs: ["Certification", "Testimonial"],
    },
    {
      type: "section",
      id: "shift",
      title: "The page, ==before and after==",
      body: [],
    },
    {
      type: "compare",
      before: {
        label: "The old page",
        steps: [
          { text: "Opened on technical detail" },
          { text: "Said how it works before why it matters" },
          { text: "No thread from the problem to the solution" },
          { text: "Features buried in long blocks of copy" },
          { text: "Weak calls to action" },
        ],
        total: "More jargon to tune out",
      },
      after: {
        label: "The redesign",
        steps: [
          { text: "Opens on why a breach matters" },
          { text: "Shows what a breach could cost before what it does" },
          { text: "Four questions, in the order a buyer asks them" },
          { text: "Features as cards to scan and compare" },
          { text: "One path: try the feature or book a demo" },
        ],
        total: "One journey, to a demo",
      },
    },
    {
      type: "illustration",
      src: "/illustrations/keybox.html",
      title: "The hook that's empty",
      note: "Point at a key: it swings out on its hook. One hook has no key on it: monitoring is noticing what's missing.",
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
        { label: "Journeys through the page", value: "1", note: "From the problem to booking a demo." },
        { label: "Issues, each made a goal", value: "5", note: "Found by following a visitor down the old page." },
        { label: "Questions it answers, in order", value: "4", note: "Why care, what it costs, what it does, who trusts it." },
        { label: "Ways to act at the end", value: "2", note: "Try the feature, or book a demo." },
      ],
    },
  ],
};
