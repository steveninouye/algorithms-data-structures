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

export const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  /*
   * make sure that the length of left(nums1) + left(nums2) === right(nums1) + right(nums2)
   * possible difference of 1
   */
};

// const findMidIdx = (start, end) => Math.floor((end - start) / 2) + start;

// const getLongIdx = (totalLength, shortIdx) =>
//   Math.ceil(totalLength / 2) - shortIdx - 2;
