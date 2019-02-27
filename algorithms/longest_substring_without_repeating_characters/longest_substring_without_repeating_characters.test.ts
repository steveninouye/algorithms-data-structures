import lengthOfLongestSubstring from './longest_substring_without_repeating_characters';

describe('#lengthOfLongestSubstring', () => {
  it('should be defined', () => {
    expect(lengthOfLongestSubstring).toBeDefined();
  });

  it('should return a number', () => {
    expect(typeof lengthOfLongestSubstring('pwwkew')).toBe('number');
  });

  it('should return the length of string if there is no repeating characters', () => {
    let str1 = 'asdfghjklqwertyuiop';
    let str2 = 'asdfghjklqwertyuiopzxcvbnm';
    expect(lengthOfLongestSubstring(str1)).toBe(str1.length);
    expect(lengthOfLongestSubstring(str2)).toBe(str2.length);
  });

  it('should return the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('should return 0 if length of input is 0', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
});
