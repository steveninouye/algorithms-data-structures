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
  let top = 0,
    left = 0,
    bottom = matrix.length - 1,
    right = matrix.length - 1;
  let directions = ['r', 'd', 'l', 'u'];
  let dir = 0;
  let result = [];
  let row = 0,
    col = 0;
  while (true) {
    
  }
  // start at top left
  ///// increase col num until hitting right
  ///// decrease right var
  ///// increase row num until hitting bottom
  ///// decrease bottom var
  ///// decrease col until hitting left
  ///// increase left
};

module.exports = spiralOrder;
