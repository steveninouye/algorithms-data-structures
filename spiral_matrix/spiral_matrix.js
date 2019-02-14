/*
https://leetcode.com/problems/spiral-matrix/
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/
const spiralOrder = (matrix) => {
  // create container variables
  // top = 0, left = 0
  // bottom = matrix.length - 1, right = matrix[0].length - 1
  let top = 1,
    left = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1;
  let r = 'r',
    d = 'd',
    l = 'l',
    u = 'u';
  let directions = [r, d, l, u];
  let dir = 0;
  let row = 0,
    col = 0;
  let total = matrix.length * matrix[0].length;
  let result = [];
  while (result.length !== total) {
    let el = matrix[row][col];
    result.push(el);
    let direction = directions[dir % 4];
    if (direction === r) {
      col++;
      if (col === right) {
        dir++;
        right--;
      }
    } else if (direction === 'd') {
      row++;
      if (row === bottom) {
        dir++;
        bottom--;
      }
    } else if (direction === 'l') {
      col--;
      if (col === left) {
        dir++;
        left++;
      }
    } else {
      row--;
      if (row === top) {
        dir++;
        top++;
      }
    }
  }
  return result;
  // start at top left
  ///// increase col num until hitting right
  ///// decrease right var
  ///// increase row num until hitting bottom
  ///// decrease bottom var
  ///// decrease col until hitting left
  ///// increase left
};

module.exports = spiralOrder;
