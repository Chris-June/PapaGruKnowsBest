export const categoryGroups = [
  {
    id: 'academia',
    name: 'Academia',
    icon: '🎓',
    description: 'Educational and scholarly topics',
    categories: ['history', 'psychology', 'architecture', 'science']
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Culture',
    icon: '🎭',
    description: 'Pop culture and entertainment',
    categories: ['pop-culture', 'sports', 'art-literature', 'fashion', 'music']
  },
  {
    id: 'world',
    name: 'World & Nature',
    icon: '🌍',
    description: 'Our planet and its wonders',
    categories: ['geography', 'nature', 'food-cuisine']
  },
  {
    id: 'innovation',
    name: 'Innovation & Discovery',
    icon: '🔮',
    description: 'Technology and human achievement',
    categories: ['technology', 'astronomy', 'inventions']
  },
  {
    id: 'mythology-legends',
    name: 'Mythology & Legends',
    icon: '🐉',
    description: 'Ancient stories and beliefs',
    categories: ['mythology']
  }
];

export const categories = [
  {
    id: 'history',
    name: 'History',
    icon: '📚',
    description: 'Test your knowledge of world history',
    group: 'academia'
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    description: 'Explore the wonders of science',
    group: 'academia'
  },
  {
    id: 'pop-culture',
    name: 'Pop Culture',
    icon: '🎬',
    description: 'Entertainment, movies, music, and more',
    group: 'entertainment'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '⚽',
    description: 'Sports trivia from around the world',
    group: 'entertainment'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌎',
    description: 'Explore countries, capitals, and landmarks',
    group: 'world'
  },
  {
    id: 'food-cuisine',
    name: 'Food & Cuisine',
    icon: '🍳',
    description: 'Global culinary knowledge and cooking facts',
    group: 'world'
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: '💻',
    description: 'Computers, gadgets, and digital innovation',
    group: 'innovation'
  },
  {
    id: 'art-literature',
    name: 'Art & Literature',
    icon: '🎨',
    description: 'Famous artists, books, and masterpieces',
    group: 'entertainment'
  },
  {
    id: 'mythology',
    name: 'Mythology',
    icon: '⚡',
    description: 'Ancient myths and legends from cultures worldwide',
    group: 'mythology-legends'
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    description: 'Classical, rock, jazz, and musical history',
    group: 'entertainment'
  },
  {
    id: 'nature',
    name: 'Nature & Wildlife',
    icon: '🦁',
    description: 'Animals, plants, and natural phenomena',
    group: 'world'
  },
  {
    id: 'astronomy',
    name: 'Astronomy',
    icon: '🌌',
    description: 'Space exploration and celestial bodies',
    group: 'innovation'
  },
  {
    id: 'fashion',
    name: 'Fashion & Style',
    icon: '👗',
    description: 'Fashion history, designers, and trends',
    group: 'entertainment'
  },
  {
    id: 'psychology',
    name: 'Psychology',
    icon: '🧠',
    description: 'Human behavior and mental processes',
    group: 'academia'
  },
  {
    id: 'architecture',
    name: 'Architecture',
    icon: '🏛️',
    description: 'Famous buildings and architectural styles',
    group: 'academia'
  },
  {
    id: 'inventions',
    name: 'Inventions',
    icon: '💡',
    description: 'Revolutionary discoveries and innovations',
    group: 'innovation'
  },
];

export const questions = {
  history: [
    {
      difficulty: 1,
      questions: [
        {
          id: 'h1q1',
          question: 'Who was the first President of the United States?',
          options: [
            'George Washington',
            'Thomas Jefferson',
            'John Adams',
            'Benjamin Franklin'
          ],
          correct: 0,
          points: 10,
        },
        // Add more questions...
      ],
    },
    // Add more difficulty levels...
  ],
  science: [
    {
      difficulty: 1,
      questions: [
        {
          id: 's1q1',
          question: 'What is the chemical symbol for gold?',
          options: ['Au', 'Ag', 'Fe', 'Cu'],
          correct: 0,
          points: 10,
        },
        // Add more questions...
      ],
    },
    // Add more difficulty levels...
  ],
  // Add more categories...
};

export const getQuestionsByDifficulty = (category, difficulty) => {
  return questions[category]?.find(d => d.difficulty === difficulty)?.questions || [];
};

export const calculatePoints = (difficulty, isBonus = false) => {
  const basePoints = difficulty * 10;
  return isBonus ? basePoints * 2 : basePoints;
};
