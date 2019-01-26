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
        this.setVal(rowIdx, colIdx);
      });
    });
    for(let node of this.unsolvedNodes) {
      (node.remove())
    }
  }
  
  setVal(row, col, val) {
    let quad = getQuadrant(row,col);
    if(val){
      rowValues[row].push(val)
      colValues[col].push(val)
      quadValues[quad].push(val)
    } else {
      let newNode = new SudokuNode(row, col, quad, this)
      this.unsolvedNodes.push(newNode)
    }
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
