import PropTypes from 'prop-types';

export const GameOver = ({ score, onPlayAgain }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <h2 className="text-3xl font-bold text-center">Game Over!</h2>
      <p className="text-xl">Your final score: {score}</p>
      <button
        onClick={onPlayAgain}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Play Again
      </button>
    </div>
  );
};

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
  onPlayAgain: PropTypes.func.isRequired,
};
