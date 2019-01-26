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
  constructor(puzzle) {
    this.rowValues = new EmptyVals().hash();
    this.colValues = new EmptyVals().hash();
    this.quadValues = new EmptyVals().hash();
    this.puzzle = puzzle;
    this.unsolvedNodes = [];
    this.setMatrix(puzzle);
  }

  setMatrix(puzzle) {
    puzzle.forEach((row, rowIdx) => {
      row.forEach((val, colIdx) => {
        this.setVal(rowIdx, colIdx, val);
      });
    });
    for (let node of this.unsolvedNodes) {
      node.remove();
    }
  }

  setVal(row, col, val) {
    let quad = this.getQuadrant(row, col);
    if (val) {
      this.rowValues[row].push(val);
      this.colValues[col].push(val);
      this.quadValues[quad].push(val);
      this.puzzle[row][col] = val;
    } else {
      let newNode = new SudokuNode(row, col, quad, this);
      this.unsolvedNodes.push(newNode);
    }
  }

  solve() {
    if (this.unsolvedNodes.length === 0) return this.puzzle;
    let rootNode = this.unsolvedNodes[0];
    for (let i = 1; i < this.unsolvedNodes.length; i++) {
      let numPossibilities = this.unsolvedNodes[i].numPoss();
      if (this.numPossibilities === 0) {
        return false;
      } else if (numPossibilities < rootNode.numPoss()) {
        rootNode = this.unsolvedNodes[i];
      }
    }
    if (rootNode.numPoss === 0) return false;
    for (let guessValue of rootNode.possibilities) {
      let newMatrix = this.puzzle.reduce(
        (matrix, row) => matrix.concat([row.map((e) => e)]),
        []
      );
      newMatrix[rootNode.row][rootNode.col] = guessValue;
      let newPuzzle = new Puzzle(newMatrix); // make a copy of puzzle
      let result = newPuzzle.solve();
      if (result) return result;
    }
    return false;
  }

  getQuadrant(row, col) {
    if (row < 3) {
      if (col < 3) {
        return 0;
      } else if (col < 6) {
        return 1;
      } else if (col < 9) {
        return 2;
      }
    } else if (row < 6) {
      if (col < 3) {
        return 3;
      } else if (col < 6) {
        return 4;
      } else if (col < 9) {
        return 5;
      }
    } else if (row < 9) {
      if (col < 3) {
        return 6;
      } else if (col < 6) {
        return 7;
      } else if (col < 9) {
        return 8;
      }
    }
  }
}

module.exports = Puzzle;
