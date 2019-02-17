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

const groupAnagrams = (strs) => {
  let store = {};
  for (let str of strs) {
    let sortedStr = [...str].sort().join('');
    if (!store[sortedStr]) {
      store[sortedStr] = [];
    }
    store[sortedStr].push(str);
  }
  return Object.values(store);
};

console.log(
  'output =>',
  groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
);
