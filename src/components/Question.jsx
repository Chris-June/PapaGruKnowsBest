import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

export const Question = ({ question, onAnswer, isBonus }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (optionIndex) => {
    if (hasAnswered) return;
    
    setSelectedOption(optionIndex);
    setHasAnswered(true);
    
    const isCorrect = optionIndex === question.correct;
    const points = isBonus ? question.points * 2 : question.points;
    
    if (isCorrect) {
      toast.success(`Correct! +${points} points`);
    } else {
      toast.error(`Incorrect! -${points} points`);
    }
    
    setTimeout(() => {
      onAnswer(isCorrect, points);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="card w-full"
    >
      {isBonus && (
        <div className="mb-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Bonus Question
          </span>
        </div>
      )}
      
      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
      
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-lg border text-left transition-colors ${
              hasAnswered
                ? index === question.correct
                  ? 'bg-green-500 text-white'
                  : index === selectedOption
                  ? 'bg-red-500 text-white'
                  : 'bg-muted'
                : 'hover:bg-muted'
            }`}
            onClick={() => handleAnswer(index)}
            disabled={hasAnswered}
          >
            {option}
          </motion.button>
        ))}
      </div>
      
      <div className="mt-4 text-right text-sm text-muted-foreground">
        Points: {isBonus ? question.points * 2 : question.points}
      </div>
    </motion.div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  isBonus: PropTypes.bool,
};

Question.defaultProps = {
  isBonus: false,
};
