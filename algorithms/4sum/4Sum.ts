/*
https://leetcode.com/problems/4sum/
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

export const fourSum = (nums: number[], target: number): number[][] => {
  const result: number[][] = [];
  const len = nums.length;
  if (len < 4) return result;
  nums.sort((a, b) => a - b);
  for (var i = 0; i < len - 3; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    const num1 = nums[i];
    for (var j = i + 1; j < len - 2; j++) {
      const num2 = nums[j];
      if (num1 + num2 * 3 > 0) break;
      let lo = j + 1;
      let hi = len - 1;
      while (lo < hi) {
        const sum = nums[lo] + nums[hi];
        const total = num1 + num2 + sum;
        if (total === 0) {
          result.push([num1, num2, nums[lo], nums[hi]]);
        } else if (total > 0) {
          hi--;
        } else {
          lo++;
        }
      }
    }
  }
  return result;
};
