/*
https://leetcode.com/problems/group-anagrams/
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

const groupAnagrams = (strs) => {
  if (strs.length === 0) return [];
  let words = [];
  let result = {};
  let word = new Word(strs[0]);
  words.push(word);
  result[strs[0]] = [strs[0]];
  for (let i = 1; i < strs.length; i++) {
    let str = strs[i];
    let word = new Word(strs[i]);
    let len = words.length;
    for (let j = 0; j < len; j++) {
      if (words[j].isAnagram(word)) {
        result[words[j].word].push(str);
      } else {
        words.push(word);
        result[str] = [str];
      }
    }
  }
  return Object.values(result);
};

class Word {
  constructor(word) {
    this.word = word;
    this.letters = {};
    this.getLetters();
  }

  getLetters() {
    let { word } = this;
    for (let i = 0; i < word.length; i++) {
      let ltr = word[i];
      if (!this.letters[ltr]) {
        this.letters[ltr] = 0;
      }
      this.letters[ltr]++;
    }
  }

  isAnagram(word) {
    let keys1 = Object.keys(word.letters);
    let keys2 = Object.keys(this.letters);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
      console.log(key);
      if (this.letters[key] !== word.letters[key]) return false;
    }
    return true;
  }
}

console.log(
  'output =>',
  groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
);
