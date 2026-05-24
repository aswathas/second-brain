# Cron: Morning Briefing

## Trigger

Every morning at 8:00 AM local time (via Hermes).

## What It Does

1. **Read context**
   - `memory.md` — what's happening now
   - `wiki/log.md` — what happened recently
   - `wiki/decisions/` — pending decisions that need follow-up

2. **Synthesize morning briefing**
   - New wiki content since yesterday
   - Pending decisions to check on
   - What's relevant to current work
   - Any open questions from recent interactions

3. **Output to chat**
   Brief, actionable. Example:
   > "Good morning, Aswath.
   > - 2 new sources ingested, 5 wiki pages updated
   > - Decision 'Car Purchase' has pending outcome — check in?
   > - Based on your goals, focus today on [X]
   > - Open question: [Y] — want to revisit?"

4. **Update memory.md if needed**
   - If something significant happened, file it to memory.md
   - Reset if context has shifted

---

*Configure via Hermes: "Every morning at 8am, run morning briefing"*