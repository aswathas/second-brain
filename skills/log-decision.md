# Skill: Log Decision

## When

Invoke when Aswath makes a significant decision: "I'm going to do X", "I decided on Y", or when you ask and he confirms.

## How

1. **Confirm the decision**
   "What did you decide? What's the context?"

2. **Ask about alternatives considered**
   "What else did you consider? Why this over those?"

3. **Create decision page**
   File: `wiki/decisions/YYYY-MM-DD-descriptive-title.md`
   ```yaml
   ---
   created: YYYY-MM-DD
   decision: [What was decided]
   context: [What led to this]
   alternatives: [What else was considered]
   outcome: pending
   ---

   # Decision: [Title]

   ## Context
   [Situation and factors that mattered]

   ## Reasoning
   [Why this choice over alternatives]

   ## Alternatives Considered
   - [Option 1] — why not
   - [Option 2] — why not

   ## Outcome
   [To be filled when known]

   ## What I Learned
   [To be filled after outcome known]
   ```

4. **Log operation**
   Append to `wiki/log.md`:
   ```
   ## [YYYY-MM-DD] decision | [short description]
   ```

5. **Set follow-up**
   Ask: "Want me to follow up on the outcome? When should I check in?"

## After Outcome Known

When Aswath shares the result:
1. Update `outcome` field: positive | negative | mixed
2. Fill in "What I Learned"
3. If it contradicts your advice, note that
4. Log update to `wiki/log.md`

---

*Last updated: 2026-05-24*