/*
https://leetcode.com/problems/permutations/
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

const permute = (nums: number[]): number[][] => {
  let results: number[][] = [[]];
  for (var numIdx = 0; numIdx < nums.length; numIdx++) {
    const num: number = nums[numIdx];
    const newResults: number[][] = [];
    for (var resultsIdx = 0; resultsIdx < results.length; resultsIdx++) {
      let result: number[] = results[resultsIdx];
      for (var resultIdx = 0; resultIdx <= result.length; resultIdx++) {
        let dup = result.slice();
        dup.splice(resultIdx, 0, num);
        newResults.push(dup);
      }
    }
    results = newResults;
  }
  return results;
};

let example = permute([1, 2, 3]);
console.log('output =>', example);
let joined = example.map((arr) => arr.join(':'));
console.log(
  joined.includes('1:2:3') &&
    joined.includes('1:3:2') &&
    joined.includes('2:1:3') &&
    joined.includes('2:3:1') &&
    joined.includes('3:1:2') &&
    joined.includes('3:2:1')
);
