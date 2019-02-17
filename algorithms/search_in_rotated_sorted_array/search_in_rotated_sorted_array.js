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

const search = (nums, target) => {
  let len = nums.length;
  if (len === 0 || (len === 1 && nums[0] !== target)) return -1;
  let midIdx = ((len - 1) / 2) | 0;
  let midEl = nums[midIdx];
  if (midEl === target) return midIdx;
  let firstEl = nums[0];
  if (firstEl === target) return 0;
  if (
    (firstEl < target && midEl > target) ||
    (midEl < firstEl && (midEl > target || firstEl < target))
  ) {
    return search(nums.slice(0, midIdx), target);
  } else {

    let result = search(nums.slice(midIdx + 1), target);
    if (result === -1) {
      return -1;
    } else {
      return midIdx + 1 + result;
    }
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
