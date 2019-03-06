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

const searchRange = (nums: number[], target: number): number[] => {
  let left = 0;
  let right = nums.length - 1;
  let rightStart;
  while (right - left > 1) {
    let midPt = Math.floor((right - left) / 2) + left;
    if(nums[midPt] === target) {
      if(rightStart !== undefined) rightStart = midPt
      right = midPt
    } else if (nums[midPt] < target) {
      left = midPt + 1
    } else {
      right = midPt - 1
    }
  }
  if (nums[right] !== target) return [-1, -1];
  if (!rightStart) return [right, right];
  const result = [right];
  left = rightStart;
  right = nums.length - 1;
  while (right - left > 1) {
    let midPt = Math.floor((right - left) / 2) + left;
    if(nums[midPt] === target) {
      left = midPt
    } else if (nums[midPt] > target) {
      right = midPt - 1
    } else {
      left = midPt + 1
    }
  }
  result[1] = left;
  return result;
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
