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

const searchLeft = (nums: number[], target: number): number => {
  if (nums.length === 1 && nums[0] === target) return 0;
  if (nums.length <= 1) return -1;
  let midPt = Math.floor((nums.length - 1) / 2);
  let num = nums[midPt];
  if (num < target) {
    let right = searchLeft(nums.slice(midPt + 1), target);
    return right === -1 ? -1 : right + midPt + 1;
  } else {
    let left = searchLeft(nums.slice(0, midPt), target);
    if (left > -1) {
      return left;
    } else if (num === target) {
      return midPt;
    } else {
      return -1;
    }
  }
};

const searchRight = (nums: number[], target: number): number => {
  if (nums.length === 1 && nums[0] === target) return 0;
  if (nums.length <= 1) return -1;
  let midPt = Math.floor((nums.length - 1) / 2);
  let num = nums[midPt];
  if (num > target) {
    let left = searchRight(nums.slice(0, midPt), target);
    return left === -1 ? -1 : left;
  } else {
    let right = searchRight(nums.slice(midPt + 1), target);
    if (right > -1) {
      return right + midPt + 1;
    } else if (num === target) {
      return midPt;
    } else {
      return -1;
    }
  }
};

const searchRange = (nums: number[], target: number): number[] => {
  if (nums.length === 1 && nums[0] === target) return [0, 0];
  if (nums.length <= 1) return [-1, -1];
  let midPt = Math.floor((nums.length - 1) / 2);
  let num = nums[midPt];
  if (num === target) {
    let left = searchLeft(nums.slice(0, midPt), target);
    let right = searchRight(nums.slice(midPt + 1), target);
  } else if (num < target) {
    let right = searchRange(nums.slice(midPt + 1), target);
    if (right[0] === -1) {
      return right;
    } else {
      right[0] += midPt + 1;
      right[1] += midPt + 1;
      return right;
    }
  } else {
    return searchRange(nums.slice(0, midPt), target);
  }
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
