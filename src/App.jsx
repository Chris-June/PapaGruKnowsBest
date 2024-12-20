import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import './styles/globals.css'
import { CategorySelection } from './components/CategorySelection'
import { Question } from './components/Question'
import { GameProgress } from './components/GameProgress'
import { GameOver } from './components/GameOver'
import { getQuestionsByDifficulty } from './data/questions'

function App() {
  const [gameState, setGameState] = useState('category') // category, playing, finished
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentRound, setCurrentRound] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    if (selectedCategory) {
      const roundQuestions = getQuestionsByDifficulty(selectedCategory.id, currentRound)
      setQuestions(roundQuestions)
      setCurrentQuestion(0)
    }
  }, [selectedCategory, currentRound])

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setGameState('playing')
  }

  const handleAnswer = (isCorrect, points) => {
    setScore(prev => prev + (isCorrect ? points : -points))
    
    if (currentQuestion === 4) { // Last question in the round
      if (currentRound === 10) {
        setGameState('finished')
      } else {
        setCurrentRound(prev => prev + 1)
      }
    } else {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handlePlayAgain = () => {
    setGameState('category')
    setSelectedCategory(null)
    setCurrentRound(1)
    setCurrentQuestion(0)
    setScore(0)
  }

  return (
    <div className="min-h-screen gradient-bg overflow-x-hidden">
      <div className="max-w-[2000px] mx-auto px-6 md:px-12 lg:px-24 py-12">
        <Toaster position="top-center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <h1 className="text-5xl font-bold text-center mb-8 epic-title">
            Papa Gru Knows Best
          </h1>
          <AnimatePresence mode="wait">
            {gameState === 'category' && (
              <CategorySelection key="category" onSelectCategory={handleCategorySelect} />
            )}
            {gameState === 'playing' && (
              <div className="w-full">
                <GameProgress
                  key="progress"
                  currentRound={currentRound}
                  score={score}
                  category={selectedCategory}
                />
                {questions[currentQuestion] && (
                  <Question
                    key="question"
                    question={questions[currentQuestion]}
                    onAnswer={handleAnswer}
                    isBonus={currentQuestion === 4}
                  />
                )}
              </div>
            )}
            {gameState === 'finished' && (
              <GameOver key="gameover" score={score} onPlayAgain={handlePlayAgain} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default App
