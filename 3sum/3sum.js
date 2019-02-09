/*
https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

var threeSum = function(nums) {
  if (nums.length < 3) return [];
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let num = nums[i];
    let lo = i + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      let total = nums[lo] + nums[hi] + num;
      if (total === 0) {
        result.push([num, nums[lo], nums[hi]]);
        lo++;
        while (nums[lo] === nums[lo - 1]) {
          lo++;
        }
        hi--;
        while (nums[hi] === nums[hi + 1]) {
          hi--;
        }
      } else if (total < 0) {
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
  return result;
};
