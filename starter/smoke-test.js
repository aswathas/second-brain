// Smoke test: both starter modules load and the scaffolder writes a wiki.
// Run: node starter/smoke-test.js
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { phases, questions } = require('./questions');
const { scaffoldWiki, generateCLAUDE } = require('./scaffold');

assert.strictEqual(questions.length, 31, 'expected 31 onboarding questions');
assert.strictEqual(phases.length, 10, 'expected 10 phases');
assert.ok(questions.every(q => q.name && q.message), 'every question needs a name and message');

const answers = { name: 'Smoke Test' };
questions.forEach(q => { answers[q.name] = 'x'; });

const target = fs.mkdtempSync(path.join(os.tmpdir(), 'second-brain-'));
scaffoldWiki(target, answers);
generateCLAUDE(target, answers);

for (const f of ['user.md', 'soul.md', 'memory.md', 'CLAUDE.md', 'README.md',
                 'wiki/index.md', 'wiki/log.md', 'wiki/profile/identity.md',
                 'skills/ingest-source.md', 'AGENTS.md']) {
  assert.ok(fs.existsSync(path.join(target, f)), `missing ${f}`);
}
assert.ok(fs.readFileSync(path.join(target, 'CLAUDE.md'), 'utf8').includes('```'), 'code fences must survive templating');

fs.rmSync(target, { recursive: true, force: true });
console.log('OK: modules load, wiki scaffolds, generated markdown is well-formed');