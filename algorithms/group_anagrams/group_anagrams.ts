/*
https://leetcode.com/problems/group-anagrams/
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

const groupAnagrams = (strs: string[]): string[][] => {
  const store = {};
  for (var word of strs) {
    const key = word
      .split('')
      .sort()
      .join('');
    if (!store[key]) {
      store[key] = [];
    }
    store[key].push(word);
  }
  const result = [];
  for (var words in store) {
    result.push(store[words]);
  }
  return result;
};

console.log(
  'output =>',
  groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
);
