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
  let isOdd = (len1 + len2) % 2 === 1;
  let [short, shortLen, long, longLen] =
    len1 < len2 ? [nums1, len1, nums2, len2] : [nums2, len2, nums1, len1];
  let shortMidPt = Math.floor(shortLen - 1 / 2);
  let longMidPt = Math.ceil((len1 + len2)/2) - shortMidPt - 2;
  let longMaxLeft = long[longMidPt ] || -Infinity
  let shortMaxLeft = short[shortMidPt] || -Infinity
  let longMinRight = long[longMidPt + 1] || Infinity
  let shortMinRight = short[shortMidPt + 1] || Infinity
  while(Math.max(longMaxLeft,shortMaxLeft) <= Math.min(longMinRight,shortMinRight)){
    
  }
};

module.exports = findMedianSortedArrays;
