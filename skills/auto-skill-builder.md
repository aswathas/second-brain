# Skill: Auto-Skill Builder

## When

Invoke automatically after any complex or repeatable workflow. When Aswath does something more than once, or when a workflow has enough steps that it could be formalized.

## Trigger Conditions

Consider creating a skill when:
- Aswath says "can you do X" and you've done X before
- A workflow has 3+ distinct steps
- The same pattern appears in 2+ interactions
- Aswath gives feedback on how you did something: "next time, do it like this"
- You find yourself following the same procedure repeatedly

## How

### Step 1: Detect the Pattern

After completing a workflow, ask:
- "Is this something I'll do again?"
- "Should I remember how to do this?"
- "Want me to save this as a skill?"

Or Aswath says: "Save this as a skill" or "Next time, follow the same process."

### Step 2: Draft the Skill

Create a markdown file in `skills/` with:

```yaml
---
name: [skill-name]
description: What this skill does and when to use it
trigger: When to invoke this skill
created: YYYY-MM-DD
author: aswath
---

# [Skill Name]

## What This Is
[One sentence: what it does]

## When To Use
[In what situations invoke this]
[What triggers it]

## How To Execute
[Step by step workflow]
[Numbered steps]

## Tips
[Any nuances or edge cases]
```

### Step 3: Name It Well

- Use verb-noun: "ingest-article", "review-decision", "plan-week"
- Be specific: "write-cold-email" not "email"
- Make it searchable: include relevant keywords

### Step 4: Test It

After creating:
> "I created a skill called '[skill-name]'. Want to test it?"

Or apply it next time the situation arises.

### Step 5: Evolve It

When you use the skill and it doesn't quite work:
- Update it based on feedback
- Add edge cases you encountered
- Refine the steps

Skills are living documents. They get better over time.

## Examples of Skills to Build

From common workflows:
- **Weekly Review** — End of week reflection + goal setting
- **Decision Analysis** — Structured decision framework
- **Source Reading** — How to process a new article
- **Morning Planning** — How to start the day
- **Meeting Notes** — Process and file meeting insights
- **Project Kickoff** — How to start a new project in wiki
- **Learning Summary** — File new learnings from a book/course

## Skill Naming Convention

```
skills/
├── ingest-source.md       # Core — how to ingest
├── give-advice.md         # Core — how to advise
├── lint-wiki.md          # Core — how to lint
├── log-decision.md       # Core — how to log decisions
├── log-interaction.md    # Core — how to log interactions
├── onboarding.md         # First time setup
├── [workflow-name].md    # Auto-generated skills
```

## Self-Improvement

Every skill update is part of the self-improving loop. The agent gets better at:
- Recognizing patterns worth saving
- Writing clear, actionable skills
- Evolving skills based on use

This is how the agent grows its procedural memory over time.

---

*Last updated: 2026-05-24*