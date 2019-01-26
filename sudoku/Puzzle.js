const SudokuNode = require('./SudokuNode.js');

class EmptyVals {
  constructor() {
    this.store = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: []
    };
  }

  hash() {
    return this.store;
  }
}

class Puzzle {
  constructor(matrix) {
    this.rows = new EmptyVals().hash();
    this.columns = new EmptyVals().hash();
    this.quadrants = new EmptyVals().hash();
    this.setMatrix(matrix);
  }

  setMatrix(matrix) {
    matrix.forEach((row, rowIdx) => {
      row.forEach((val, colIdx) => {
        this.setVal(rowIdx, colIdx);
      });
    });
  }

  setVal(row, col, val) {}

  getQuadrant(row, col) {}
}

module.exports = Puzzle;
