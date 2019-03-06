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

export const longestCommonPrefix = (strs: string[]):string=> {
  let result = ""
  if(strs.length === 0) return result
  for(var strIdx = 0; strIdx < strs[0].length; strIdx++) {
    let ltr = strs[0][strIdx]
    for(var strsIdx = 1; strsIdx < strs.length; strsIdx++) {
      if(strs[strsIdx][strIdx] !== ltr) return result;
    }
    result += ltr;
  }
  return result
};
