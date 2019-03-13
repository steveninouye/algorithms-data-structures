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
  const result = [];
  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;

  while (top <= bottom && left <= right) {
    for (var col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;
    for (var row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;
    if (top <= bottom) {
      for (var col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }
    if (left <= right) {
      for (var row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
    }
  }
  return result;
};
