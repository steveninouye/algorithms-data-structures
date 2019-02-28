import {
  isPalindrome,
  longestPalindrome
} from './longest_palindromic_substring';

describe('#isPalindrome', () => {
  it('should be defined', () => {
    expect(longestPalindrome).toBeDefined();
  });

  it('should return true if string is a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('lkracecarkl')).toBe(true);
    expect(isPalindrome('hhhhhhh')).toBe(true);
  });

  it('should return false if string is not a palindrome', () => {
    expect(isPalindrome('djkgfbsd')).toBe(false);
    expect(isPalindrome('rt')).toBe(false);
  });
});

describe('#longestPalindrom', () => {
  it('should be defined', () => {
    expect(longestPalindrome).toBeDefined();
  });

  it('should return a string', () => {
    expect(typeof longestPalindrome('cbbd')).toBe('string');
  });

  it('should return an empty string if the string has a length of 0', () => {
    expect(longestPalindrome('')).toHaveLength(0);
    expect(longestPalindrome('')).toBe('');
  });

  it('should return the longest palindrom in the string', () => {
    expect(longestPalindrome('racecar')).toBe('racecar');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(['bab', 'aba']).toContain(longestPalindrome('babad'));
  });
});
