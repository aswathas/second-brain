const fs = require('fs');
const path = require('path');

const PROFILE_TEMPLATES = {
  identity: (a) => `# Identity — ${a.name}

## Who You Are

- **Name:** ${a.name}
- **What you do:** ${a.dayToDay || 'Not specified'}
- **Life stage:** ${a.lifeStage || 'Not specified'}
- **Why you want a Second Brain:** ${a.whyHere || 'Not specified'}

## Background

${a.dayToDay || ''}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  values: (a) => `# Values — What Matters Most

## Core Values

${a.coreValues || 'Not specified'}

## Principles

${a.principles || 'Not specified'}

## Allergies (Things You Strongly Dislike)

${a.allergies || 'None specified'}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  mind: (a) => `# Mind — How You Think

## How You Think Best

${a.howYouThink || 'Not specified'}

## How You Make Decisions

${a.howYouDecide || 'Not specified'}

## How You Solve Problems

${a.howYouSolve || 'Not specified'}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  career: (a) => `# Career & Work

## What You're Working On

${a.currentWork || 'Not specified'}

## Work Goals

### Short-term (3-6 months)
${a.workGoalsShort || 'Not specified'}

### Medium-term (1-2 years)
${a.workGoalsMedium || 'Not specified'}

### Long-term (3-5 years)
${a.workGoalsLong || 'Not specified'}

## Current Challenges

${a.workChallenges || 'Not specified'}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  financial: (a) => `# Financial — Money & Goals

## Current Situation

${a.financialSituation || 'Not specified'}

## Your Financial Rules

${a.financialRules || 'None specified'}

## Financial Goals

${a.financialGoals || 'Not specified'}

## Lessons from Mistakes

${a.financialMistakes || 'None specified'}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  relationships: (a) => `# Relationships — People Who Matter

## Key People

${a.keyPeople || 'Not specified'}

## Relationship Goals (1 year)

${a.relationshipGoals || 'Not specified'}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  health: (a) => `# Health & Energy

## Current Status

${a.healthStatus || 'Not specified'}

## Ideal Day

${a.idealDay || 'Not specified'}

## Energy Drivers

**Gives energy:** ${a.hobbies ? 'Hobbies, fun activities' : 'Not specified'}
**Drains energy:** ${a.energyDrivers || 'Not specified'}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  strengths: (a) => `# Strengths & Skills

## What You're Good At

*To be filled as you discover more*

## Weaknesses (Where You Struggle)

${a.weaknesses || 'Not specified'}

## Key Lessons from Mistakes

${a.keyMistakes || 'Not specified'}

## Currently Learning

${a.currentlyLearning || 'Not specified'}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  mistakes: (a) => `# Mistakes & Lessons

## Financial Mistakes

${a.financialMistakes || 'None recorded yet'}

## Life Mistakes

${a.keyMistakes || 'None recorded yet'}

## Patterns to Watch

*Things you tend to repeat that don't serve you*

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`,

  preferences: (a) => `# Preferences — How You Work

## How You Think

${a.howYouThink || 'Not specified'}

## How You Communicate

*To be filled as we learn*

## What You Need

${a.idealDay || 'Not specified'}

## Hobbies & Recharge

${a.hobbies || 'Not specified'}

## Anything Else

${a.anythingElse || 'Nothing else specified'}

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function scaffoldWiki(targetPath, answers) {
  // Create directory structure
  const dirs = [
    'wiki/profile',
    'wiki/sources',
    'wiki/concepts',
    'wiki/decisions',
    'wiki/interactions',
    'wiki/people',
    'wiki/projects',
    'wiki/synthesis',
    'raw/articles',
    'raw/books',
    'raw/notes',
    'raw/media',
    'skills',
    'crons'
  ];

  for (const dir of dirs) {
    ensureDir(path.join(targetPath, dir));
  }

  // Save profile files
  const profileNames = {
    identity: 'identity.md',
    values: 'values.md',
    mind: 'mind.md',
    career: 'career.md',
    financial: 'financial.md',
    relationships: 'relationships.md',
    health: 'health.md',
    strengths: 'strengths.md',
    mistakes: 'mistakes.md',
    preferences: 'preferences.md'
  };

  for (const [key, filename] of Object.entries(profileNames)) {
    const content = PROFILE_TEMPLATES[key](answers);
    const filePath = path.join(targetPath, 'wiki/profile', filename);
    fs.writeFileSync(filePath, content);
    console.log(`  Created: wiki/profile/${filename}`);
  }

  // Create user.md
  const userContent = `# User — ${answers.name}

## Identity

- Name: ${answers.name}
- What they do: ${answers.dayToDay || 'Not specified'}
- Life stage: ${answers.lifeStage || 'Not specified'}

## Why They Want This

${answers.whyHere || 'Not specified'}

## Core Values

${answers.coreValues || 'Not specified'}

## Communication Style

*To be learned over time*
`;
  fs.writeFileSync(path.join(targetPath, 'user.md'), userContent);
  console.log(`  Created: user.md`);

  // Create soul.md
  const soulContent = `# Soul — AI Companion Personality

You are ${answers.name}'s persistent AI companion. This file defines who you are.

## Core Traits

### Honest Advisor
Tell hard truths, not comfortable lies. ${answers.name} values honesty above comfort.

### Calibrated
Show confidence level and reasoning. Don't pretend certainty you don't have.

### Socratic
Ask questions before advising. Help ${answers.name} think through things.

### Memory-Aware
Reference past decisions and outcomes. Use history as a lens.

### Visible Thinking
When using thinking methods, state them explicitly.

## Voice
- Direct, no fluff. But warm.
- First person: "I think...", "My read is..."
- Match ${answers.name}'s communication style.

## What You Don't Do
- Don't just agree to be pleasant
- Don't be vague when specificity would help
- Don't pretend to have context you don't have

## How You Evolve
${answers.name} corrects you. You update this file.

---

*Last updated: ${new Date().toISOString().split('T')[0]}*
*Created based on onboarding answers*`;
  fs.writeFileSync(path.join(targetPath, 'soul.md'), soulContent);
  console.log(`  Created: soul.md`);

  // Create memory.md
  const memoryContent = `# Memory — Working Context

## Active Projects

${answers.currentWork || 'Not specified'}

## Current Priorities

${answers.workGoalsShort || 'Not specified'}

## What's Happening Now

*To be filled as events unfold*

---

*This file is reset when significant work is filed to wiki*
*Last updated: ${new Date().toISOString().split('T')[0]}*`;
  fs.writeFileSync(path.join(targetPath, 'memory.md'), memoryContent);
  console.log(`  Created: memory.md`);

  // Create wiki/index.md
  const indexContent = `# Wiki Index — ${answers.name}'s Second Brain

This catalog grows as the wiki grows.

## Profile (${answers.name})

Personal model built from onboarding.

## Sources

*Source summaries — one per ingested raw file.*

## Concepts

*Topics, ideas, frameworks.*

## Decisions

*Decision log with context and outcomes.*

## Interactions

*Conversation logs with learnings.*

## People

*People including ${answers.name}.*

## Projects

*Work and projects.*

## Synthesis

*Cross-topic insights and connections.*

---

*Last updated: ${new Date().toISOString().split('T')[0]}*`;
  fs.writeFileSync(path.join(targetPath, 'wiki/index.md'), indexContent);
  console.log(`  Created: wiki/index.md`);

  // Create wiki/log.md
  const logContent = `# Wiki Log — ${answers.name}'s Second Brain

## 2026

### ${new Date().toISOString().split('T')[0].split('-').slice(1).join('-')}

- [${new Date().toISOString().split('T')[0]}] init | Second Brain initialized via starter CLI
`;
  fs.writeFileSync(path.join(targetPath, 'wiki/log.md'), logContent);
  console.log(`  Created: wiki/log.md`);

  // Create skills from existing
  const coreSkills = ['ingest-source', 'give-advice', 'lint-wiki', 'log-decision', 'log-interaction'];
  for (const skill of coreSkills) {
    const srcPath = path.join(__dirname, '..', 'skills', `${skill}.md`);
    if (fs.existsSync(srcPath)) {
      const content = fs.readFileSync(srcPath, 'utf-8');
      fs.writeFileSync(path.join(targetPath, 'skills', `${skill}.md`), content);
      console.log(`  Created: skills/${skill}.md`);
    }
  }

  // Copy AGENTS.md
  const agentsPath = path.join(__dirname, '..', 'AGENTS.md');
  if (fs.existsSync(agentsPath)) {
    const content = fs.readFileSync(agentsPath, 'utf-8');
    fs.writeFileSync(path.join(targetPath, 'AGENTS.md'), content);
    console.log(`  Created: AGENTS.md`);
  }

  console.log('\nWiki structure created successfully!');
}

function generateCLAUDE(targetPath, answers) {
  const name = answers.name;
  const coreValues = answers.coreValues || 'Not specified';
  const principles = answers.principles || 'Not specified';
  const howYouThink = answers.howYouThink || 'Not specified';
  const howYouDecide = answers.howYouDecide || 'Not specified';

  const claudemdContent = `# CLAUDE.md — ${name}'s Second Brain

You are ${name}'s personal AI companion. You maintain a compiled knowledge wiki that gets smarter over time. You serve as thinking partner, memory externalization, and advisor.

## About ${name}

- **Name:** ${name}
- **What they do:** ${answers.dayToDay || 'Not specified'}
- **Stage of life:** ${answers.lifeStage || 'Not specified'}
- **Why they wanted a Second Brain:** ${answers.whyHere || 'Not specified'}

## What Matters to ${name}

${coreValues}

## ${name}'s Principles

${principles}

## How ${name} Thinks

- **Best way to think:** ${howYouThink}
- **Decision process:** ${howYouDecide}
- **Problem-solving approach:** ${answers.howYouSolve || 'Not specified'}

## ${name}'s Work

- **Currently working on:** ${answers.currentWork || 'Not specified'}
- **Short-term goals:** ${answers.workGoalsShort || 'Not specified'}
- **Medium-term goals:** ${answers.workGoalsMedium || 'Not specified'}
- **Long-term goals:** ${answers.workGoalsLong || 'Not specified'}
- **Current challenges:** ${answers.workChallenges || 'Not specified'}

## ${name}'s Financial Profile

- **Situation:** ${answers.financialSituation || 'Not specified'}
- **Rules:** ${answers.financialRules || 'None specified'}
- **Goals:** ${answers.financialGoals || 'Not specified'}
- **Lessons from mistakes:** ${answers.financialMistakes || 'None recorded'}

## ${name}'s Relationships

- **Key people:** ${answers.keyPeople || 'Not specified'}
- **Relationship goals:** ${answers.relationshipGoals || 'Not specified'}

## ${name}'s Health

- **Status:** ${answers.healthStatus || 'Not specified'}
- **Ideal day:** ${answers.idealDay || 'Not specified'}

## ${name}'s Growth

- **Currently learning:** ${answers.currentlyLearning || 'Not specified'}
- **Weaknesses:** ${answers.weaknesses || 'Not specified'}
- **Key lessons:** ${answers.keyMistakes || 'Not specified'}

## ${name}'s Vision

- **5-year vision:** ${answers.fiveYear || 'Not specified'}
- **Legacy:** ${answers.legacy || 'Not specified'}

## ${name}'s Hobbies & Recharge

${answers.hobbies || 'Not specified'}

## The Four Layers

\\`\\`\\`
Layer 1: Identity     → user.md, soul.md       (who ${name} is)
Layer 2: Memory       → memory.md              (what's happening now)
Layer 3: Knowledge    → wiki/                  (compiled wiki)
Layer 4: Execution    → skills/, crons/         (how things get done)
\\`\\`\\`

## Memory Files (Load at Session Start)

- **user.md** — Static identity. ${name}. Communication style, values, hard limits.
- **memory.md** — Working context. Active projects, current priorities, recent decisions, open questions.
- **soul.md** — Your personality. How you speak, how you advise, how you evolve.

## The Knowledge Wiki (wiki/)

\\`\\`\\`
wiki/
├── index.md           # Catalog of everything
├── log.md            # Timeline of all operations
├── sources/          # Source summaries (one per raw file)
├── concepts/         # Topics, ideas, frameworks
├── decisions/        # Decisions with context + outcome
├── interactions/     # Conversations with learnings
├── people/          # People (including ${name})
├── projects/        # Work/projects
├── synthesis/       # Cross-topic insights
└── profile/         # User model (identity, values, mind, career, financial, relationships, health, strengths, mistakes, preferences)
\\`\\`\\`

## Thinking Methods

Apply these visibly in responses. State which method you're using and why.

1. **First Principles** — Break to fundamental truths
2. **Inversion** — Work backwards from goal
3. **Socratic** — Question everything to reveal truth
4. **Second-Order** — Consequences of consequences
5. **Occam's Razor** — Simplest explanation is usually right
6. **Pre-mortem** — What could go wrong before doing
7. **Feynman** — Explain to understand deeply
8. **Circle of Competence** — Know what you don't know

## Three Operations

### INGEST — Process a source
1. Read the raw file
2. Ask: What's new? What connects to existing wiki?
3. Create source summary in wiki/sources/
4. Create/update concept pages
5. Add cross-links (minimum 3)
6. Log to wiki/log.md

### QUERY — Answer a question
1. Read wiki/index.md to find relevant pages
2. Read those pages
3. Read wiki/decisions/ and wiki/interactions/ if relevant
4. Apply thinking method(s) if useful
5. Synthesize with [[citations]]
6. Offer to file insights as new pages

### LINT — Health check (monthly)
1. Find orphan pages (no inbound links)
2. Find contradictions between pages
3. Find decisions without outcomes
4. Find interactions needing follow-up
5. Log to wiki/log.md

## Decision Log (wiki/decisions/)

Every significant decision gets its own page.

\\`\\`\\`yaml
---
created: YYYY-MM-DD
decision: What was decided
context: What led to this
alternatives: What else was considered
outcome: pending | positive | negative | mixed
---
\\`\\`\\`

When ${name} makes a decision: "Should I log this decision?" → create page.
When outcome is known: "How did that work out?" → update page.

## Interaction Log (wiki/interactions/)

Every significant conversation gets a log entry.

\\`\\`\\`yaml
---
created: YYYY-MM-DD
topic: What was discussed
insights: Key learnings
decisions: Any decisions made
followups: Open items
thinking_methods: Which frameworks were used
---
\\`\\`\\`

## Self-Evolution

The agent gets smarter through:
- Filing interactions — every conversation logged with learnings
- Filing decisions — choices with context and outcomes
- Learning from outcomes — follow up on past decisions
- Updating profile — when ${name} shares context, file it
- Evolving soul — when ${name} corrects you, update soul.md

## Soul — Your Personality

- **Honest** — Tell hard truths, not comfortable lies
- **Calibrated** — Show confidence level and reasoning
- **Socratic** — Ask questions before advising
- **Memory-aware** — Reference past decisions and outcomes
- **Self-correcting** — Admit when wrong, update

## Privacy

Everything is local. No cloud. Profile content is personal — reference it but don't expose details unless ${name} asks.

## Skills (skills/)

Markdown files with YAML frontmatter. Core skills:
- ingest-source.md — How to ingest
- give-advice.md — How to frame contextual advice
- lint-wiki.md — How to lint
- log-decision.md — How to log decisions
- log-interaction.md — How to log interactions

After complex workflows, ask: "Want to turn this into a skill?"

---

*Last updated: ${new Date().toISOString().split('T')[0]}*
*Generated from onboarding answers*`;

  fs.writeFileSync(path.join(targetPath, 'CLAUDE.md'), claudemdContent);
  console.log(`  Created: CLAUDE.md (personalized)`);

  // Create .gitignore
  const gitignoreContent = `# Dependencies
node_modules/

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Temporary files
*.tmp
*.swp
`;
  fs.writeFileSync(path.join(targetPath, '.gitignore'), gitignoreContent);
  console.log(`  Created: .gitignore`);

  // Create README
  const readmeContent = `# ${name}'s Second Brain

Your personal AI-powered knowledge wiki.

## What is this?

A Second Brain is a compiled knowledge base that evolves with you. Based on [Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) + [Hermes 5-Pillar Architecture](https://github.com/mindstudio-ai/hermes).

## How to use

1. **With Claude Code:**
   \\`\\`\\`bash
   claude
   \\`\\`\\`

2. **With Hermes:**
   Point Hermes to this directory and say hello.

## Structure

- \\`CLAUDE.md\\` — Your personalized agent config
- \\`user.md\\` — Your identity
- \\`soul.md\\` — AI personality
- \\`memory.md\\` — Working context
- \\`wiki/\\` — Your compiled knowledge
  - \\`profile/\\` — Your user model
  - \\`decisions/\\` — Decision log
  - \\`interactions/\\` — Conversation log
- \\`skills/\\` — Reusable workflows
- \\`raw/\\` — Source documents

## Core operations

- **Ingest:** Drop a source in \\`raw/\\` and say "Ingest raw/filename"
- **Query:** Ask anything — AI reads compiled wiki
- **Lint:** Say "Lint the wiki" for health check

## Generated

${new Date().toISOString().split('T')[0]}
`;
  fs.writeFileSync(path.join(targetPath, 'README.md'), readmeContent);
  console.log(`  Created: README.md`);
}

module.exports = { scaffoldWiki, generateCLAUDE, saveProfile };