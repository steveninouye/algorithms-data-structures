/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

const phonePad = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

export const letterCombinations = (digits: string): string[] => {
  if (digits.length === 0) return [];
  let result: string[] = [''];
  for (var i = 0; i < digits.length; i++) {
    let num = digits[i];
    let newResult = [];
    for (var j = 0; j < result.length; j++) {
      const ltrCombination = result[j]
      for (var ltr of phonePad[num]) {
        newResult.push(ltrCombination + ltr);
      }
    }
    result = newResult;
  }
  return result;
};
