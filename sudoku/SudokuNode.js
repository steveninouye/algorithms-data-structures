class SudokuNode {
  constructor(row, col, quad, puzzle) {
    this.row = row;
    this.col = col;
    this.quad = quad;
    this.possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.puzzle = puzzle;
  }

  remove(val) {
    if(val){
      let valueIdx = this.possibilities.indexOf(val);
      return valueIdx === -1 ? false : this.possibilities.splice(valueIdx, 1);
    } else {
      const rowValues = this.puzzle.rowValues[this.row];
      const colValues = this.puzzle.colValues[this.col];
      const quadValues = this.puzzle.quadValues[this.quad];
      const allValues = rowValues.concat(colValues).concat(quadValues);
      for (let value of allValues){
        let valueIdx = this.possibilities.indexOf(val);
        if(valueIdx === -1){
          return false;
        } else {
          this.possibilities.splice(valueIdx, 1);
        }
      }
    }
  }

  numPoss() {
    return this.possibilities.length; // how many possible choices does a node have as it's value
  }

  isSolved() {
    return !!this.val; // this will work because all values are 1 - 9
  }
}

module.exports = SudokuNode;
