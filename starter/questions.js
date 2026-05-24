const phases = [
  {
    number: 1,
    name: 'Basics',
    questions: [
      {
        type: 'input',
        name: 'name',
        message: "What's your name?",
        validate: v => v.length > 0 ? true : 'Please enter your name'
      },
      {
        type: 'input',
        name: 'dayToDay',
        message: 'What do you do day-to-day? (work, studies, etc.)',
        validate: v => v.length > 0 ? true : 'Please tell me what you do'
      },
      {
        type: 'input',
        name: 'lifeStage',
        message: 'Where are you in life right now? (location, living situation, career stage)',
      },
      {
        type: 'input',
        name: 'whyHere',
        message: 'Why do you want a Second Brain? What are you hoping it helps with?',
      }
    ]
  },
  {
    number: 2,
    name: 'Values & Principles',
    questions: [
      {
        type: 'input',
        name: 'coreValues',
        message: 'What do you care about most? (family, freedom, growth, impact, security, etc.)',
      },
      {
        type: 'input',
        name: 'principles',
        message: 'What are your core principles — the rules you try to live by?',
        validate: v => v.length > 0 ? true : 'Please share at least one principle'
      },
      {
        type: 'input',
        name: 'allergies',
        message: 'What are you "allergic" to? (behaviors you strongly dislike)',
      }
    ]
  },
  {
    number: 3,
    name: 'Mind & Thinking',
    questions: [
      {
        type: 'input',
        name: 'howYouThink',
        message: 'How do you think best? (writing, talking, doing, visualizing...)',
      },
      {
        type: 'input',
        name: 'howYouDecide',
        message: 'How do you make decisions? What\'s your process?',
      },
      {
        type: 'input',
        name: 'howYouSolve',
        message: 'When you\'re stuck on a problem, what do you do?',
      }
    ]
  },
  {
    number: 4,
    name: 'Career & Work',
    questions: [
      {
        type: 'input',
        name: 'currentWork',
        message: 'What are you working on right now? (projects, role, goals)',
      },
      {
        type: 'input',
        name: 'workGoalsShort',
        message: 'What are your short-term work goals? (3-6 months)',
      },
      {
        type: 'input',
        name: 'workGoalsMedium',
        message: 'Medium-term work goals? (1-2 years)',
      },
      {
        type: 'input',
        name: 'workGoalsLong',
        message: 'Long-term work goals? (3-5 years)',
      },
      {
        type: 'input',
        name: 'workChallenges',
        message: 'What\'s challenging you in work right now?',
      }
    ]
  },
  {
    number: 5,
    name: 'Money & Finance',
    questions: [
      {
        type: 'input',
        name: 'financialSituation',
        message: 'What\'s your financial situation? (income, savings, debts — as comfortable sharing)',
      },
      {
        type: 'input',
        name: 'financialRules',
        message: 'Do you have financial rules? (e.g. "save 20%", "no EMI over X")',
      },
      {
        type: 'input',
        name: 'financialGoals',
        message: 'What are you saving for? (big purchases, investments, etc.)',
      },
      {
        type: 'input',
        name: 'financialMistakes',
        message: 'What financial mistakes have you made? What did you learn?',
      }
    ]
  },
  {
    number: 6,
    name: 'Relationships',
    questions: [
      {
        type: 'input',
        name: 'keyPeople',
        message: 'Who matters most to you? (family, friends, partners)',
      },
      {
        type: 'input',
        name: 'relationshipGoals',
        message: 'What do you want your relationships to look like a year from now?',
      }
    ]
  },
  {
    number: 7,
    name: 'Health & Energy',
    questions: [
      {
        type: 'input',
        name: 'healthStatus',
        message: 'How\'s your health and energy? (physical, mental, emotional)',
      },
      {
        type: 'input',
        name: 'idealDay',
        message: 'What does your ideal day look like?',
      },
      {
        type: 'input',
        name: 'energyDrivers',
        message: 'What gives you energy? What drains it?',
      }
    ]
  },
  {
    number: 8,
    name: 'Growth & Learning',
    questions: [
      {
        type: 'input',
        name: 'currentlyLearning',
        message: 'What are you learning right now? (books, skills, topics)',
      },
      {
        type: 'input',
        name: 'weaknesses',
        message: 'What are your biggest weaknesses? Where do you struggle?',
      },
      {
        type: 'input',
        name: 'keyMistakes',
        message: 'What mistakes taught you the most? (failures that shaped you)',
      }
    ]
  },
  {
    number: 9,
    name: 'Future & Vision',
    questions: [
      {
        type: 'input',
        name: 'fiveYear',
        message: 'Where do you want to be in 5 years? Big picture vision?',
      },
      {
        type: 'input',
        name: 'legacy',
        message: 'What do you want people to say about you? How do you want to be remembered?',
      }
    ]
  },
  {
    number: 10,
    name: 'Fun & Personality',
    questions: [
      {
        type: 'input',
        name: 'hobbies',
        message: 'What do you do for fun? Hobbies, interests, what recharges you?',
      },
      {
        type: 'input',
        name: 'anythingElse',
        message: 'Anything else I should know about you?',
      }
    ]
  }
];

const questions = phases.flatMap(p => p.questions);

module.exports = { phases, questions };