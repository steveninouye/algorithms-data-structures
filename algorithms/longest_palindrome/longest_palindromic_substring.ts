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
  if (str.length === 0) return '';
  let len = str.length;
  while (len > 1) {
    for (let i = 0; i + len <= str.length; i++) {
      if (isPalindrome(str, i, len - 1)) {
        return str.slice(i, i + len);
      }
    }
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
  const midPt = Math.floor((end - start + 1) / 2);
  for (let i = 0; i < midPt; i++) {
    if (str[i] !== str[end - i]) {
      return false;
    }
  }
  return true;
};
