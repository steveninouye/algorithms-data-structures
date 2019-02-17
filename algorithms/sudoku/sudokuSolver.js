const Puzzle = require('./Puzzle');

const sudokuSolver = (matrix) => {
  const puzzle = new Puzzle(matrix);
  return puzzle.solve();
};

module.exports = sudokuSolver;
