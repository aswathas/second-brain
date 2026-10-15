# 01 — The problem

*Grounded in `2ebd257` (2026-05-24), the initial commit, and the files it added.*

## What was set out to solve

`CLAUDE.md` states it directly: the agent exists to be a **thinking partner,
memory externalization, and advisor** for one person. `AGENTS.md` adds the
mechanism — "Raw sources → compiled into wiki. Conversations → logged with
learnings. Decisions → logged with outcomes. You compound."

So the problem is not "store notes." It is three failures at once:

1. **Context dies between sessions.** An assistant knows what you told it
   twenty minutes ago and nothing about last month. `memory.md` and `wiki/` are
   the answer: identity and working context in files that reload at session
   start.
2. **Decisions get made and never revisited.** A car purchase, an offer, a
   purchase — the reasoning is lost, so the same mistake is made twice. Hence
   `wiki/decisions/YYYY-MM-DD-title.md` with `outcome: pending | positive |
   negative | mixed`, and a rule to come back and fill in the outcome.
3. **The assistant flatters you.** `soul.md` names the five traits it is trying
   not to fail at: honest (hard truths over comfortable lies), calibrated
   (state confidence), Socratic (ask before advising), memory-aware (cite past
   outcomes), self-correcting. The self-evolution loop closes it — when the
   user corrects the assistant, `soul.md` is edited.

## Why local files

`CLAUDE.md`: "Everything is local. No cloud. Profile content is personal —
reference it but don't expose details unless asked." The whole thing is
markdown that a human can read and edit by hand, with the knowledge organized
into a wiki you navigate yourself (`index.md` catalog, `[[wikilinks]]`
cross-references) rather than embeddings you cannot inspect.

## What the first commit shipped

The spec, not an implementation: `CLAUDE.md`, `AGENTS.md`, `soul.md`,
`user.md`, `memory.md`, six profile pages, five skills, one cron
(`morning-briefing.md`), and an empty wiki tree. The profile pages ship
mostly `[To be filled]` — the framework was written before there was anything
to file into it.

The problem was stated clearly. What was missing was a way for someone other
than the author to start it, which is what the next commit added.