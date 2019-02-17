/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';
  let len = strs[0].length;
  let result = '';
  for (let i = 0; i < len; i++) {
    let ltr = strs[0][i];
    let equal = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== ltr) return result;
    }
    if (equal) result += ltr;
  }
  return strs[0];
};
