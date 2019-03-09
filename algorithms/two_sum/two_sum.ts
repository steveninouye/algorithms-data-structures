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
export const twoSum = (nums: number[], target: number):number[] => {
  const store = {}
  for(var i = 0; i < nums.length; i++) {
    const difference = target - nums[i]
    if(store[difference]) {
      return [store[difference], i]
    }
    store[nums[i]] = i
  }
};
