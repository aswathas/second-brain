# 03 — Decisions

*Grounded in the two commits and the code they added.*

## D1 — Configure the agent with markdown, not code

`CLAUDE.md` and `AGENTS.md` *are* the program. Behaviour is specified in prose:
what to load at session start, three named operations, eight thinking
frameworks, five personality traits, page templates with YAML frontmatter.

**Why:** the agent already reads markdown to answer a question; making its
instructions the same medium means one thing to learn, and a human can edit it.
A skill is a markdown file, not a plugin (`skills/*.md`).

**Cost, visible in the repo:** it cannot enforce anything. "Apply thinking
methods visibly" is a request, not a check.

## D2 — Fixed four-layer split, separating identity from working memory

`user.md` (static: who you are) is deliberately separate from `memory.md`
(working context: what's happening now). `soul.md` is separate again — it is
the agent's, not the user's.

**Why:** `memory.md` says it "resets to template when significant work is done
and context is filed to wiki." Only the volatile layer needs clearing; wiping
identity along with it would throw away the accumulated model.

## D3 — Everything local, no service

No database, no API, no scheduler. `CLAUDE.md`: "Everything is local. No cloud."
`crons/morning-briefing.md` describes a cron but ships it as a prompt, to be
scheduled by whatever runs scheduled tasks (it names Hermes).

**Why:** the data is someone's financial situation, health, and relationships.
If it is plain markdown, it is auditable and the worst case is a git remote
the owner chose.

## D4 — Scaffold from an interview, not a template

`2ebd257` shipped the framework with `[To be filled]` everywhere. `72ddc5b`
added `starter/`: 31 questions across 10 phases, answers substituted into
per-topic templates so a new wiki starts with a filled-in
`wiki/profile/financial.md` instead of a blank one.

**Why:** `soul.md` says the assistant should be memory-aware and should not
"pretend to have context you don't have." A blank wiki has no context, so the
interview is the minimum needed for the first conversation to be worth having.
Questions are grouped by life domain rather than asked flat, and only `name`,
`dayToDay`, `principles` are required — the rest default to `'Not specified'`
in the templates.

## D5 — Two entry points for the same content

`CLAUDE.md` (Claude Code) and `AGENTS.md` (other agents) carry the same four
layers, operations, and templates. `starter/scaffold.js` copies `AGENTS.md`
verbatim and generates `CLAUDE.md` personalized from the answers.

**Why:** the file names are a convention each tool already looks for, so
supporting a second tool is a copy, not a port.

## D6 — Skills are procedures, crons are prompts

Both are markdown. `skills/ingest-source.md` gives an ordered procedure with a
frontmatter block; `crons/morning-briefing.md` gives a schedule and a desired
output shape.

**Why:** consistent with D1 — if it can be expressed as text, it is text.

## Later

The README commit fixed two things that stopped the CLI from running at all:
`scaffold.js` used `\\`` inside template literals, which is a `SyntaxError` —
the file could not even be required — and both `scaffold.js` and `index.js`
referenced a `saveProfile` function that was never defined. Both were dead on
arrival in `2ebd257`; nothing had run the starter since it was written.