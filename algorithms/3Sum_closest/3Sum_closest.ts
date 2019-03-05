/*
https://leetcode.com/problems/3sum-closest/
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

export const threeSumClosest = (nums: number[], target: number): number => {
  if (nums.length < 3) return null;
  nums.sort((a, b) => a - b);
  let result: number = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let difference: number = target - nums[i];
    let lo: number = i + 1;
    let hi: number = nums.length - 1;
    while (lo < hi) {
      const sum = getSumOfLoHi(nums, lo, hi);
      if (sum === difference) {
        return target;
      } else {
        const total = nums[i] + sum;
        if (Math.abs(target - result) > Math.abs(target - total)) {
          result = total;
        }
        if (total < target) {
          lo++;
        } else {
          hi--;
        }
      }
    }
  }
  return result;
};

export const getSumOfLoHi = (nums: number[], lo: number, hi: number) =>
  nums[lo] + nums[hi];
