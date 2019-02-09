/*
https://leetcode.com/problems/3sum-closest/
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let num = nums[i];
    let lo = i + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      let sum = num + nums[lo] + nums[hi];
      if (sum === target) {
        return target;
      }
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
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
  return closestSum;
};
