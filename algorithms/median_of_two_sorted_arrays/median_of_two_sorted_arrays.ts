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

const average = (num1: number, num2: number) => (num1 + num2) / 2;

// get median of array
const arrayMedian = (arr: number[]): number => {
  let idx = getLeftMidPt(arr.length);
  if (arr.length % 2 === 1) {
    return arr[idx];
  } else {
    return (arr[idx] + arr[idx + 1]) / 2;
  }
};

// mid point with left bias
const getLeftMidPt = (length: number): number => Math.floor((length - 1) / 2);

// mid point with right bias
const getRightMidPt = (length: number): number => Math.floor(length / 2);

export const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  /*
   * constraints:
   * make sure that the length of left(nums1) + left(nums2) === right(nums1) + right(nums2)
   * possible difference of 1
   * MAX of BOTH left arrays needs to be less than MIN of both right arrays
   * find the middle number
   * if there are 2 middle numbers (length is even) then average of the 2 middle numbers
   *
   * Let's start with doing a binary search on the short array to find out where to cut
   *
   */
  const [short, shortLen, long, longLen] =
    nums1.length > nums2.length
      ? [nums2, nums2.length, nums1, nums1.length]
      : [nums1, nums1.length, nums2, nums2.length];
  const totalLength = shortLen + longLen;
  let combinedMidPt = getLeftMidPt(totalLength);
  if (shortLen === 0) {
    return arrayMedian(long);
  } else if (short[0] >= long[longLen - 1]) {
    return totalLength % 2 === 1
      ? long[combinedMidPt]
      : (long[combinedMidPt] + long[combinedMidPt + 1]) / 2;
  } else if (long[0] >= short[shortLen - 1]) {
    const idx = combinedMidPt - shortLen;
    if (totalLength % 2 === 1) {
      return long[idx];
    } else {
      return idx < 0
        ? average(long[0], short[shortLen - 1])
        : average(long[idx], long[idx + 1]);
    }
  } else {
    let shortMidPt = getLeftMidPt(shortLen);
    let longMidPt = combinedMidPt - shortMidPt - 1;
    let leftMax = Math.max(short[shortMidPt], long[longMidPt]);
    let rightMin = Math.min(short[shortMidPt + 1], long[longMidPt + 1]);
    while (leftMax > rightMin) {
      if (short[shortMidPt] === leftMax) {
        shortMidPt = getLeftMidPt(shortMidPt + 1);
        longMidPt = combinedMidPt - shortMidPt - 1;
      } else {
        const midPtShift = getLeftMidPt(shortLen - shortMidPt - 1) + 1;
        shortMidPt += midPtShift;
        longMidPt = combinedMidPt - shortMidPt - 1;
      }
      leftMax = Math.max(
        short[shortMidPt] || -Infinity,
        long[longMidPt] || -Infinity
      );
      rightMin = Math.min(
        short[shortMidPt + 1] || Infinity,
        long[longMidPt + 1] || Infinity
      );
    }
    if (totalLength % 2 === 1) {
      return Math.min(
        short[shortMidPt + 1] || Infinity,
        long[longMidPt + 1] || Infinity
      );
    } else {
      let max = Math.max(
        short[shortMidPt] || -Infinity,
        long[longMidPt] || -Infinity
      );
      let min = Math.min(
        short[shortMidPt + 1] || Infinity,
        long[longMidPt + 1] || Infinity
      );
      return (max + min) / 2;
    }
  }
};

// const findMidIdx = (start, end) => Math.floor((end - start) / 2) + start;

// const getLongIdx = (totalLength, shortIdx) =>
//   Math.ceil(totalLength / 2) - shortIdx - 2;
