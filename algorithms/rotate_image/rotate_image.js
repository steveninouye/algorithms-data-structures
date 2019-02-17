/*
https://leetcode.com/problems/rotate-image/
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/

const rotate = (matrix) => {
  let len = matrix.length - 1;
  let maxRow = (matrix.length / 2) | 0;
  for (let rowNum = 0; rowNum < maxRow; rowNum++) {
    for (let colNum = rowNum; colNum < len - rowNum; colNum++) {
      let topLeft = matrix[rowNum][colNum];
      let topRight = matrix[colNum][len - rowNum];
      let bottomRight = matrix[len - rowNum][len - colNum];
      let bottomLeft = matrix[len - colNum][rowNum];
      matrix[rowNum][colNum] = bottomLeft;
      matrix[colNum][len - rowNum] = topLeft;
      matrix[len - rowNum][len - colNum] = topRight;
      matrix[len - colNum][rowNum] = bottomRight;
    }
  }
  return matrix;
};

console.log(
  'output=>',
  rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])
);

let result = [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]];

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ]).reduce((acc, row, i, arr) => {
    let ansRow = result[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] !== ansRow[j]) {
        acc = false;
      }
    }
    return acc;
  }, true)
);
