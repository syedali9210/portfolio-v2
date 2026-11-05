import { traceWires } from "../wireframes";
import type { CaseStudy } from "../types";

const dir = "/case-studies/trace";

export const trace: CaseStudy = {
  slug: "trace",
  title: "Trace",
  tagline: "A ==design memory== for people and AI agents.",
  theme: { deep: "#2f5bea", mid: "#8db0ff", light: "#d9cffd", highlight: "#dff35a" },
  hero: { frame: "screen", picture: { src: `${dir}/home.webp`, alt: "Trace's homepage: the latest change in every project" } },
  kind: "Product",
  year: "2026",
  summary:
    "A design memory for people and AI agents. It captures work from Figma, GitHub and folders, writes the changelog itself, and hands that context to every agent, so nobody has to re-explain a project again.",
  meta: [
    { label: "Role", value: "Product Design, UI/UX, Development" },
    { label: "Timeline", value: "1 week to the PRD's last feature, 20 iterations since" },
    { label: "Built with", value: "Node 22, node:sqlite, React, Vite, Tailwind v4, MCP" },
  ],
  takeaways: [
    "A memory people can't trust is worse than none. So the changelog is written by rules from the diff: one wrong AI-written line would make every line suspect.",
    "A change in code is a change in design, so it should arrive as a picture. Trace walks the running app and shows the screens, not a card of code.",
    "Designers already know what history and rolling back mean. Git came across as moments and a version tree; branches and merge conflicts stayed out.",
    "Every AI keeps its own memory, so what one learns on Monday never reaches the next on Tuesday. Trace reads from six and serves one.",
  ],
  quick: {
    problem:
      "Every new AI session and every teammate starts cold: the project's history, decisions and reasons are spread across Figma, Git and chat logs, and agents get a screenshot and a prompt.",
    approach:
      "Trace captures work from those tools, writes the changelog by rules from what actually changed, walks the running app, and serves one memory to people and to AI agents over 31 MCP tools.",
    result:
      "Every feature in its PRD runs end to end; a full walk of an app went from 15 min to 2 min 47 s.",
  },
  status: {
    title: "Trace Live Working",
    live: true,
    facts: [
      { label: "Recent Updates", value: "Agents explain each change beside it, and a check re-walks what the change touched" },
      { label: "Integrations", value: "Figma, Claude, GitHub, Local file, Cursor, Claude Code." },
    ],
    sections: [
      { label: "Problem", href: "#opening" },
      { label: "Process", href: "#process" },
      { label: "Product", href: "#loop" },
      { label: "Decisions", href: "#decisions" },
      { label: "Results", href: "#results" },
    ],
    links: [{ label: "Source on GitHub", href: "https://github.com/syedali9210/Trace" }],
  },
  cover: { src: `${dir}/home-cover.webp`, alt: "Trace's homepage" },
  card: { video: `${dir}/card.mp4`, poster: `${dir}/card-poster.webp` },
  blocks: [
    {
      type: "immersive",
      quick: true,
      picture: { src: `${dir}/launch-poster.webp`, alt: "Trace's launch film" },
      video: `${dir}/launch.mp4`,
      caption: "The launch film: a design memory for people and AI agents.",
    },
    {
      type: "section",
      id: "opening",
      entry: "rise",
      eyebrow: "The problem",
      title: "Every session started ==cold==",
      body: [
        "I design in Figma and build with Claude Code and Cursor. Every new session started from nothing, and the agent still brought back things I'd already rejected.",
        "Handing design to an AI is lossy. It gets a screenshot and a prompt, not the references, the decisions, the constraints or the history behind them.",
      ],
    },
    {
      type: "cards",
      quick: true,
      items: [
        { title: "Agents start every session cold", text: "Every new chat means re-explaining the history and the decisions behind it, by hand." },
        { title: "Changelogs are written by hand", text: "Or, more honestly, not written at all: documenting took as long as designing." },
        { title: "The work is split across tools", text: "Design in Figma, code in Git, references in folders, and the reasons buried in chat logs." },
        { title: "Every AI keeps its own memory", text: "What Claude learned on Monday never reaches Cursor or Codex on Tuesday." },
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/memory.html",
      title: "A project, taken apart",
      note: "Pull it open: the same project is a timeline, its diffs, a canvas and a case study, layered over one memory.",
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
          kind: "Reference",
          constraint: "One reference for the whole UI: the NCS app.",
          chose: "Its patterns, not its pixels: the Latest feed, the tick scrubber, the floating +.",
          cost: "At a glance Trace reads like NCS.",
        },
        {
          kind: "Scale",
          constraint: "One change can touch 123 files.",
          chose: "One change, titled by what moved, not a chip per file named after whichever sorted first.",
          cost: "A single file is one click deeper.",
        },
        {
          kind: "Readers",
          constraint: "The same memory has to read as a sentence to a person and as data to an agent.",
          chose: "One sentence per change, with the exact before and after values one look away.",
          cost: "A sentence from the diff can't say why.",
        },
      ],
    },
    {
      type: "section",
      id: "process",
      entry: "draw",
      eyebrow: "Design process",
      title: "From a PRD to ==twenty iterations==",
      body: [],
    },
    {
      type: "process",
      steps: [
        {
          phase: "Discover",
          kind: "notes",
          title: "Who it's for, and the jobs",
          text: "The launch persona is the solo design engineer who builds with AI.",
          made: "the PRD: 15 features, success metrics, non-goals",
        },
        {
          phase: "Research",
          kind: "cards",
          title: "What the nearest tools miss",
          text: "New Craft Society sorts dropped files and writes a changelog, but has no agents and no review.",
          made: "use the Git metaphor, never Git's mechanics",
        },
        {
          phase: "Build",
          kind: "screen",
          title: "Capture first, screens second",
          text: "The timeline came before any other screen, because it's where every tool's changes meet.",
          made: "the PRD's features, built and running end to end in a week",
        },
        {
          phase: "Iterate",
          kind: "box",
          title: "Used on real work, then iterated",
          text: "Each one came from real use: dialogs the walk missed, a folder that wouldn't import, a Home redesign reverted the same day.",
          made: "20 iterations, each with what changed and why",
        },
      ],
    },
    {
      type: "media",
      picture: { src: `${dir}/trace-ui-poster.webp`, alt: "A walk through Trace's interface" },
      video: `${dir}/trace-ui.mp4`,
      caption: "Trace, recorded: a project's timeline, its screens and the checks that need you.",
    },
    {
      type: "section",
      id: "loop",
      entry: "focus",
      eyebrow: "The product",
      title: "Agents are ==users too==",
      body: [
        "Before an agent changes anything, it reads the project from Trace: the brief, the decisions, the open comments, and what was already tried and undone.",
        "After the change, it leaves its reasoning beside it on the timeline, where a person reviews it, and the reply reaches the next session.",
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/volumes.html",
      title: "One shelf, every AI's memory",
      note: "Point at a book: the memory an agent asks for comes off the shelf, and the ones beside it shift. Trace reads six AIs' own memory, read-only and opt-in.",
    },
    {
      type: "section",
      id: "timeline",
      title: "Raw saves become moments",
      body: [
        "A burst of small saves reads as one change. Trace groups them into a moment, files it into its project and writes it up from its diff, like \"Decreased font size.\"",
      ],
    },
    {
      type: "illustration",
      src: "/illustrations/spike.html",
      title: "Moments on a spike",
      note: "Point at a slip: that moment squares up and rises, and the newer ones ride up with it. Newest on top, as on the timeline.",
    },
    {
      type: "section",
      id: "walk",
      title: "The app, walked while it runs",
      body: [
        "A change in code is a change in design too. Trace opens the running app in headless Edge and walks it: tabs, sheets, menus, the theme, one and two clicks deep.",
      ],
    },
    {
      type: "media",
      picture: { src: `${dir}/screens.webp`, alt: "Trace's screens map: an app's states, linked by the clicks between them" },
      caption: "The screens map: each state the walk reached, linked by the clicks between them.",
    },
    {
      type: "section",
      id: "wireframes",
      title: "Four screens, four questions",
      body: [
        "Stripped to their structure, four screens carry the product. Each answers one question before it shows anything else: which project, what changed, what's decided, what's known.",
      ],
    },
    { type: "wireframes", screens: traceWires, over: { src: `${dir}/projects.webp`, alt: "Trace's projects page" } },
    {
      type: "statement",
      id: "designs",
      text: "Briefs, constraints, references, decisions and reviews all lived in ==different docs==.",
    },
    {
      type: "gallery",
      pictures: [
        { src: `${dir}/canvas-board.webp`, alt: "A project as a canvas of blocks: overview, iterations, reviews, constraints, references, tasks" },
        { src: `${dir}/case-study.webp`, alt: "The case study, written from the project's own evidence" },
        { src: `${dir}/todo.webp`, alt: "The to-do board" },
      ],
      tabs: ["Canvas", "Case study", "To-do"],
      caption: "So they became one canvas of blocks, with the case study written from the project's own evidence and the to-dos beside it.",
    },
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
          title: "How a change gets written up",
          chose: "Rules that read the diff and write what changed, like \"Decreased font size. Changed colours.\"",
          why: "A memory people can't trust is worse than none.",
          considered: [
            { option: "An AI-written changelog, as NCS does", why: "A model's guess about what changed can't be checked, and one wrong line makes every line suspect." },
          ],
        },
        {
          title: "How versions work",
          chose: "The Git metaphor: moments, a version tree, roll back as a new version.",
          why: "Designers know what history and rolling back mean without learning Git.",
          considered: [
            { option: "Real branches and merge conflicts", why: "Abstract brought them to design, and designers found them too heavy." },
          ],
        },
        {
          title: "How a code change looks",
          chose: "The running app, walked in headless Edge: every state as a screen, joined by the click that reaches it.",
          why: "A change in code is a change in design, so it should arrive as a picture.",
          considered: [
            { option: "A card of code text", why: "A designer reviewing a change needs to see it, not read it." },
          ],
        },
      ],
    },
    {
      type: "showcase",
      quick: true,
      title: "What changed, in a sentence",
      picture: { src: `${dir}/timeline.webp`, alt: "A project's timeline in Trace: what needs you, where it stands, and the changes beside it" },
      caption: "A project opens on what needs you and where it stands, with each change beside it, written from the diff.",
    },
    {
      type: "section",
      id: "shift",
      title: "A design change, ==before and after==",
      body: [],
    },
    {
      type: "compare",
      before: {
        label: "A design change, before Trace",
        steps: [
          { text: "Open a new agent session and paste the history back in", time: "every session" },
          { text: "Re-explain what I'd already rejected", time: "every session" },
          { text: "Write the changelog", time: "skipped" },
          { text: "Find why something was decided, in old chats", time: "4 places" },
          { text: "Screenshot the app so the agent can see it", time: "by hand" },
          { text: "Click through the app to check nothing else moved", time: "by hand" },
        ],
        total: "Context rebuilt every time",
      },
      after: {
        label: "The same change, with Trace",
        steps: [
          { text: "The agent reads the brief, decisions and open comments", time: "1 call" },
          { text: "It reads what was tried here and undone", time: "1 call" },
          { text: "Saves become moments, written up from the diff", time: "by itself" },
          { text: "The agent leaves its reasons beside the change", time: "1 call" },
          { text: "The running app is walked into screens", time: "by itself" },
          { text: "A check re-walks what the change touched", time: "by rule" },
        ],
        total: "Context kept, and read before every change",
      },
    },
    {
      type: "section",
      id: "system",
      title: "One change, ==many readers==",
      body: [
        "When the walk learned that a dialog is a screen too, the engine's Studio went from 5 screens to 9, and everything after the walk got those four for free.",
      ],
    },
    {
      type: "system",
      title: "How Trace's parts depend on each other",
      note: "Point at a part, or tab to it: what a change to it reaches lights up, all the way down to the agents.",
      parts: [
        { id: "capture", label: "Capture", note: "Watchers on Figma, GitHub and folders save every change as it happens.", moves: ["moments"] },
        { id: "walk", label: "App walk", note: "Headless Edge walks the running app over DevTools: every state and the click that reaches it.", moves: ["screens"] },
        { id: "memory", label: "AI memory", note: "Read-only, opt-in readers for six AIs' own memory, with keys and tokens blanked.", moves: ["mcp"] },
        { id: "moments", label: "Moments", note: "Raw saves grouped into one change each and filed into a project.", moves: ["changelog", "canvas"] },
        { id: "screens", label: "Screens", note: "Every state as a picture, joined by the clicks between them.", moves: ["system", "timeline", "checks"] },
        { id: "changelog", label: "Changelog", note: "Written by rules from the diff, so every sentence traces back to a value.", moves: ["timeline", "casestudy", "mcp"] },
        { id: "canvas", label: "Canvas", note: "The project as blocks: brief, constraints, references, decisions, reviews, tasks.", moves: ["casestudy", "mcp"] },
        { id: "system", label: "Design system", note: "Tokens, text styles and components, read from the walked screens and the CSS.", moves: ["checks"] },
        { id: "timeline", label: "Timeline", note: "Where people read it: newest first, each change before and after." },
        { id: "casestudy", label: "Case study", note: "Answered only from the project's own evidence." },
        { id: "checks", label: "check_change", note: "Re-walks what a change touched and checks it by rule against the app's own values.", moves: ["mcp"] },
        { id: "mcp", label: "MCP server", note: "31 tools: agents read the same memory people browse, and write their reasoning back." },
      ],
    },
    {
      type: "section",
      id: "results",
      entry: "wipe",
      eyebrow: "Results",
      title: "What it changed",
      body: [],
    },
    {
      type: "stats",
      quick: true,
      items: [
        { label: "Full app walk", value: "15 min → 2 min 47 s", note: "A full walk of the same app, before and after the walk was rebuilt." },
        { label: "Screens found per walk", value: "28 → 37", note: "The same app: more of its states reached in one walk." },
        { label: "MCP tools agents can call", value: "31", note: "Read the context, check a change, explain it, answer comments." },
        { label: "AIs it reads memory from", value: "6", note: "Claude Code, Codex, Antigravity, Cursor, Copilot, exported chats." },
        { label: "A real app, walked", value: "9 screens in 22 s", note: "The engine's Studio, walked in three tabs at once." },
        { label: "PRD features built", value: "15 of 15", note: "Running end to end on my own projects." },
      ],
    },
    {
      type: "section",
      id: "outcomes",
      title: "Where it stands",
      body: [
        "Trace runs every day on my own projects: each change is captured, written up from its diff and filed with the reasoning behind it, and agents read that history before they touch the work.",
        "Next, it opens up to teams.",
      ],
    },
  ],
};
