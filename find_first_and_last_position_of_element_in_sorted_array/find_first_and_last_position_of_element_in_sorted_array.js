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

const searchRange = (nums, target) => {
  let rightEnd;
  let left = (() => {
    let start = 0;
    let end = nums.length - 1;
    rightEnd = end;
    let result;
    while (end - start >= 0) {
      let midIdx = start + Math.floor((end - start) / 2);
      let midEl = nums[midIdx];
      if (midEl === target) {
        result = midIdx;
        end = midIdx - 1;
      } else if (midEl < target) {
        start = midIdx + 1;
      } else {
        end = midIdx - 1;
        rightEnd = end;
      }
    }
    return result;
  })();
  if (left === undefined) return [-1, -1];
  let right = (() => {
    let start = left;
    let end = rightEnd;
    let result;
    while (end - start >= 0) {
      let midIdx = start + Math.floor((end - start) / 2);
      let midEl = nums[midIdx];
      if (midEl === target) {
        result = midIdx;
        start = midIdx + 1;
      } else if (midEl < target) {
        start = midIdx + 1;
      } else {
        end = midIdx - 1;
      }
    }
    return result;
  })();
  return [left, right];
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
