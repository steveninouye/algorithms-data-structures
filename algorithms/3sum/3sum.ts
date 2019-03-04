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

const threeSum = (nums: number[]): number[][] => {
  const result = [];
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let difference = 0 - nums[i];
    let lo = i + 1;
    let hi = nums.length - 1;
    let set = {};
    while (lo < hi) {
      let low = nums[lo];
      let high = nums[hi];
      let sum = nums[lo] + nums[hi];
      if (set[low] || sum < difference) {
        lo++;
      } else if (set[high] || sum > difference) {
        hi--;
      } else {
        set[low] = true;
        set[high] = true;
        result.push([nums[i], low, high]);
        low++;
        hi--;
      }
    }
  }
  return result;
};

export default threeSum;
