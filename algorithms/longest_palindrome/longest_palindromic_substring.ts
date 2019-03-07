/*
https://leetcode.com/problems/longest-palindromic-substring/
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 *
 *
 * @param {string} str
 * @returns {string}
 */
export const longestPalindrome = (str: string): string => {
  /*
  starting with the length of the entire string
  starting with the index of 0
  increment index by one until index plus length is greater than the length of the string
  once the index plus the length is greater than the length of the string degrement the length and restart the index at 0
  */
  if (str.length === 0) return str;
  let idx = 0;
  let len = str.length;
  while (len > 1) {
    while (idx + len <= str.length) {
      if (isPalindrome(str, idx, len - 1)) {
        return str.slice(idx, len);
      }
      idx++;
    }
    idx = 0;
    len--;
  }
  return str[0];
};

/**
 *
 *
 * @param {string} str
 * @returns {boolean}
 */
export const isPalindrome = (
  str: string,
  start: number,
  end: number
): boolean => {
  const midPt = Math.floor((start + end) / 2);
  for (var i = start; i <= midPt; i++) {
    const right = end - (i - start);
    if (str[i] !== str[right]) return false;
  }
  return true;
};
