/*
https://leetcode.com/problems/median-of-two-sorted-arrays/
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

const findMedianSortedArrays = (nums1, nums2) => {
  // find the center index number O(1);
  let len1 = nums1.length;
  let len2 = nums2.length;
  let totalLength = len1 + len2;
  let [short, shortLen, long, longLen] =
    len1 < len2 ? [nums1, len1, nums2, len2] : [nums2, len2, nums1, len1];
  let shortTakeLeft = Math.floor(shortLen + 1 / 2);
  let longTakeLeft = getLongTake(totalLength, shortTakeLeft);
  let longMaxLeft = long[longTakeLeft - 1] || -Infinity;
  let shortMaxLeft = short[shortTakeLeft - 1] || -Infinity;
  let longMinRight = long[longTakeLeft] || Infinity;
  let shortMinRight = short[shortTakeLeft] || Infinity;
  let start = 0;
  let end = short.length;
  while (
    Math.max(longMaxLeft, shortMaxLeft) > Math.min(longMinRight, shortMinRight)
  ) {
    if (shortMaxLeft > longMinRight) {
      // move min pointer left
    } else {
      // move min pointer right
    }
  }
};

const getLongTake = (totalLength, shortTakeLeft) =>
  Math.ceil(totalLength / 2) - shortTakeLeft;

module.exports = findMedianSortedArrays;
