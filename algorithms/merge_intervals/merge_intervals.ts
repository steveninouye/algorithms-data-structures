class Interval {
  start: number;
  end: number;

  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
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
const merge = (intervals: Interval[]): Interval[] => {
  intervals.sort((a, b) => a.start - b.start);
  let slow = 0;
  for (var fast = 1; fast < intervals.length; fast++) {
    if (intervals[fast].start <= intervals[slow].end) {
      if (intervals[slow].end < intervals[fast].end) {
        intervals[slow].end = intervals[fast].end;
      }
    } else {
      slow++;
    }
  }
  slow++;
  while (slow < intervals.length) {
    delete intervals[slow];
    slow++;
  }
  return intervals;
};

export default merge;
