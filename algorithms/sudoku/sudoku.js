const sudokuSolver = require('./sudokuSolver.js');

let sudokuPuzzle = [
  [null, 2, null, 5, null, 1, null, 9, null],
  [8, null, null, 2, null, 3, null, null, 6],
  [null, 3, null, null, 6, null, null, 7, null],
  [null, null, 1, null, null, null, 6, null, null],
  [5, 4, null, null, null, null, null, 1, 9],
  [null, null, 2, null, null, null, 7, null, null],
  [null, 9, null, null, 3, null, null, 8, null],
  [2, null, null, 8, null, 4, null, null, 7],
  [null, 1, null, 9, null, 7, null, 6, null]
];

let solvedPuzzle = sudokuSolver(sudokuPuzzle);
console.log(solvedPuzzle);

// testing
function checkCorrect(puzzle) {
  let testResult = true;
  let numHash = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  };
  solvedPuzzle.reduce((hash, row, index) => {
    let rowResults = row.reduce((rowHash, num, i) => {
      if (num == null) {
        console.log('row: ' + row);
        console.log('index: ' + i);
        testResult = false;
      } else if (num in rowHash) {
        console.log('row: ' + row);
        console.log('index: ' + i);
        testResult = false;
      } else {
        rowHash[num] = index;
      }
      return rowHash;
    }, {});

    for (var i = 1; i < 10; i++) {
      let col = rowResults[i];
      if (hash[i].includes(col)) {
        testResult = false;
      } else {
        hash[i].push(col);
      }
    }
    return hash;
  }, numHash);
  return testResult;
}

console.log(checkCorrect(solvedPuzzle));
