/*
https://leetcode.com/problems/search-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

export const search = (nums: number[], target: number): number => {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    let midPt = Math.floor((hi + lo) / 2);
    if (nums[midPt] === target) {
      return midPt;
    } 
    const isRightSorted = nums[midPt] < nums[hi]
    if((nums[midPt] < target && nums[hi] >= target && isRightSorted)||
      (nums[midPt] > target && nums[lo] > target && !isRightSorted) ||
      (nums[lo] < target && nums[midPt] < target && !isRightSorted)
    ){
      lo = midPt + 1
    } else {
      hi = midPt - 1
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
