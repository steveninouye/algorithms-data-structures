class SudokuNode {
  constructor(row, col, quad, puzzle) {
    this.row = row;
    this.col = col;
    this.quad = quad;
    this.possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.puzzle = puzzle;
  }

  remove() {
    const rowValues = this.puzzle.rowValues[this.row];
    const colValues = this.puzzle.colValues[this.col];
    const quadValues = this.puzzle.quadValues[this.quad];
    const allValues = rowValues.concat(colValues).concat(quadValues);
    for (let val of allValues) {
      let valueIdx = this.possibilities.indexOf(val);
      if (valueIdx !== -1) {
        this.possibilities.splice(valueIdx, 1);
      }
    }
  }

  numPoss() {
    return this.possibilities.length;
  }
}

module.exports = SudokuNode;
