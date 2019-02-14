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
  if (matrix.length === 0) return [];
  let rowStart = 0,
    rowEnd = matrix.length - 1,
    colStart = 0,
    colEnd = matrix[0].length - 1;
  let result = [];
  while (colEnd >= colStart && rowEnd >= rowStart) {
    for (let col = colStart; col <= colEnd; col++) {
      result.push(matrix[rowStart][col]);
    }
    rowStart++;

    for (let row = rowStart; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd]);
    }
    colEnd--;

    if (rowEnd >= rowStart) {
      for (let col = colEnd; col >= colStart; col--) {
        result.push(matrix[rowEnd][col]);
      }
    }
    rowEnd--;

    if (colEnd >= colStart) {
      for (let row = rowEnd; row >= rowStart; row--) {
        result.push(matrix[row][colStart]);
      }
    }
    colStart++;
  }
  return result;
};

module.exports = spiralOrder;
