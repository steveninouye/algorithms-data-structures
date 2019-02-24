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
  if (m < 1 || n < 1) {
    throw new Error('input needs to be greater than 0');
  }
  if (m === 1 || n === 1) {
    return 1;
  } else if (m === n) {
    return uniquePaths(m, n - 1) * 2;
  } else {
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  }
};

const iUniquePaths = (m, n) => {
  if (m < 1 || n < 1) throw 'input needs to be greater than 0';

  const store: number[] = [];
  for (let i = 0; i < m; i++) {
    store.push(1);
  }

  for (let row = 1; row < n; row++) {
    for (let col = 0; col < store.length; col++) {
      store[col] += store[col - 1] || 0;
    }
  }

  return store[m - 1];
};

export { iUniquePaths, uniquePaths };
