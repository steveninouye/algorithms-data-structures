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

const lengthOfLongestSubstring = (str: string): number => {
  if (str.length === 0) return 0;
  let currIdx: number = 0;
  let maxLength: number = 1;
  let store = { [str[0]]: true };
  for (let i = 1; i < str.length; i++) {
    while (store[str[i]]) {
      let ltr: string = str[currIdx];
      delete store[ltr];
      currIdx++;
    }
    store[str[i]] = true;
    let currLength: number = i - currIdx + 1;
    maxLength = maxLength < currLength ? currLength : maxLength;
  }
  return maxLength;
};

export default lengthOfLongestSubstring;
