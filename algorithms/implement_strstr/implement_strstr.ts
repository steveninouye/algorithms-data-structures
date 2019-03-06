/*
https://leetcode.com/problems/implement-strstr/
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

export const strStr = (haystack:string, needle:string):number => {
  const haystackLen = haystack.length;
  const needleLen = needle.length;
  for(var i = 0; i <= haystackLen - needleLen; i++) {
    if(haystack[i] === needle[0]){
      let isNeedleFound = true
      for(var j = 1; j < needleLen; j++) {
        if(haystack[i + j] !== needle[j]){
          isNeedleFound = false
          break
        }
      }
      if(isNeedleFound) return i;
    }
  }
  return -1
};
