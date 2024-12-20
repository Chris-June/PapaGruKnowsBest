import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export function GameProgress({ round, score }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center max-w-2xl mx-auto mb-8 p-4 card"
    >
      <div>
        <h3 className="text-sm font-medium text-muted-foreground">Round</h3>
        <p className="text-2xl font-bold">{round}/10</p>
      </div>
      
      <div className="text-right">
        <h3 className="text-sm font-medium text-muted-foreground">Score</h3>
        <motion.p
          key={score}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold"
        >
          ${score}
        </motion.p>
      </div>
    </motion.div>
  );
}

GameProgress.propTypes = {
  round: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
