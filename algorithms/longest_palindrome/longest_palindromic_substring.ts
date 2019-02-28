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
};

/**
 *
 *
 * @param {string} str
 * @returns {boolean}
 */
export const isPalindrome = (str: string): boolean => {
  const midPt = Math.floor(str.length / 2);
  for (let i = 0; i < midPt; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};
