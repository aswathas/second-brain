# second-brain

A personal knowledge wiki for an AI coding agent, plus a CLI that scaffolds one.

You answer 31 questions about yourself. The CLI writes a `CLAUDE.md` with your
answers baked in, creates a `wiki/` tree, and copies in the skills. You then open
the directory in Claude Code (or point another agent at it) and talk to it. It
files decisions, logs interactions, and updates a profile of you over time.

Everything is local files — markdown, no database, no service.

## The four layers

The agent's whole design, as stated in [`CLAUDE.md`](CLAUDE.md):

```
Layer 1: Identity     → user.md, soul.md       (who you are)
Layer 2: Memory       → memory.md              (what's happening now)
Layer 3: Knowledge    → wiki/                  (compiled wiki)
Layer 4: Execution    → skills/, crons/        (how things get done)
```

`CLAUDE.md` also defines three operations — **ingest** a source, **query** the
wiki, **lint** it — and eight named thinking frameworks (first principles,
inversion, pre-mortem, …) the agent is told to name out loud when it uses one.
Read `CLAUDE.md` for the full spec; this README only covers running it.

## Install

Requires [Node.js](https://nodejs.org) (the code uses CommonJS `require`;
verified on v24). The repo ships no `package.json`, so install the one
dependency yourself:

```bash
git clone https://github.com/aswathas/second-brain.git
cd second-brain
npm install inquirer@8
```

`inquirer@8` is what the CLI is written against — `starter/index.js` does
`require('inquirer')` and calls `.prompt()`. Newer major versions ship ESM-only
and will not load this way.

## Run

```bash
node starter/index.js
```

It clears the screen, asks the 10-phase onboarding (basics, values, mind,
career, money, relationships, health, growth, vision, personality), asks where
to put the wiki (default `./my-second-brain`), confirms if that directory
already exists, scaffolds it, and offers to `git init` the result.

Then:

```bash
cd my-second-brain
claude
```

Your generated `CLAUDE.md` is the agent's configuration — no extra flags, no
config file, no API keys, nothing to point at. `crons/morning-briefing.md`
describes a scheduled 8am briefing, but wiring that up is a job for whatever
runs your scheduled tasks; this repo does not schedule anything itself.

## What gets created

```
my-second-brain/
├── CLAUDE.md            personalized agent config
├── AGENTS.md            the generic framework spec
├── user.md  soul.md  memory.md
├── wiki/
│   ├── index.md  log.md
│   ├── profile/          identity, values, mind, career, financial,
│   │                     relationships, health, strengths, mistakes, preferences
│   ├── sources/  concepts/  decisions/  interactions/
│   ├── people/   projects/  synthesis/
├── raw/                  articles/ books/ notes/ media/
├── skills/               5 core skills copied in
└── crons/
```

Note that `raw/` and most of `wiki/` are created empty — the scaffold only fills
`profile/`, `index.md`, and `log.md`. The rest is where the agent writes.

Empty directories are not tracked by git, so if you push this yourself, the
agent will re-create them on first write.

## Skills

Markdown files describing a workflow the agent follows. The five copied into a
new wiki: `ingest-source`, `give-advice`, `lint-wiki`, `log-decision`,
`log-interaction`. This repo also carries two more it does not copy:
`onboarding` and `auto-skill-builder` (the pattern for turning a repeated
workflow into a new skill).

## Tests

```bash
node starter/smoke-test.js
```

Loads both starter modules, scaffolds a wiki into a temp dir with fake answers,
and asserts the generated files exist and that code fences survive templating.

## Credit

The pattern comes from [Karpathy's LLM wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
and [Hermes](https://github.com/mindstudio-ai/hermes), named in the generated
README. This repo is the local-first version: no cloud, no scheduling service.

## History

Two commits: the framework (`2ebd257`, 2026-05-24) and the onboarding CLI
(`72ddc5b`, 2026-05-25). The reasoning is in [`docs/`](docs/).