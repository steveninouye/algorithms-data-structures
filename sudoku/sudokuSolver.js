const Puzzle = require('./Puzzle');

const sudokuSolver = (matrix) => {
  const puzzle = new Puzzle(matrix);
  const result = puzzle.solve();
  return result;
};

module.exports = sudokuSolver;
