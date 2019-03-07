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

class Store {
  store: {};
  count: number;

  constructor() {
    this.store = {};
    this.count = 0;
  }

  has(letter: string) {
    return !!this.store[letter];
  }

  add(letter: string) {
    this.store[letter] = true;
    this.count++;
  }

  delete(letter: string) {
    delete this.store[letter];
    this.count--;
  }
}

const lengthOfLongestSubstring = (str: string): number => {
  /*
   * create variable with the value of zero
   *   this variable will hold the max length  which we will return
   * create a store which will be a Set/Hash that will keep track of seen letters
   * create slow pointer with index of zero wich will examine the index in the string
   * create a faster pointer with index of one wich will examine the index of the string
   *
   * iterate UNTIL slow pointer + max is greater than str length
   *   examine if fast pointer is in the store
   *   if in store
   *     move slow pointer up while deleting letter from store UNTIL deleting letter of fast pointer
   *   add fast pointer letter
   *   If count in store is greater than max value assign it to the new variable
   *
   * return max value
   */

  // might need to handle edge case of string being empty
  let max = 0;
  const store = new Store();
  let slowIdx = 0;
  let fastIdx = 0;
  while (fastIdx < str.length && slowIdx + max < str.length) {
    const fastLtr = str[fastIdx];
    if (store.has(fastLtr)) {
      while (str[slowIdx] !== fastLtr) {
        const slowLtr = str[slowIdx];
        store.delete(slowLtr);
        slowIdx++;
      }
      slowIdx++;
    } else {
      store.add(fastLtr);
      max = Math.max(max, store.count);
    }
    fastIdx++;
  }
  return max;
};

export default lengthOfLongestSubstring;
