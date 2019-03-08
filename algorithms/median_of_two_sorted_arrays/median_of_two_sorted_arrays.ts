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
  const [short, shortLen, long, longLen] =
    nums1.length > nums2.length
      ? [nums2, nums2.length, nums1, nums1.length]
      : [nums1, nums1.length, nums2, nums2.length];
  const totalLength = shortLen + longLen;
  let minIdx = 0;
  let maxIdx = shortLen;
  // this will favor more partitions on the left
  const totalLeftPartitions = Math.floor((longLen + shortLen) / 2);
  // this will favore more partitions on the right
  // const totalLeftPartitions = Math.floor((longLen + shortLen + 1) / 2);
  while (minIdx <= maxIdx) {
    let shortPartition = Math.floor((maxIdx + minIdx) / 2);
    let longPartition = totalLeftPartitions - shortPartition;
    if (shortPartition > 0 && short[shortPartition - 1] > long[longPartition]) {
      maxIdx = shortPartition - 1;
    } else if (
      shortPartition < shortLen &&
      short[shortPartition] < long[longPartition - 1]
    ) {
      minIdx = shortPartition + 1;
    } else {
      // the order in this block needs to change if favor sides one side or the other
      const longRightMin = long[longPartition] || Infinity;
      const shortRightMin = short[shortPartition] || Infinity;
      const rightMin = Math.min(longRightMin, shortRightMin);
      if (totalLength % 2 === 1) return rightMin;
      const longLeftMax = long[longPartition - 1] || -Infinity;
      const shortLeftMax = short[shortPartition - 1] || -Infinity;
      const leftMax = Math.max(longLeftMax, shortLeftMax);
      return (rightMin + leftMax) / 2;
    }
  }
};
