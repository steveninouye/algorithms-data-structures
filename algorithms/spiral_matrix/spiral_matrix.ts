/*
MUST DO AGAIN!!!!!!!!!!!!!!!
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
export const spiralOrder = (matrix: number[][]): number[] => {
  const unWrappedMatrix: number[] = [];
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftCol = 0;
  let rightCol = matrix[0].length - 1;
  while (topRow <= bottomRow && leftCol <= rightCol) {
    for (let col = leftCol; col <= rightCol; col++) {
      unWrappedMatrix.push(matrix[topRow][col]);
    }
    topRow++;
    for (let row = topRow; row <= bottomRow; row++) {
      unWrappedMatrix.push(matrix[row][rightCol]);
    }
    rightCol--;
    if (topRow <= bottomRow) {
      for (let col = rightCol; col >= leftCol; col--) {
        unWrappedMatrix.push(matrix[bottomRow][col]);
      }
      bottomRow--;
    }
    if (leftCol <= rightCol) {
      for (let row = bottomRow; row >= topRow; row--) {
        unWrappedMatrix.push(matrix[row][leftCol]);
      }
      leftCol++;
    }
  }

  return unWrappedMatrix;
};
