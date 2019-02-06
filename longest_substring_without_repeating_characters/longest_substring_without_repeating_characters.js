/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

const lengthOfLongestSubstring = (str) => {
  let result = 0;
  let slowPointer = 0;
  let store = new Set();
  for (let i = 0; i < str.length - 1; i++) {
    if (store.has(str[i])) {
      let longestRun = i - slowPointer;
      if (longestRun > result) result = longestRun;
      while (str[slowPointer] !== str[i]) {
        store.delete(str[slowPointer]);
        slowPointer++;
      }
      slowPointer++;
    } else {
      store.add(str[i]);
    }
  }
  let lastIdx = str.length - 1;
  let lastLtr = str[lastIdx];
  console.log('store: ', store);
  if (store.has(lastLtr)) {
    let difference = lastIdx - slowPointer;
    return difference > result ? difference : result;
  } else {
    let difference = str.length - slowPointer;
    return difference > result ? difference : result;
  }
};

// console.log(lengthOfLongestSubstring('abcabcbb') === 3);
// console.log(lengthOfLongestSubstring('bbbbb') === 1);
// console.log(lengthOfLongestSubstring('pwwkew') === 3);
console.log(lengthOfLongestSubstring('nfpdmpi'));
