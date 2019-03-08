/*
https://leetcode.com/problems/powx-n/
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]
*/

export const intersection = (nums1: number, nums2: number): number => {
  let num = nums2;
  let base = nums1;
  if (num < 0) {
    base = 1 / base;
    num = -num;
  }

  let result = 1;
  let temp = base;
  while (num > 0) {
    if (num % 2 === 1) {
      result *= base;
    }
    temp = temp * temp;
    num = Math.floor(num / 2);
  }
  return result
};
