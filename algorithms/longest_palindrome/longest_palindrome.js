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

var longestPalindrome = function(str) {
  if (str.length === 0) return '';
  let start = 0,
    numChars = str.length;
  while (numChars > 1) {
    let shift = 0;
    while (start + shift + numChars <= str.length) {
      let partition = str.slice(start + shift, numChars + shift);
      if (isPalindrome(partition)) {
        return partition;
      }
      shift++;
    }
    numChars--;
  }
  return str[0];
};

const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(longestPalindrome('babad') === 'bab');
console.log(longestPalindrome('cbbd') === 'bb');
