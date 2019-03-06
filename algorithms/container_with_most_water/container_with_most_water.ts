/*
https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
[picture]
The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

var maxArea = function(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = 0;
  while (left < right) {
    let area = (right - left) * Math.min(arr[left], arr[right]);
    result = Math.max(result, area);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};
