/*
https://leetcode.com/problems/unique-paths/
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  if (m < 1 || n < 1) throw 'input needs to be greater than 0';
  if (m === 1 || n === 1) return 1;
  let down, right;
  down = uniquePaths(m - 1, n);
  if (m === n) {
    right = down;
  } else {
    right = uniquePaths(m, n - 1);
  }
  return down + right;
};

const iUniquePaths = (m, n) => {
  if (m < 1 || n < 1) throw 'input needs to be greater than 0';
  const row = [];
  for (var i = 0; i < n; i++) {
    row.push(1);
  }
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n; j++) {
      let prev = row[j - 1] || 0;
      row[j] += prev;
    }
  }
  return row[row.length - 1];
};

export { iUniquePaths, uniquePaths };
