/*
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
  const store = { [nums[0]]: 0 };
  for (let i = 1; i < nums.length; i++) {
    let difference = target - nums[i];
    let differenceIdx = store[difference];
    if (differenceIdx !== undefined) {
      return [differenceIdx, i];
    }
    store[nums[i]] = i;
  }
};

export default twoSum;
