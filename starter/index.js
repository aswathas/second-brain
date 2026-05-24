#!/usr/bin/env node

const { questions, phases } = require('./questions');
const { scaffoldWiki, generateCLAUDE, saveProfile } = require('./scaffold');
const fs = require('fs');
const path = require('path');

const VERSION = '1.0.0';

async function typeText(text, delay = 30) {
  for (const char of text) {
    process.stdout.write(char);
    await new Promise(r => setTimeout(r, delay));
  }
  console.log();
}

async function printBig(text) {
  console.log('\n' + '='.repeat(60));
  console.log(text);
  console.log('='.repeat(60) + '\n');
}

async function askQuestion(inquirer, question) {
  const answers = await inquirer.prompt([question]);
  return Object.values(answers)[0];
}

async function run() {
  const inquirer = require('inquirer');

  console.clear();
  printBig('SECOND BRAIN');
  console.log('Your personal AI companion that evolves with you.\n');
  console.log('Version:', VERSION);
  console.log();

  await typeText("I'll ask you a series of questions to get to know you.");
  await typeText("This takes about 15-20 minutes. Take your time.\n");
  await typeText("Your answers go into your personal wiki — nothing leaves your machine.\n");

  const { proceed } = await inquirer.prompt([{
    type: 'confirm',
    name: 'proceed',
    message: 'Ready to start?',
    default: true
  }]);

  if (!proceed) {
    console.log('\nNo problem. Run `node index.js` when you\'re ready.\n');
    return;
  }

  const answers = {};

  // Run each phase
  for (const phase of phases) {
    console.log('\n' + '-'.repeat(50));
    console.log(`PHASE ${phase.number}: ${phase.name}`);
    console.log('-'.repeat(50));

    for (const q of phase.questions) {
      const answer = await askQuestion(inquirer, q);
      answers[q.name] = answer;
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('ALMOST DONE!');
  console.log('='.repeat(60));
  console.log('\nLet me set up your wiki now...\n');

  // Get target directory
  const { targetDir } = await inquirer.prompt([{
    type: 'input',
    name: 'targetDir',
    message: 'Where should I create your wiki?',
    default: './my-second-brain'
  }]);

  const targetPath = path.resolve(targetDir);

  if (fs.existsSync(targetPath)) {
    const { overwrite } = await inquirer.prompt([{
      type: 'confirm',
      name: 'overwrite',
      message: 'Directory exists. Overwrite?',
      default: false
    }]);
    if (!overwrite) {
      console.log('\nCancelled. Run `node index.js` to try again.\n');
      return;
    }
  }

  // Scaffold the wiki
  console.log('\nScaffolding your Second Brain wiki...');
  scaffoldWiki(targetPath, answers);
  generateCLAUDE(targetPath, answers);

  // Final message
  console.log('\n' + '='.repeat(60));
  console.log('YOUR SECOND BRAIN IS READY!');
  console.log('='.repeat(60));
  console.log(`
Wiki created at: ${targetPath}

Next steps:
1. cd ${targetDir}
2. Open in Claude Code: claude
3. Say "I'm ready" to start chatting

Or use with Hermes/Codex by copying CLAUDE.md there.

Happy thinking!
  `);

  // Offer to init git
  const { initGit } = await inquirer.prompt([{
    type: 'confirm',
    name: 'initGit',
    message: 'Initialize git repo?',
    default: true
  }]);

  if (initGit) {
    const { exec } = require('child_process');
    exec(`cd "${targetPath}" && git init && git add -A && git commit -m "Initial commit: Second Brain setup"`, (err, stdout, stderr) => {
      if (err) {
        console.log('Git init skipped or failed.');
        return;
      }
      console.log('Git initialized and committed!');
    });
  }
}

run().catch(console.error);