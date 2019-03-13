/*
https://leetcode.com/problems/set-matrix-zeroes/
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes = (matrix: number[][]) => {
  let isCol = false;
  const rowLen = matrix.length;
  const colLen = matrix[0].length;

  for (var row = 0; row < rowLen; row++) {
    if (matrix[row][0] === 0) {
      isCol = true;
    }

    for (var col = 1; col < colLen; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (var row = 1; row < rowLen; row++) {
    for (var col = 1; col < colLen; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (var col = 1; col < colLen; col++) {
      matrix[0][col] = 0;
    }
  }

  if (isCol) {
    for (var row = 0; row < rowLen; row++) {
      matrix[row][0] = 0;
    }
  }
};
