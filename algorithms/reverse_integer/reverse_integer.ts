/*
https://leetcode.com/problems/reverse-integer/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
2^31 = 2147483648  flipped 8463847412
*/

export const reverse = (x: number): number => {
  let result = 0;
  let num = Math.abs(x);
  if (num === 0 || num > 9999999999) return 0;
  let neg = x < 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = (num / 10) | 0;
  }
  if (result > 2147483648) return 0;
  return neg ? -result : result;
};
