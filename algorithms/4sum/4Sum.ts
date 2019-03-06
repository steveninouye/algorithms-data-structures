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
  console.log('nums: ', nums);
  for (var i = 0; i < len - 3; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    const num1 = nums[i];
    for (var j = i + 1; j < len - 2; j++) {
      const num2 = nums[j];
      if (j !== i + 1 && nums[j - 1] === num2) continue;
      if (num1 + num2 * 3 > target) break;
      let lo = j + 1;
      let hi = len - 1;
      while (lo < hi) {
        console.log('lo: ', lo);
        console.log('hi: ', hi);
        const sum = nums[lo] + nums[hi];
        console.log('sum: ', sum);
        const total = num1 + num2 + sum;
        console.log('total: ', total);
        if (total === target) {
          result.push([num1, num2, nums[lo], nums[hi]]);
          hi--;
          while (nums[hi] === nums[hi + 1]) {
            hi--;
          }
          lo++;
          while (nums[lo] === nums[lo - 1]) {
            lo++;
          }
        } else if (total > target) {
          hi--;
        } else {
          lo++;
        }
      }
    }
  }
  return result;
};
