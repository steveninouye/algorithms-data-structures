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

const permute = (nums) => {
  if (nums.length === 0) return [];
  let permutations = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let newPermutations = [];
    for (let j = 0; j < permutations.length; j++) {
      let permutation = permutations[j];
      for (let k = 0; k <= permutation.length; k++) {
        let copy = permutation.slice();
        copy.splice(k, 0, num);
        newPermutations.push(copy);
      }
    }
    permutations = newPermutations;
  }
  return permutations;
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
