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

const fourSum = (nums, target) => {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    let num = nums[i];
    if (i !== 0 && num === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      let targ = num + nums[j];
      let lo = j + 1;
      let hi = nums.length - 1;
      while (lo < hi) {
        let sum = targ + nums[lo] + nums[hi];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[lo], nums[hi]]);
          lo++;
          while (nums[lo] === nums[lo - 1]) {
            lo++;
          }
          hi--;
          while (nums[hi] === nums[hi + 1]) {
            hi--;
          }
        } else if (sum < target) {
          lo++;
          while (nums[lo] === nums[lo - 1]) {
            lo++;
          }
        } else {
          hi--;
          while (nums[hi] === nums[hi + 1]) {
            hi--;
          }
        }
      }
    }
  }
  return result;
};
