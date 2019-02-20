/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);
  return intervals.reduce((acc, curr, idx) => {
    if (idx === 0) return [curr];

    let lastIdx = acc.length - 1;
    let last = acc[lastIdx];
    if (curr.start <= last.end) {
      if (curr.start <= last.start) {
      } else {
        curr.start = last.start;
      }
      if (curr.end <= last.end) {
        curr.end = last.end;
      }
      acc[lastIdx] = curr;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};

export default merge;
