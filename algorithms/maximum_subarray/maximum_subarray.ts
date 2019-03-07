/*
https://leetcode.com/problems/maximum-subarray/
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

export const maxSubArray = (nums: number[]): number => {
  /**
   * Create variable to hold maximum sum (starts at negative Infinity)
   * create varible that will hold the sum
   *
   * while iterating over the array
   *  if sum is less than 0 return value to 0
   *  add value to variable holding sum
   *
   *  check if variable is greater than the maximum sum
   *  if it is greater reassign maximum sum to new sum
   */
  let max = -Infinity;
  let sum = 0;
  for (var num of nums) {
    sum += num;
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }
  return max;
};
