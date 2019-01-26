const Puzzle = require('./Puzzle');

const sudokuSolver = (matrix) => {

  // fill in the cells with null value with an array of possibilities
  matrix.each((row, rowIdx) => {
    row.each((cell, colIdx) => {
      if (cell === null) {
        matrix[rowIdx][colIdx] = getPossibilities(row, col, matrix);
      }
    });
  });

  

  // create a matrix and each cell without a value add an array of [1..9]

  // loop though each cell and each element that

  // add each element in matrix
  // add values
  // remove each value from relative nodes
  // relative nodes::::
  // nodes in same row
  // nodes in same column
  // nodes in same quadrant

  // find node/nodes with the least possibilities
  // traverse down tree until:::
  // all nodes are filled
  // nodes with no value have no possibilities
};

const getPossibilities = (row, col, matrix) => {
  const possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // delete possibilities in row
  matrix[row].forEach((val) => {
    let idx = possibilities.indexOf(val);
    if (idx !== -1) possibilities.splice(idx);
  });

  // delete possibilities with value in column
  matrix.forEach((row) => {
    let idx = possibilities.indexOf(row[col]);
    if (idx !== -1) possibilities.splice(idx);
  });

  // delete possibilities in quadrant
  let quadrantVals = getValuesInQuadrant(row, col, matrix);
  quadrantVals.forEach((val) => {
    let idx = possibilities.indexOf(val);
    if (idx !== -1) possibilities.splice(idx);
  });

  return possibilities;
};

const getValuesInQuadrant = (row, col, matrix) => {
  if (row < 3) {
    if (col < 3) {
      return getValuesInMatrix(0, 2, 0, 2, matrix);
    } else if (col < 6) {
      return getValuesInMatrix(0, 2, 3, 5, matrix);
    } else {
      return getValuesInMatrix(0, 2, 6, 8, matrix);
    }
  } else if (row < 6) {
    if (col < 3) {
      return getValuesInMatrix(3, 5, 0, 2, matrix);
    } else if (col < 6) {
      return getValuesInMatrix(3, 5, 3, 5, matrix);
    } else {
      return getValuesInMatrix(3, 5, 6, 8, matrix);
    }
  } else {
    if (col < 3) {
      return getValuesInMatrix(6, 8, 0, 2, matrix);
    } else if (col < 6) {
      return getValuesInMatrix(6, 8, 3, 5, matrix);
    } else {
      return getValuesInMatrix(6, 8, 6, 8, matrix);
    }
  }
};

const getValuesInMatrix = (startRow, endRow, startCol, endCol, matrix) => {
  let result = [];
  for (let i = startRow; i <= endRow; i++) {
    for (let j = startCol; j <= endCol; j++) {
      result.push(matrix[i][j]);
    }
  }
  return result;
};

const getQuadrant = (row, col) => {
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
};

module.exports = sudokuSolver;
