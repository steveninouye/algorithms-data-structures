/*
https://leetcode.com/problems/divide-two-integers/
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
*/
export const divide = (dividend: number, divisor: number): number => {
  let result = 0;
  if (Math.abs(divisor) > Math.abs(dividend)) return result;
  if ((dividend >= 0 && divisor > 0) || (dividend <= 0 && divisor < 0)) {
    while (Math.abs(dividend) >= Math.abs(divisor)) {
      result += 1;
      dividend -= divisor;
    }
  } else {
    while (Math.abs(dividend) >= Math.abs(divisor)) {
      result -= 1;
      dividend += divisor;
    }
  }
  if (result > 2147483647) return 2147483647;
  if (result < -2147483648) return -2147483648;
  return result;
};
