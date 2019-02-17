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
  let len1 = nums1.length;
  let len2 = nums2.length;
  let totalLength = len1 + len2;
  let [short, shortLen, long, longLen] =
    len1 < len2 ? [nums1, len1, nums2, len2] : [nums2, len2, nums1, len1];
  if (len1 === 0 || len2 === 0) {
    let nums = short.concat(long);
    let idx = findMidIdx(0, nums.length - 1);
    if (nums.length % 2 === 1) {
      return nums[idx];
    } else {
      return (nums[idx] + nums[idx + 1]) / 2;
    }
  } else if (short[shortLen - 1] <= long[0] || short[0] >= long[longLen - 1]) {
    let idx = Math.floor((totalLength - 1) / 2);
    if (short[shortLen - 1] <= long[0]) {
      idx -= shortLen;
    }
    if (totalLength % 2 === 1) {
      return long[idx];
    } else if (idx === -1) {
      return (long[0] + short[shortLen - 1]) / 2;
    } else if (idx === shortLen - 1) {
      return (short[0] + long[longLen - 1]) / 2;
    } else {
      return (long[idx] + long[idx + 1]) / 2;
    }
  } else {
    let start = 0;
    let end = shortLen - 1;
    let shortIdx = findMidIdx(start, end);
    let longIdx = getLongIdx(totalLength, shortIdx);
    let max = Math.max(
      short[shortIdx] || -Infinity,
      long[longIdx] || -Infinity
    );
    let min = Math.min(
      short[shortIdx + 1] || Infinity,
      long[longIdx + 1] || Infinity
    );
    while (max > min) {
      if (short[shortIdx] > long[longIdx + 1]) {
        end = shortIdx - 1;
      } else {
        start = shortIdx + 1;
      }
      shortIdx = findMidIdx(start, end);
      longIdx = getLongIdx(totalLength, shortIdx);
      max = Math.max(short[shortIdx] || -Infinity, long[longIdx] || -Infinity);
      min = Math.min(
        short[shortIdx + 1] || Infinity,
        long[longIdx + 1] || Infinity
      );
    }
    if (totalLength % 2 === 1) {
      return max;
    } else {
      return (max + min) / 2;
    }
  }
};

const findMidIdx = (start, end) => Math.floor((end - start) / 2) + start;

const getLongIdx = (totalLength, shortIdx) =>
  Math.ceil(totalLength / 2) - shortIdx - 2;

module.exports = findMedianSortedArrays;
