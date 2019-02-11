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
  if(nums.length === 0) return []
  let result = [[nums[0]]];
  for(let i = 1; i < nums.length; i++){
    let num = nums[i]
    result = result.reduce((acc, permutation) => {
      let j = permutation.length ;
      while (j >= 0){
        let copy = permutation.slice()
        copy.splice(j, 0, num)
        acc.push(copy)
      }
      return acc;
    }, [])
  }
  return result;
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
    joine.includes('3:2:1')
);
