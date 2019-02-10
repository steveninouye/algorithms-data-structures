/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

const searchRange = (nums, target, side = null /* R or L */) => {
  if (nums.length === 0 || (nums.length === 1 && nums[0] !== target))
    return [-1, -1];
  // length of nums is less than or equal to 1
  ////// if equal to target return 0
  ////// if not equal return -1
  let midIdx = Math.floor((nums.length - 1) / 2);
  let midEl = nums[midIdx];
  // find middle index
  // find element at middle index
  if (midEl === target) {
    let left = searchRange(nums.slice(0, midIdx), target)[0];
    left = left === -1 ? midIdx : left;
    let right = searchRange(nums.slice(midIdx + 1), target)[1];
    right = right === -1 ? midIdx : midIdx + 1 + right;
    return [left, right];
  } else if (midEl < target) {
    // right
    let right = searchRange(nums.slice(midIdx + 1), target);
    if (right[0] === -1) {
      return [-1, -1];
    } else {
      return [right[0] + 1 + midIdx, right[1] + 1 + midIdx];
    }
  } else {
    // left
    let left = searchRange(nums.slice(0, midIdx), target);
    if (left[0] === -1) {
      return [-1, -1];
    } else {
      return left;
    }
  }
  // if middle element equals target
  //////// find left bound
  ///////////// cut left in half
  ///////////////// if equals to element
  ///////////////// check left bound again
  ///////////////// I know when found left bound when middle element equals target && left bound return -1
  //////// find right bound
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(
  searchRange([5, 7, 7, 8, 8, 10], 8)[0] === 3 &&
    searchRange([5, 7, 7, 8, 8, 10], 8)[1] === 4
);
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(
  searchRange([5, 7, 7, 8, 8, 10], 6)[0] === -1 &&
    searchRange([5, 7, 7, 8, 8, 10], 6)[1] === -1
);
